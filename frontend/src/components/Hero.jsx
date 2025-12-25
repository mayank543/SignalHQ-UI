import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-100 via-white to-white" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-200/50 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl" />

            {/* Subtle Easter Egg */}
            <div className="absolute top-20 right-10 text-[10px] text-gray-200/50 rotate-12 select-none pointer-events-none font-bold tracking-widest uppercase">
                Give me an intern
            </div>

            <div className="max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8"
                >
                    <Bot size={16} className="text-foreground" />
                    <span className="text-sm font-medium text-muted">Thinking at lightspeed</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Powering Tax Experts. <br />
                    <span className="text-muted">Fueling Firm Growth.</span>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Smart automation built for scaling tax firms. Eliminate busywork and focus on what matters—your clients.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button variant="primary" className="h-14 px-8 text-lg gap-2 group">
                        Start Free Trial
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="secondary" className="h-14 px-8 text-lg">
                        Book a Demo
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
