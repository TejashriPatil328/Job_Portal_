import React, { useEffect, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setsearchJobByText } from '@/redux/jobSlice'

export default function AdminJobs() {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setsearchJobByText(input));
  }, [input])
  return (
    <div>
      <Navbar />
      <div className=' max-w-6xl mx-auto my-10'>
        <div className='flex items-center justify-between'>
          <Input
            className='w-fit'
            placeholder='Filter by name,role '
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")}>New Job</Button>
        </div>
        <div className='mt-6'>
          <AdminJobsTable />
        </div>

      </div>
    </div>
  )
}
