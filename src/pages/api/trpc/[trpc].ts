import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/api/routers/_app";

// Next API RoutesにはtRPCルーターに委任するための設定ファイルを定義する
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
