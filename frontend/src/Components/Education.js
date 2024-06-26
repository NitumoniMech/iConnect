import React, { useEffect, useState } from 'react';
import pen from "../public/pen.png";
import { useDispatch } from 'react-redux';
import {  toggleEducation } from '../utlis/educationSlice';
import axios from 'axios';
import fetchUserProfile from '../helper/fetchData';
import { ToastContainer, toast } from 'react-toastify';

const Education = ({userId}) => {
  const dispatch = useDispatch()
  const [userEducation,setUserEducation] = useState([]);

  const fetchData = async()=>{
    try {
      const response = await axios.get('http://localhost:8000/education/fetchEducation',{
        params:{
          userId:userId
        }
      });
      setUserEducation(response.data.educations);
      //console.log("education: ",response.data.educations);
    } catch (error) {
      console.error('Error fetching user skills:', error);
    }
  }
  // useEffect(() => {
  //   console.log("userEdu: ",userEducation);
  // }, [userEducation]);

  useEffect(()=>{
    fetchData();
  },[userId]);

  const handleClick = ()=>{
    dispatch(toggleEducation())
  }


  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className=''>
      <div className='flex justify-between mx-4 mt-2 mb-1'>
        <span className='font-bold text-xl'>Education</span>
        {/* <div className='flex flex-row '>
          <span className='mx-2 font-mono font-semibold text-2xl cursor-pointer' onClick={handleClick}>+</span>
          <img className='h-6 w-6 mx-2 mt-1' src={pen} alt="Pen icon"/>
        </div> */}
      </div>

      {/* update the names of fields accordingly */}
      {userEducation.map((data, index) => (
          <div key={index} className={`flex flex-row ${index !== userEducation.length - 1 ? 'border-b-4 m-2' : 'm-2'}`}>
          <img className='rounded-full h-16 mr-2' src="https://png.pngtree.com/png-vector/20230306/ourmid/pngtree-scool-college-logo-victor-vector-png-image_6634445.png" alt="Institute logo" />
          <div className='flex flex-col'>
            <span className='font-bold text-[15px]'>Institute: {data.school?? "Motilal Nehru National Institute of Technology"}</span>
            <span className='text-[15px]'>Course: {data.degree??"Master's of Computer Application"}</span>
            <span>Field of Study: {data.fieldOfStudy?? "Computer Science"}</span>
            <span>{`${formatDate(data.startDate)?? "-"} - ${formatDate(data.endDate)??"-"}`}</span>
          </div>
        </div> 
      ))}

    </div>
  );
};

export default Education;
