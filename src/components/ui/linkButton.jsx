import Link from "next/link";
import { Button } from "./button";
export const LinkButton = ({ href, buttonText }) => {
    return (<Link href={href}>
      <Button variant="ghost" className="text-blue-600 hover:underline">
        {buttonText}
      </Button>
    </Link>);
};
