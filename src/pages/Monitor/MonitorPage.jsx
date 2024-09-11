import React from 'react';
import { Box, Typography, Stack, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { StyledBox } from 'pages/Chat/ChatPage';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import InsightsIcon from '@mui/icons-material/Insights';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // 점 아이콘
import { SNATCH_COLOR } from 'constants/snatchTheme';

const MonitorPage = () => {

    // 박스 아이템 렌더링하는 컴포넌트
    const InfoItem = ({ text }) => (
      <Box display="flex" alignItems="center">
        <ListItem disableGutters>
          <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px' }}>
            <FiberManualRecordIcon sx={{ fontSize: '8px', color: SNATCH_COLOR.deepDark }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: 'bold', color: SNATCH_COLOR.deepDark }}>
                {text}
              </Typography>
            }
          />
        </ListItem>
      </Box>
    );

    return (
        <div className="flex flex-col h-full gap-5">
            <StyledBox className="h-[60%]"
            sx={{ padding: '24px', paddingBottom: '0px' }}
            >
              <Stack direction="row" className="flex items-center" gap={1} mb={2}>
                <ReportGmailerrorredIcon sx={{ fontSize: '30px', color: 'red' }} />
                <Typography variant="h6" gutterBottom style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginTop: '7px', marginLeft: '3px' }}>
                    실시간 정보 유출 알리미
                </Typography>
              </Stack>

              <Box ml={1}>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                  <InfoItem text="정보 유출 시도 : 2건" />
                </Box>
                <InfoItem text="위험 IP 주소 리스트" />
              </Box>
            </StyledBox>

            <StyledBox className="h-[40%]"
            sx={{ padding: '24px', paddingBottom: '0px' }}
            >
              <Stack direction="row" className="flex items-center" gap={1}>
                <InsightsIcon sx={{ fontSize: '30px', color: '#4ECB71' }} />
                <Typography variant="h6" gutterBottom style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginTop: '7px', marginLeft: '3px' }}>
                    접근 빈도 높은 데이터
                </Typography>
              </Stack>
            </StyledBox>


        </div>
    );
};

export default MonitorPage;