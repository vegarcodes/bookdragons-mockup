export type SectionSubheadingProps = {
  as:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function SectionSubheading({
  as = "h1",
  className,
  children,
  ...rest
}: SectionSubheadingProps) {
  const Element = as;

  return (
    <Element 
      className={`section-subheading ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Element>
  )
}
