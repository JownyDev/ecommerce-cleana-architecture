import { OrderRepository } from "@aplication/ports/OrderRepository";
import { Order } from "@domain/entities/Order";

export class InMemoryOrderRepository implements OrderRepository {
    private store: Map<string, Order> = new Map<string, Order>()

    async save(order: Order): Promise<void> {
        this.store.set(order.id, order);
    }
    
    async findById(id: string): Promise<Order | null> {
        const order = this.store.get(id);
        return order ? order : null;
    }
}