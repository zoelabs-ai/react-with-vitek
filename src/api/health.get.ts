import { ok } from 'vitek-plugin'

export default async function handler() {
  return ok({ status: 'ok', timestamp: new Date().toISOString() })
}
