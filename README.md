# Bun vs Node (V8) vs Bun FFI w/ C Benchmarking

Test setup:

- Representative Autorouting Problem
- 411 obstacles
- 10,000 random points
- Compute if the point is any obstacle, and return obstacle

M3 Mac Pro Results:

- Bun: 6.7410ms
- Node: 5.1307ms
- Bun FFI w/ C: 6.0413ms
- C only: 4.3ms (+- 1ms)

## Running Benchmarks

- `bun run src/benchmark-js.ts`
- `bun run src/benchmark-c.ts`
- `npx tsx src/benchmark-js.ts` (Node V8)

### C Only

- `clang -O3 src/benchmark-c-only.c -o benchmark-c-only`
