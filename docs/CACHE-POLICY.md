# Cache Policy

## React Query defaults

| Query type | staleTime | refetchOnWindowFocus |
|-----------|-----------|---------------------|
| User profile | 5 minutes | false |
| Lists | 1 minute | true |
| Static data | 1 hour | false |

## Invalidation

Invalidate the relevant query key after every mutation.
