import { ReactNode } from "react"

interface NavLinkProps {
  children: ReactNode
  href: string
}

export const NavLink = ({ children, href }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-xs font-bold py-2 border-b-2 border-transparent hover:border-red-500">
      {children}
    </a>
  )
}
