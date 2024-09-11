import axios from 'axios';

export const handleSignup = async (business, email, password) => {
  const postData = {
    business: business,
    email: email,
    password: password,
  };

  try {
    const responseData = await axios.post('http://localhost:8000/auth/signup', postData);
    console.log(responseData.data.message);
    return responseData.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const handleLogin = async (email, password) => {
  const postData = {
    email: email,
    password: password,
  };

  try {
    const responseData = await axios.post('http://localhost:8000/auth/login', postData);
    const { access_token } = responseData.data;

    localStorage.setItem('access_token', access_token);
    return access_token;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
