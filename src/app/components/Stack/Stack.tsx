export type StackProps = {
  as?:
    | "div"
    | "section"
    | "article"
    | "main";
  spacing?:
    | "extra-small"
    | "small"
    | "medium"
    | "large"
    | "extra-large";
} & React.HTMLAttributes<HTMLElement>;

export default function Stack({
  as = "div",
  spacing = "medium",
  className,
  children,
  ...rest
}: StackProps) {
  const Element = as;

  return (
    <Element
      className={[
        "stack",
        `${spacing}-spacing`,
        className ?? null
      ].join(" ")}
      {...rest}
    >
      {children}
    </Element>
  );
};