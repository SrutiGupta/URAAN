import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg hover:shadow-primary/30",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-[#2563EB] text-[#2563EB] bg-transparent hover:bg-[#2563EB] hover:text-white",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg",
        ghost: "hover:bg-white/10 hover:text-white",
        link: "text-[#2563EB] underline-offset-4 hover:underline",
        hero: "bg-[#2563EB] text-white shadow-lg hover:bg-[#1D4ED8] hover:shadow-primary/40 hover:-translate-y-0.5",
        "hero-outline": "border-2 border-white/30 text-white bg-transparent hover:bg-white/10 backdrop-blur-sm",
        coral: "bg-[#2563EB] text-white shadow-lg hover:bg-[#1D4ED8] hover:-translate-y-0.5",
        white: "bg-white/10 text-white border border-white/20 hover:bg-white/20 shadow-lg backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
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
