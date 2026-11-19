# Rails Inertia Template

Template full-stack para aplicaciones Rails modernas sin API separada.

## Stack

- Rails 8.1 y Ruby 3.4
- Inertia.js 3, React 19 y TypeScript 6
- Tailwind CSS 4
- SQLite
- Minitest
- RuboCop, ESLint y GitHub Actions
- `CLAUDE.md` y skills de [Matt Pocock](https://github.com/mattpocock/skills)

## Inicio

Requisitos: SQLite y [mise](https://mise.jdx.dev/), o Ruby 3.4, Node.js 22,
pnpm 10 y Bundler instalados manualmente.

Con mise:

```bash
mise trust
mise install
mise exec -- bin/setup
```

Sin mise:

```bash
bin/setup
```

`bin/setup` instala dependencias, prepara SQLite e inicia Rails + Vite. Después:

```text
http://localhost:3000
```

## Comandos

```bash
bin/dev                 # Rails + Vite
bin/rails test          # Minitest
bin/rubocop             # Ruby
pnpm check              # TypeScript
pnpm lint               # ESLint
pnpm build              # build de producción
bin/ci                  # CI Rails local
```

## Crear un proyecto desde el template

1. En GitHub, activa **Settings → General → Template repository**.
2. Pulsa **Use this template** para crear el repositorio nuevo.
3. Clónalo y ejecuta `bin/setup`.
4. Cambia `RailsInertiaTemplate` en `config/application.rb`.
5. Cambia los nombres visibles en `CLAUDE.md`, el layout y la página inicial.
6. Ejecuta `/setup-matt-pocock-skills` para configurar tracker y documentación.

La autenticación no viene instalada. Para añadir la nativa de Rails:

```bash
bin/rails generate authentication
bin/rails db:migrate
```

## Skills

La fuente canónica está en `.agents/skills`; Claude Code usa enlaces desde
`.claude/skills`. Para encontrar el flujo correcto, ejecuta `/ask-matt`.

```bash
pnpm dlx skills@latest update --project --yes
```

Para añadir los skills a otro agente:

```bash
pnpm dlx skills@latest experimental_install --agent <agente>
```
