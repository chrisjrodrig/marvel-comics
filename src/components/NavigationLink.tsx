import * as React from "react";
import Link from "next/link";

interface NavigationLinkProps {
  IconComponent: React.ComponentType<{ className: string }>;
  href: string;
  label: string;
}
const NavigationLink: React.FC<NavigationLinkProps> = ({
  IconComponent,
  href,
  label,
}) => (
  <Link
    href={href}
    className="inline-flex flex-col items-center justify-center px-5 border-x hover:bg-gray-800 group border-gray-600"
  >
    {" "}
    <IconComponent className="w-5 h-5 mb-2 text-gray-500 group-hover:text-white" />{" "}
    <span className="text-sm text-gray-500 group-hover:text-white">
      {" "}
      {label}{" "}
    </span>{" "}
  </Link>
);

export default NavigationLink;
