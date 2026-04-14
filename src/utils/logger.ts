const isDevelopment = process.env.NODE_ENV === 'development'

export function logDebug(message: string, ...args: unknown[]): void {
  if (isDevelopment) console.log(message, ...args)
}
export function logInfo(message: string, ...args: unknown[]): void {
  if (isDevelopment) console.log(message, ...args)
}
export function logError(message: string, ...args: unknown[]): void {
  console.error(message, ...args)
}
export function logWarn(message: string, ...args: unknown[]): void {
  console.warn(message, ...args)
}
