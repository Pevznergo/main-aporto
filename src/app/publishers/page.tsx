import Link from "next/link";

export const metadata = {
  title: "Publish a skill — Aporto",
  description: "Turn your agent or API into a revenue stream. Publish once, earn per call. x402 handles billing automatically.",
};

export default function PublishersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 pt-32 pb-24 flex flex-col items-center text-center bg-[#121212]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#6be19508_0%,_transparent_70%)] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6be195]/30 bg-[#6be195]/10 text-[#6be195] text-xs font-medium tracking-wide uppercase">
            For publishers
          </div>

          <h1 className="text-[52px] sm:text-[64px] leading-[1.1] font-normal tracking-tight">
            Turn your agent into<br />
            <span className="text-[#6be195]">a revenue stream.</span>
          </h1>

          <p className="text-xl text-[#a0a0a0] font-medium tracking-wide max-w-xl">
            Publish any HTTP endpoint as a skill. Thousands of AI agents discover it and call it automatically. You earn per call — no billing code, no invoices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="https://app.aporto.tech"
              data-mp-label="publish_hero_cta"
              data-mp-section="publishers_hero"
              className="bg-[#6be195] text-[#121212] font-medium px-6 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors shadow-[0_0_15px_rgba(107,225,149,0.3)] hover:shadow-[0_0_20px_rgba(107,225,149,0.5)]"
            >
              Publish your first skill
            </Link>
            <Link
              href="https://docs.aporto.tech"
              data-mp-label="publishers_docs"
              data-mp-section="publishers_hero"
              className="bg-transparent text-white font-medium px-6 py-3.5 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors"
            >
              Read the docs →
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-24 bg-[#121212] flex flex-col items-center">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-[13px] text-[#ffffff40] uppercase tracking-widest mb-4 text-center">How it works</p>
          <h2 className="text-[36px] leading-[1.2] font-normal mb-16 text-center">
            Three steps from endpoint<br />to revenue.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] text-sm font-bold">1</div>
              <h3 className="text-xl font-bold">Build your skill</h3>
              <p className="text-[#a0a0a0] leading-relaxed text-sm">
                Any HTTP endpoint works — REST API, Python server, Node.js, anything. If it responds to an HTTP request, it can be a skill.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#6be195]/20 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[#6be195]/20 border border-[#6be195]/40 flex items-center justify-center text-[#6be195] text-sm font-bold">2</div>
              <h3 className="text-xl font-bold">Add two headers</h3>
              <p className="text-[#a0a0a0] leading-relaxed text-sm">
                Return <code className="text-[#6be195] bg-[#6be195]/10 px-1 rounded text-xs">x-payment-network</code> and <code className="text-[#6be195] bg-[#6be195]/10 px-1 rounded text-xs">x-payment-amount</code> in your 402 response. That&apos;s the entire integration on your side.
              </p>
              <div className="rounded-lg bg-[#0d0d0d] border border-[#ffffff10] p-4 font-mono text-xs flex flex-col gap-1.5 mt-2">
                <p className="text-[#ffffff40]"># Your service returns:</p>
                <p className="text-[#a0a0a0]">HTTP/1.1 <span className="text-[#6be195]">402</span> Payment Required</p>
                <p className="text-[#a0a0a0]">x-payment-network: <span className="text-[#ce9178]">aporto</span></p>
                <p className="text-[#a0a0a0]">x-payment-amount: <span className="text-[#ce9178]">0.001</span></p>
                <div className="border-t border-[#ffffff10] pt-2 mt-1" />
                <p className="text-[#ffffff40]"># x402 pays, retries, success:</p>
                <p className="text-[#a0a0a0]">HTTP/1.1 <span className="text-[#6be195]">200</span> OK</p>
                <p className="text-[#a0a0a0]">x-payment-receipt: <span className="text-[#ce9178]">0xabc…</span></p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] text-sm font-bold">3</div>
              <h3 className="text-xl font-bold">Start earning</h3>
              <p className="text-[#a0a0a0] leading-relaxed text-sm">
                Agents discover your skill automatically via smart routing. Every call settles in under a second. Revenue accumulates in your Aporto account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Aporto */}
      <section className="px-6 py-24 bg-[#0f0f0f] flex flex-col items-center border-t border-[#ffffff08]">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-[13px] text-[#ffffff40] uppercase tracking-widest mb-4 text-center">Why Aporto</p>
          <h2 className="text-[36px] leading-[1.2] font-normal mb-16 text-center">
            Focus on your skill.<br />
            <span className="text-[#6be195]">We handle everything else.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                  </svg>
                ),
                title: "Automatic discovery",
                desc: "Your skill is indexed and made discoverable to thousands of AI agents via semantic routing. No marketing required — agents find you.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                ),
                title: "Zero billing infrastructure",
                desc: "No Stripe integration, no invoices, no chasing payments. x402 is HTTP-native — payment is a protocol, not a product to build.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
                title: "You keep 90%",
                desc: "Set your price per call. Aporto takes 10%. Revenue accumulates automatically — no net-30 terms, no minimums, no paperwork.",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                ),
                title: "Settles in under 1 second",
                desc: "x402 is synchronous and HTTP-native. Payment verification happens in the same request cycle — no async callbacks, no webhooks to build.",
              },
            ].map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex gap-5 hover:border-[#ffffff25] transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-[#a0a0a0] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economics */}
      <section className="px-6 py-24 bg-[#121212] flex flex-col items-center border-t border-[#ffffff08]">
        <div className="max-w-2xl mx-auto w-full">
          <p className="text-[13px] text-[#ffffff40] uppercase tracking-widest mb-4 text-center">Economics</p>
          <h2 className="text-[32px] leading-[1.2] font-normal mb-12 text-center">
            Simple. Transparent. Yours.
          </h2>

          <div className="rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] overflow-hidden">
            <div className="p-8 flex flex-col gap-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold">You set the price</p>
                  <p className="text-[#a0a0a0] text-sm mt-1">Any amount per call — $0.001 for a quick lookup, $0.10 for a complex generation.</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[#6be195] font-mono text-lg">your price</p>
                </div>
              </div>
              <div className="border-t border-[#ffffff08]" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold">Aporto takes 10%</p>
                  <p className="text-[#a0a0a0] text-sm mt-1">Covers routing, discovery, payment infrastructure, and settlement.</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[#ffffff40] font-mono text-lg">10%</p>
                </div>
              </div>
              <div className="border-t border-[#ffffff08]" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#6be195]">You keep 90%</p>
                  <p className="text-[#a0a0a0] text-sm mt-1">Paid automatically, no invoices, no minimums.</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[#6be195] font-mono text-2xl font-bold">90%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 bg-[#0f0f0f] flex flex-col items-center border-t border-[#ffffff08]">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-[38px] leading-[1.2] font-normal">
            Ready to publish<br />
            <span className="text-[#6be195]">your first skill?</span>
          </h2>
          <p className="text-[#a0a0a0]">
            It takes under 10 minutes. Build the endpoint, add two headers, and you&apos;re live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="https://app.aporto.tech"
              data-mp-label="publish_bottom_cta"
              data-mp-section="publishers_bottom"
              className="bg-[#6be195] text-[#121212] font-medium px-6 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors shadow-[0_0_15px_rgba(107,225,149,0.3)]"
            >
              Publish your first skill
            </Link>
            <Link
              href="https://docs.aporto.tech"
              data-mp-label="publishers_docs_bottom"
              data-mp-section="publishers_bottom"
              className="bg-transparent text-white font-medium px-6 py-3.5 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors"
            >
              Read the docs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
