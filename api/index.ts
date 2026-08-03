// @ts-ignore
import { toNodeHandler } from "srvx/node";
// @ts-ignore
import server from "../dist/server/server.js";

const fetchHandler = typeof server === "function" ? server : server.fetch;

export default toNodeHandler(fetchHandler);
