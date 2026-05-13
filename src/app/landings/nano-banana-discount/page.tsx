import type { Metadata } from "next";
import NanoBananaLanding from "../components/NanoBananaLanding";

export const metadata: Metadata = {
  title: "Nano Banana Discount Route | Aporto",
  description: "Run Nano Banana from Claude Code through Aporto MCP with hardcoded launch pricing for the first campaign test.",
};

export default function NanoBananaDiscountPage() {
  return <NanoBananaLanding variant="discount" />;
}
