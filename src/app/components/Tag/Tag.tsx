export type TagProps = React.HTMLAttributes<HTMLSpanElement>

export default function Tag({
  className,
  children,
  ...rest
}: TagProps) {
  return (
    <span
      className={`tag ${className ?? ""}`}
      {...rest}
    >
      {children}
    </span>
  )
}