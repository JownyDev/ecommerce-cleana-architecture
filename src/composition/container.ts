
import { InMemoryOrderRepository } from "@infrastructure/repositories/InMemoryOrderRepository";
import { CreateOrder } from "@aplication/use-cases/CreateOrderUseCase";

const repo = new InMemoryOrderRepository();
export const createOrder = new CreateOrder(repo);