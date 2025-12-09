import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-bold rounded-[15px] transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-primary text-white hover:text-primary hover:bg-transparent transition-colors border border-primary",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border-2 border-white text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs md:text-lg lg:text-2xl",
    md: "px-6 py-3 text-xs md:text-lg lg:text-2xl",
    lg: "px-8 py-4 text-xs md:text-lg lg:text-2xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
