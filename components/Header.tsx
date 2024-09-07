import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Briefcase, HomeIcon, MessageSquare, SearchIcon, UsersIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Header() {
    return (
        <div className='flex items-center p-2 max-w-6xl mx-auto'>
            <Image
                className='rounded-lg'
                src="https://links.papareact.com/b3z"
                height={40}
                width={40}
                alt='logo'
            />

            <div className='flex-1'>
                <form className='flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96'>
                    <SearchIcon className='text-gray-600 h-4' />
                    <input
                        type='text'
                        placeholder='Search'
                        className='bg-transparent flex-1 outline-none' />
                </form>
            </div>

            <div className='flex items-center space-x-4 px-6' >
                <Link href="/" className="icon">
                    <HomeIcon />
                    <p>Home</p>
                </Link>

                <Link href="/" className="icon hidden md:flex">
                    <UsersIcon />
                    <p>Network</p>
                </Link>

                <Link href="/" className="icon hidden md:flex">
                    <Briefcase />
                    <p>Jobs</p>
                </Link>

                <Link href="/" className="icon hidden md:flex">
                    <MessageSquare />
                    <p>Messagaing</p>
                </Link>

                <SignedIn>
                    <UserButton/>
                </SignedIn>

                <SignedOut>
                    <Button asChild variant={'outline'}>
                        <SignInButton/>
                    </Button>
                </SignedOut>

            </div>
        </div>
    )
}

export default Header