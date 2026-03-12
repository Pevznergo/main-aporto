import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 h-[72px] flex items-center justify-between px-8 bg-[#121212]/80 backdrop-blur-md border-b border-[#ffffff10]">
            <div className="flex items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Aporto Logo"
                        width={120}
                        height={32}
                        className="h-8 w-auto relative z-10"
                    />
                </Link>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#fafafa]/90">
                <Link href="https://app.aporto.tech" className="hover:text-white transition-colors">Platform</Link>
                <Link href="https://docs.aporto.tech" className="hover:text-white transition-colors">Docs</Link>
            </nav>

            <div className="flex items-center gap-4">
                <Link href="/contact" className="hidden sm:block text-sm font-medium hover:text-white transition-colors">
                    Contact
                </Link>
                <Link
                    href="https://app.aporto.tech"
                    className="text-sm font-semibold bg-[#6be195] text-[#121212] px-4 py-2 rounded-[7px] hover:bg-[#5cd487] transition-colors"
                >
                    Sign up
                </Link>
            </div>
        </header>
    );
}
