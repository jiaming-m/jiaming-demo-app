export type Order = {
  id: string;
  userId: string;
  totalCents: number;
  status: 'pending' | 'paid' | 'refunded';
};

export async function listOrders(userId: string, limit = 25): Promise<Order[]> {
  const response = await fetch(`/v1/users/${userId}/orders?limit=${limit}`);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json() as Promise<Order[]>;
}
