"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");

  return (
    <>
      <Container />
      <p>Something here</p>
    </>
  );
}
