import React from 'react';
import { styled, Box, Typography, Stack, List, ListItem, ListItemText, Divider } from '@mui/material';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import InsightsIcon from '@mui/icons-material/Insights';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'; // 점 아이콘
import { SNATCH_COLOR } from 'constants/snatchTheme';
import monitorInfo from 'api/monitorInfo';

const WhiteBox = styled(Box)(() => ({
  borderRadius: '30px',
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
  padding: '30px', // Adjusted padding for a more compact layout
  display: 'flex',
  flexDirection: 'column',
  gap: '20px', // Adjusted gap between elements
  alignItems: 'center',
}));

const MainContent = styled(Typography)(() => ({
  fontSize: '20px', // Adjusted font size for better fit
  fontWeight: '600',
  height: '50px', // Adjusted height
  display: 'flex',
  alignItems: 'center',
  padding: '10px', // Adjusted padding for better fit
  marginBottom: '20px', // Adjusted margin for better fit
  borderBottom: `2px solid ${SNATCH_COLOR.light}`,
}));

const AccessDataList = ({ data }) => (
  <List className="w-[80%]">
    {data.map((item) => (
      <React.Fragment key={item.ranking}>
        <ListItem>
          <Typography variant="h6" sx={{ width: '20%', fontWeight: 'bold' }}>
            {item.ranking}.
          </Typography>
          <ListItemText primary={<Typography variant="h6">{item.type}</Typography>} />
          <ListItemText secondary={`접근 시도: ${item.access_try}건`} sx={{ ml: 2 }} />
        </ListItem>
        <Divider />
      </React.Fragment>
    ))}
  </List>
);

const DangerIpList = ({ data }) => (
  <List>
    {data.map((item, index) => (
      <React.Fragment key={index}>
        <ListItem>
          <ListItemText
            primary={<Typography variant="h6">{`IP: ${item.ip}`}</Typography>}
            secondary={<Typography variant="body2">{`위험도: ${item.level}, 날짜: ${item.date}`}</Typography>}
            sx={{ ml: 2 }}
          />
        </ListItem>
        <Divider />
      </React.Fragment>
    ))}
  </List>
);

const MonitorPage = () => {
  return (
    <div className="flex items-center h-full gap-5">
      <WhiteBox>
        <Stack direction="row" className="flex items-center mb-5" gap={2} sx={{ alignSelf: 'flex-start' }}>
          <ReportGmailerrorredIcon sx={{ fontSize: '30px', color: '#F24E1E' }} />
          <Typography variant="h6" fontWeight={600}>
            실시간 정보 유출 알리미
          </Typography>
        </Stack>
        <Box className="w-[70%] h-full">
          <MainContent>{`정보 유출 시도 : ${monitorInfo[0].leak_try}건`}</MainContent>
          <MainContent>{`위험성 탐지 : ${monitorInfo[0].danger_detect}건`}</MainContent>
          <Stack className="w-full mt-10">
            <MainContent>위험 IP 주소 리스트</MainContent>
            <DangerIpList data={monitorInfo[0].danger_ip_list} />
          </Stack>
        </Box>
      </WhiteBox>
      <WhiteBox>
        <Stack direction="row" className="flex items-center mb-5" gap={2} sx={{ alignSelf: 'flex-start' }}>
          <InsightsIcon sx={{ fontSize: '30px', color: '#4ECB71' }} />
          <Typography variant="h6" fontWeight={600}>
            접근 빈도 높은 데이터
          </Typography>
        </Stack>
        <AccessDataList data={monitorInfo[0].access_data_rank} />
      </WhiteBox>
    </div>
  );
};

export default MonitorPage;
