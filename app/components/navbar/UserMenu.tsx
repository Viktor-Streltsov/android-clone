'use client';

import { AiOutlineMenu } from 'react-icons/ai';

const UserMenu = () => {
  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div 
            onClick={() => {}}
            className="
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
                founded-full
                hover:bg-neutral-100
                transition
                cursor-pointer
            ">
                Airbnd your home
            </div>
            <div
                onClick={() => {}}
                className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
                "
            >
                <AiOutlineMenu />
            </div>
        </div>
    </div>
  )
}

export default UserMenu
