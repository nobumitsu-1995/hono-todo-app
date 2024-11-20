import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const todos = await prisma.todo.createMany({
    data: [
      {
        title: '洗濯'
      },
      {
        title: '買い物'
      },
      {
        title: '掃除'
      },
    ]
  })
  console.table(todos)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
