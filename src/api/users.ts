export type User = {
  id: string;
  email: string;
  createdAt: string;
};

/** List users, optionally filtering by an exact email address. */
export async function listUsers(limit = 30, email?: string): Promise<User[]> {
  const params = new URLSearchParams({ limit: String(limit) });
  if (email) params.set('email', email);
  return fetchJson(`/v1/users?${params.toString()}`);
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
