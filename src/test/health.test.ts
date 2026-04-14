import { describe, it, expect } from 'vitest'

describe('health', () => {
  it('should return ok status', async () => {
    const { default: handler } = await import('../api/health.get')
    const result = await handler()
    expect(result.body).toHaveProperty('status', 'ok')
    expect(result.body).toHaveProperty('timestamp')
  })
})
