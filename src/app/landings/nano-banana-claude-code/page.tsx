import type { Metadata } from "next";
import NanoBananaLanding from "../components/NanoBananaLanding";

export const metadata: Metadata = {
  title: "Nano Banana in Claude Code | Aporto",
  description: "Generate images from Claude Code with Nano Banana through the Aporto MCP router.",
};

export default function NanoBananaClaudeCodePage() {
  return <NanoBananaLanding variant="capability" />;
}
