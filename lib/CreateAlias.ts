"use server";

import getCollection, { ALIAS_COLLECTION } from "@/db";

export async function createAlias( url: string, alias: string ): Promise<{works: boolean, error?: string}> {
    // First check if url is valid
    let res: Response;
    try {
        res = await fetch(url, {method: "HEAD", redirect: "follow"});
        if (!res.ok) {
            return {works: false, error: "Invalid URL: Could not verify URL. Please try again."};
        }
    } catch {
        return {works: false, error: "Invalid URL: Could not verify URL. Please try again."};
    }

    const temp_url = url.toLowerCase();
    if (!(temp_url.startsWith("http"))) {
        return {works: false, error: "Invalid URL: Must start with http or https. Please try again."}
    }

    if (!(res.status >= 200 && res.status !== 404 && res.status < 500)) {
        return {works: false, error: "Invalid URL: Could not verify URL. Please try again."};   
    }

    // If we reach here, then the URL is valid
    // Now we have to check that the alias is unique
    const aliases = await getCollection(ALIAS_COLLECTION);
    const exists = await aliases.findOne({ alias });
    
    if (exists) {
        return {works: false, error: "Invalid alias: This alias already exists"};
    }

    await aliases.insertOne({alias, url});
    return {works: true};
}