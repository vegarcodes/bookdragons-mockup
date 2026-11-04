export type ButtonLinkProps = React.LinkHTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink({
  className,
  children,
  href,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={`button ${className ?? ""}`}
      {...rest}
    >
      {children}
    </a>
  )
}