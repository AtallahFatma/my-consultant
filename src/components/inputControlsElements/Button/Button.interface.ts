import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  className?: string;
  isLoading?: boolean;
  href?: string;
}

export type Props = ButtonProps;
