import React from 'react';
import { Box } from '@mui/material';

import { SNATCH_COLOR } from 'constants/snatchTheme';

const AnswerChat = ({ answer }) => {
  return (
    <Box
      className="w-full p-3"
      sx={{
        borderTop: `1px solid ${SNATCH_COLOR.deepLight}`,
        borderBottom: `1px solid ${SNATCH_COLOR.deepLight}`,
        color: SNATCH_COLOR.deepDark,
      }}
    >
      {answer}
    </Box>
  );
};

export default AnswerChat;
