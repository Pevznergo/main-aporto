import Image from "next/image";
import Link from "next/link";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import ContextCanvas from "@/components/ContextCanvas";

export default function Home() {
  return (
    <>
      {/* Animated Background Canvas Component */}
      <BackgroundCanvas />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-24 flex flex-col items-center justify-center text-center min-h-[85vh]">
        {/* Top and Bottom gradient fades to blend with background seamlessly */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#121212] to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none z-10"></div>

        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-[52px] sm:text-[64px] leading-[1.1] font-normal mb-6 tracking-tight text-shadow-sm text-center">
            Your agent needs a credit card.<br />
            <span className="text-[#6be195]">Give it one. Safely.</span>
          </h1>
          <p className="text-xl text-[#a0a0a0] mb-8 font-medium tracking-wide text-center">
            Connect your card once. Set limits per agent. Your agents call any API they need.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="https://app.aporto.tech"
              className="bg-[#e0effe] text-[#121212] font-medium px-6 py-3 rounded-[7px] hover:bg-[#d0e5fb] transition-colors w-full sm:w-auto shadow-[0_0_15px_rgba(224,239,254,0.3)] hover:shadow-[0_0_20px_rgba(224,239,254,0.5)]"
            >
              Get Access
            </Link>
            <Link
              href="/contact"
              className="bg-transparent text-white font-medium px-6 py-3 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Context Statement Section */}
      <section className="relative w-full bg-[#121212] py-[140px] flex flex-col items-center justify-center text-center z-20 overflow-hidden border-y border-[#ffffff0a]">
        <ContextCanvas />

        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 flex flex-col items-start text-left">
          <h2 className="text-[42px] leading-[50px] font-medium mb-8 text-[#fafafa] tracking-[-0.42px] max-w-4xl text-left w-full">
            Vibe coding is a reality. But the code can't deploy.
          </h2>
          <div className="text-[18px] leading-[28px] text-white/70 tracking-[-0.16px] max-w-3xl flex flex-col gap-6">
            <p>
              You ask Claude to write a script that texts you every Saturday to buy flowers, skipping the weeks you're traveling. In seconds, the agent generates the perfect code.
            </p>
            <p>
              But in reality, nothing works. You have to pay for hosting. You have to pay a provider to send the SMS. And your AI agent doesn't have a credit card.
            </p>
            <p>
              Handing your raw credit card details to an autonomous agent is a financial disaster waiting to happen. So what happens? The AI writes the code, but you still have to manually provision, integrate, and pay for the infrastructure.
            </p>
            <div className="p-6 mt-2 border-l-2 border-[#6be195] bg-[#6be195]/5 rounded-r-lg">
              <p className="text-white/90 font-medium leading-relaxed">
                We built Aporto so your agents can call any API they need — and pay for it — without you hardcoding your credit card into the code.
              </p>
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
        </div>
      </section>
    </>
  );
}
