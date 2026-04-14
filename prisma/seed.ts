import { PrismaClient } from '../src/generated/prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')
  // Add seed data here
  console.log('Done.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
