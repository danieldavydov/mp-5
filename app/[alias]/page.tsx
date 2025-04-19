import getCollection, { ALIAS_COLLECTION } from "@/db";
import { redirect } from "next/navigation";

export default async function Redirect({
  params,
}: {
  params: Promise<{ alias: string }>;
}) {
  const { alias } = await params;
  console.log(`Alias received: ${alias}`);

  const aliases = await getCollection(ALIAS_COLLECTION);
  const urlDoc = await aliases.findOne({ alias });

  console.log(`URL document is:`, urlDoc);

  if (!urlDoc) {
    return redirect("/");
  }

  redirect(urlDoc.url);
}
