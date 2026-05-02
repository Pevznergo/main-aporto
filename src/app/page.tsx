import Link from "next/link";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const networkStats = [
  { value: "1 MCP", label: "router for every agent" },
  { value: "1000+", label: "skills and providers" },
  { value: "12,000+", label: "requests every day" },
  { value: "Paid", label: "per successful call" },
];

const routerBenefits = [
  {
    title: "One router, many skills",
    desc: "Connect Aporto once and your agent can use search, voice, images, messaging, data enrichment, APIs, and new skills as they are published.",
  },
  {
    title: "Best provider wins",
    desc: "Routing can choose by capability, price, latency, and reliability, so your agent is not hardcoded to one vendor for every task.",
  },
  {
    title: "Spend stays controlled",
    desc: "Use one account, one key, and clear usage controls instead of stitching together billing across every tool your agent may need.",
  },
];

const publishingSteps = [
  {
    n: "01",
    title: "Submit your skill",
    desc: "Add the docs URL, API key, and a short description. No provider setup step for publishers.",
  },
  {
    n: "02",
    title: "AI review maps demand",
    desc: "Review decides whether this becomes a new skill or another provider behind an existing high-demand skill.",
  },
  {
    n: "03",
    title: "Earn from agent calls",
    desc: "Developers discover the skill through the MCP router and you get paid every time your provider is used.",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <BackgroundCanvas />

        <section className="relative px-6 pt-28 pb-18 md:pt-32 md:pb-24 min-h-[86vh] flex items-center">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#121212] to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none z-10" />

          <div className="relative z-20 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.04fr_0.96fr] gap-12 lg:gap-16 items-center">
            <div className="flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#6be195]/30 bg-[#6be195]/10 text-[#6be195] text-xs font-medium tracking-wide uppercase mb-7">
                AI Skill Network - MCP Router - x402 payouts
              </div>

              <h1 className="text-[46px] sm:text-[62px] lg:text-[72px] leading-[1.04] font-normal mb-7 tracking-tight max-w-4xl">
                The skill network where agents get tools and builders get paid.
              </h1>
              <p className="text-lg sm:text-xl text-[#b7b7b7] mb-8 font-medium leading-relaxed max-w-2xl">
                Add Aporto&apos;s MCP router to any AI agent and route work across 1000+ skills and providers. Publish your own API or agent skill and earn for every successful call.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="https://app.aporto.tech"
                  data-mp-label="add_mcp_router"
                  data-mp-section="hero"
                  className="bg-[#6be195] text-[#121212] font-medium px-6 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors text-center shadow-[0_0_15px_rgba(107,225,149,0.3)] hover:shadow-[0_0_20px_rgba(107,225,149,0.5)]"
                >
                  Add MCP router
                </Link>
                <Link
                  href="/publishers"
                  data-mp-label="publish_skill"
                  data-mp-section="hero"
                  className="bg-transparent text-white font-medium px-6 py-3.5 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors text-center"
                >
                  Publish a skill
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 w-full max-w-3xl">
                {networkStats.map((stat) => (
                  <div key={stat.label} className="rounded-[8px] border border-[#ffffff14] bg-[#151515]/80 px-4 py-4">
                    <p className="text-[#6be195] text-2xl font-semibold leading-none">{stat.value}</p>
                    <p className="text-[#a0a0a0] text-xs leading-snug mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[8px] border border-[#ffffff14] bg-[#151515]/90 shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden">
              <div className="flex items-center justify-between border-b border-[#ffffff10] px-5 py-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#ffffff45]">Aporto MCP Router</p>
                  <p className="text-sm text-[#d7d7d7] mt-1">Drop one server into your agent stack.</p>
                </div>
                <div className="h-2.5 w-2.5 rounded-full bg-[#6be195] shadow-[0_0_14px_rgba(107,225,149,0.75)]" />
              </div>
              <div className="p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto">
                <pre className="text-[#a0a0a0]">
                  <code>{`{
  "mcpServers": {
    "aporto": {
      "url": "https://app.aporto.tech/api/mcp",
      "headers": {
        "Authorization": "Bearer $APORTO_KEY"
      }
    }
  }
}`}</code>
                </pre>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-[#ffffff10]">
                {["Discover skills", "Route to provider", "Settle payment"].map((item) => (
                  <div key={item} className="px-5 py-4 border-t sm:border-t-0 sm:border-l first:border-l-0 border-[#ffffff10]">
                    <p className="text-sm font-medium text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="relative px-6 py-24 bg-[#121212] z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-[13px] text-[#ffffff40] uppercase tracking-widest mb-4">The marketplace shift</p>
            <h2 className="text-[36px] sm:text-[44px] leading-[1.15] font-normal">
              YouTube gave creators distribution. Uber gave drivers demand.{" "}
              <span className="text-[#6be195]">Aporto gives API builders agent demand.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="rounded-[8px] bg-[#1a1a1a] border border-[#ffffff10] p-7">
              <p className="text-[#ffffff45] text-xs uppercase tracking-widest mb-4">For agent developers</p>
              <h3 className="text-xl font-semibold mb-3">Stop integrating tools one by one.</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                One MCP router gives your agent access to a growing skill network with routing, usage controls, and payment handled in one place.
              </p>
            </div>
            <div className="rounded-[8px] bg-[#1a1a1a] border border-[#ffffff10] p-7">
              <p className="text-[#ffffff45] text-xs uppercase tracking-widest mb-4">For skill publishers</p>
              <h3 className="text-xl font-semibold mb-3">Turn your API into a paid channel.</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Publish a useful capability once. Agents discover it through intent, not through ads, sales calls, or integration docs alone.
              </p>
            </div>
            <div className="rounded-[8px] bg-[#1a1a1a] border border-[#ffffff10] p-7">
              <p className="text-[#ffffff45] text-xs uppercase tracking-widest mb-4">For the network</p>
              <h3 className="text-xl font-semibold mb-3">Every call makes the market smarter.</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                More agents create more demand. More publishers create more supply. Routing learns which providers actually deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 bg-[#0f0f0f] z-10 border-t border-[#ffffff08]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <div>
            <p className="text-[13px] text-[#ffffff40] uppercase tracking-widest mb-4">For developers</p>
            <h2 className="text-[36px] sm:text-[44px] leading-[1.15] font-normal mb-5">
              Add the router. Give your agent a full tool economy.
            </h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-7">
              Aporto is the MCP layer between your agent and the skills it needs. Your agent asks for a capability; the network finds the right skill and provider.
            </p>
            <Link
              href="https://app.aporto.tech"
              data-mp-label="developers_add_router"
              data-mp-section="developers_section"
              className="inline-flex bg-[#6be195] text-[#121212] font-medium px-6 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors"
            >
              Connect your agent
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {routerBenefits.map((benefit) => (
              <div key={benefit.title} className="rounded-[8px] bg-[#1a1a1a] border border-[#ffffff10] p-7">
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 bg-[#121212] z-10 border-t border-[#ffffff08]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[13px] text-[#ffffff40] uppercase tracking-widest mb-4">For publishers</p>
            <h2 className="text-[36px] sm:text-[44px] leading-[1.15] font-normal mb-5">
              Built a useful agent or API?{" "}
              <span className="text-[#6be195]">Publish it as a skill.</span>
            </h2>
            <p className="text-[#a0a0a0] leading-relaxed mb-7">
              Developers see a skill. The network can handle whether your submission becomes a new skill or a provider behind an existing skill. You focus on the capability and the payout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/publishers"
                data-mp-label="publishers_publish_skill"
                data-mp-section="publishers_section"
                className="bg-[#6be195] text-[#121212] font-medium px-6 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors text-center"
              >
                Publish your skill
              </Link>
              <Link
                href="https://docs.aporto.tech"
                data-mp-label="publishers_docs"
                data-mp-section="publishers_section"
                className="bg-transparent text-white font-medium px-6 py-3.5 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors text-center"
              >
                Read docs
              </Link>
            </div>
          </div>

          <div className="rounded-[8px] bg-[#1a1a1a] border border-[#ffffff10] p-6 sm:p-8">
            <p className="text-[#ffffff45] text-xs uppercase tracking-widest mb-6">Publishing flow</p>
            <div className="flex flex-col gap-6">
              {publishingSteps.map((step) => (
                <div key={step.n} className="grid grid-cols-[52px_1fr] gap-4">
                  <div className="w-11 h-11 rounded-[8px] bg-[#6be195]/10 border border-[#6be195]/20 flex items-center justify-center text-[#6be195] text-xs font-mono">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-[#a0a0a0] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 bg-[#0f0f0f] z-10 border-t border-[#ffffff08]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              "Agents create demand",
              "Demand brings publishers",
              "Publishers add skills",
              "Better skills bring more agents",
            ].map((item, index) => (
              <div key={item} className="rounded-[8px] border border-[#ffffff10] bg-[#171717] p-6">
                <p className="text-[#6be195] text-sm font-mono mb-5">0{index + 1}</p>
                <p className="text-lg font-semibold leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-28 bg-[#121212] flex flex-col items-center z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-[38px] sm:text-[48px] leading-[1.15] font-normal">
            Join the network before agents choose their default router.
          </h2>
          <p className="text-[#a0a0a0] text-lg">
            Connect an agent to the skill network, or publish the skill that agents should call next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <Link
              href="https://app.aporto.tech"
              data-mp-label="add_mcp_router_bottom"
              data-mp-section="bottom_cta"
              className="bg-[#6be195] text-[#121212] font-medium px-6 py-3.5 rounded-[7px] hover:bg-[#5cd487] transition-colors text-center shadow-[0_0_15px_rgba(107,225,149,0.3)]"
            >
              Add MCP router
            </Link>
            <Link
              href="/publishers"
              data-mp-label="publish_skill_bottom"
              data-mp-section="bottom_cta"
              className="bg-transparent text-white font-medium px-6 py-3.5 rounded-[7px] border border-white/20 hover:bg-white/10 transition-colors text-center"
            >
              Publish a skill
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
