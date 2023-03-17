import React from "react";

export function NavLink({ href, children, newTab }) {
  return (
    <a
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      target={newTab ? "_blank" : "_self"}
    >
      {children}
    </a>
  );
}
