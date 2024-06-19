'use client'
import React from 'react';
import Link from 'next/link';
export const Buttonlink = ({name,link}:{name:string,link:string}) =>{
  return (
    <button><Link href={link}>{name}</Link></button>
  )
}
