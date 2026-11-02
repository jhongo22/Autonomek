import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Scale, Lock, Users, ArrowUpRight } from 'lucide-react';

export default function UsLegalHub() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground pt-28 md:pt-36 pb-28 selection:bg-primary selection:text-primary-ink">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="mb-8">
          <Link href="/us" className="text-sm text-muted hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>

        <div className="mb-5 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span>Legal Framework, Privacy & Corporate Commitments</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-foreground leading-[1.08]">
          Legal Center & Transparency
        </h1>

        <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
          Review our data protection policies, commercial terms, and engineering principles designed to protect your enterprise and ensure full ownership of your technology.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Terms & Conditions */}
          <Link
            href="/us/terms"
            className="group rounded-[24px] border border-rule bg-surface p-7 flex flex-col justify-between gap-6 hover:border-primary transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
          >
            <div className="space-y-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Scale size={20} />
              </span>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Terms & Conditions
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                100% source code ownership transfer, 50/50 milestone billing, 30-day post-launch warranty, and clear limitation of liability.
              </p>
            </div>
            <div className="pt-4 border-t border-rule flex items-center justify-between text-xs font-semibold text-primary">
              <span>Read complete terms</span>
              <ArrowUpRight size={14} />
            </div>
          </Link>

          {/* Card 2: Privacy Policy */}
          <Link
            href="/us/privacy"
            className="group rounded-[24px] border border-rule bg-surface p-7 flex flex-col justify-between gap-6 hover:border-primary transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
          >
            <div className="space-y-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Lock size={20} />
              </span>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Privacy Policy
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                GDPR & international compliance. Zero data sales and a firm commitment that client conversations never train public AI models.
              </p>
            </div>
            <div className="pt-4 border-t border-rule flex items-center justify-between text-xs font-semibold text-primary">
              <span>Read privacy policy</span>
              <ArrowUpRight size={14} />
            </div>
          </Link>

          {/* Card 3: About Us */}
          <Link
            href="/us/about"
            className="group rounded-[24px] border border-rule bg-surface p-7 flex flex-col justify-between gap-6 hover:border-primary transition-all hover:-translate-y-0.5 shadow-lg shadow-black/20"
          >
            <div className="space-y-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Users size={20} />
              </span>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                About Us
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                Discover our engineering philosophy, sub-second speed benchmarks, production case studies, and direct developer communication.
              </p>
            </div>
            <div className="pt-4 border-t border-rule flex items-center justify-between text-xs font-semibold text-primary">
              <span>Meet Autonomek</span>
              <ArrowUpRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
