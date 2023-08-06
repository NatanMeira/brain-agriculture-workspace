import { PrismaClient } from '@prisma/client';
import { seedFarmProducers } from './farm-producers.seed';

const prisma = new PrismaClient();

async function main() {
  await seedFarmProducers(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
