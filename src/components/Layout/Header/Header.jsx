import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { SNATCH_HEIGHT } from 'constants/snatchTheme';

const StyledTabs = styled(Tabs)({
  backgroundColor: 'transparent', // 탭 배경색
  '& .MuiTabs-indicator': {
    display: 'none', // 기본 MUI 하단 바 숨기기
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none', // 텍스트 대문자로 변환 방지
  width: '120px', // 강조선 길이
  minWidth: 70, // 최소 너비
  fontWeight: 500, // 텍스트 굵기
  fontSize: '16px', // 폰트 크기
  color: '#FFFFFF', // 기본 탭 텍스트 색상 (비활성)
  '&.Mui-selected': {
    color: '#2D58AC', // 선택된 탭 텍스트 색상
  },
  '&:after': {
    content: '""',
    display: 'block',
    width: '100%', // 각 탭 하단의 강조선
    height: '3px', // 강조선 두께
    backgroundColor: '#FFFFFF', // 기본 강조선 색상 흰색
    marginTop: '8px', // 강조선 위쪽 여백
  },
  '&.Mui-selected:after': {
    backgroundColor: '#2D58AC', // 선택된 탭 강조선 색상
  },
}));

const Header = () => {
  const [selectTab, setSelectTab] = useState(0);

  const TabChange = (event, newValue) => {
    setSelectTab(newValue);
  };

  const renderContent = () => {
    switch (selectTab) {
      case 0:
        return <div>Chat Content</div>;
      case 1:
        return <div>DB Content</div>;
      case 2:
        return <div>Monitor Content</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <AppBar
        position="absolute"
        style={{
          backgroundColor: 'transparent',
          boxShadow: 'none',
          color: '#000000',
          height: SNATCH_HEIGHT.header,
          justifyContent: 'center',
        }}
      >
        <Toolbar
          style={{
            justifyContent: 'flex-start', // 좌측 정렬을 유지
            paddingLeft: '330px', // 사이드바 공간 고려 (200px 왼쪽 여백)
          }}
        >
          {/* 탭을 커스터마이징한 StyledTabs와 StyledTab을 사용 */}
          <StyledTabs
            value={selectTab}
            onChange={TabChange}
            sx={{
              marginRight: 'auto', // 탭과 버튼 사이 간격 자동으로 최대로 늘림
              marginTop: '20px',
              paddingRight: '20px',
            }} // 요소의 내용과 요소의 경계(테두리) 사이의 공간을 정의
          >
            <StyledTab label="Chat" />
            <StyledTab label="DB" />
            <StyledTab label="Monitor" />
          </StyledTabs>

          <div style={{ marginLeft: 'auto', marginTop: '20px' }}>
            <Button
              sx={{
                backgroundColor: '#FFFFFF',
                width: '100px',
                color: '#000',
                boxShadow: 'none',
                border: 'none',
                borderRadius: '50px',
                marginRight: '10px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                },
              }}
            >
              Admin
            </Button>

            <Button
              sx={{
                backgroundColor: '#2D58AC',
                color: '#FFF',
                width: '100px',
                borderRadius: '50px',
                textTransform: 'none',
              }}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* 선택된 탭에 따른 페이지를 렌더링 */}
      {/* <div>{renderContent()}</div> */}
    </div>
  );
};

export default Header;
