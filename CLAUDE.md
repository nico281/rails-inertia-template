# Rails Inertia Template

## Stack

Rails 8 monolith; SQLite; Inertia.js; React; TypeScript; Tailwind CSS; Minitest.
Runtime versions are pinned in `mise.toml`.

## Architecture

- Rails owns routes, persistence, validation, sessions, and authorization.
- Controllers render Inertia pages with explicit, minimal props.
- React pages live in `app/frontend/pages`; shared UI belongs in `app/frontend/components`.
- Prefer server state passed as props over duplicate client fetching/state.
- Keep domain logic outside controllers and React components.

## Workflow

1. Read nearby code and tests.
2. Use Minitest only. Add a failing test before behavior changes.
3. Run the narrow test, then `bin/ci`.
4. Run `pnpm check` and `pnpm lint` after frontend changes.

## Skills

Matt Pocock skills live in `.agents/skills` and are linked into `.claude/skills`.
Use `/ask-matt` when unsure which workflow fits. Run `/setup-matt-pocock-skills`
once after creating a repository from this template. Update with
`pnpm dlx skills@latest update --project --yes`.
