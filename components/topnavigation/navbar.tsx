import { links } from "@/lib/data";
import React from "react";
import Navitems from "./navitesm";

export default function Navbar() {
  return (
    <nav className="flex flex-col">
      <ul className="flex items-center gap-4">
        {links.map((link) => (
          <React.Fragment key={link.hash}>
            <Navitems {...link} />
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
