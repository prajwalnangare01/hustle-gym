// @ts-ignore
import server from "../dist/server/server.js";

export default async function (request: Request) {
  const handler = typeof server === "function" ? server : server.fetch;
  return await handler(request);
}
