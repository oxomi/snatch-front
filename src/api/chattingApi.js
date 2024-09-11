import axios from 'axios';

export const submitQuestion = async (question) => {
  const postData = { text: question }; // FastAPI로 보내는 데이터 형식

  try {
    const responseData = await axios.post('http://localhost:8000/gpt', postData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return responseData; // GPT API에서 받은 응답 반환
  } catch (error) {
    console.error('Error submitting question:', error);
    throw error;
  }
};
