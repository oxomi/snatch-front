import React, { useState } from 'react';
import { styled, Box, TextField, Button, Stack, InputAdornment, IconButton } from '@mui/material';
import { StyledBox } from 'pages/Chat/ChatPage';

import { SNATCH_COLOR } from 'constants/snatchTheme';
import Logo from 'assets/logo_dark.svg';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export const InitBox = styled(Box)(() => ({
  borderRadius: '20px',
  width: '40vw',
  height: '60vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.25)',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  alignItems: 'center',
}));

export const InitTextField = styled(TextField)(() => ({
  borderBottom: `2px solid ${SNATCH_COLOR.light}`,
  width: '100%',
  '& .MuiOutlinedInput-root': {
    padding: 0,
    color: SNATCH_COLOR.deepDark,
    '& fieldset': {
      border: 'none',
    },
    '& input::placeholder': {
      color: SNATCH_COLOR.light,
      opacity: 1,
    },
  },
}));

export const InitBtn = styled(Button)(() => ({
  textTransform: 'none',
  borderRadius: '30px',
}));
InitBtn.defaultProps = {
  variant: 'contained',
};

const Login = () => {
  const [showPw, setShowPw] = useState(false);
  const handlePwOn = () => setShowPw((show) => !show);
  const handlePwOff = (e) => {
    e.preventDefault();
  };

  return (
    <InitBox>
      <img src={Logo} className="w-[130px] my-10" />
      <div className="flex flex-col items-center justify-center gap-2 w-[60%]">
        <InitTextField placeholder="email" type="email" />
        <InitTextField
          placeholder="p/w"
          type={showPw ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePwOn} onMouseDown={handlePwOff}>
                  {showPw ? (
                    <VisibilityOff sx={{ fontSize: '20px', color: SNATCH_COLOR.light }} />
                  ) : (
                    <Visibility sx={{ fontSize: '20px', color: SNATCH_COLOR.light }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Stack direction="row" className="justify-between gap-2 w-[60%] mt-10">
        <InitBtn className="w-[60%]">Log in</InitBtn>
        <InitBtn className="w-[40%]" sx={{ backgroundColor: SNATCH_COLOR.light }}>
          Sign up
        </InitBtn>
      </Stack>
    </InitBox>
  );
};

export default Login;
