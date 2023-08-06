import { PrismaClient, PlantedCropsEnum } from '@prisma/client';
import { fakerBr } from '@js-brasil/fakerbr';

export async function seedFarmProducers(prisma: PrismaClient) {
  for (let index = 0; index < 1000; index++) {
    const totalAreaInHectares = fakerBr.number({
      min: 100,
      max: 1000,
      decimals: 0,
    });

    const randomNumber = fakerBr.number({
      min: 1,
      max: 5,
      decimals: 0,
    });

    const states = ['AC', 'SP', 'RJ', 'MG', 'ES'];

    const plantedCrops = [];
    const crops = Object.values(PlantedCropsEnum);
    for (let index = 0; index < randomNumber; index++) {
      plantedCrops.push(crops[index]);
    }

    await prisma.farmProducer.create({
      data: {
        cpfOrCnpj: fakerBr.cpfcnpj(),
        name: fakerBr.pessoa().nome,
        farmName: fakerBr.empresa().nome,
        city: 'São Paulo',
        state: states[randomNumber - 1],
        arableAreaInHectares: totalAreaInHectares / 2,
        vegetationAreaInHectares: totalAreaInHectares / 2,
        totalAreaInHectares: totalAreaInHectares,
        plantedCrops,
      },
    });
  }
}
