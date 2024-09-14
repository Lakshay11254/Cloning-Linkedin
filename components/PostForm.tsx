'use client'
// import { AvatarImage } from '@radix-ui/react-avatar';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useUser } from '@clerk/nextjs';
import { Button } from './ui/button';
import { ImageIcon } from 'lucide-react';
import { useRef, useState } from "react";



function PostForm() {
  const ref = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const { user } = useUser();


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className='mb-2'>

      <form
        ref={ref}
        action=""
      >
        <div className='flex items-center space-x-2'>
          <Avatar>
            <AvatarImage src={user?.imageUrl} />
            <AvatarFallback>
              {user?.firstName?.charAt(0)}
              {user?.lastName?.charAt(0)}
            </AvatarFallback>
          </Avatar>

          <input

            type="text"
            name='postInput'
            placeholder='Start writing a post...'
            className='flex-1 outline-none rounded-full py-3 px-4 border' />

          <input type="file"
            ref={fileInputRef}
            name='image'
            accept='image/*' hidden
            onChange={handleImageChange}
          />
          <button type="submit" hidden className=''>
            Post
          </button>
        </div>

        {/* preview conditional check */}
        {preview && (
          <div className="mt-2">
            <img src={preview} alt="Preview" className="w-full object-cover" />
          </div>
        )}


        <div className="flex justify-end mt-2">

          <Button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            variant={preview ? "secondary" : "outline"}
          >
            <ImageIcon className="mr-2" size={16} color="currentColor" />
            {preview ? "Change" : "Add"} image
          </Button>


          {/* Remove preview button */}


        </div>

      </form>

      <hr className="mt-2 border-gray-300" />
    </div>
  )
}

export default PostForm