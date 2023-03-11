/** 指定型のオブジェクトとしてフェッチする。 */
export const fetchObject = async <T extends object>(
  ...params: Parameters<typeof fetch>
) => {
  const raw = await fetchCore(...params);
  return raw.json() as T;
};

const fetchCore = async (...params: Parameters<typeof fetch>) => {
  const resp = await fetch(...params);
  if (!resp.ok) throw new Error(`${resp.status}: ${resp.statusText}`);

  return resp;
};

/** サーバーサイドでの実行かを判定する */
export const isServer = () => typeof window === "undefined";

/** クライアントサイドでの実行かを判定する */
export const isClient = () => !isServer();
