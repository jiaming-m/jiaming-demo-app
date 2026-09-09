export type User = {
  id: string;
  email: string;
  createdAt: string;
};

export async function listUsers(limit = 50): Promise<User[]> {
  return fetchJson(`/v1/users?limit=${limit}`);
}

export async function getUser(id: string): Promise<User> {
  return fetchJson(`/v1/users/${id}`);
}

export async function deleteUser(id: string): Promise<void> {
  const response = await fetch(`/v1/users/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
}

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json() as Promise<T>;
}
