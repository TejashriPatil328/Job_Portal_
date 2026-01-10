import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

export default function Job () {
    const navigate=useNavigate();
    const jobId="kkjvfhtd3564g";
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>


            <div className='flex items-center gap-2 my-2'>
                <Button className='p-6' variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src='https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>india</p>
                </div>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ducimus sunt magni rerum asperiores, nisi adipisci inventore nihil odio ullam ipsam sit eius reprehenderit dolor perspiciatis libero at ab placeat.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold rounded-full'} variant="ghost">12 Position</Badge>
                <Badge className='text-[#F83002] font-bold rounded-full' variant="ghost">Part Time</Badge>
                <Badge className='text-[#7209b7] font-bold rounded-full' variant="ghost">24 LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=>navigate(`/description/${jobId}`)} variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save For Later</Button>
            </div>
        </div>
    )
}
