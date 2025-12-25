import { cn } from "../../lib/utils";

export const Button = ({ children, className, variant = "primary", ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 active:scale-95";

    const variants = {
        primary: "bg-accent text-white hover:bg-black hover:scale-105 shadow-xl shadow-black/10",
        secondary: "bg-white text-foreground border border-border hover:bg-gray-50 hover:border-black/20",
        ghost: "text-muted hover:text-foreground",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};
