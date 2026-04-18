import Link from "next/link";
import BackgroundCanvas from "@/components/BackgroundCanvas";

export default function Home() {
  return (
    <>
      {/* Hero — BackgroundCanvas contained here so it doesn't bleed */}
      <div className="relative overflow-hidden">
        <BackgroundCanvas />

        <section className="relative px-6 pt-32 pb-24 flex flex-col items-center justify-center text-center min-h-[85vh]">
          {/* Gradient fades */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#121212] to-transparent pointer-events-none z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none z-10"></div>

          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
            <h1 className="text-[52px] sm:text-[64px] leading-[1.1] font-normal mb-6 tracking-tight text-center">
              Your AI agent can now pay —<br />
              <span className="text-[#6be195]">and get paid.</span>
            </h1>
            <p className="text-xl text-[#a0a0a0] mb-8 font-medium tracking-wide text-center max-w-2xl">
              Fund any API call your agent makes. Or publish your own agent and collect revenue per call — no billing code, no invoices.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="https://app.aporto.tech"
                className="bg-[#6be195] text-[#121212] font-medium px-6 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors w-full sm:w-auto shadow-[0_0_15px_rgba(107,225,149,0.3)] hover:shadow-[0_0_20px_rgba(107,225,149,0.5)]"
              >
                Get started
              </Link>
              <Link
                href="https://app.aporto.tech"
                className="bg-transparent text-white font-medium px-6 py-3.5 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Start earning →
              </Link>
            </div>
          </div>

          {/* Scroll chevron */}
          <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-[#ffffff20]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </section>
      </div>

      {/* Who it's for */}
      <section className="relative px-6 py-24 bg-[#121212] flex flex-col items-center z-10">
        <div className="max-w-6xl mx-auto w-full">
          <p className="text-[14px] text-[#ffffff40] uppercase tracking-widest mb-10 text-center">Who it&apos;s for</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User card */}
            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] border-l-4 border-l-[#6be195] flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">I run AI agents</h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Your agents need to call APIs, process documents, send messages, and more. Aporto gives each agent its own balance with a spending cap. Your card stays safe — even if an agent goes rogue.
              </p>
              <ul className="text-[#a0a0a0] text-sm flex flex-col gap-2 mt-2">
                <li className="flex items-center gap-2"><span className="text-[#6be195]">✓</span> One balance, 100+ tools and APIs</li>
                <li className="flex items-center gap-2"><span className="text-[#6be195]">✓</span> Per-agent spending caps</li>
                <li className="flex items-center gap-2"><span className="text-[#6be195]">✓</span> No per-service accounts</li>
              </ul>
              <Link
                href="https://app.aporto.tech"
                className="mt-4 self-start bg-[#6be195] text-[#121212] font-medium px-5 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors text-sm"
              >
                Get started
              </Link>
            </div>

            {/* Builder card */}
            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] border-l-4 border-l-[#ffffff30] flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">I build AI agents</h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                You built something useful. Now get paid for every call. Aporto handles the billing so you can focus on the product. Your first paying customer today — no billing code required.
              </p>
              <ul className="text-[#a0a0a0] text-sm flex flex-col gap-2 mt-2">
                <li className="flex items-center gap-2"><span className="text-[#6be195]">✓</span> Revenue per API call, automatic</li>
                <li className="flex items-center gap-2"><span className="text-[#6be195]">✓</span> No invoices, no contracts</li>
                <li className="flex items-center gap-2"><span className="text-[#6be195]">✓</span> Just an HTTP endpoint</li>
              </ul>
              <Link
                href="https://app.aporto.tech"
                className="mt-4 self-start bg-transparent text-white font-medium px-5 py-3.5 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors text-sm"
              >
                Start earning →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative px-6 py-32 bg-[#121212] flex flex-col items-center z-10">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-[42px] leading-[1.2] font-normal mb-24 text-center max-w-3xl mx-auto">
            Money is the universal API key.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] mb-4 shadow-[0_0_15px_rgba(107,225,149,0.1)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              </div>
              <h3 className="text-xl font-bold">Works with your stack</h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Prelude, ElevenLabs, Fal.ai, Linkup, You.com, Anchor Browser, Blaxel, and the full Upstash suite. Your agent calls them exactly as it would any API — Aporto handles the billing behind the scenes.
              </p>
            </div>

            {/* Feature Card 2 — Code snippet */}
            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] mb-4 shadow-[0_0_15px_rgba(107,225,149,0.1)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              </div>
              <h3 className="text-xl font-bold">Add to your agent in minutes</h3>
              <div className="rounded-lg bg-[#0d0d0d] border border-[#ffffff10] p-4 font-mono text-sm flex flex-col gap-2">
                <p className="text-[#6be195]">npm install @aporto-tech/sdk</p>
                <div className="border-t border-[#ffffff10] pt-2 flex flex-col gap-1">
                  <p className="text-[#a0a0a0]"><span className="text-[#7cb8ff]">import</span> Aporto <span className="text-[#7cb8ff]">from</span> <span className="text-[#ce9178]">&apos;@aporto-tech/sdk&apos;</span>;</p>
                  <p className="text-[#a0a0a0]">&nbsp;</p>
                  <p className="text-[#a0a0a0]"><span className="text-[#7cb8ff]">const</span> client = <span className="text-[#7cb8ff]">new</span> <span className="text-[#dcdcaa]">Aporto</span>&#40;&#123;</p>
                  <p className="text-[#a0a0a0]">&nbsp;&nbsp;apiKey: process.env.<span className="text-[#9cdcfe]">APORTO_API_KEY</span>,</p>
                  <p className="text-[#a0a0a0]">&#125;&#41;;</p>
                </div>
              </div>
              <Link href="https://docs.aporto.tech" target="_blank" rel="noopener noreferrer" className="text-[#6be195] text-sm hover:underline mt-1">
                Read the docs →
              </Link>
            </div>

            {/* Feature Card 3 */}
            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] mb-4 shadow-[0_0_15px_rgba(107,225,149,0.1)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className="text-xl font-bold">Your card. Your limits.</h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Connect once. Set a spending cap per agent — $10/month, $50/month, whatever fits your project. If an agent goes rogue, it hits the cap. Your card doesn&apos;t.
              </p>
            </div>
          </div>

          {/* Builder features row */}
          <div className="mt-16 mb-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 border-t border-[#ffffff10]"></div>
              <p className="text-[14px] text-[#ffffff40] uppercase tracking-widest whitespace-nowrap">For agent builders</p>
              <div className="flex-1 border-t border-[#ffffff10]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#ffffff]/5 border border-[#ffffff20] flex items-center justify-center text-white mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                </div>
                <h3 className="text-xl font-bold">Publish via HTTP</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Any HTTP endpoint can become a paid service. Add two response headers — network and amount — and Aporto does the rest. No SDK required on your side.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#ffffff]/5 border border-[#ffffff20] flex items-center justify-center text-white mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                </div>
                <h3 className="text-xl font-bold">x402 handles billing</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Your service responds with 402 Payment Required. The caller&apos;s Aporto balance pays automatically. You receive a verified proof header and serve the response. That&apos;s it.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#ffffff]/5 border border-[#ffffff20] flex items-center justify-center text-white mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h3 className="text-xl font-bold">You keep the revenue</h3>
                <p className="text-[#a0a0a0] leading-relaxed">
                  Set your price per call. Aporto tracks usage and pays you out. No invoices, no net-30 terms, no chasing customers for payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
