import { Button } from "./ui/Button";

export function CallToAction() {
    return (
        <section className="py-24 px-6 bg-accent text-white rounded-t-[3rem] mx-4 md:mx-8 mb-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                    Ready to transform your firm?
                </h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    Join 2,000+ tax professionals saving 15+ hours per week.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button variant="secondary" className="h-14 px-8 text-lg hover:bg-white hover:text-black">
                        Start Free Trial
                    </Button>
                    <Button className="h-14 px-8 text-lg bg-transparent border border-white/20 text-white hover:bg-white/10">
                        Schedule Demo
                    </Button>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-white">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="font-bold text-xl tracking-tighter">SignalsHQ</div>
                <div className="flex gap-8 text-sm text-muted">
                    <a href="#" className="hover:text-foreground">Privacy</a>
                    <a href="#" className="hover:text-foreground">Terms</a>
                    <a href="#" className="hover:text-foreground">Twitter</a>
                    <a href="#" className="hover:text-foreground">LinkedIn</a>
                </div>
                <div className="text-sm text-muted">
                    © 2024 SignalsHQ Inc.
                </div>
            </div>
        </footer>
    );
}
