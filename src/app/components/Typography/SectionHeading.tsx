export type SectionHeadingProps = {
  as:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function SectionHeading({
  as = "h1",
  className,
  children,
  ...rest
}: SectionHeadingProps) {
  const Element = as;

  return (
    <Element 
      className={`section-heading ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Element>
  )
}