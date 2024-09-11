const monitorInfo = [
  {
    leak_try: 2,
    danger_detect: 1,
    danger_ip_list: [
      { ip: '192.168.1.1', level: '매우 위험', date: '2024-08-10' },
      { ip: '192.168.1.2', level: '약간 위험', date: '2024-08-19' },
      { ip: '192.168.1.3', level: '약간 위험', date: '2024-08-23' },
    ],
    access_data_rank: [
      { ranking: 1, type: '항만 운영 계획', access_try: 3 },
      { ranking: 2, type: '재무 보고서', access_try: 2 },
      { ranking: 3, type: '제품 출시 계획', access_try: 1 },
    ],
  },
];

export default monitorInfo;
