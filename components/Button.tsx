import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-block text-center";

  const variants = {
    primary: "text-white transform hover:scale-105 hover:shadow-lg",
    secondary: "text-white border-2 border-white/50 backdrop-blur-sm secondary-btn-hover",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50",
  };

  if (href) {
    return (
      <>
        <Link href={href}>
          <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            style={variant === "primary" ? { backgroundColor: "#007BFF" } : undefined}
            disabled={disabled}
          >
            {children}
          </button>
        </Link>
        {variant === "secondary" && (
          <style jsx>{`
            .secondary-btn-hover:hover {
              background-color: #00b089;
              border-color: #00b089;
            }
          `}</style>
        )}
      </>
    );
  }

  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        style={variant === "primary" ? { backgroundColor: "#007BFF" } : undefined}
        disabled={disabled}
      >
        {children}
      </button>
      {variant === "secondary" && (
        <style jsx>{`
          .secondary-btn-hover:hover {
            background-color: #00b089;
            border-color: #00b089;
          }
        `}</style>
      )}
    </>
  );
}
