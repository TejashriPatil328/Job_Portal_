import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'

const skills = ["HTMl", "Css", "Javascript"]
const isResume=true;

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-while border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile picture" />
            </Avatar>

            <div>
              <h1 className='font-medium text-xl'>Full Name</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium doloribus nostrum hic vel? Similique accusamus aperiam architecto, tempore sapiente vitae doloremque voluptatibus eos laborum pariatur earum amet libero excepturi numquam!</p>

            </div>

          </div>
          <Button className="text-right" variant="outline"><Pen /></Button>

        </div>
        <div className='my-5'>
          <div className='flex items-center gap-4 my-2'>
            <Mail />
            <span>kalpesh@gmail.com</span>
          </div>
          <div className='flex items-center gap-4 my-2'>


            <Contact />
            <span>1543654578</span>
          </div>
        </div>
        <div className='my-5'>
          <Label className="text-md front-bold">Skills</Label>
          <div className='flex items-center gap-1'>
            {
              skills.length !== 0 ? skills.map((Item, index) => <Badge key={index} className="rounded-full">{Item}</Badge>) : <span>NA</span>
            }
          </div>
          <div>

          </div>

        </div>
        
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className="text-md front-bold">Resume</Label>
          {
            isResume?<a target='blank' href='https://google.com' className='text-blue-500 w-full hover:underline cursor-pointer'>Kalpesh Patil Resume </a>
            :
            <span>NA</span>
          }
        </div>
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
            <AppliedJobTable/>
        </div>
    </div>
  )
}
