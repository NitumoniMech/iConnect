import React, { useEffect, useState } from 'react'
// import media from "../public/media.png"
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
// import announcements from "../public/announcements.png"
// import job from "../public/job.png"
import Post from './Post'
import { useSelector } from 'react-redux'
import AddMedia from './AddMedia'
import axios from 'axios'


const MainContainer = () => {

    // console.log("main")
    const [mediaPost,setMedia] = useState(false)
    const [announcementPost,setAnnouncement] = useState(false)
    const [jobPost,setJob] = useState(false)

    const userPosts = useSelector((store) =>store.post.posts) 
    const user = useSelector((store)=>store.user)
    // console.log("userPosts",userPosts)

    const handleMedia = () => {
        setMedia(!mediaPost)
    }

    const handleAnnouncement = () => {
        setAnnouncement(!announcementPost)
    }

    const handleJobs = () => {
        setJob(!jobPost)
    }

    const fetchData = async()=>{

        // const response = await axios.get("")
        // may not need to fetch if we configure redux nicelys
    }

    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div className='flex flex-col'>
        <div className='rounded-3xl p-2 bg-gray-200 mb-3'>
            <div className='flex flex-row m-2 justify-between'>
                <img className='h-12 w-12 rounded-full mr-1 ' src={user?.avatar??"https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="profile" />
                <span className='border-2 border-black w-[88%] rounded-3xl px-7 pt-2 text-xl' >Start a post</span>
            </div>
            <div className='flex flex-row mx-8 justify-between my-2'>
                {/* <img className='h-6 ' src={media} alt="media" onClick={handleMedia}/>
                <img className='h-6' src={announcements} alt="announcements" onClick={handleAnnouncement}/>
                <img className='h-6 ' src={job} alt="jobs" onClick={handleJobs}/> */}
                <span className='text-blue-800 cursor-pointer' onClick={handleMedia}><AddPhotoAlternateOutlinedIcon /> media</span>
                <span className='text-green-700 cursor-pointer' onClick={handleAnnouncement}><CampaignOutlinedIcon/> announcement</span>
                <span className='text-blue-800 cursor-pointer' onClick={handleJobs}><BusinessCenterOutlinedIcon/> Jobs</span>

            </div>
        </div>
        <div>
            {userPosts?.map((data) => <Post key={data?._id} postData={data} />)}
        </div>

        {mediaPost && <div className='absolute ml-[150px] mt-20 rounded-2xl w-[800px] bg-white m-4 shadow-2xl'>
            <AddMedia onClose={handleMedia} />
        </div>
        
        }
        {announcementPost && <div className='absolute ml-[150px] mt-20 rounded-2xl w-[800px] bg-white m-4 shadow-2xl'>
            <AddMedia onClose={handleAnnouncement} />
        </div>
        
        }
        {jobPost && <div className='absolute ml-[150px] mt-20 rounded-2xl w-[800px] bg-white m-4 shadow-2xl'>
            <AddMedia onClose={handleJobs} />
        </div>
        
        }
      
    </div>
  )
}

export default MainContainer
