export type Order = {
  id: string;
  userId: string;
  totalCents: number;
  status: 'pending' | 'paid' | 'refunded';
};

export async function listOrders(userId: string): Promise<Order[]> {
  const response = await fetch(`/v1/users/${userId}/orders`);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json() as Promise<Order[]>;
}
