// Custom automation trigger E2E: nonmatching web path.
import { listUsers } from '../api/users';

export async function renderUserTable(): Promise<string> {
  const users = await listUsers(10);
  const rows = users.map((user) => `<tr><td>${user.id}</td><td>${user.email}</td></tr>`);
  return `<table>${rows.join('')}</table>`;
}
