"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Mark, Wordmark } from "@/components/layout/Mark";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { company } from "@/content/company";

interface NavLink {
  label: string;
  href: string;
  hint?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: readonly NavLink[];
  columns?: 1 | 2;
  // Overrides the default "All <label>" link at the top of the menu, for
  // labels where that phrasing reads badly — "All company", for instance.
  allLabel?: string;
}

const NAV: readonly NavItem[] = [
  {
    label: "Services",
    href: "/services",
    columns: 2,
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
      hint: service.summary,
    })),
  },
  {
    label: "Industries",
    href: "/industries",
    columns: 2,
    children: industries.map((industry) => ({
      label: industry.name,
      href: `/industries#${industry.slug}`,
    })),
  },
  { label: "For Employers", href: "/hire" },
  { label: "For Candidates", href: "/jobs" },
  { label: "Work", href: "/work" },
  {
    label: "Company",
    href: "/about",
    columns: 1,
    allLabel: "About ReferTech AI",
    children: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setOpenGroup(null);
  }, []);

  // Close everything on navigation. Without this the drawer would survive a
  // route change and cover the page the user just asked for.
  //
  // Adjusted during render rather than in an effect: React re-runs this
  // component before committing, so there is no flash of the open drawer and
  // no cascading second render.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setDrawerOpen(false);
    setOpenMenu(null);
    setOpenGroup(null);
  }

  // Lock background scroll while the drawer is open.
  //
  // `overflow: hidden` on body is not enough: it makes body the scroll
  // container, which breaks `position: sticky` on the header — scrolled down,
  // the header snapped back to its document position and left page content
  // showing through the top of the screen. Pinning the body with a negative
  // top offset holds the scroll position instead, and restores it exactly on
  // close so the page does not jump.
  useEffect(() => {
    if (!drawerOpen) return;

    const { body } = document;
    const scrollY = window.scrollY;
    const previous = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = previous.position;
      body.style.top = previous.top;
      body.style.width = previous.width;
      body.style.overflow = previous.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [drawerOpen]);

  // Escape closes whichever layer is open, and focus returns to the trigger
  // that opened the drawer.
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (drawerOpen) {
          closeDrawer();
          triggerRef.current?.focus();
        } else if (openMenu) {
          setOpenMenu(null);
        }
        return;
      }

      if (event.key !== "Tab" || !drawerOpen) return;

      const nodes = drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes || nodes.length === 0) return;

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen, openMenu, closeDrawer]);

  // Move focus into the drawer when it opens so a keyboard user is not left
  // behind it.
  useEffect(() => {
    if (!drawerOpen) return;
    const first = drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();
  }, [drawerOpen]);

  // A click-opened menu has to close on an outside click, otherwise it stays
  // open until the next navigation. Hover menus got this for free on mouseleave.
  useEffect(() => {
    if (!openMenu) return;

    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* The header carries backdrop-blur, and backdrop-filter establishes a
          containing block for fixed-position descendants. With the drawer
          nested inside, its `fixed top-20 bottom-0` resolved against the 80px
          header box instead of the viewport and collapsed to no height. The
          drawer is therefore a sibling of <header>, not a child. */}
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between gap-6 px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="ReferTech AI home"
        >
          <Mark />
          <Wordmark />
        </Link>

        {/* Desktop navigation */}
        <nav ref={navRef} aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => {
              const expanded = openMenu === item.label;

              // Items with children render a toggle button, not a link. A link
              // would navigate away on click and the menu would never be seen —
              // and on a touch screen there is no hover to fall back on. The
              // landing page is reachable from "All …" as the first entry.
              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className={`flex items-center rounded-btn px-3 py-2 text-sm transition-colors duration-150 ${
                        isActive(item.href)
                          ? "text-lime-text"
                          : "text-ink hover:text-lime-text"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={expanded}
                    aria-controls={`menu-${item.label}`}
                    onClick={() => setOpenMenu(expanded ? null : item.label)}
                    className={`flex items-center gap-1.5 rounded-btn px-3 py-2 text-sm transition-colors duration-150 ${
                      expanded || isActive(item.href)
                        ? "text-lime-text"
                        : "text-ink hover:text-lime-text"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`text-[10px] opacity-60 transition-transform duration-150 ${
                        expanded ? "rotate-180" : ""
                      }`}
                    >
                      &#9662;
                    </span>
                  </button>

                  <AnimatePresence>
                    {expanded ? (
                  <motion.div
                    id={`menu-${item.label}`}
                    initial={reduce ? false : { opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.16, ease: [0.22, 0.61, 0.36, 1] }}
                    className={`absolute left-0 top-full z-50 pt-2 ${
                      item.columns === 2 ? "w-[540px]" : "w-60"
                    }`}
                  >
                    <div className="rounded-card border border-line bg-paper p-3 shadow-card-hover">
                      <Link
                        href={item.href}
                        className="group/all mb-1 flex items-center justify-between rounded-btn bg-surface px-3 py-2.5 text-sm font-medium text-lime-text transition-colors duration-150 hover:bg-lime hover:text-white"
                      >
                        {item.allLabel ?? `All ${item.label.toLowerCase()}`}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-150 group-hover/all:translate-x-0.5"
                        >
                          &#8594;
                        </span>
                      </Link>

                      <ul
                        className={`grid gap-1 ${
                          item.columns === 2 ? "grid-cols-2" : "grid-cols-1"
                        }`}
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-btn p-3 transition-colors duration-150 hover:bg-surface"
                            >
                              <span className="block text-sm font-medium text-ink">
                                {child.label}
                              </span>
                              {child.hint ? (
                                <span className="mt-1 block line-clamp-2 text-xs leading-relaxed text-body">
                                  {child.hint}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">Start a project</Button>
        </div>

        {/* Mobile trigger */}
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={drawerOpen}
          aria-controls="mobile-nav"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          onClick={() => setDrawerOpen((value) => !value)}
          className="flex h-11 w-11 items-center justify-center rounded-btn border border-line text-ink lg:hidden"
        >
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-[2px] w-5 bg-current transition-transform duration-150 ${
                drawerOpen ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-[5px] block h-[2px] w-5 bg-current transition-opacity duration-150 ${
                drawerOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-5 bg-current transition-transform duration-150 ${
                drawerOpen ? "top-[5px] -rotate-45" : "top-[10px]"
              }`}
            />
          </span>
        </button>
      </div>

      </header>

      {/* Mobile drawer — sibling of <header>, see note above */}
      <AnimatePresence>
      {drawerOpen ? (
        <div className="lg:hidden">
          {/* Covers the whole viewport, including behind the header. The drawer
              carries its own brand row and close button, so it does not depend
              on the sticky header staying put underneath it. */}
          <motion.div
            ref={drawerRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            initial={reduce ? false : { opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? undefined : { opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-paper"
          >
            <div className="sticky top-0 z-10 flex h-20 shrink-0 items-center justify-between border-b border-line bg-paper px-6">
              <Link
                href="/"
                className="flex items-center gap-2.5"
                aria-label="ReferTech AI home"
              >
                <Mark />
                <Wordmark />
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => {
                  closeDrawer();
                  triggerRef.current?.focus();
                }}
                className="flex h-11 w-11 items-center justify-center rounded-btn border border-line text-ink"
              >
                <span aria-hidden="true" className="relative block h-3 w-5">
                  <span className="absolute left-0 top-[5px] block h-[2px] w-5 rotate-45 bg-current" />
                  <span className="absolute left-0 top-[5px] block h-[2px] w-5 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <div className="px-6 py-6">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.label} className="border-b border-line">
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={openGroup === item.label}
                        aria-controls={`group-${item.label}`}
                        onClick={() =>
                          setOpenGroup(
                            openGroup === item.label ? null : item.label,
                          )
                        }
                        className="flex w-full items-center justify-between py-4 text-left font-display text-base font-semibold text-ink"
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={`text-lime-text transition-transform duration-150 ${
                            openGroup === item.label ? "rotate-180" : ""
                          }`}
                        >
                          &#9662;
                        </span>
                      </button>
                      <ul
                        id={`group-${item.label}`}
                        hidden={openGroup !== item.label}
                        className="pb-4"
                      >
                        <li>
                          <Link
                            href={item.href}
                            className="block py-2.5 text-sm text-lime-text"
                          >
                            {item.allLabel ?? `All ${item.label.toLowerCase()}`}
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2.5 text-sm text-body"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-4 font-display text-base font-semibold text-ink"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4">
              <Button href="/contact" size="lg" className="w-full">
                Start a project
              </Button>
              <a
                href={`mailto:${company.email}`}
                className="text-center text-sm text-body"
              >
                {company.email}
              </a>
            </div>
            </div>
          </motion.div>
        </div>
      ) : null}
      </AnimatePresence>
    </>
  );
}
