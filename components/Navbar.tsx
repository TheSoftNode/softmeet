import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav
        className=" flex-between fixed z-50 w-full bg-dark-1 px-6 py-4
        lg:px-10"
    >
        <Link
            href="/"
            className='flex items-center gap-1'
        >
            <Image
                src="/icons/logo.svg"
                width={32}
                height={32}
                alt="softmeet logo"
                className="max-sm:size-10"
            />
             {/* <Image
                src="/icons/softmeet.png"
                width={110}
                height={50}
                alt="softmeet logo"
                className="max-sm:size-10"
            /> */}
            <p className="text-[26px] font-extrabold text-white max-sm:hidden">
                SoftMeet
            </p>
        </Link>

         <div className="flex-between gap-5">
            {/* Clerk - User Management */}
            <SignedIn>
                <UserButton />
            </SignedIn>

            <MobileNav />
         </div>
    </nav>
  )
}

export default Navbar