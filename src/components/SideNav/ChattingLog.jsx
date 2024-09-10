import React from 'react';
import { Typography, Button, IconButton, Box } from '@mui/material';
import chatLogData from 'api/chatLog';

import { SNATCH_COLOR } from 'constants/snatchTheme';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';

const ChattingLog = () => {
  return (
    <Box className="flex flex-col flex-1 w-[70%] h-full">
      <div className="flex justify-end h-[10%] items-center">
        <IconButton className="w-[30px] h-[30px] ml-auto">
          <EditNoteOutlinedIcon />
        </IconButton>
      </div>
      <Typography
        sx={{
          fontSize: '18px',
          fontWeight: '600',
          color: SNATCH_COLOR.deepDark,
          marginBottom: '10px',
          height: '10%',
          alignContent: 'center',
        }}
      >
        Chatting Log
      </Typography>
      <Box
        className="flex-col w-full h-[80%] overflow-y-auto"
        sx={{
          '&::-webkit-scrollbar': {
            width: '5px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: SNATCH_COLOR.dark,
            borderRadius: '30px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: SNATCH_COLOR.deepDark,
          },
        }}
      >
        {chatLogData.map((log) => (
          <Button
            key={log.chatId}
            className="w-full overflow-hidden text-left normal-case justify-flex-start whitespace-nowrap text-ellipsis"
            sx={{
              fontSize: '15px',
              display: 'block',
              marginTop: 1,
              textTransform: 'none',
              fontWeight: '400',
              borderRadius: '0px',
              borderBottom: `1px solid ${SNATCH_COLOR.light}`,
              color: SNATCH_COLOR.deepDark,
            }}
            onClick={() => alert(`Clicked on: ${log.summary}`)}
          >
            {log.summary}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default ChattingLog;
