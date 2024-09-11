import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const submitQuestion = async (question) => {
  const postData = {
    question,
  };

  // try {
  //   const responseData = await axios.post('http://localhost:8000/api', postData, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   return responseData;
  // } catch (error) {
  //   console.error('Error: ', error);
  //   throw error;
  // }
  try {
    const responseData = await axios.post('http://localhost:8000', postData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return responseData;
    console.log(responseData.message);
  } catch (error) {
    console.error('Error: ', error);
    throw error;
  }
};
