import React, { useState } from 'react';
import { InitBox, InitTextField, InitBtn } from './Login';
import { SNATCH_COLOR } from 'constants/snatchTheme';
import Logo from 'assets/logo_dark.svg';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';

const Signup = () => {
  const [showPw, setShowPw] = useState(false);

  const handlePwOn = () => setShowPw((show) => !show);
  const handlePwOff = (e) => {
    e.preventDefault();
  };

  return (
    <InitBox>
      <img src={Logo} className="w-[130px] my-10" />
      <form className="flex flex-col items-center justify-center w-[60%]" onSubmit={(e) => e.preventDefault()}>
        <InitTextField placeholder="business" type="text" />
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
        <InitBtn className="w-full mt-10" sx={{ marginTop: 3 }} type="submit">
          Sign up
        </InitBtn>
      </form>
    </InitBox>
  );
};

export default Signup;
