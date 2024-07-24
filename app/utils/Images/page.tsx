import Image from "next/image";

import React from 'react'

function Images() {
  return (
    <div className="images">
      <Image src={'/node.png'} alt="node organization picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/react.jpg'} alt="react.js organization picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/javascript.png'} alt="javascript picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/typescript.png'} alt="typescript picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/next.jpg'} alt="next.js picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/firebase.png'} alt="firebase picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/safaricom api.png'} alt="safaricom mpesa integration picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/prisma.png'} alt="prisma picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/postgress.png'} alt="postgresql picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/git-github.png'} alt="git-github picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/graphql.jpg'} alt="graphql picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/material ui.png'} alt="material ui picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/vercel.png'} alt="vercel picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
      <Image src={'/netlify.png'} alt="netlify picture" width='100' height='100' style={{ width: 'auto', height: 'auto' }} />
    </div>
  )
}

export default Images