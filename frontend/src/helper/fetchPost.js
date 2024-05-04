import axios from 'axios';

const fetchPost = async (state,cType) => {
    try {
      // Send request to backend to fetch user profile
      const response = await axios.get('http://localhost:8000/post/fetchPost',{
        params:{
          postType:cType
        }
      });
      state(response.data);
    } catch (error) {
      console.error('Error fetching user Post:', error);
      //window.location.href="/login";
    }
  };

export default fetchPost;