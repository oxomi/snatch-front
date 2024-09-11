import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Card, CardContent, Typography, TextField, IconButton, Slider, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'; // 수정 아이콘
import CheckIcon from '@mui/icons-material/Check'; // 완료 아이콘

import infoCategory from 'api/infoCategory';

const marks = [
  { value: 0, label: '0%' },
  { value: 20, label: '20%' },
  { value: 40, label: '40%' },
  { value: 60, label: '60%' },
  { value: 80, label: '80%' },
  { value: 100, label: '100%' },
];

const valuetext = (value) => `${value}%`;

const DBPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tag = queryParams.get('tag');

  useEffect(() => {
    // category와 tag에 맞는 protect_data를 찾는 함수
    const getProtectData = (category, tag) => {
      for (const item of infoCategory) {
        if (item.category === category) {
          const tagData = item.tags.find((tagItem) => tagItem.tag === tag);
          if (tagData) {
            return tagData.protect_data;
          }
        }
      }
      return '데이터를 입력해주세요.';
    };

    // URL 파라미터에 따라 protect_data 설정
    const data = getProtectData(category, tag);
    setMaskingRule(data);
    setTempMaskingRule(data);
  }, [category, tag]);

  const [maskingRule, setMaskingRule] = useState(`여기에 입력해주세요.`);
  const [isEditingMaskingRule, setIsEditingMaskingRule] = useState(false); // 수정 모드
  const [tempMaskingRule, setTempMaskingRule] = useState(maskingRule); // 수정 중 임시 상태 저장
  const [similarityThreshold, setSimilarityThreshold] = useState(80);

  const handleSliderChange = (event, newValue) => {
    setSimilarityThreshold(newValue);
  };

  const handleCompleteEdit = () => {
    setMaskingRule(tempMaskingRule); // 입력된 내용 저장
    setIsEditingMaskingRule(false); // 수정 모드 종료
  };

  // 오류 방지를 위한 useEffect 추가
  useEffect(() => {
    const handleResizeError = () => {
      window.removeEventListener('error', handleResizeError);
    };
    window.addEventListener('error', handleResizeError);

    return () => {
      window.removeEventListener('error', handleResizeError);
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '100%',
        backgroundColor: 'transparent',
        height: '100vh',
      }}
    >
      <Card
        sx={{
          borderRadius: '30px',
          boxShadow: 'none',
          border: 'none',
          height: '20vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingBottom: '0px',
        }}
      >
        <CardContent sx={{ padding: '24px', paddingBottom: '0px' }}>
          <Typography
            variant="h6"
            gutterBottom
            style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginLeft: '1%' }}
          >
            1. <span style={{ color: '#2D58AC' }}>유사도 검증</span> 수준
          </Typography>
          <Typography
            variant="body2"
            style={{ fontSize: '12px', color: '#666', marginBottom: '16px', marginLeft: '1%' }}
          >
            유사도가 {similarityThreshold}% 이상일 경우 질문을 차단합니다.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '16px',
            }}
          >
            <Slider
              aria-label="Always visible"
              defaultValue={80}
              getAriaValueText={valuetext}
              step={10}
              marks={marks}
              value={similarityThreshold}
              onChange={handleSliderChange}
              valueLabelDisplay="on"
              sx={{
                width: '80%',
              }}
            />
          </Box>
        </CardContent>
      </Card>

      <Card
        sx={{
          borderRadius: '30px',
          boxShadow: 'none',
          border: 'none',
          height: '65vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <CardContent sx={{ padding: '24px', paddingBottom: '0px' }}>
          <Typography
            variant="h6"
            gutterBottom
            style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginLeft: '1%' }}
          >
            2. <span style={{ color: '#2D58AC' }}> 보호 대상 데이터</span> 등록
          </Typography>
          <Typography
            variant="body2"
            style={{ fontSize: '12px', color: '#666', marginBottom: '16px', marginLeft: '1%' }}
          >
            기밀 정보(예: 계약서, 거래 동향 등)를 입력하세요. 입력된 정보는 유사도 검증을 통해 차단될 수 있습니다.
          </Typography>

          <div style={{ position: 'relative', height: '45vh' }}>
            {isEditingMaskingRule ? (
              <>
                <TextField
                  multiline
                  fullWidth
                  minRows={5}
                  value={tempMaskingRule}
                  onChange={(e) => setTempMaskingRule(e.target.value)}
                  sx={{
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '30px',
                    fontFamily: 'Roboto',
                    fontSize: '16px',
                    input: { color: '#fff' },
                    textarea: { color: '#fff' },
                    '& .MuiInputBase-input': { color: '#fff' },
                    maxHeight: '45vh',
                    overflowY: 'auto',
                  }}
                />
                <IconButton
                  onClick={handleCompleteEdit}
                  style={{ position: 'absolute', top: '8px', right: '8px', color: '#fff' }}
                >
                  <CheckIcon />
                </IconButton>
              </>
            ) : (
              <div
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  marginTop: '20px',
                  padding: '16px',
                  borderRadius: '30px',
                  fontFamily: 'Roboto',
                  fontSize: '16px',
                  maxHeight: '45vh',
                  whiteSpace: 'pre-line',
                  overflowY: 'auto',
                }}
              >
                {maskingRule}
              </div>
            )}
            {!isEditingMaskingRule && (
              <IconButton
                onClick={() => setIsEditingMaskingRule(!isEditingMaskingRule)}
                style={{ position: 'absolute', top: '8px', right: '8px', color: '#fff' }}
              >
                <EditIcon />
              </IconButton>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DBPage;
