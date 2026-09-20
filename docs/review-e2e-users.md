# List users

This guide describes `listUsers` in `src/api/users.ts`.

Send a GET request to `/v2/users` to list users. The default limit is 10.

Pass an optional `email` query parameter to filter by an exact email address.
