import React from 'react'
import prisma from "@/lib/prisma";

async function Review({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.id
    }
  });
  return (
    <main>
      <li key={post?.id} className='reviewli'>
        <h2>{post?.title}</h2>
        <p>{post?.content}</p>
        <p>{post?.name}</p>
        <p>{post?.createdAt.toISOString().slice(0, 10)}</p>
      </li>

    </main>
  )
}

export default Review