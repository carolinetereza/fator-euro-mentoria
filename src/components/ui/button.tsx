import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(114,166,191,0.5)]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(114,166,191,0.3)]",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(114,166,191,0.3)]",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(114,166,191,0.2)]",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-accent text-background font-bold shadow-[0_0_30px_hsl(202,36%,60%,0.3)] hover:shadow-[0_8px_50px_rgba(114,166,191,0.7)] hover:translate-y-[-4px] transition-all duration-300",
        "gradient-cta": "bg-gradient-to-r from-[#49778d] to-[#72a6bf] text-black font-semibold rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-300",
        cta: "bg-muted text-foreground font-bold hover:bg-muted/90 hover:translate-y-[-2px] shadow-lg hover:shadow-[0_8px_40px_rgba(114,166,191,0.5)] transition-all duration-300",
        "ghost-premium": "border border-primary/30 bg-card/50 backdrop-blur-sm text-foreground hover:bg-card hover:border-primary/60 hover:translate-y-[-2px] hover:shadow-[0_8px_40px_rgba(114,166,191,0.3)] transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-auto py-3 px-6 text-base rounded-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
