export const ROUND = [
  { id: 1, round: '●' },
  { id: 2, round: '●' },
  { id: 3, round: '●' },
  { id: 4, round: '●' },
  { id: 5, round: '●' },
  { id: 6, round: '●' },
];

export const AGREEMENT = [
  { id: 1, choice: '(필수)', comment: '만 14세 이상', isCheck: false },
  { id: 2, choice: '(필수)', comment: '밀리의 서재 이용약관 동의', isCheck: false },
  { id: 3, choice: '(필수)', comment: '개인정보 처리방침 동의', isCheck: false },
  { id: 4, choice: '(선택)', comment: '도서추천, 신간소식 등 알림 수신', isCheck: false },
];

export const PAYAGREEMENT = [
  { id: 1, choice: '(필수)', comment: '자동결제 상품임을 인지하였으며 취소/환불, 소득공제 정책 등 상품 구매 정책에 동의합니다.', isCheck: false },
  { id: 2, choice: '(필수)', comment: '개인정보 수집 및 이용에 동의합니다.', isCheck: false },
];

export const ADJECTIVE = [
  '고독한',
  '외로운',
  '쓸쓸한',
  '잘생긴',
  '이쁜',
  '패셔니스타',
  '심심한',
  '살짝 이상한',
  '많이 이상한',
  '정상이 아닌',
  '재밌는',
  '배고픈',
  '졸린',
  '짜증난',
  '놀고싶은',
  '미치게 하는',
  '이상한',
  '치명적인',
  '맨날 아픈',
  '심기가 불편한',
  '배고플때 먹을거 주면 좋아하는',
];

export const NAME = [
  '수희',
  '은정',
  '기용',
  '민구',
  '병준',
  '태현',
  '현지',
  '승제',
  '승진',
  '승찬',
  '재훈',
  '혜수',
  '문주',
  '민영',
  '성보',
  '승윤',
  '영주',
  '규석',
  '재원',
  '두연',
  '주민',
  '동하',
  '민서',
  '영환',
  '영구',
  '정식',
  '세원',
  '지혜',
  '영준',
  '현재',
  '원두',
  '상혁',
  '현석',
];

export const NOTICE = [
  { id: 1, round: '∙', comment: '구독결제는 구독기간 마지막 날 결제되며, 결제 후 구독기간은 자동 갱신됩니다.' },
  { id: 2, round: '∙', comment: '구독결제 갱신을 중단하고자 할 경우, 구독기간 종료 하루 전 구독을 해지하셔야 합니다.' },
  {
    id: 3,
    round: '∙',
    comment:
      '정기구독 신청 취소는 도서 배송완료 후 7일 내, 미개봉 상태에 한하여 반품 후 가능하고, 이때 왕복 배송비 5,000원을 제외한 금액이 환불됩니다.',
  },
];

export const PAYDATA = {
  pg: 'kakaopay', // PG사
  pay_method: 'card', // 결제수단
  merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
  amount: 13950, // 결제금액
  name: '더는 걸어갈 땅이 없었다', // 주문명
  buyer_name: '김동하', // 구매자 이름
  buyer_tel: '01097751541', // 구매자 전화번호
  buyer_email: 'shin6403@gmail.com', // 구매자 이메일
  buyer_addr: '성균관로3길 20-35', // 구매자 주소
  buyer_postcode: '03073', // 구매자 우편번호
};

export const AUDIOMAINIMG = 'https://d3udu241ivsax2.cloudfront.net/common/images/company/brand/millieBookCard1Bg_20200210.png';
export const AUDIOSUBIMG = 'https://d3udu241ivsax2.cloudfront.net/common/images/company/brand/millieBookCard1Img.png';
export const AUDIOTHIRDIMG = 'https://www.millie.co.kr/company/assets/millieBookCard1Btn.svg';

export const CHARTMAINIMG = 'https://d3udu241ivsax2.cloudfront.net/common/images/company/brand/millieBookCard2Bg.png';
export const CHARTSUBIMG = 'https://d3udu241ivsax2.cloudfront.net/common/images/company/brand/millieBookCard2Img.png';
export const CHARTTHIRDIMG =
  'https://trello-attachments.s3.amazonaws.com/5fc465951dfcce1dc3a95814/5fc48e535151e366256bb3ef/94a95323723359acd007408502170c9f/%EC%8B%A0%EC%84%B8%EC%9B%90_%ED%9D%91%EB%B0%B1%EB%B0%8F%EB%88%84%EB%81%BC%EC%9A%94%EC%B2%AD.png';
