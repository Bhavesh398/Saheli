import * as React from "react"
import { cn } from "@/lib/utils"

const NinjaCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("ninja-card", className)}
    {...props}
  />
))
NinjaCard.displayName = "NinjaCard"

const NinjaCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
NinjaCardHeader.displayName = "NinjaCardHeader"

const NinjaCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-orbitron text-2xl font-semibold leading-none tracking-tight text-ninja-glow",
      className
    )}
    {...props}
  />
))
NinjaCardTitle.displayName = "NinjaCardTitle"

const NinjaCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
NinjaCardDescription.displayName = "NinjaCardDescription"

const NinjaCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
NinjaCardContent.displayName = "NinjaCardContent"

const NinjaCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
NinjaCardFooter.displayName = "NinjaCardFooter"

export { NinjaCard, NinjaCardHeader, NinjaCardFooter, NinjaCardTitle, NinjaCardDescription, NinjaCardContent }