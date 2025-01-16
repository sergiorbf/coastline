import Link from "next/link"
import { Button } from "./button"

type LinkButtonProps = {
  href: string
  buttonText: string
}

export const LinkButton: React.FC<LinkButtonProps> = ({ href, buttonText }) => {
  return (
    <Link href={href}>
      <Button variant="ghost"
        className="text-blue-600 hover:underline">
        {buttonText}
      </Button>
    </Link>
  )
}
