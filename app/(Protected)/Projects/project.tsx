import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function ProjectImage({src,link}:{src:string,link:string}) {
  return (
    <div>
        <Image src={src} alt="online picture" width='384' height='384' style={{width:'auto',height:'auto'}} />
        <p><Link href={link}>Click to view</Link></p>
    </div>
  )
}

export default ProjectImage