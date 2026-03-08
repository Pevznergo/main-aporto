export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-[#121212] pt-32 pb-32 px-6 lg:px-8 flex justify-center">
            <div className="max-w-[800px] w-full text-[#a0a0a0] flex flex-col gap-6 font-sans leading-relaxed">
                <h1 className="text-[48px] font-medium text-[#fafafa] tracking-tight mb-4">Terms of Use</h1>

                <p><strong>Last Updated:</strong> March 8, 2026</p>
                <p><strong>Company:</strong> Aporto</p>
                <p><strong>Website:</strong> aporto.tech</p>
                <p><strong>Contact:</strong> info@aporto.tech</p>

                <hr className="border-[#ffffff10] my-8" />

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">1. Acceptance of Terms</h2>
                <p>
                    These Terms of Use (“Terms”) govern your access to and use of the Aporto unified API, software development kits, applications, agents, dashboards, documentation and related services (collectively, the “Services”) provided by Aporto (“Aporto,” “we,” “us,” or “our”).
                </p>
                <p>
                    By accessing or using our Services, you agree to be bound by these Terms.
                </p>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">2. Definitions</h2>
                <p>
                    “User”, “you”, or “Developer” means an individual, developer, or enterprise that purchases or uses API access or SDK functionality from Aporto.<br />
                    “Agents” means automated software, workflows, or programs created or deployed by the User using the SDK or API.<br />
                    “Service Credits” means prepaid, non-refundable credits used solely to access Services.<br />
                    “Service Providers” means third-party nodes, APIs, or infrastructure providers used by Aporto as subprocessors or suppliers to fulfill User requests.
                </p>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">3. Account Registration and Control</h2>
                <p>
                    You must provide accurate, current, and complete account, billing, and contact information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
                <p>
                    Aporto reserves the right to suspend, limit, or terminate your access to the Services at any time, with or without notice, for any reason including but not limited to:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Risk signals or suspected fraudulent activity</li>
                    <li>Abuse or violation of these Terms</li>
                    <li>Non-payment or payment failure</li>
                    <li>Violation of the Acceptable Use Policy</li>
                    <li>Any other reason at Aporto’s sole discretion</li>
                </ul>
                <p>
                    Aporto may modify, discontinue, or impose limits on the SDK, API, or any component of the Services at any time without prior notice or liability.
                </p>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">4. Billing and Payment</h2>
                <ul className="list-decimal pl-6 flex flex-col gap-4">
                    <li><strong>Pricing Model.</strong> The Services operate on a pay-per-use pricing model. You will be charged based on measured usage of the Services as determined by Aporto’s metering systems.</li>
                    <li><strong>Payment Terms.</strong> Usage is billed automatically according to the pricing schedule published on our website or as otherwise agreed in writing. Aporto may require prepayment, impose hard spend caps, or suspend usage immediately upon detection of risk signals or payment failure. All charges are due immediately and are non-refundable except where required by applicable law.</li>
                    <li>
                        <strong>Purchase of Service Credits.</strong> You pay a specified amount to Aporto via a regulated payment processor. This payment constitutes a final sale of Service Credits and is not a deposit into a custodial account or any form of stored value instrument.
                    </li>
                    <li>
                        <strong>Credit Balance.</strong> Upon receipt of payment, Aporto updates an internal database reflecting your “Service Credit Balance.” While this balance may be displayed in standard denominations for user experience purposes, these credits are legally non-refundable and non-transferable.
                    </li>
                    <li>
                        <strong>Closed-Loop System.</strong> The amount shown in your dashboard functions as a closed-loop prepaid access system with the following restrictions:
                        <ul className="list-disc pl-6 mt-2 flex flex-col gap-2">
                            <li>No withdrawals: You cannot cash out, withdraw, or receive a refund of your Service Credit balance except as required by law.</li>
                            <li>No peer-to-peer transfers: You cannot send, transfer, or assign credits to other Aporto users.</li>
                            <li>Defined utility: Credits can only be used to pay for services provided or facilitated through the Aporto ecosystem.</li>
                        </ul>
                    </li>
                    <li><strong>Payment Disputes.</strong> Any payment disputes must be raised within thirty (30) days of the charge. Failure to notify Aporto within this period constitutes acceptance of the charge.</li>
                </ul>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">5. User Responsibilities</h2>
                <ul className="list-decimal pl-6 flex flex-col gap-4">
                    <li>
                        <strong>Developer Responsibility for Agents.</strong> You are the sole party responsible for the development, deployment, and actions of your Agents. This responsibility includes but is not limited to:
                        <ul className="list-disc pl-6 mt-2 flex flex-col gap-2">
                            <li>All charges incurred by your Agents, including those resulting from bugs in your code, infinite loops, misconfiguration, or unauthorized access to your API keys.</li>
                            <li>Ensuring your Agents comply with these Terms and the Acceptable Use Policy.</li>
                            <li>Implementing appropriate safeguards, monitoring, and kill-switches for your Agents.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Load Management and Rate Limiting.</strong> You must implement logic to properly handle HTTP 429 (Too Many Requests) errors. Your Agents must not be programmed to aggressively retry failed requests in a manner that mimics a distributed denial-of-service (DDoS) attack.
                    </li>
                    <li>
                        <strong>API Key Security.</strong> You are responsible for maintaining the security of your API keys and credentials. Any usage associated with your API keys will be attributed to you and billed accordingly.
                    </li>
                </ul>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">6. Aporto’s Rights and Remedies</h2>
                <ul className="list-decimal pl-6 flex flex-col gap-4">
                    <li><strong>Platform Protection.</strong> Aporto may impose limits, suspend access, throttle usage, disable features, or take any other action at any time to protect the platform, other users, Service Providers, or third parties.</li>
                    <li><strong>Monitoring and Inspection.</strong> Aporto reserves the right to monitor usage patterns and inspect Agent interaction logs where we suspect a violation.</li>
                    <li><strong>Automated Enforcement.</strong> Enforcement actions may be automated or manual. Aporto’s decisions regarding enforcement are final.</li>
                </ul>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">7. Acceptable Use Policy</h2>
                <p>You may not use the Services or allow your Agents to engage in any of the following prohibited activities:</p>
                <h3 className="text-white mt-4 font-semibold">7.1 Abuse or Harm</h3>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Conduct fraud, scams, or deceptive practices.</li>
                    <li>Impersonate individuals or organizations.</li>
                    <li>Deploy Agents that self-identify as human or fail to disclose their automated nature.</li>
                    <li>Harass, stalk, or surveil individuals without consent.</li>
                </ul>
                <h3 className="text-white mt-4 font-semibold">7.2 Infrastructure Abuse</h3>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Bypass, circumvent, or attempt to disable rate limits, safety filters, spend caps, or other safeguards.</li>
                    <li>Perform load testing, stress testing, penetration testing, or DDoS-like behavior without prior written permission.</li>
                    <li>Scrape, crawl, or access services in a manner that degrades system performance.</li>
                </ul>
                <h3 className="text-white mt-4 font-semibold">7.3 Illegal or High-Risk Activity</h3>
                <ul className="list-disc pl-6 flex flex-col gap-2">
                    <li>Violate any applicable laws, regulations, or third-party rights.</li>
                    <li>Facilitate financial crimes or money laundering.</li>
                    <li>Generate or distribute unsolicited communications (spam, phishing, etc.).</li>
                </ul>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">8. Intellectual Property</h2>
                <p>
                    <strong>8.1 Aporto’s Rights.</strong> Aporto retains all right, title, and interest in and to the Services, including all related intellectual property rights. These Terms do not grant you any ownership rights in the Services.<br /><br />
                    <strong>8.2 Limited License.</strong> Subject to your compliance with these Terms, Aporto grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Services solely for your internal business purposes.<br /><br />
                    <strong>8.3 User Content.</strong> You retain ownership of any code, data, or content you submit through the Services. By using the Services, you grant Aporto a limited license to process such content as necessary to provide the Services.
                </p>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">9. Disclaimers and Warranties</h2>
                <p>
                    The Services, SDK, and any Agents deployed through the platform are provided “as is” and “as available” without warranties of any kind. Aporto makes no guarantee regarding correctness, accuracy, reliability, availability, uptime, or performance of the Services.
                </p>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">10. Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by law, Aporto shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or use, arising out of or related to these terms or the services, regardless of the theory of liability.
                </p>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">11. Indemnification</h2>
                <p>
                    You agree to indemnify, defend, and hold harmless Aporto from and against any and all claims, liabilities, damages, losses, costs, and expenses arising out of or related to your use of the Services or your Agents’ actions.
                </p>

                <h2 className="text-[24px] font-medium text-[#fafafa] mt-8 mb-4">12. General Provisions</h2>
                <p>
                    <strong>Entire Agreement.</strong> These Terms constitute the entire agreement between you and Aporto regarding the Services.<br /><br />
                    <strong>Modifications.</strong> Aporto may modify these Terms at any time by posting revised Terms on our website. Your continued use of the Services after such modifications constitutes acceptance.<br /><br />
                    <strong>Severability.</strong> If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary.
                </p>

                <p className="mt-8 font-semibold text-white/90">
                    BY ACCESSING OR USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF USE.
                </p>
            </div>
        </div>
    );
}
