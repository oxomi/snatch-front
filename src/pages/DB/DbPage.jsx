import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, TextField, IconButton, Slider, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'; // 수정 아이콘

// 슬라이더에 필요한 값 설정
const marks = [
    {
    value: 0,
    label: '0%',
    },

    {
    value: 20,
    label: '20%',
    },
 
    {
    value: 40,
    label: '40%',
    },

    {
    value: 60,
    label: '60%',
    },

    {
    value: 80,
    label: '80%',
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
        `ex. <주요 물류 기업과의 장기 계약 정보>
        고객사 A:

        계약 시작일: 2021년 3월 1일
        계약 종료일: 2026년 3월 1일
        계약 규모: $250,000,000
        서비스 내용: 해상 컨테이너 운송 및 항만 창고 관리 서비스.
        계약 연장 가능성: 계약 만료 6개월 전, 연장 옵션 검토.
        특별 조건: 매년 물류 비용의 3% 증가율 적용.`
    );

    const [isEditingMaskingRule, setIsEditingMaskingRule] = useState(false); // 수정 모드

    // 슬라이더 값을 저장하는 상태
    const [similarityThreshold, setSimilarityThreshold] = useState(80);

    // 슬라이더 값이 변경될 때 호출되는 함수
    const handleSliderChange = (event, newValue) => {
        setSimilarityThreshold(newValue); // 상태 업데이트
    };

    // useEffect로 body에 overflow hidden을 적용
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // 스크롤 제거

        // 컴포넌트가 언마운트 될 때 스크롤 복구
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', backgroundColor: 'transparent', height: '100vh' }}>
        
        {/* Section 1 */}
        <Card 
            sx={{ 
            borderRadius: '30px',
            boxShadow: 'none', // 그림자 제거
            border: 'none', // 테두리 제거
            height: '20vh', // 높이 조정
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // 카드 내부 중앙 정렬
            }}>
            <CardContent sx={{ padding: '24px' }}>
            <Typography variant="h6" gutterBottom style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginLeft: '1%' }}>
                1. <span style={{ color: '#2D58AC' }}>유사도 검증</span> 수준
            </Typography>
            <Typography 
                    variant="body2" 
                    style={{ fontSize: '12px', color: '#666', marginBottom: '16px', marginLeft: '1%' }}>
                    유사도가 {similarityThreshold}% 이상일 경우 질문을 차단합니다.
            </Typography>
            <Box 
                sx={{ 
                display: 'flex', 
                justifyContent: 'center', // 수평 가운데 정렬
                marginTop: '16px', // 위쪽 여백 추가
                }}
            >
                <Slider
                aria-label="Always visible"
                defaultValue={80}
                getAriaValueText={valuetext}
                step={10}
                marks={marks}
                value={similarityThreshold} // 슬라이더의 값은 similarityThreshold 상태
                onChange={handleSliderChange} // 슬라이더 값이 변경되면 호출
                valueLabelDisplay="on" // 현재 슬라이더 값을 보여주기 위해 "on"으로 설정
                sx={{ 
                    width: '80%', // 슬라이더의 너비를 설정 (80%로 설정하여 여백 확보)
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
            height: '65vh', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', // 카드 내부 중앙 정렬
            }}>
            <CardContent sx={{ padding: '24px' }}>
                <Typography variant="h6" gutterBottom style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginLeft: '1%' }}>
                    2. <span style={{ color: '#2D58AC' }}> 보호 대상 데이터</span> 등록
                </Typography>
                <Typography 
                    variant="body2" 
                    style={{ fontSize: '12px', color: '#666', marginBottom: '16px', marginLeft: '1%' }}>
                    기밀 정보(예: 계약서, 거래 동향 등)를 입력하세요. 입력된 정보는 유사도 검증을 통해 차단될 수 있습니다.
                </Typography>

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
                    marginTop: '20px',
                    padding: '16px', 
                    borderRadius: '30px', 
                    fontFamily: 'Roboto', 
                    fontSize: '16px',
                    minHeight: '50vh', // 최소 높이 추가
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
            </CardContent>
        </Card>

        </div>
    );
};

export default DBPage;
