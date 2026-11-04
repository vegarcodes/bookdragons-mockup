export type ReelProps = {
  as?:
    | "div"
    | "section"
    | "article"
    | "main";
} & React.HTMLAttributes<HTMLElement>;

export default function Reel({
  as = "div",
  className,
  children,
  ...rest
}: ReelProps) {
  const Element = as;

  return (
    <Element
      className={`reel ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Element>
  );
};