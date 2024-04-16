import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const ButtonLink = ({ path, text }: { path: string; text: string }) => {
  return (
    <Link href={path} className={buttonVariants({ variant: "outline" })}>
      {text}
    </Link>
  );
};

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
