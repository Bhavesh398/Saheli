import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const ninjaButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "ninja-button text-primary-foreground",
        secondary: "bg-secondary-gradient text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-primary/30 bg-transparent hover:bg-primary/10 hover:text-primary-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "ninja-button text-primary-foreground text-lg font-bold shadow-glow animate-glow",
        sos: "sos-button text-primary-foreground font-bold shadow-glow",
        ninja: "ninja-button text-primary-foreground font-semibold",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface NinjaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ninjaButtonVariants> {
  asChild?: boolean
}

const NinjaButton = React.forwardRef<HTMLButtonElement, NinjaButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(ninjaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
NinjaButton.displayName = "NinjaButton"

export { NinjaButton, ninjaButtonVariants }