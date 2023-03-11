import { fetchObject } from "@/libs/js";
import { decode, getFromEnv } from "@/libs/node";
import { assertIsServer } from "./assert";

/**
 * GitHub REST API を利用して、ファイルを取得する。
 * https://docs.github.com/en/rest/repos/contents#get-repository-content
 * */
export const getRepositoryContent = async (path: string) => {
  assertIsServer();

  const owner = getFromEnv("GITHUB_OWNER");
  const repo = getFromEnv("GITHUB_REPO");
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  type Content = {
    name: string;
    encoding: string;
    content: string;
  };

  const raw = await fetchObject<Content>(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${getFromEnv("GITHUB_TOKEN")}` },
  });

  return {
    name: raw.name,
    // raw.content は raw.encoding でエンコードされている。
    content: decode(raw.content, raw.encoding),
  };
};
