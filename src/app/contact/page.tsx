"use client";

import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                const result = await response.json();
                setErrorMsg(result.error || "Failed to send message. Please try again.");
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setErrorMsg("An unexpected error occurred. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#000000] flex flex-col items-center pt-24 pb-32">
            <h1 className="text-[48px] font-medium text-white mb-16 tracking-tight text-center">
                Let's shape the agentic economy together
            </h1>

            <div className="w-full max-w-[640px] border border-[#ffffff1a] rounded-[12px] bg-[#121212] p-8 md:p-12 relative z-10">
                {isSuccess ? (
                    <div className="text-center py-16">
                        <h2 className="text-2xl text-[#6be195] font-medium mb-4">Message Sent Successfully!</h2>
                        <p className="text-white/70">We'll get back to you as soon as possible.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {errorMsg && (
                            <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-md text-sm">
                                {errorMsg}
                            </div>
                        )}

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex flex-col gap-2 flex-1">
                                <label htmlFor="First-Name" className="text-[14px] text-white/90">First Name</label>
                                <input
                                    required
                                    type="text"
                                    id="First-Name"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="h-[56px] px-4 bg-transparent border border-[#ffffff33] rounded-[7px] text-white focus:outline-none focus:border-[#6be195] transition-colors"
                                />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <label htmlFor="Last-Name" className="text-[14px] text-white/90">Last Name</label>
                                <input
                                    type="text"
                                    id="Last-Name"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="h-[56px] px-4 bg-transparent border border-[#ffffff33] rounded-[7px] text-white focus:outline-none focus:border-[#6be195] transition-colors"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="Email-Address" className="text-[14px] text-white/90">Work Email</label>
                            <input
                                required
                                type="email"
                                id="Email-Address"
                                name="email"
                                placeholder="Enter your email"
                                className="h-[56px] px-4 bg-transparent border border-[#ffffff33] rounded-[7px] text-white focus:outline-none focus:border-[#6be195] transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="Company" className="text-[14px] text-white/90">Company</label>
                            <input
                                required
                                type="text"
                                id="Company"
                                name="company"
                                placeholder="Company name"
                                className="h-[56px] px-4 bg-transparent border border-[#ffffff33] rounded-[7px] text-white focus:outline-none focus:border-[#6be195] transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="Role" className="text-[14px] text-white/90">What best describes your role?</label>
                            <select
                                required
                                id="Role"
                                name="role"
                                className="h-[56px] px-4 bg-transparent border border-[#ffffff33] rounded-[7px] text-white focus:outline-none focus:border-[#6be195] transition-colors appearance-none"
                            >
                                <option value="" disabled selected className="text-black">Select an option</option>
                                <option value="Developer" className="text-black">Developer</option>
                                <option value="Product" className="text-black">Product</option>
                                <option value="Founder" className="text-black">Founder</option>
                                <option value="Operations" className="text-black">Operations</option>
                                <option value="Investor" className="text-black">Investor</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="Message" className="text-[14px] text-white/90">What are you building?</label>
                            <textarea
                                required
                                id="Message"
                                name="message"
                                placeholder="Type your message..."
                                className="min-h-[167px] p-4 bg-transparent border border-[#ffffff33] rounded-[7px] text-white focus:outline-none focus:border-[#6be195] transition-colors resize-y"
                            />
                        </div>

                        <div className="flex flex-col gap-2 mb-4">
                            <label htmlFor="Timeframe" className="text-[14px] text-white/90">How soon do you need this?</label>
                            <select
                                required
                                id="Timeframe"
                                name="timeframe"
                                className="h-[56px] px-4 bg-transparent border border-[#ffffff33] rounded-[7px] text-white focus:outline-none focus:border-[#6be195] transition-colors appearance-none"
                            >
                                <option value="" disabled selected className="text-black">Select an option</option>
                                <option value="Building Now" className="text-black">Building Now</option>
                                <option value="Next 30 days" className="text-black">Next 30 days</option>
                                <option value="Exploring for future" className="text-black">Exploring for future</option>
                                <option value="Just learning" className="text-black">Just learning</option>
                            </select>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#6be195] text-[#121212] font-medium text-[18px] px-[30px] py-[15px] rounded-[7px] hover:bg-[#ffffff] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
