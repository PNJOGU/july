import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const initialPosts: Prisma.PostCreateInput[] = [
  {
    title: "He is good",
    name: 'paul',
    content: 'He made a good website',
    email: "paulnjogu2006@gmail.com",
    slug: "He-is-good"
  }
]
async function main() {
  console.log('start seeding...');
  for (const post of initialPosts) {
    const newpost = await prisma.post.create({
      data: post,
    })
    console.log(`created with id: ${newpost.id}`);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })