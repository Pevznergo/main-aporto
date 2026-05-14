import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./NanoBananaLanding.module.css";

type LandingVariant = "capability" | "discount";

type NanoBananaLandingProps = {
  variant: LandingVariant;
};

const pricing = {
  aporto: "$0.02",
  retail: "$0.05",
  savings: "60%",
  provider: "KIE",
};

const variantCopy = {
  capability: {
    eyebrow: "Aporto MCP for Claude Code",
    title: "Give Claude Code Nano Banana and 1000+ AI skills.",
    body: "One Aporto MCP connection lets Claude Code generate images with Nano Banana, then call video, scraping, search, audio, and automation skills through the same router.",
    primaryCta: "Add Aporto MCP to Claude Code",
    secondaryCta: "See what it unlocks",
    badge: "MCP skill network",
  },
  discount: {
    eyebrow: "Nano Banana at Aporto pricing",
    title: "Nano Banana from Claude Code, plus 1000+ skills at Aporto prices.",
    body: "Use Aporto MCP to run Nano Banana through an active provider route with a lower per-request price and the same agent workflow.",
    primaryCta: "Get the discounted route",
    secondaryCta: "Compare pricing",
    badge: "Price test",
  },
} satisfies Record<LandingVariant, {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  badge: string;
}>;

const setupSteps = [
  ["01", "Add Aporto MCP", "Connect Claude Code to the Aporto MCP server with your Aporto API key."],
  ["02", "Ask for Nano Banana", "Use a normal prompt. Aporto maps the request to the Nano Banana skill route."],
  ["03", "Get an image URL", "The completed image returns as an artifact URL with provider and cost traceability."],
];

const networkSkills = [
  ["Image generation", "Nano Banana, Flux, GPT Images, Ideogram, Recraft"],
  ["Video generation", "Sora, Veo, Kling, Runway, Seedance"],
  ["Search and scraping", "LinkedIn, web search, SERP, company lookup, Apify actors"],
  ["Audio and speech", "ElevenLabs TTS, sound effects, voice workflows"],
];

export default function NanoBananaLanding({ variant }: NanoBananaLandingProps) {
  const copy = variantCopy[variant];
  const isDiscount = variant === "discount";
  const networkIntro = isDiscount ? {
    kicker: "One MCP router, 1000+ skills",
    title: "Nano Banana is the first hook. Aporto gives Claude Code the whole skill network.",
    body: "The same MCP connection can route image, video, scraping, search, audio, and automation requests. Nano Banana gets people in; the rest of the catalog makes Aporto stick.",
    leadTitle: "Nano Banana now works from Claude Code through Aporto MCP, with launch pricing.",
    leadBody: `Start with the clear offer: ${pricing.aporto}/request through Aporto, ${pricing.retail}/request retail, save ${pricing.savings}. Then show that the same setup unlocks 1000+ more paid skills.`,
  } : {
    kicker: "One MCP setup, many agent skills",
    title: "Start with image generation. Keep the same router for the rest of the agent workflow.",
    body: "Nano Banana is the visible demo, but the product is broader: Claude Code gets one MCP path into paid AI capabilities that usually require separate APIs.",
    leadTitle: "Claude Code can generate the image, scrape the reference data, search the web, and produce media from one Aporto connection.",
    leadBody: "The strongest capability message is not just that Nano Banana works. It is that Aporto makes Claude Code feel like it has an expandable toolbelt of 1000+ skills.",
  };

  return (
    <main className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={styles.heroAura} aria-hidden="true" />

        <div className={styles.heroCopy}>
          <div className={styles.announcement}>
            <span className={styles.statusDot} />
            {copy.eyebrow}
          </div>
          <h1>{copy.title}</h1>
          <p>{copy.body}</p>

          <div className={styles.heroActions}>
            <Link
              href="https://app.aporto.tech/register"
              className={styles.primaryCta}
              data-mp-label={variant === "capability" ? "capability_run_nano_banana" : "discount_run_nano_banana"}
              data-mp-section="nano_banana_hero"
            >
              {copy.primaryCta}
            </Link>
            <Link href="#setup" className={styles.secondaryCta}>
              {copy.secondaryCta}
            </Link>
          </div>

          <div className={styles.trustRow}>
            <span>Works through Aporto MCP</span>
            <span>Claude Code ready</span>
            <span>Provider route: {pricing.provider}</span>
          </div>
        </div>

        <div className={styles.heroPanel} aria-label="Nano Banana route preview">
          <div className={styles.panelHeader}>
            <span>{copy.badge}</span>
            <span className={styles.livePill}>Live route</span>
          </div>

          <div className={styles.priceStack}>
            <div>
              <span>Aporto</span>
              <strong>{pricing.aporto}</strong>
              <small>per request</small>
            </div>
            <div>
              <span>Retail</span>
              <strong>{pricing.retail}</strong>
              <small>per request</small>
            </div>
            <div className={styles.savingsCard}>
              <span>Save</span>
              <strong>{pricing.savings}</strong>
              <small>vs retail</small>
            </div>
          </div>

          <div className={styles.imagePreview}>
            <div className={styles.imageGlow} />
            <div className={styles.generatedFrame}>
              <Image src="/logo.svg" alt="" width={42} height={42} />
              <span>Nano Banana output</span>
            </div>
          </div>

          <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
              <span>claude-code.prompt</span>
              <span>Nano Banana</span>
            </div>
            <pre>{`Use Aporto to generate an image with Nano Banana:
"A minimal black product photo for an AI agent dashboard"`}</pre>
          </div>
        </div>
      </section>

      <section id="setup" className={styles.setupSection}>
        <div className={styles.sectionIntro}>
          <span>Fast activation path</span>
          <h2>Designed to get one successful Nano Banana request, not just a signup.</h2>
          <p>The landing page sends users toward the first completed SkillRun. Setup, prompt, output, done.</p>
        </div>

        <div className={styles.stepsGrid}>
          {setupSteps.map(([number, title, body]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.networkSection}>
        <div className={styles.sectionIntro}>
          <span>{networkIntro.kicker}</span>
          <h2>{networkIntro.title}</h2>
          <p>{networkIntro.body}</p>
        </div>

        <div className={styles.networkGrid}>
          <article className={styles.networkLead}>
            <span>Campaign angle</span>
            <h3>{networkIntro.leadTitle}</h3>
            <p>{networkIntro.leadBody}</p>
          </article>

          <div className={styles.networkCards}>
            {networkSkills.map(([title, body]) => (
              <article key={title}>
                <span>{title}</span>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className={styles.pricingCard}>
          <span>Manual pricing for the first test</span>
          <h2>{pricing.aporto}/request through Aporto. {pricing.retail}/request retail. Save {pricing.savings}.</h2>
          <p>
            These values are hardcoded for the first campaign so the message can be tested quickly.
            After the campaign proves first-request conversion, the page can read live provider prices from the app database.
          </p>
          <Link
            href="https://app.aporto.tech/register"
            className={styles.primaryCta}
            data-mp-label="pricing_run_nano_banana"
            data-mp-section="nano_banana_pricing"
          >
            Run first Nano Banana request
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
