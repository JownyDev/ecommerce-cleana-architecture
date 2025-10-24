import Fastify from "fastify";
import { OrdersController } from "./OrdersController";

export async function createServer() {
    const app = Fastify()
    app.post('/orders', OrdersController.create);
    return app;
}