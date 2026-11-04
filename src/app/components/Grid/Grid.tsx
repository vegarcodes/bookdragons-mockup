import Container from "../Container/Container";

export type GridProps = {
  as?: 
    | "div" 
    | "main" 
    | "section" 
    | "article"
    | "container";
  layout:
    | "auto-columns"
    | "two-columns"
    | "three-columns"
    | "four-columns"
    | "two-plus-one-columns"
    | "one-plus-two-columns";
  gap:
    | "small"
    | "medium"
    | "large"
    | "no";
} & React.HTMLAttributes<HTMLElement>;

export default function Grid({
  as = "div",
  layout,
  gap = "medium",
  className,
  children,
  ...rest
}: GridProps) {
  const Element = as === "container" ? Container : as;

  return (
    <Element 
      className={`grid ${layout} ${gap}-gap ${className ?? ""}`} 
      {...rest}
    >
      {children}
    </Element>
  )
}