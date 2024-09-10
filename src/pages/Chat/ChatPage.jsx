import React from 'react';
import { styled, Box, Typography, TextField, InputAdornment, IconButton } from '@mui/material';

import { SNATCH_COLOR } from 'constants/snatchTheme';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';

export const StyledBox = styled(Box)(() => ({
  border: 'none',
  backgroundColor: 'white',
  borderRadius: '30px',
}));

const ChatPage = () => {
  return (
    <div className="flex flex-col h-full gap-5">
      <StyledBox className="h-full"></StyledBox>
      <TextField
        variant="outlined"
        placeholder="자유롭게 입력하세요."
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
            borderRadius: '30px',
            height: '50px',
            paddingX: 1,
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

export default ChatPage;
