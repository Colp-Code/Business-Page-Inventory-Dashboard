import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
const variantColorMap = {
    ghost: {
        neutral: "hover:bg-[hsl(var(--neutral-dark))] active:bg-[hsl(var(--neutral))]",
        primary: "text-[hsl(var(--primary-light))] hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] active:bg-[hsl(var(--primary-light))]",
        secondary: "text-[hsl(var(--secondary-light))] hover:bg-[hsl(var(--secondary))] hover:text-[hsl(var(--secondary-foreground))] active:bg-[hsl(var(--secondary-light))]",
        contrast: "hover:bg-[hsl(var(--contrast-light))] hover:text-[hsl(var(--inverse-foreground))] active:bg-[hsl(var(--contrast))]",
    },
    contained: {
        neutral: "bg-[hsl(var(--neutral-dark))] hover:bg-[hsl(var(--neutral))] active:bg-[hsl(var(--neutral-light))]",
        primary: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-dark))] active:bg-[hsl(var(--primary-light))]",
        secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary-dark))] active:bg-[hsl(var(--secondary-light))]",
        contrast: "text-[hsl(var(--inverse-foreground))] bg-[hsl(var(--contrast-light))] hover:bg-[hsl(var(--contrast))] active:bg-[hsl(var(--contrast-dark))]",
    },
    outlined: {
        neutral: "border-[hsl(var(--neutral-dark))] hover:bg-[hsl(var(--neutral-dark))] hover:border-[hsl(var(--neutral))] active:border-[hsl(var(--neutral-light))] active:bg-[hsl(var(--neutral))]",
        primary: "text-[hsl(var(--primary-light))] border-[hsl(var(--primary-dark))] hover:text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-dark))] hover:border-[hsl(var(--primary))] active:border-[hsl(var(--primary-light))] active:bg-[hsl(var(--primary))]",
        secondary: "text-[hsl(var(--secondary-light))] border-[hsl(var(--secondary-dark))] hover:text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary-dark))] hover:border-[hsl(var(--secondary))] active:border-[hsl(var(--secondary-light))] active:bg-[hsl(var(--secondary))]",
        contrast: "border-[hsl(var(--foreground)/.7)] hover:bg-[hsl(var(--neutral-dark))] active:bg-[hsl(var(--neutral-light))]",
    },
    text: {
        neutral: "text-[hsl(var(--foreground-light))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--neutral-dark))] hover:ring-[hsl(var(--neutral-dark))] active:bg-[hsl(var(--neutral))] active:ring-[hsl(var(--neutral))]",
        primary: "text-[hsl(var(--primary-light))] hover:bg-[hsl(var(--primary-light)/.15)] hover:ring-[hsl(var(--primary-light)/.15)] active:bg-[hsl(var(--primary-light)/.2)] active:ring-[hsl(var(--primary-light)/.2)]",
        secondary: "text-[hsl(var(--secondary-light))] hover:bg-[hsl(var(--secondary-light)/.15)] hover:ring-[hsl(var(--secondary-light)/.15)] active:bg-[hsl(var(--secondary-light)/.2)] active:ring-[hsl(var(--secondary-light)/.2)]",
        contrast: "text-[hsl(var(--primary-light))] hover:bg-[hsl(var(--primary-light)/.15)] hover:ring-[hsl(var(--primary-light)/.15)] active:bg-[hsl(var(--primary-light)/.2)] active:ring-[hsl(var(--primary-light)/.2)]",
    },
};
const buttonVariants = cva("inline-flex items-center has-[>svg]:duration-150 justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:transition-transform [&_svg]:duration-150 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            ghost: "",
            contained: "",
            outlined: "border border-[hsl(var(--neutral-dark))]",
            text: "!py-0 !px-0.5 !text-[1em] leading-none !h-lh !rounded-full ring-4 ring-transparent",
        },
        color: {
            neutral: "",
            primary: "",
            secondary: "",
            contrast: "",
        },
        size: {
            small: "h-7 rounded-md px-3 py-1.5 has-[>svg]:px-2.5 [&_svg]:size-4",
            medium: "h-9 rounded-lg px-4 py-2 has-[>svg]:px-3 [&_svg]:size-5",
            big: "h-10 rounded-xl px-6 py-3 has-[>svg]:px-5 [&_svg]:size-5",
        },
        icon: {
            true: "",
            false: "",
        },
    },
    compoundVariants: [
        { size: "small", icon: true, class: "size-8 rounded-md !px-0" },
        { size: "medium", icon: true, class: "size-10 rounded-lg !px-0" },
        { size: "big", icon: true, class: "size-12 rounded-xl !px-0" },
    ],
    defaultVariants: {
        variant: "ghost",
        color: "neutral",
        size: "medium",
        icon: false,
    },
});
function Button({ className, variant = "ghost", color = "neutral", size, asChild = false, icon, children, ...props }) {
    const Comp = asChild ? Slot : "button";
    const isIconButton = icon ??
        (React.Children.count(children) === 1 &&
            React.isValidElement(children) &&
            typeof children.type === "string" &&
            children.type === "svg");
    const variantClass = (variant && color && variantColorMap[variant]?.[color]) ||
        variantColorMap.ghost.neutral;
    return (<Comp data-slot="button" className={cn(buttonVariants({ variant, color, size, icon: isIconButton }), variantClass, className)} {...props}>
      {children}
    </Comp>);
}
export { Button, buttonVariants };
