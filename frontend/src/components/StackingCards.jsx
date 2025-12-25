import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Bot, Search, TrendingUp, MessageSquare, FileText, CheckCircle2 } from "lucide-react";

// Individual Card Component
const Card = ({ title, description, icon: Icon, color, i, progress, range, targetScale, content }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-10% + ${i * 25}px)` }}
                className="flex flex-col relative -top-[25%] h-[500px] w-full max-w-5xl rounded-[2rem] border border-border bg-white shadow-2xl overflow-hidden origin-top"
            >
                <div className="flex h-full flex-col md:flex-row">
                    {/* Content Side */}
                    <div className="flex flex-col justify-center p-12 md:w-[45%] bg-zinc-50/50">
                        <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-6">
                            <Icon size={24} />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight mb-4 text-foreground">{title}</h2>
                        <p className="text-muted text-lg leading-relaxed">{description}</p>

                        <ul className="mt-8 space-y-3">
                            {[1, 2, 3].map((_, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-foreground font-medium">
                                    <CheckCircle2 size={16} className="text-accent" />
                                    <span>Feature benefit point {idx + 1}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Graphic Side */}
                    <div className="relative h-full w-full md:w-[55%] overflow-hidden bg-white p-8 border-l border-border">
                        <motion.div className="w-full h-full" style={{ scale: imageScale }}>
                            {content}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// Content for the cards (Mocking the UI from screenshots)
const AiContent = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10 w-64 p-4 bg-white rounded-xl border border-border shadow-lg"
        >
            <div className="flex items-center gap-3 mb-3 border-b border-border pb-2">
                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
                    <Bot size={16} />
                </div>
                <div className="text-xs font-semibold">AI Assistant</div>
            </div>
            <div className="space-y-2">
                <div className="p-2 bg-zinc-50 rounded text-xs text-muted">Searching internal revenue codes...</div>
                <div className="p-2 bg-zinc-50 rounded text-xs text-muted">Analyzing W-2 discrepancies...</div>
                <div className="p-2 bg-accent text-white rounded text-xs">Optimization found: Save 14% on tax liability.</div>
            </div>
        </motion.div>

        <div className="absolute top-10 right-10 p-3 bg-white border border-border rounded-lg shadow-sm text-xs rotate-6">
            Review queue cleared
        </div>
        <div className="absolute bottom-20 left-10 p-3 bg-white border border-border rounded-lg shadow-sm text-xs -rotate-3">
            Nexus rule validated
        </div>
    </div>
);

const ResearchContent = () => (
    <div className="relative w-full h-full flex items-center justify-center bg-zinc-50/50">
        <div className="w-full max-w-sm bg-white rounded-xl border border-border shadow-xl overflow-hidden">
            <div className="bg-zinc-100 px-4 py-3 border-b border-border flex items-center gap-2">
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-zinc-300" />
                    <div className="w-2 h-2 rounded-full bg-zinc-300" />
                    <div className="w-2 h-2 rounded-full bg-zinc-300" />
                </div>
                <div className="flex-1 h-4 bg-white rounded border border-border mx-2" />
            </div>
            <div className="p-6 space-y-4">
                <div className="h-4 w-3/4 bg-zinc-100 rounded" />
                <div className="h-4 w-1/2 bg-zinc-100 rounded" />
                <div className="h-32 w-full bg-zinc-50 rounded border border-border border-dashed flex items-center justify-center text-xs text-muted">
                    Citable answers backed by laws and court rulings
                </div>
            </div>
        </div>

        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-1/2 right-4 bg-white p-3 rounded-lg border border-border shadow-lg text-xs font-bold"
        >
            Federal
        </motion.div>
        <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute bottom-8 left-8 bg-white p-3 rounded-lg border border-border shadow-lg text-xs font-bold"
        >
            State
        </motion.div>
    </div>
);

const GrowthContent = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="text-center space-y-2">
            <div className="text-6xl font-black text-foreground">95%</div>
            <div className="text-muted text-sm uppercase tracking-widest">Client Satisfaction</div>
        </div>
        <div className="absolute inset-0">
            <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M0 100 C 40 40 60 40 100 100 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
        </div>
    </div>
);

const projects = [
    {
        title: "AI-Driven Automation",
        description: "One reliable layer for authoritative answers, automated intake and extraction, and streamlined prep to help your firm cut busy-season grind.",
        icon: Bot,
        color: "#f3f4f6",
        content: <AiContent />
    },
    {
        title: "Instant Tax Research",
        description: "Clear, citable answers backed by laws and court rulings. Direct IRS citations & references included automatically.",
        icon: Search,
        color: "#e5e7eb",
        content: <ResearchContent />
    },
    {
        title: "Fueling Firm Growth",
        description: "Scale your advisory revenue without scaling your headcount. Smart automation built for modern tax firms.",
        icon: TrendingUp,
        color: "#d4d4d8",
        content: <GrowthContent />
    }
];

export default function StackingCards() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section ref={container} className="relative mt-32 mb-32">
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    Everything you wish <br /> tax software could do.
                </h2>
                <p className="text-xl text-muted max-w-2xl mx-auto">
                    Experience the future of tax work with our integrated platform.
                </p>
            </div>

            {projects.map((project, i) => {
                const targetScale = 1 - ((projects.length - i) * 0.05);
                return (
                    <Card
                        key={i}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.25, 1]}
                        targetScale={targetScale}
                    />
                );
            })}
        </section>
    );
}
