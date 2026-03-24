import Image from "next/image";
import Link from "next/link";

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-[#121212] pt-32 pb-32 px-6 lg:px-8 flex justify-center">
            <div className="max-w-[800px] w-full text-[#a0a0a0] flex flex-col gap-8 font-sans leading-relaxed">
                <h1 className="text-[48px] font-medium text-[#fafafa] tracking-tight mb-2">A note from our founders.</h1>

                <div className="flex flex-col gap-6 text-[17px]">
                    <p>
                        We’re big believers in AI agents. We think they’re going to change everything.
                    </p>
                    <p>
                        We’re also big believers that the worst way to roll out agents is to offboard your existing tools by onboarding AI native ones or quietly degrade quality because nothing is wired up right. We’ve been in sales. We know what it’s like to churn off systems, retrain teams, and watch performance dip while everyone “figures out the new tool.” That sucks.
                    </p>
                    <p>
                        We’re GTM engineers ready to help you bring AI into your company. We’re half-software, and half-service. And we get asked this all the time:
                    </p>
                    <div className="pl-6 border-l border-[#ffffff20] text-[#e0e0e0] italic space-y-2">
                        <p>“How can you afford to be a service?”</p>
                        <p>“Is this some kind of trap? Will it just be another SaaS dashboard for my team?”</p>
                    </div>
                    <p className="text-white font-medium text-lg">
                        It won’t.
                    </p>
                    <p>
                        We’re AI-native from day one, but we’re not here to drop a tool on you and disappear. You work with us. We wire this into your stack. We build agents around plays that already work for you. We keep quality high while you get the upside of AI.
                    </p>
                    <p>
                        There’s a product you can log into. There’s Slack, where your team already works. And there’s us, in the loop, making sure the system keeps doing what it’s supposed to do.
                    </p>
                </div>

                <hr className="border-[#ffffff10] my-8" />

                <div className="flex gap-10 items-center justify-start mt-2">
                    <Link href="https://www.linkedin.com/in/igorpevzner/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                        <div className="w-[72px] h-[72px] rounded-full overflow-hidden border border-[#ffffff20] group-hover:border-[#ffffff60] transition-colors relative">
                            {/* NOTE: You will need to add an igor.png file in the public directory */}
                            <img 
                                src="/igor.png" 
                                alt="Igor" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                            />
                        </div>
                        <span className="text-white text-sm font-medium tracking-wide">Igor</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/igorpevzner/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
                        <div className="w-[72px] h-[72px] rounded-full overflow-hidden border border-[#ffffff20] group-hover:border-[#ffffff60] transition-colors relative">
                            {/* NOTE: You will need to add a konstantin.png file in the public directory */}
                            <img 
                                src="/konstantin.png" 
                                alt="Konstantin" 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" 
                            />
                        </div>
                        <span className="text-white text-sm font-medium tracking-wide">Konstantin</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
