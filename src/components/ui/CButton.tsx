import React from "react";
import clsx from "clsx";

enum ButtonVariant {
  BASE_OUTLINE,
  BASE_FILL,
  PRIMARY_OUTLINE,
  PRIMARY_FILL,
  // ERROR_OUTLINED,
  // ERROR_FILLED,
}

const variantClasses: Record<ButtonVariant, string> = {
  [ButtonVariant.BASE_OUTLINE]: "border-main hover:bg-text hover:text-light",
  [ButtonVariant.BASE_FILL]: "bg-text border-main text-light hover:text-main hover:bg-transparent",
  [ButtonVariant.PRIMARY_OUTLINE]: "border-primary text-primary hover:bg-primary hover:text-light",
  [ButtonVariant.PRIMARY_FILL]: "bg-primary border-primary text-light hover:bg-transparent hover:text-primary",
};

interface CButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const CButton: React.FC<CButtonProps> = ({ variant = ButtonVariant.BASE_OUTLINE, className, children, ...props }) => {
  return (
    <button
      className={clsx(
        "px-8 py-2 rounded-md cursor-pointer border transition-all",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export { ButtonVariant };
export default CButton;