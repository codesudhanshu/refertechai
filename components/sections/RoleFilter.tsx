"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { company } from "@/content/company";
import type { OpenRole } from "@/content/openRoles";

// Receives every role as a prop from a server component, so all of them are in
// the initial HTML and /jobs stays statically rendered. Filtering narrows data
// that has already shipped.
export function RoleFilter({ roles }: { roles: readonly OpenRole[] }) {
  const [discipline, setDiscipline] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);

  const disciplines = useMemo(
    () => Array.from(new Set(roles.map((r) => r.discipline))).sort(),
    [roles],
  );
  const types = useMemo(
    () => Array.from(new Set(roles.map((r) => r.type))),
    [roles],
  );

  const shown = roles.filter(
    (r) =>
      (!discipline || r.discipline === discipline) &&
      (!type || r.type === type),
  );

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition-colors duration-150 ${
      active
        ? "border-lime-text bg-lime text-ink"
        : "border-line bg-paper text-ink hover:border-lime-text hover:text-lime-text"
    }`;

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div role="group" aria-label="Filter by discipline" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={!discipline} onClick={() => setDiscipline(null)} className={chip(!discipline)}>
            All disciplines
          </button>
          {disciplines.map((d) => (
            <button
              key={d}
              type="button"
              aria-pressed={discipline === d}
              onClick={() => setDiscipline(d)}
              className={chip(discipline === d)}
            >
              {d}
            </button>
          ))}
        </div>

        <div role="group" aria-label="Filter by contract type" className="flex flex-wrap gap-2">
          <button type="button" aria-pressed={!type} onClick={() => setType(null)} className={chip(!type)}>
            All types
          </button>
          {types.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={type === t}
              onClick={() => setType(t)}
              className={chip(type === t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-body">
        Showing {shown.length} of {roles.length} roles
      </p>

      {shown.length === 0 ? (
        <div className="mt-8 rounded-card border border-line bg-surface p-8">
          <h3 className="text-h3 font-semibold">Nothing matching that filter.</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-body">
            Send us your CV anyway — most placements start before the role is
            advertised.
          </p>
          <div className="mt-6">
            <Button href={`mailto:${company.email}?subject=Speculative application`}>
              Send your CV
            </Button>
          </div>
        </div>
      ) : (
        <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((role) => (
            <li key={role.id}>
              <article className="flex h-full flex-col rounded-card border border-line bg-paper p-6 shadow-card transition-[box-shadow,border-color] duration-150 hover:border-lime-text hover:shadow-card-hover">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-ink">
                    {role.type}
                  </span>
                  <span className="text-xs text-body">{role.experience}</span>
                </div>

                <h3 className="mt-4 text-h3 font-semibold">{role.title}</h3>
                <p className="mt-2 text-sm text-body">{role.location}</p>

                <ul className="mt-5 flex flex-1 flex-wrap gap-2 content-start">
                  {role.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line px-3 py-1 text-xs text-body"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:${company.email}?subject=${encodeURIComponent(
                    `Application: ${role.title} (${role.id})`,
                  )}`}
                  className="group/btn mt-6 inline-flex items-center gap-2 border-t border-line pt-5 text-sm font-medium text-lime-text"
                >
                  Apply for this role
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-150 ease-out group-hover/btn:translate-x-0.5"
                  >
                    &#8594;
                  </span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
