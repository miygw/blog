import { default as nodeAssert } from "node:assert";

/** `NODE_ENV` 値が `production` か否かを判断する。 */
export const isProduction = () => process.env.NODE_ENV === "production";

/** `NODE_ENV` 値が `development` か否かを判断する。 */
export const isDevelopment = () => process.env.NODE_ENV === "development";

/** 環境変数を読み込む。 */
export const getFromEnv = (key: string) => {
  const value = process.env[key];
  assert(value, `.envファイルからキー[${key}]の値を取得できなかった。`);

  return value!;
};

/** アサーションを実行する。*/
export const assert = (...params: Parameters<typeof nodeAssert>) => {
  if (isProduction()) return;
  nodeAssert(...params);
};

/** デコードする。 */
export const decode = (buffer: string, encoding: BufferEncoding | string) =>
  Buffer.from(buffer, encoding as BufferEncoding).toString();
