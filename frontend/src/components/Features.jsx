import { motion } from "framer-motion";
import { Zap, Shield, BarChart3, Globe, Users, Layers } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Instant Processing",
        description: "Process tax documents 10x faster with our proprietary AI engine.",
        colSpan: "md:col-span-2",
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Bank-Grade Security",
        description: "SOC2 Type II certified. Your data is encrypted at rest and in transit.",
        colSpan: "md:col-span-1",
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Real-time Analytics",
        description: "Track team performance and client bottlenecks with live dashboards.",
        colSpan: "md:col-span-1",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Compliance",
        description: "Automatically updated regulatory rules for over 50+ jurisdictions.",
        colSpan: "md:col-span-2",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        Everything you need to <br /> scale your practice.
                    </h2>
                    <p className="text-xl text-muted">
                        Powerful tools designed for the modern tax professional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`group relative p-8 rounded-3xl border border-border bg-gray-50/50 hover:bg-white hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 ${feature.colSpan}`}
                        >
                            <div className="mb-6 inline-flex p-3 rounded-xl bg-white border border-border shadow-sm group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted text-lg leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
