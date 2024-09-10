import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, IconButton, Slider, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'; // 수정 아이콘
import { SNATCH_COLOR } from 'constants/snatchTheme';

// 슬라이더에 필요한 값 설정
const marks = [
  {
    value: 0,
    label: '0%',
  },
  {
    value: 50,
    label: '50%',
  },
  {
    value: 100,
    label: '100%',
  },
];

// 슬라이더의 값 표시 함수
const valuetext = (value) => `${value}%`;

const DBPage = () => {
  // 초기 상태와 수정 모드 상태 설정
  const [maskingRule, setMaskingRule] = useState(
    `{ "type": "masking_rule", "description": "전화번호를 ***-****-**** 형식으로 마스킹합니다." }`
  );
  const [validationRule, setValidationRule] = useState(
    `{ "validation_rule", "description": "전화번호는 10-11자리의 숫자로 이루어져야 합니다." }`
  );
  const [isEditingMaskingRule, setIsEditingMaskingRule] = useState(false); // 수정 모드
  const [isEditingValidationRule, setIsEditingValidationRule] = useState(false); // 수정 모드

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', backgroundColor: 'transparent', minHeight: '100vh'}}>
      
      {/* Section 1 */}
      <Card 
        sx={{ 
          borderRadius: '30px',
          boxShadow: 'none', // 그림자 제거
          border: 'none', // 테두리 제거
        }}>
        <CardContent sx={{ padding: '24px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6" gutterBottom style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
              1. <span style={{ color: '#2D58AC' }}>연락처</span>에 대한 마스킹 수준
            </Typography>
            <Slider
              aria-label="Always visible"
              defaultValue={0}
              getAriaValueText={valuetext}
              step={50}
              marks={marks}
              valueLabelDisplay="off"
              sx={{ 
                width: '40%',
              }}  
            />
          </Box>
        </CardContent>
      </Card>

      {/* Section 2 */}
      <Card 
        sx={{ 
          borderRadius: '30px',
          boxShadow: 'none', // 그림자 제거
          border: 'none', // 테두리 제거
        }}>
        <CardContent sx={{ padding: '24px' }}>
          <Typography variant="h6" gutterBottom style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
            2. 마스킹 가이드
          </Typography>

          {/* 첫 번째 박스 (Masking rule) */}
          <div style={{ position: 'relative' }}>
            {isEditingMaskingRule ? (
              <TextField
                multiline
                fullWidth
                minRows={3}
                maxRows={6}
                value={maskingRule}
                onChange={(e) => setMaskingRule(e.target.value)}
                sx={{ 
                  backgroundColor: '#000', 
                  padding: 2, 
                  borderRadius: '4px', 
                  fontFamily: 'Roboto',  
                  fontSize: '16px',      
                  input: { color: '#fff' },      
                  textarea: { color: '#fff' },   
                  '& .MuiInputBase-input': { color: '#fff' },
                }}
              />
            ) : (
              <div style={{ 
                backgroundColor: '#000', 
                color: '#fff', 
                padding: '16px', 
                borderRadius: '30px', 
                fontFamily: 'Roboto', 
                fontSize: '16px',
                minHeight: '70px', // 최소 높이 추가
                display: 'flex', // 높이를 고정하기 위해 추가
                alignItems: 'center', // 텍스트를 세로 중앙 정렬
                }}
                >
                {maskingRule}
              </div>
            )}
            <IconButton
              onClick={() => setIsEditingMaskingRule(!isEditingMaskingRule)}
              style={{ position: 'absolute', top: '8px', right: '8px', color: '#fff' }}
            >
              <EditIcon />
            </IconButton>
          </div>

          {/* 두 번째 박스 (Validation rule) */}
          <div style={{ position: 'relative', marginTop: '16px'}}>
            {isEditingValidationRule ? (
              <TextField
                multiline
                fullWidth
                minRows={3}
                maxRows={6}
                value={validationRule}
                onChange={(e) => setValidationRule(e.target.value)}
                sx={{ 
                  backgroundColor: '#000', 
                  padding: 2, 
                  borderRadius: '4px', 
                  fontFamily: 'Roboto',  
                  fontSize: '16px',      
                  input: { color: '#fff' },      
                  textarea: { color: '#fff' },   
                  '& .MuiInputBase-input': { color: '#fff' },
                }}
              />
            ) : (
                <div style={{ 
                    backgroundColor: '#000', 
                    color: '#fff', 
                    padding: '16px', 
                    borderRadius: '30px', 
                    fontFamily: 'Roboto', 
                    fontSize: '16px',
                    minHeight: '70px', // 최소 높이 추가
                    display: 'flex', // 높이를 고정하기 위해 추가
                    alignItems: 'center', // 텍스트를 세로 중앙 정렬
                    }}
                    >
                    {maskingRule}
                  </div>
            )}
            <IconButton
              onClick={() => setIsEditingValidationRule(!isEditingValidationRule)}
              style={{ position: 'absolute', top: '8px', right: '8px', color: '#fff' }}
            >
              <EditIcon />
            </IconButton>
          </div>
        </CardContent>
      </Card>

      {/* Section 3 */}
      <Card 
        sx={{ 
          borderRadius: '30px',
          boxShadow: 'none', // 그림자 제거
          border: 'none', // 테두리 제거
        }}>
        <CardContent sx={{ padding: '24px' }}>
            <Typography variant="h6" gutterBottom style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
              3. 적용 예시
            </Typography>

            {/* 박스를 오른쪽 정렬하기 위한 부모 박스 */}
            <Box
                sx={{
                    display: 'flex', // flex 레이아웃 적용
                    justifyContent: 'flex-end', // 내부 요소를 오른쪽으로 정렬
                    alignItems: 'center', // 세로 방향으로 중앙 정렬
                    marginTop: '3%',
                    marginBottom: '24px', // 아래쪽에 여백 추가
                    marginRight: '2%',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#E5E7EB', // 연회색 배경
                        textAlign: 'center', 
                        fontSize: '16px',
                        color: SNATCH_COLOR.black, 
                        padding: '16px 24px', // 상하좌우 패딩 추가
                    }}
                >
                    ***-****-****는 나의 휴대전화번호이다.
                </Box>
            </Box>

            <Typography 
                style={{ 
                    color: SNATCH_COLOR.black, 
                    textAlign: 'left', 
                    marginTop: '7%',
                    marginLeft: '2%',
                    marginBottom: '3%',
                    marginRight: '2%',
                    paddingLeft: '2%',
                    paddingTop: '30px', 
                    paddingBottom: '30px', 
                    borderTop: '2px solid #7D7F8B', // 상단 선
                    borderBottom: '2px solid #7D7F8B', // 하단 선
                }}
            >
                전화번호는 개인정보입니다. 다른 질문을 해주시겠어요?
            </Typography>
        </CardContent>
      </Card>

    </div>
  );
};

export default DBPage;
