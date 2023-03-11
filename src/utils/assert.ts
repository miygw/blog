import { isServer } from "@/libs/js";
import { assert } from "@/libs/node";

/** サーバーサイドでの実行であることをアサートする。 */
export const assertIsServer = () => {
  assert(isServer(), "サーバーサイド以外では実行できない処理が呼び出された。");
};
