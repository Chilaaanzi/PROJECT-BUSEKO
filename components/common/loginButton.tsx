"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LoginButton({
  onDarkBackground = false,
}: {
  onDarkBackground?: boolean;
}) {
  const baseColor = onDarkBackground ? "bg-yellow-400" : "bg-zinc-950";
  const hoverColor = onDarkBackground
    ? "hover:bg-white hover:text-zinc-950 hover:scale-105"
    : "hover:bg-yellow-400 hover:text-white hover:scale-105";

  return (
    <Link href="/quote">
      <Button className={`px-7 ${baseColor} ${hoverColor}`}>Get Quote</Button>
    </Link>
  );
}
