"use client";

import Link from "next/link";
import { useState } from "react";
import getCollection, { ALIAS_COLLECTION } from "@/db";

export default function Container() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");

  function valid_url(url: string): Boolean {
    return true;
  }

  function valid_alias(alias: string): Boolean {
    return true;
  }

  return (
    <div className="m-auto bg-[#fefae0] border border-dashed rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Movie Lookup</h2>
      <p className="text-center">Enter a movie url to get details about it</p>
      <p className="mb-6 text-center">
        (<span className="font-bold">Warning :</span> Case Sensitive)
      </p>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          className="border p-2 rounded"
        />
        {url && alias ? (
          <Link
            href={`/${url}`}
            className="bg-[#ccd5ae] text-black py-2 rounded text-center font-bold"
          >
            Get Details
          </Link>
        ) : (
          <span className="bg-[#d4a373] text-black py-2 rounded text-center cursor-not-allowed font-bold">
            Get Details
          </span>
        )}
      </div>
    </div>
  );
}
