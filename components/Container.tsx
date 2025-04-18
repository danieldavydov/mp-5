"use client";

import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Textarea } from "@mui/joy";
import { createAlias } from "@/lib/CreateAlias";

export default function Container() {
  const [url, setUrl] = useState("");
  const [alias, setAlias] = useState("");
  const [error, setError] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  function valid_url(url: string) {
    return true;
  }

  return (
    <div className="m-auto bg-[#fefae0] border border-dashed rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Shorten Your URLs!
      </h2>
      <p className="text-center">
        Enter a valid URL and an alias and we'll handle the rest!
      </p>
      <div className="flex flex-col gap-4">
        <form
          className="flex flex-col items-center"
          onSubmit={async (e) => {
            e.preventDefault();
            setError("");

            const res = await createAlias(url, alias);
            if (!res.works) {
              setError(
                res.error ||
                  "Uh Oh! Something went wrong. Please Try Again Later!"
              );
              return;
            }
          }}
        >
          <TextField
            className="w-[600px] bg-white border rounded-lg"
            variant="filled"
            label="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <Textarea
            className="w-[600px] mt-5 "
            placeholder="Alias"
            value={alias}
            onChange={(e) => setAlias(e.target.value)}
            required
          />

          <div className="flex flex-col items-center p-5">
            <Button className="w-full" type="submit" variant="contained">
              Shorten
            </Button>
            {error && (
              <div className="text-center text-red-600 m-5">{error}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
