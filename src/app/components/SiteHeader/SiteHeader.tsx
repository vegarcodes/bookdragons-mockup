export type SiteHeaderProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function SiteHeader({
  children,
  ...rest
}: SiteHeaderProps) {
  return (
    <header 
      className="site-header" 
      {...rest}
    >
      <a href="#" className="logo">BookDragons</a>
      <nav>
        {children}
      </nav>
    </header>
  )
}