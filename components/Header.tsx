import { SearchIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='flex'>
            <Image
                className='rounded-lg'
                src="https://links.papareact.com/b3z"
                height={40}
                width={40}
                alt='logo'
            />

            <div>
                <form>
                    <SearchIcon className='text-gray-600 h-4' />
                </form>
            </div>
        </div>
    )
}

export default Header