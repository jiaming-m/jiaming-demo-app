# jiaming-demo-app

Demo application repo used to exercise Mintlify automation triggers with path and author rules.

Layout:

- `src/api/` public API handlers. Changes here should trigger the docs automation.
- `src/web/` internal UI code. Changes here should not.
- `lib/` shared helpers.

Tunnel probe 1

## Contributing

Open a PR against main.

Production trigger E2E: README-only change must not match `src/api/**`.
