export interface ErrorWithStatusCode {
  statusCode: number
  message?: string
}

export function isErrorWithStatusCode(
  error: unknown
): error is ErrorWithStatusCode {
  return (
    typeof error === 'object' &&
    error !== null &&
    'statusCode' in error &&
    typeof (error as ErrorWithStatusCode).statusCode === 'number'
  )
}
