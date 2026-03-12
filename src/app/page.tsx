import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600" />
            <span className="text-xl font-semibold">Nexus</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
              Features
            </Link>
            <Link href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
              Pricing
            </Link>
            <Link href="#" className="text-sm text-neutral-400 transition-colors hover:text-white">
              Docs
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden text-sm font-medium text-neutral-400 transition-colors hover:text-white md:block">
              Sign In
            </button>
            <button className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 transition-transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32">
        <section className="mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-neutral-300">Now with AI-powered features</span>
          </div>
          
          <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Build faster with{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              premium tools
            </span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400 md:text-xl">
            A complete starter kit with everything you need to build modern, 
            scalable applications. Type-safe, performant, and beautiful.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <button className="w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 text-base font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25 md:w-auto">
              Start Building Free
            </button>
            <button className="w-full rounded-full border border-white/20 px-8 py-4 text-base font-medium transition-all hover:bg-white/5 md:w-auto">
              View Documentation
            </button>
          </div>
        </section>

        <section className="border-t border-white/5 bg-neutral-900/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">Everything you need</h2>
              <p className="text-neutral-400">Pre-configured with best practices and modern tools</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "TypeScript",
                  desc: "Full type safety out of the box with intelligent autocompletion",
                  icon: "TS",
                },
                {
                  title: "Tailwind CSS v4",
                  desc: "Utility-first CSS framework with lightning-fast styling",
                  icon: "TW",
                },
                {
                  title: "Next.js 16",
                  desc: "React framework with App Router and server components",
                  icon: "NX",
                },
                {
                  title: "ESLint",
                  desc: "Keep your code clean with built-in linting rules",
                  icon: "ES",
                },
                {
                  title: "Bun",
                  desc: "Fast package manager and runtime for better DX",
                  icon: "BN",
                },
                {
                  title: "Optimized",
                  desc: "Built-in image optimization and code splitting",
                  icon: "OP",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-white/10 bg-neutral-900/50 p-6 transition-all hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 text-sm font-bold">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-neutral-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="mb-6 text-3xl font-bold">Ready to get started?</h2>
            <p className="mb-8 text-neutral-400">
              Join thousands of developers building amazing applications
            </p>
            <button className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-10 py-4 text-base font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25">
              Start Building Now
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-neutral-900/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600" />
              <span className="font-semibold">Nexus</span>
            </div>
            <p className="text-sm text-neutral-500">
              © 2026 Nexus. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
