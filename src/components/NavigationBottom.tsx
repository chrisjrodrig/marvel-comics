import { ImHome, ImSearch, ImBooks, ImUser } from "react-icons/im";
import * as React from "react";
import NavigationLink from "@/components/NavigationLink";

export function NavigationBottom() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 border-t bg-gray-700 border-gray-600">
      {" "}
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {" "}
        <NavigationLink IconComponent={ImHome} href="/" label="Home" />{" "}
        <NavigationLink
          IconComponent={ImSearch}
          href="/search"
          label="Search"
        />{" "}
        <NavigationLink
          IconComponent={ImBooks}
          href="/library"
          label="Library"
        />{" "}
        <NavigationLink
          IconComponent={ImUser}
          href="/profile"
          label="Profile"
        />{" "}
      </div>{" "}
    </div>
  );
}
