import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { Sparkles, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = ["Features", "Pricing", "Use Case", "Security", "Resources"];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tighter cursor-pointer">
                    <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center">
                        <Sparkles size={18} fill="currentColor" />
                    </div>
                    SignalsHQ
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(" ", "-")}`}
                            className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-foreground hover:text-black/70">
                        Contact
                    </a>
                    <Button>Start Free Trial</Button>
                </div>

                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-border overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link}
                                    href="#"
                                    className="text-lg font-medium text-foreground"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link}
                                </a>
                            ))}
                            <hr className="border-border" />
                            <div className="flex flex-col gap-4">
                                <a href="#" className="font-medium text-center">Contact</a>
                                <Button className="w-full">Start Free Trial</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
