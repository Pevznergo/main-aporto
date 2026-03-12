import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-[#ffffff10] pt-16 pb-8 px-8 bg-[#121212] relative z-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">
                <div className="flex flex-col gap-6 max-w-sm">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="Aporto Logo"
                            width={32}
                            height={32}
                            className="h-8 w-auto relative z-10"
                        />
                        <span className="text-white text-xl font-semibold tracking-tight">Aporto</span>
                    </Link>
                    <p className="text-[#a0a0a0]">Shaping the agentic economy</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-white">Product</h4>
                        <Link href="#" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Github</Link>
                        <Link href="https://app.aporto.tech" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Get Access</Link>
                        <Link href="https://app.aporto.tech" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Quick Start</Link>
                        <Link href="https://docs.aporto.tech" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Documentation</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-white">About</h4>
                        <Link href="/privacy-policy" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-use" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Terms of Use</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-white">Contact</h4>
                        <Link href="/contact" className="text-[#a0a0a0] hover:text-white text-sm transition-colors">Let's Chat</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto pt-8 border-t border-[#ffffff10] flex flex-col sm:flex-row items-center justify-between text-xs text-[#a0a0a0]">
                <p>© {new Date().getFullYear()} Aporto. All rights reserved.</p>
            </div>
        </footer>
    );
}
