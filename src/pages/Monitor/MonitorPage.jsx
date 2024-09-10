import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { StyledBox } from 'pages/Chat/ChatPage';

import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

const MonitorPage = () => {
  return (
    <div className="flex flex-col h-full gap-5">
      <StyledBox className="h-[60%]">
        <Stack direction="row" className="flex items-center" gap={1}>
          <ReportGmailerrorredIcon sx={{ fontSize: '30px', color: '#F17785' }} />
          <Typography sx={{ fontWeight: '600' }}>실시간 정보 유출 알리미</Typography>
        </Stack>
      </StyledBox>
      <StyledBox className="h-[40%]"></StyledBox>
    </div>
  );
};

export default MonitorPage;
