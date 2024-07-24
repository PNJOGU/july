'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'


export const addReview = async (formData: FormData) => {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  try {
    await prisma.post.create({
      data: {
        email: email as string,
        title: title as string,
        content: content as string,
        name: name as string,
        slug: title.replace(/\s+/g, "-").toLowerCase(),
      }
    })
  } catch (error) {
    return NextResponse.json(error)
  }
  revalidatePath('/')
}

export const updateReview = async (formData: FormData, id: string) => {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const title = formData.get('title') as string
  const content = formData.get('content') as string

  try {
    await prisma.post.update({
      where: { id },
      data: {
        email: email as string,
        title: title as string,
        content: content as string,
        name: name as string,
        slug: title.replace(/\s+/g, "-").toLowerCase(),
      }
    })
  } catch (error) {
    return NextResponse.json(error)
  }
  revalidatePath('/')
}

export const deleteReview = async (id: string) => {

  try {
    await prisma.post.delete({
      where: { id },
    })
  } catch (error) {
    return NextResponse.json(error)
  }
  revalidatePath('/')
}
