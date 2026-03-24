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
          <h1 className="text-[52px] leading-[1.1] font-normal mb-8 tracking-tight text-shadow-sm">
            Aporto gives AI agents trusted access <span className="text-[#6be195]">to the API economy.</span>
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
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
              You ask Claude to write a script that texts you every Saturday to buy flowers, skipping the weeks you’re traveling. In seconds, the agent generates the perfect code.
            </p>
            <p>
              But in reality, nothing works. You have to pay for hosting. You have to pay a provider to send the SMS. And your AI agent doesn't have a credit card.
            </p>
            <p>
              Handing your raw credit card details to an autonomous agent is a financial disaster waiting to happen. So what happens? The AI writes the code, but you still have to manually provision, integrate, and pay for the infrastructure.
            </p>
            <div className="p-6 mt-2 border-l-2 border-[#6be195] bg-[#6be195]/5 rounded-r-lg">
              <p className="text-white/90 font-medium leading-relaxed">
                We built Aporto to fix this. We provide a single, secure billing gateway where you connect your card once, set strict spending limits, and safely let your agents pay for any API they need to turn code into a real product.
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
              <h3 className="text-xl font-bold">Discover and provision services</h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Enable your agents to autonomously find and integrate the APIs and tools they need to complete complex tasks without human intervention.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] mb-4 shadow-[0_0_15px_rgba(107,225,149,0.1)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h3 className="text-xl font-bold">Pay autonomously for usage</h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Provide agents with budgets and payment capabilities to settle micro-transactions seamlessly across the digital economy.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] mb-4 shadow-[0_0_15px_rgba(107,225,149,0.1)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <h3 className="text-xl font-bold">Operate within defined guardrails</h3>
              <p className="text-[#a0a0a0] leading-relaxed">
                Set strict spending limits, usage policies, and approval workflows to maintain complete control over your autonomous systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
