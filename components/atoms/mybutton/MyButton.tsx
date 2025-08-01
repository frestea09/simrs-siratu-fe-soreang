import React from "react";
import { ButtonProps } from "./MyButton.props";
import { cn } from "@/lib/utils"; // Optional: Use this utility to merge classnames
import { Loader2 } from "lucide-react";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "medium",
  icon,
  loading = false,
  fullWidth = false,
  ariaLabel,
  className, // Added className prop for custom styles
}) => {
  const classNames = cn(
    "px-4 py-2 rounded", // Base button styles
    variant === "primary" ? "bg-blue-600 text-white" : "",
    variant === "secondary" ? "bg-gray-300 text-black" : "",
    variant === "danger" ? "bg-red-500 text-white" : "",
    fullWidth ? "w-full" : "",
    size === "small" ? "text-sm" : size === "large" ? "text-lg" : "text-base",
    loading ? "opacity-60 cursor-not-allowed" : "",
    className // Append any additional custom styles passed via className
  );

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames}
      aria-label={ariaLabel}
    >
      {loading ? (
        <svg
          className="mr-3 w-4 h-4 text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            className="opacity-25"
          />
          <path
            fill="currentColor"
            d="M4 12a8 8 0 0 1 16 0A8 8 0 0 1 4 12z"
            className="opacity-75"
          />
        </svg>
      ) : (
        icon && <span className="icon">{icon}</span>
      )}

      {label}
    </button>
  );
};

export default Button;
