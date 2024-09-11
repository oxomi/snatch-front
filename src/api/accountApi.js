import axios from 'axios';

export const handleSignup = async (email, password) => {
  const postData = {
    email,
    password,
  };

  try {
    const responseData = await axios.post('http://localhost:8000/signup', postData);
    console.log(responseData.data.message);
    return responseData.data;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

export const handleLogin = async (email, password) => {
  const postData = {
    email,
    password,
  };

  try {
    const responseData = await axios.post('http://localhost:8000/login', postData);
    const { access_token } = responseData.data;

    localStorage.setItem('access_token', access_token); // JWT 저장
    return access_token;
  } catch (error) {
    console.log('Login failed:', error);
    throw error;
  }
};
