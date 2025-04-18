"use server";

import getCollection, { ALIAS_COLLECTION } from "@/db";
import dns from "node:dns/promises";

export async function createAlias( url: string, alias: string ): Promise<{works: boolean, error?: string}> {
    dns.setServers(["1.1.1.1"]);
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

    if (!(res.status >= 200 && res.status !== 404 && res.status < 500)) {
        return {works: false, error: "Invalid URL: Could not verify URL. Please try again."};   
    }

    // If we reach here, then the URL is valid
    // Now we have to check that the alias is unique
    const aliases = await getCollection(ALIAS_COLLECTION);
    console.log("Line 1 worked");
    const exists = await aliases.findOne({ alias });
    console.log("Line 2 worked");
    
    if (exists) {
        return {works: false, error: "Invalid alias: This alias already exists"};
    }

    await aliases.insertOne({alias, url});
    console.log("Line 3 worked");
    return {works: true};
}