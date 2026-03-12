"use client";

import { useState } from "react";
import Link from "next/link";

function Modal({ isOpen, onClose, title, children }: { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-8">
        <button onClick={onClose} className="absolute right-4 top-4 text-neutral-400 hover:text-white">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="mb-6 text-2xl font-bold">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function SignUpForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm text-neutral-400">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
          placeholder="John Doe"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-neutral-400">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-neutral-400">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          className="w-full rounded-xl border border-white/10 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50"
      >
        {loading ? "Creating account..." : "Create Account"}
      </button>
      <p className="text-center text-sm text-neutral-400">
        Already have an account?{" "}
        <button type="button" className="text-violet-400 hover:underline">
          Sign In
        </button>
      </p>
    </form>
  );
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm text-neutral-400">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm text-neutral-400">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-xl border border-white/10 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:border-violet-500 focus:outline-none"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
      <p className="text-center text-sm text-neutral-400">
        Don&apos;t have an account?{" "}
        <button type="button" className="text-violet-400 hover:underline">
          Sign Up
        </button>
      </p>
    </form>
  );
}

export default function Home() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleGetStarted = () => setShowSignUp(true);
  const handleSignIn = () => setShowLogin(true);
  const handleSuccess = () => {
    setShowSignUp(false);
    setShowLogin(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div className="relative z-10 rounded-2xl border border-emerald-500/30 bg-neutral-900 p-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                <svg className="h-8 w-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="mb-2 text-2xl font-bold">Welcome!</h2>
            <p className="text-neutral-400">Account created successfully!</p>
          </div>
        </div>
      )}

      <Modal isOpen={showSignUp} onClose={() => setShowSignUp(false)} title="Create Account">
        <SignUpForm onSuccess={handleSuccess} />
      </Modal>

      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)} title="Welcome Back">
        <LoginForm onSuccess={handleSuccess} />
      </Modal>

      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-neutral-950/60 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 blur-md opacity-50" />
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600" />
            </div>
            <span className="text-xl font-bold tracking-tight">Nexus</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">
              Testimonials
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handleSignIn} className="text-sm font-medium text-neutral-400 transition-colors hover:text-white">
              Sign In
            </button>
            <button onClick={handleGetStarted} className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-neutral-950 transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/20">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-32">
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
          </div>

          <div className="mx-auto max-w-7xl px-6 text-center">
            <div className="mb-8 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-neutral-300">v2.0 now available</span>
            </div>
            
            <h1 className="mx-auto mb-8 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
              <span className="text-neutral-200">Build </span>
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                faster
              </span>
              <br />
              <span className="text-neutral-200">Ship </span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent">
                smarter
              </span>
            </h1>
            
            <p className="mx-auto mb-12 max-w-2xl text-lg text-neutral-400 md:text-xl">
              The all-in-one starter kit for building stunning, 
              high-performance applications. Type-safe. Optimized. Beautiful.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <button onClick={handleGetStarted} className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-10 py-4 text-base font-semibold transition-all hover:shadow-xl hover:shadow-violet-500/25">
                <span className="relative z-10">Start Building Free</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              <button className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-10 py-4 text-base font-medium transition-all hover:bg-white/10">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Demo
              </button>
            </div>

            <div className="mt-20 flex items-center justify-center flex-wrap gap-x-8 gap-y-4 text-neutral-500">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Cancel anytime</span>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-y border-white/5 bg-neutral-900/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400">
                Features
              </span>
              <h2 className="mb-4 text-4xl font-bold">Everything you need</h2>
              <p className="mx-auto max-w-xl text-lg text-neutral-400">
                Pre-configured with best practices and modern tools to ship faster
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "TypeScript",
                  desc: "Full type safety with intelligent autocompletion and strict mode",
                  icon: "TS",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  title: "Tailwind CSS v4",
                  desc: "Utility-first CSS framework with lightning-fast styling",
                  icon: "TW",
                  color: "from-cyan-500 to-sky-500",
                },
                {
                  title: "Next.js 16",
                  desc: "React framework with App Router and server components",
                  icon: "NX",
                  color: "from-neutral-500 to-neutral-600",
                },
                {
                  title: "Server Actions",
                  desc: "Run code directly on the server with type safety",
                  icon: "SA",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  title: "Image Optimization",
                  desc: "Automatic image optimization with next/image",
                  icon: "IO",
                  color: "from-orange-500 to-red-500",
                },
                {
                  title: "API Routes",
                  desc: "Build API endpoints with Next.js API routes",
                  icon: "API",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 p-6 transition-all hover:border-white/10 hover:shadow-2xl hover:shadow-black/20"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-sm font-bold text-white`}>
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
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "50K+", label: "Active Developers" },
                { value: "1M+", label: "Apps Built" },
                { value: "99.9%", label: "Uptime SLA" },
                { value: "50ms", label: "Avg Response Time" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="mb-2 text-4xl font-bold md:text-5xl">
                    <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <div className="text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="border-y border-white/5 bg-neutral-900/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400">
                Pricing
              </span>
              <h2 className="mb-4 text-4xl font-bold">Simple, transparent pricing</h2>
              <p className="mx-auto max-w-xl text-lg text-neutral-400">
                Start free, upgrade when you&apos;re ready
              </p>
            </div>
            
            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-8">
                <h3 className="mb-2 text-xl font-semibold">Free</h3>
                <p className="mb-6 text-neutral-400">Perfect for hobby projects</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-neutral-400">/month</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {["Up to 3 projects", "Basic analytics", "Community support", "1GB storage"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                      <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={handleGetStarted} className="w-full rounded-full border border-white/20 py-3 font-medium transition-all hover:bg-white/10">
                  Get Started
                </button>
              </div>
              
              <div className="relative overflow-hidden rounded-2xl border border-violet-500/50 bg-neutral-900/80 p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10" />
                <div className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-l from-violet-600 to-indigo-600 px-4 py-1 text-xs font-semibold">
                  POPULAR
                </div>
                <h3 className="mb-2 text-xl font-semibold">Pro</h3>
                <p className="mb-6 text-neutral-400">For growing teams</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-neutral-400">/month</span>
                </div>
                <ul className="mb-8 space-y-3">
                  {["Unlimited projects", "Advanced analytics", "Priority support", "100GB storage", "Custom domains"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                      <svg className="h-4 w-4 text-violet-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button onClick={handleGetStarted} className="w-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 py-3 font-semibold transition-all hover:shadow-lg hover:shadow-violet-500/25">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-400">
                Testimonials
              </span>
              <h2 className="mb-4 text-4xl font-bold">Loved by developers</h2>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  quote: "This starter template saved me hours of setup time. The attention to detail is incredible.",
                  name: "Sarah Chen",
                  role: "Frontend Developer",
                  avatar: "SC",
                },
                {
                  quote: "Best DX I've experienced. Everything just works out of the box. Highly recommended!",
                  name: "Marcus Johnson",
                  role: "Full Stack Engineer",
                  avatar: "MJ",
                },
                {
                  quote: "The TypeScript integration is flawless. It helped me catch bugs before they happened.",
                  name: "Emily Rodriguez",
                  role: "Tech Lead",
                  avatar: "ER",
                },
              ].map((testimonial, i) => (
                <div key={i} className="rounded-2xl border border-white/5 bg-neutral-900/50 p-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 text-neutral-300">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-sm font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-neutral-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="mb-6 text-4xl font-bold">Ready to get started?</h2>
            <p className="mb-8 text-lg text-neutral-400">
              Join thousands of developers building amazing applications
            </p>
            <button onClick={handleGetStarted} className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-12 py-4 text-lg font-semibold transition-all hover:shadow-xl hover:shadow-violet-500/25">
              <span className="relative z-10">Start Building Now</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-transform duration-300 group-hover:translate-x-0" />
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-neutral-900/30 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600" />
              <span className="font-bold">Nexus</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <a href="#" className="transition-colors hover:text-white">Privacy</a>
              <a href="#" className="transition-colors hover:text-white">Terms</a>
              <a href="#" className="transition-colors hover:text-white">Contact</a>
            </div>
            <p className="text-sm text-neutral-500">
              © 2026 Nexus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
