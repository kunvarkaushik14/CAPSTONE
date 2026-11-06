import React from "react";
import { LoaderCircle } from "lucide-react";

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  icon: Icon,
  iconPosition = "right",
  type = "button",
  className = "",
  onClick
}) {
  return (
    <button
      type={type}
      className={`nx-button nx-button-${variant} nx-button-${size} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? (
        <LoaderCircle className="nx-button-spinner" size={17} />
      ) : (
        <>
          {Icon && iconPosition === "left" && <Icon size={17} />}
          <span>{children}</span>
          {Icon && iconPosition === "right" && <Icon size={17} />}
        </>
      )}
    </button>
  );
}
