import Image from "next/image";
import Link from "next/link";

export default function CompanyPage() {
    return (
        <div className="min-h-screen bg-[#121212] pt-32 pb-32 px-6 lg:px-8 flex justify-center">
            <div className="max-w-[800px] w-full text-[#a0a0a0] flex flex-col gap-8 font-sans leading-relaxed">
                <h1 className="text-[48px] font-medium text-[#fafafa] tracking-tight mb-2">A note from our founders.</h1>

                <div className="flex flex-col gap-6 text-[17px]">
                    <p>
                        Imagine a future where vibe coding is actually a reality.
                    </p>
                    <div className="pl-6 border-l border-[#ffffff20] text-[#e0e0e0] italic space-y-2">
                        <p>
                            "Send me a text every Saturday at 7 PM reminding me to buy flowers for my wife. Rotate the suggestions—roses, gerberas, lilies, hyacinths, orchids. Mix up the order sometimes so it feels spontaneous. Oh, and if my calendar says I'm traveling, skip that week."
                        </p>
                    </div>
                    <p>
                        In seconds, Claude generates the perfect script. But in reality, nothing works. Why? Because you need to pay for hosting, and you need to pay a provider to actually send that SMS. And your AI agent doesn't have a credit card.
                    </p>
                    <p>
                        Honestly, handing your raw credit card details to an autonomous agent sounds like a fast track to financial disaster—you'd have much bigger problems to worry about than remembering to buy flowers. You can't just run it on your local machine either; your laptop isn't always on, and real-world applications are rarely this trivial.
                    </p>
                    <p>
                        That's exactly why we built <strong>Aporto</strong>.
                    </p>
                    <p>
                        We provide a unified billing gateway for all the APIs your AI needs. You connect your card in one secure place, set strict spending limits, and safely grant your agents access to the outside world. Through Aporto, your agents can instantly plug into web search, diverse AI models, SMS gateways, and more—seamlessly embedding them into the code they write.
                    </p>
                    <p className="text-white font-medium text-lg pt-2 tracking-wide">
                        Code turns into a real, breathing product. And the world gets a little bit better.
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
