import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled, Box, TextField, InputAdornment, IconButton } from '@mui/material';
import QuestionChat from '../QuestionChat';
import AnswerChat from '../AnswerChat';
import chatLogs from 'api/chatLog';

import { submitQuestion } from 'api/chattingApi'; // GPT API 연결

import { SNATCH_COLOR } from 'constants/snatchTheme';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

export const StyledBox = styled(Box)(() => ({
  border: 'none',
  backgroundColor: 'white',
  borderRadius: '30px',
  overflowY: 'auto',
}));

const ExPage = () => {
  const { chatId } = useParams();
  const log = chatLogs.find((log) => log.chatId === parseInt(chatId));

  const [question, setQuestion] = useState('');

  return (
    <div className="flex flex-col h-full gap-5">
      <StyledBox
        className="flex flex-col w-full gap-10 p-10 h-[100%]"
        sx={{
          '&::-webkit-scrollbar': {
            width: '7px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: SNATCH_COLOR.deepLight,
            borderRadius: '30px',
          },
        }}
      >
        {log ? (
          <>
            <h2>{log.title}</h2>
            {log.contents.map((content, index) =>
              index % 2 === 0 ? (
                <QuestionChat key={index} question={content} />
              ) : (
                <AnswerChat key={index} answer={content} />
              ),
            )}
          </>
        ) : (
          <p>No log found</p>
        )}
      </StyledBox>
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
              <IconButton edge="end">
                <ArrowCircleUpOutlinedIcon sx={{ fontSize: '30px', color: SNATCH_COLOR.pointBlue }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default ExPage;
