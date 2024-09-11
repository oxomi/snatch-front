import React from 'react';
import { Box } from '@mui/material';

import { SNATCH_COLOR } from 'constants/snatchTheme';

const QuestionChat = ({ question }) => {
  return (
    <Box className="bg-dark w-[60%] ml-auto p-3" sx={{ color: 'white' }}>
      {question}
    </Box>
  );
};

export default QuestionChat;
