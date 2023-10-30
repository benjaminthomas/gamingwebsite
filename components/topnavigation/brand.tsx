import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Brand() {
  return (
    <Link href="/" className="flex items-center gap-1">
      <Image src="/logo/logo.svg" alt="logo" width={40} height={40} />
      <span className="text-orange font-extrabold">Gaming</span>
    </Link>
  );
}
