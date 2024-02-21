import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>

      <Link href='/' className='sidebar-logo'>
        <Image src='/assets/icons/close.svg' alt='logo' width={180} height={28}/>
      </Link>
        </div>
    </aside>
  )
}

export default SideBar
