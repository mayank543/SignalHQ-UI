
const logos = [
    { name: "Pinnacle Co.", icon: "▲" },
    { name: "ZENITH", icon: "⬡" },
    { name: "Apex Labs", icon: "◉" },
    { name: "Vortex. Co", icon: "❖" },
    { name: "Tahoe Capital", icon: "◈" },
    { name: "Northbridge", icon: "■" },
];

export default function LogoTicker() {
    return (
        <div className="py-20 bg-background border-y border-border overflow-hidden">
            <div className="container mx-auto px-6 mb-8">
                <p className="text-center text-sm font-medium text-muted uppercase tracking-widest">
                    Trusted by innovative teams worldwide
                </p>
            </div>

            <div className="flex overflow-hidden group">
                <div className="flex animate-logo-ticker space-x-24 items-center shrink-0">
                    {[...logos, ...logos, ...logos, ...logos].map((logo, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-2xl font-bold text-gray-400 grayscale hover:grayscale-0 hover:text-foreground transition-all duration-500 cursor-default select-none">
                            <span className="text-3xl">{logo.icon}</span>
                            <span className="tracking-tighter">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
