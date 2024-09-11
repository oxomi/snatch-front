import React, { useState } from 'react';
import { styled, Box, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import QuestionChat from './QuestionChat';
import AnswerChat from './AnswerChat';

import { submitQuestion } from 'api/chattingApi';

import { SNATCH_COLOR } from 'constants/snatchTheme';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

export const StyledBox = styled(Box)(() => ({
  border: 'none',
  backgroundColor: 'white',
  borderRadius: '30px',
  overflowY: 'auto',
}));

const ChatPage = () => {
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async () => {
    if (!question.trim()) return;

    const newChat = { type: 'question', text: 'question' };
    setChatHistory((prevHistory) => [...prevHistory, newChat]);

    try {
      const answer = await submitQuestion(question);

      const answerChat = { type: 'answer', text: answer };
      setChatHistory((prevHistory) => [...prevHistory, answerChat]);
    } catch (error) {
      console.error('Error submitting question:', error);
    }

    setQuestion('');
  };

  return (
    <div className="flex flex-col h-full gap-5">
      <StyledBox
        className="flex flex-col w-full gap-10 p-10 h-[550px]"
        sx={{
          '&::-webkit-scrollbar': {
            width: '7px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: SNATCH_COLOR.deepLight,
            borderRadius: '30px',
          },
        }}
      ></StyledBox>
      <TextField
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        variant="outlined"
        multiline
        placeholder="자유롭게 입력하세요."
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
            borderRadius: '30px',
            height: '50px',
            paddingX: 3,
            '& fieldset': {
              border: 'none',
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" className="mr-3">
              <IconButton edge="end" onClick={handleSubmit}>
                <ArrowCircleUpOutlinedIcon sx={{ fontSize: '30px', color: SNATCH_COLOR.pointBlue }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default ChatPage;
