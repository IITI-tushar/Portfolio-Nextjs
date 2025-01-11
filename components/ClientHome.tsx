"use client";

import { FloatingNav } from "./ui/FloatingNavbar";
import { navItems } from "@/data";

export default function ClientHome() {
  return <FloatingNav navItems={navItems} />;
}
