import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar, AvatarImage,AvatarFallback } from '@radix-ui/react-avatar';



const LatestJobCards = ({ job }) => {
    const navigate = useNavigate();
    const { companies } = useSelector(store => store.company)
    
    return (
        <div onClick={() => navigate(`/description/${job._id}`)} className=' p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
            <div className="flex items-center gap-3">
  {companies
    .filter(comp => comp._id === job?.company?._id)
    .map(comp => (
      <Avatar key={comp._id} className=" pt-4 h-10 w-10 rounded-full ">
        <AvatarImage
          src={comp.logo}
          alt={comp.name}
          className="object-cover"
        />
        <AvatarFallback>
          {comp.name?.charAt(0).toUpperCase()}
        </AvatarFallback>
      </Avatar>
    ))}

  <div>
    <h1 className="font-medium text-lg">{job?.company?.name.toUpperCase()}</h1>
    <p className="text-sm text-gray-500">India</p>
  </div>
</div>

            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className=' line-clamp-3 text-sm text-gray-600 '>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold rounded-full'} variant="ghost">{job?.position} Position</Badge>
                <Badge className='text-[#F83002] font-bold rounded-full' variant="ghost">{job?.jobType}</Badge>
                <Badge className='text-[#7209b7] font-bold rounded-full' variant="ghost">{job?.salary} LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards;