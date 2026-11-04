export type ContainerProps = {
  as?: 
    | "div" 
    | "section" 
    | "main"
    | "article";
} & React.HTMLAttributes<HTMLElement>;

export default function Container({
  as = "div",
  className,
  children,
  ...rest
}: ContainerProps) {
  const Element = as;

  return (
    <Element 
      className={`container ${className ?? ""}`} 
      {...rest}
    >
      {children}
    </Element>
  );
};
