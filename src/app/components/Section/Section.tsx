export type SectionProps = {
  as?:
    | "div"
    | "section"
    | "article"
    | "main";
  variant:
    | "yellow"
    | "blue"
    | "green"
    | "pink"
    | "brown";
} & React.HTMLAttributes<HTMLElement>;

export default function Section({
  as = "div",
  variant,
  className,
  children,
  ...rest
}: SectionProps) {
  const Element = as;

  return (
    <Element 
      className={`section section-${variant} ${className ?? ""}`} 
      {...rest}
    >
      {children}
    </Element>
  );
};