import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "font-bold",
    "ring-offset-background",
    "transition-colors",
    "focus-visible:outline-base",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-base",
    "disabled:opacity-50",
    "enabled:cursor-pointer",
  ],
  {
    variants: {
      variant: {
        solid: [],
        outline: ["border", "disabled:hover:bg-transparent"],
        ghost: ["border", "border-transparent", "bg-transparent"],
      },
      shape: {
        sharp: ["rounded-base"],
        rounded: ["rounded-md"],
        pill: ["rounded-full"],
      },
      color: {
        primary: [],
        secondary: [],
        success: [],
        warning: [],
        danger: [],
      },
      size: {
        sm: ["text-sm", "h-9", "px-3"],
        md: ["text-sm", "h-10", "px-4", "py-2"],
        lg: ["text-md", "h-11", "px-8"],
      },
      loading: {
        true: ["cursor-progress"],
        false: [],
      },
      disabled: {
        true: ["cursor-not-allowed"],
        false: [],
      },
    },
    defaultVariants: {
      variant: "solid",
      shape: "rounded",
      color: "primary",
      size: "md",
      loading: false,
      disabled: false,
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "primary",
        class: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "solid",
        color: "secondary",
        class: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      },
      {
        variant: "solid",
        color: "success",
        class: "bg-success text-success-foreground hover:bg-success/90",
      },
      {
        variant: "solid",
        color: "warning",
        class: "bg-warning text-warning-foreground hover:bg-warning/90",
      },
      {
        variant: "solid",
        color: "danger",
        class: "bg-danger text-danger-foreground hover:bg-danger/90",
      },
      {
        variant: "outline",
        color: "primary",
        class:
          "border border-primary bg-background text-primary font-semibold hover:bg-primary hover:text-primary-foreground",
      },
      {
        variant: "outline",
        color: "secondary",
        class:
          "border border-secondary bg-background text-secondary-foreground font-semibold hover:bg-secondary hover:text-secondary-foreground",
      },
      {
        variant: "outline",
        color: "success",
        class:
          "border border-success bg-background text-success font-semibold hover:bg-success hover:text-success-foreground",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "border border-warning bg-background text-warning font-semibold hover:bg-warning hover:text-warning-foreground",
      },
      {
        variant: "outline",
        color: "danger",
        class:
          "border border-danger bg-background text-danger font-semibold hover:bg-danger hover:text-danger-foreground",
      },
      {
        variant: "ghost",
        color: "primary",
        class:
          "bg-background text-primary hover:bg-primary/60 hover:text-primary-foreground",
      },
      {
        variant: "ghost",
        color: "secondary",
        class:
          "bg-background text-secondary-foreground hover:bg-secondary/60 hover:text-secondary-foreground",
      },
      {
        variant: "ghost",
        color: "success",
        class:
          "bg-background text-success hover:bg-success/60 hover:text-success-foreground",
      },
      {
        variant: "ghost",
        color: "warning",
        class:
          "bg-background text-warning hover:bg-warning/60 hover:text-warning-foreground",
      },
      {
        variant: "ghost",
        color: "danger",
        class:
          "bg-background text-danger hover:bg-danger/60 hover:text-danger-foreground",
      },
    ],
  },
);
