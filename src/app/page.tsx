import Link from "next/link";
import Image from "next/image";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const providers = [
  { name: "ElevenLabs", src: "/logos/elevenlabs.png" },
  { name: "fal.ai", src: "/logos/falai.svg" },
  { name: "Linkup", src: "/logos/linkup.png" },
  { name: "Prelude", src: "/logos/prelude.png" },
  { name: "You.com", src: "/logos/youcom.png" },
  { name: "Anchor Browser", src: "/logos/anchorbrowser.png" },
  { name: "Blaxel", src: "/logos/blaxel.png" },
  { name: "Upstash", src: "/logos/upstash.svg" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden">
        <BackgroundCanvas />

        <section className="relative px-6 pt-32 pb-24 flex flex-col items-center justify-center text-center min-h-[85vh]">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#121212] to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none z-10" />

          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6be195]/30 bg-[#6be195]/10 text-[#6be195] text-xs font-medium tracking-wide uppercase mb-8">
              Skill network for AI agents
            </div>

            <h1 className="text-[52px] sm:text-[64px] leading-[1.1] font-normal mb-6 tracking-tight text-center">
              Connect your agent<br />
              <span className="text-[#6be195]">to everything.</span>
            </h1>
            <p className="text-xl text-[#a0a0a0] mb-8 font-medium tracking-wide text-center max-w-2xl">
              One API key. 100+ skills. Voice, search, image gen, LLMs, SMS and more.
              Smart routing picks the best provider by price and latency — automatically.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <Link
                href="https://app.aporto.tech"
                data-mp-label="add_to_agent"
                data-mp-section="hero"
                className="bg-[#6be195] text-[#121212] font-medium px-6 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors w-full sm:w-auto shadow-[0_0_15px_rgba(107,225,149,0.3)] hover:shadow-[0_0_20px_rgba(107,225,149,0.5)]"
              >
                Add to your agent
              </Link>
              <Link
                href="/publishers"
                data-mp-label="publish_skill"
                data-mp-section="hero"
                className="bg-transparent text-white font-medium px-6 py-3.5 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto"
              >
                Publish a skill →
              </Link>
            </div>
          </div>

          <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-[#ffffff20]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </section>
      </div>

      {/* Provider logos */}
      <section className="relative px-6 py-12 bg-[#121212] z-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-[13px] text-[#ffffff30] uppercase tracking-widest mb-8 text-center">Skills available now</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {providers.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={100}
                height={28}
                className="h-7 w-auto object-contain opacity-50 hover:opacity-80 transition-opacity grayscale"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Routing — how it works */}
      <section className="relative px-6 py-28 bg-[#121212] flex flex-col items-center z-10">
        <div className="max-w-5xl mx-auto w-full">
          <p className="text-[13px] text-[#ffffff40] uppercase tracking-widest mb-4 text-center">Smart routing</p>
          <h2 className="text-[38px] leading-[1.2] font-normal mb-16 text-center">
            Your agent asks. Routing finds<br />
            <span className="text-[#6be195]">the best skill for the job.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4">
              <div className="text-[#ffffff20] text-[40px] font-bold leading-none mb-2">01</div>
              <h3 className="text-lg font-semibold">Request in plain language</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Your agent describes what it needs — "transcribe audio", "generate image", "search the web". No hardcoded API names.
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4">
              <div className="text-[#6be195]/30 text-[40px] font-bold leading-none mb-2">02</div>
              <h3 className="text-lg font-semibold">Semantic skill discovery</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Routing searches across thousands of published skills using vector embeddings — returns the top 3-5 matches in milliseconds.
              </p>
            </div>

            <div className="relative p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4">
              <div className="text-[#6be195]/60 text-[40px] font-bold leading-none mb-2">03</div>
              <h3 className="text-lg font-semibold">Best provider wins</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Scored by price, latency, and success rate. Payment settles in under a second via x402. Your agent gets the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For developers */}
      <section className="relative px-6 py-24 bg-[#121212] flex flex-col items-center z-10">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 border-t border-[#ffffff10]" />
            <p className="text-[13px] text-[#ffffff40] uppercase tracking-widest whitespace-nowrap">For developers</p>
            <div className="flex-1 border-t border-[#ffffff10]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Connect once</h3>
              <p className="text-[#a0a0a0] leading-relaxed text-sm">
                One API key unlocks 100+ skills across voice, search, image gen, LLMs, SMS, and more. No separate accounts, no per-service setup.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Per-agent spending caps</h3>
              <p className="text-[#a0a0a0] leading-relaxed text-sm">
                Set a budget per agent — $10/month, $50/month, whatever fits. If an agent goes rogue, it hits the cap. Your card doesn&apos;t.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] flex flex-col gap-4 hover:border-[#ffffff30] transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Add in minutes</h3>
              <div className="rounded-lg bg-[#0d0d0d] border border-[#ffffff10] p-4 font-mono text-xs flex flex-col gap-1 mt-1">
                <p className="text-[#6be195]">npm install @aporto-tech/sdk</p>
                <div className="border-t border-[#ffffff10] pt-2 flex flex-col gap-1">
                  <p className="text-[#a0a0a0]"><span className="text-[#7cb8ff]">const</span> client = <span className="text-[#7cb8ff]">new</span> <span className="text-[#dcdcaa]">Aporto</span>&#40;&#123;</p>
                  <p className="text-[#a0a0a0]">&nbsp;&nbsp;apiKey: <span className="text-[#9cdcfe]">process.env.APORTO_KEY</span>,</p>
                  <p className="text-[#a0a0a0]">&#125;&#41;;</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="https://app.aporto.tech"
              data-mp-label="get_started_developers"
              data-mp-section="developers_section"
              className="bg-[#6be195] text-[#121212] font-medium px-6 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors"
            >
              Get started free
            </Link>
          </div>
        </div>
      </section>

      {/* For publishers teaser */}
      <section className="relative px-6 py-24 bg-[#0f0f0f] flex flex-col items-center z-10 border-t border-[#ffffff08]">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-[13px] text-[#ffffff40] uppercase tracking-widest">For publishers</p>
              <h2 className="text-[36px] leading-[1.2] font-normal">
                Built something useful?<br />
                <span className="text-[#6be195]">Get paid per call.</span>
              </h2>
              <p className="text-[#a0a0a0] leading-relaxed">
                Publish any HTTP endpoint as a skill. Thousands of AI agents discover it via routing and call it automatically. x402 handles billing — you receive payment in under a second.
              </p>
              <ul className="text-[#a0a0a0] text-sm flex flex-col gap-3">
                <li className="flex items-center gap-2"><span className="text-[#6be195]">✓</span> No billing code on your side</li>
                <li className="flex items-center gap-2"><span className="text-[#6be195]">✓</span> You keep 90% of every call</li>
                <li className="flex items-center gap-2"><span className="text-[#6be195]">✓</span> Settles in under 1 second via x402</li>
                <li className="flex items-center gap-2"><span className="text-[#6be195]">✓</span> Your skill gets discovered automatically</li>
              </ul>
              <Link
                href="/publishers"
                data-mp-label="publishers_learn_more"
                data-mp-section="publishers_teaser"
                className="self-start bg-transparent text-white font-medium px-6 py-3.5 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors"
              >
                Learn more about publishing →
              </Link>
            </div>

            <div className="rounded-2xl bg-[#1a1a1a] border border-[#ffffff10] p-8 flex flex-col gap-4">
              <p className="text-[#ffffff40] text-xs uppercase tracking-widest mb-2">How publishing works</p>
              <div className="flex flex-col gap-4">
                {[
                  { n: "1", title: "Build any HTTP endpoint", desc: "Your skill, your stack. REST API, Python server, anything with an HTTP interface." },
                  { n: "2", title: "Add two response headers", desc: "Return x-payment-network and x-payment-amount. That's the entire integration." },
                  { n: "3", title: "Start earning per call", desc: "Agents discover your skill via routing. You receive payment automatically, no invoices." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-[#ffffff08] border border-[#ffffff15] flex items-center justify-center text-xs text-[#ffffff60] font-mono shrink-0 mt-0.5">
                      {step.n}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{step.title}</p>
                      <p className="text-[#a0a0a0] text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="relative px-6 py-16 bg-[#121212] z-10 border-t border-[#ffffff08]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col gap-1">
              <p className="text-[40px] font-semibold text-white">220K+</p>
              <p className="text-[#a0a0a0] text-sm">skill calls this month</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[40px] font-semibold text-[#6be195]">2.2×</p>
              <p className="text-[#a0a0a0] text-sm">month-over-month growth</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[40px] font-semibold text-white">&lt;1s</p>
              <p className="text-[#a0a0a0] text-sm">payment settlement via x402</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative px-6 py-28 bg-[#121212] flex flex-col items-center z-10">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-[38px] leading-[1.2] font-normal">
            The network grows with<br />
            <span className="text-[#6be195]">every skill published.</span>
          </h2>
          <p className="text-[#a0a0a0]">
            Connect your agent today — or publish your first skill and start earning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="https://app.aporto.tech"
              data-mp-label="add_to_agent_bottom"
              data-mp-section="bottom_cta"
              className="bg-[#6be195] text-[#121212] font-medium px-6 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors shadow-[0_0_15px_rgba(107,225,149,0.3)]"
            >
              Add to your agent
            </Link>
            <Link
              href="/publishers"
              data-mp-label="publish_skill_bottom"
              data-mp-section="bottom_cta"
              className="bg-transparent text-white font-medium px-6 py-3.5 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors"
            >
              Publish a skill →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
