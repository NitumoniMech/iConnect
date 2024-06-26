import React,{useState,useEffect} from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { Link } from 'react-router-dom';


const FriendListItem = ({user}) =>{

  const handleToProfile=()=>{
    
  };
  const getImage = (imgName) => {
    return require(`../../public/${imgName}`);
  };

    return (
    <div className='flex flex-row justify-between mx-4 p-2 border-b-2 border-gray-200 items-center hover:shadow-lg '>
      <div className='flex flex-row '>
        <img className='h-12 w-12' src={user.image?getImage(user.image) : "https://cdn-icons-png.freepik.com/512/10302/10302971.png"} alt="dp"/>
        <div className='flex flex-col mx-2'>
            {/* <span className='font-semibold cursor-pointer' onClick={handleToProfile}>{user.name ?? "No Name"}</span>
            <span className='text-sm font-thin'>{user.headline?? "No headline"}</span> */}
            <Link
              to={{
                pathname: `/${user._id}/Profile/`,
                state: { userId: user._id }
              }}
            >
            {/* <Link to={`${user._id}/Profile/`}> */}
              <div className='font-semibold cursor-pointer'>{user.name ?? "No Name"}</div>
              <div className='text-sm font-thin'>{user.headline ?? "No headline"}</div>
            </Link>
        </div>
      </div>
      
      {/* <button className='rounded-2xl md:p-1 p-1 px-2 text-blue-500 '><SendIcon/></button> */}
      <a href={`mailto:${user.email}?subject=Subject%20Here&body=Body%20Here`} className='rounded-2xl md:p-1 p-1 px-2 text-blue-500'>
        <SendIcon />
      </a>

      
    </div>
    )
}
const MyConnection = () => {

    const [users,setUsers]=useState([]);
    useEffect(() => {
      const fetchUserProfile = async () => {
        try {
          const response = await axios.get('http://localhost:8000/connection/myConnection');
          setUsers(response.data); // Update state with userr information
          console.log("ressData",response.data);
        } catch (error) {
          console.error('Error fetching userr profile:', error);
        }
      };
      fetchUserProfile();
      //console.log(userr.image);
    }, []);

    
  return (
    <div className='flex flex-col bg-white shadow-md m-4 overflow-x-hidden overflow-y-auto rounded-lg p-2'>
    <div className='flex flex-row justify-between'>
      <span className='m-2 font-bold'>Connections</span>
      <span className='m-2'><ArrowRightAltIcon/></span>
    </div>
    {users && users.map((user,idx)=>(
            <FriendListItem key={idx} user={user} /> // user id as key
        ))}
  </div>
  )
}

export default MyConnection
