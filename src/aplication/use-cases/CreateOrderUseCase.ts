import { Order} from "@domain/entities/Order";
import { OrderRepository } from "@aplication/ports/OrderRepository";

export type CreateOrderInput = { orderId: string; customerId: string; }
export type CreateOrderOutput = { orderId: string; }

export class CreateOrder {
    constructor(private readonly repo: OrderRepository) {}
    
    async execute({ orderId, customerId }: CreateOrderInput): Promise<CreateOrderOutput> {
        const exists = await this.repo.findById(orderId)
        if (exists) {
            throw new Error("Order with this ID already exists");
        }
        const order = new Order.create(orderId, customerId);
        await this.repo
        return { orderId: order.id };
    }
}