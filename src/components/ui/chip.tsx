import { cn } from "@/lib";
import { HTMLMotionProps, motion } from "framer-motion";
import { X } from "lucide-react";
import { ForwardRefExoticComponent, forwardRef } from "react";

interface ChipProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "outline" | "solid";
  closable?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Chip: ForwardRefExoticComponent<ChipProps> = forwardRef<HTMLDivElement, ChipProps>(
  ({ className, variant = "default", closable, onClose, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-all";
    
    const variantStyles = {
      default: "bg-gray-800 text-gray-200 hover:bg-gray-700",
      outline: "border border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:border-gray-600",
      solid: "bg-blue-600 text-white hover:bg-blue-700",
    };

    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
        {closable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            className="ml-1.5 -mr-1 p-0.5 rounded-full hover:bg-black/10"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </motion.div>
    );
  }
);

Chip.displayName = "Chip";

interface ChipGroupProps {
  children: React.ReactNode;
  className?: string;
}

const ChipGroup: React.FC<ChipGroupProps> = ({ children, className }) => {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {children}
    </div>
  );
};

export { Chip, ChipGroup };