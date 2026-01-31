import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  showLabel?: boolean
  label?: string
  variant?: "default" | "ninja" | "sensei"
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, max = 100, showLabel = false, label, variant = "default", ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100))
    
    const variantClasses = {
      default: "ninja-progress-bar",
      ninja: "bg-primary-gradient",
      sensei: "bg-secondary-gradient"
    }

    return (
      <div ref={ref} className={cn("w-full", className)} {...props}>
        {showLabel && (
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-foreground">{label}</span>
            <span className="text-sm text-muted-foreground">{Math.round(percentage)}%</span>
          </div>
        )}
        <div className="ninja-progress h-3">
          <div
            className={cn("h-full rounded-full transition-all duration-700 ease-out", variantClasses[variant])}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    )
  }
)
ProgressBar.displayName = "ProgressBar"

export { ProgressBar }