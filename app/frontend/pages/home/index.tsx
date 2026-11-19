import { Head } from '@inertiajs/react'

type HomeProps = {
  versions: {
    rails: string
    ruby: string
    inertia: string
  }
}

const features = [
  ['Rails', 'Backend monolítico y productivo'],
  ['Inertia + React', 'SPA moderna sin API separada'],
  ['TypeScript', 'Tipos estrictos en el frontend'],
  ['Tailwind CSS', 'Estilos rápidos y componibles'],
  ['Minitest', 'Tests nativos de Rails'],
  ['RuboCop + ESLint', 'Calidad automatizada'],
]

export default function Home({ versions }: HomeProps) {
  return (
    <>
      <Head title="Rails Inertia Template" />

      <main className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 lg:px-8">
          <nav className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-semibold tracking-tight">Rails Inertia Template</span>
            <a
              className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:border-cyan-300 hover:text-cyan-300"
              href="https://github.com"
            >
              Usar template
            </a>
          </nav>

          <section className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="mb-5 font-mono text-sm uppercase tracking-[0.22em] text-cyan-300">
                Rails moderno, listo para construir
              </p>
              <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
                Del modelo a React,
                <span className="block text-cyan-300">sin una API intermedia.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Un punto de partida opinado con Rails, Inertia, React, TypeScript y
                Tailwind. Incluye calidad, CI y herramientas para agentes de IA.
              </p>
              <div className="mt-9 flex flex-wrap gap-3 font-mono text-xs text-slate-400">
                <span>Rails {versions.rails}</span>
                <span>·</span>
                <span>Ruby {versions.ruby}</span>
                <span>·</span>
                <span>Inertia Rails {versions.inertia}</span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {features.map(([name, description]) => (
                <article
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-0.5 hover:border-cyan-300/50"
                  key={name}
                >
                  <h2 className="font-semibold text-cyan-300">{name}</h2>
                  <p className="mt-1 text-sm text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </section>

          <footer className="border-t border-white/10 pt-6 text-sm text-slate-500">
            Edita <code className="text-slate-300">app/frontend/pages/home/index.tsx</code>
          </footer>
        </div>
      </main>
    </>
  )
}
