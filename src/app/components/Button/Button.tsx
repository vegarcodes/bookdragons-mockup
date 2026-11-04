export type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button 
      className={`button ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  )
}