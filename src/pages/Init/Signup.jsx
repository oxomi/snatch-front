import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // React Router 사용
import { InitBox, InitTextField, InitBtn } from './Login';
import { SNATCH_COLOR } from 'constants/snatchTheme';
import Logo from 'assets/logo_dark.svg';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import { handleSignup } from 'api/accountApi';  // handleSignup 함수 불러오기

const Signup = () => {
  const [business, setBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();  // 페이지 이동을 위한 useNavigate 사용

  const handlePwOn = () => setShowPw((show) => !show);
  const handlePwOff = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSignup(business, email, password);  // 회원가입 요청
      alert('Signup successful');
      navigate('/login');  // 회원가입 성공 시 로그인 페이지로 리다이렉션
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <InitBox>
      <img src={Logo} className="w-[130px] my-10" />
      <form className="flex flex-col items-center justify-center w-[60%]" onSubmit={handleSubmit}>
        <InitTextField
          placeholder="business"
          type="text"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}  // business 입력 핸들러
        />
        <InitTextField
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // email 입력 핸들러
        />
        <InitTextField
          placeholder="p/w"
          type={showPw ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // 비밀번호 입력 핸들러
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
