export type EyebrowHeadingProps = {
  as:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function EyebrowHeading({
  as = "h1",
  className,
  children,
  ...rest
}: EyebrowHeadingProps) {
  const Element = as;

  return (
    <Element 
      className={`eyebrow-heading ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Element>
  )
}
