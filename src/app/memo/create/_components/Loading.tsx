'use client';

import Lottie from 'react-lottie-player';

import createMemoLottie from '@/assets/lotties/create_memo_lottie.json';

const loading = () => (
  <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <Lottie animationData={createMemoLottie} className="m-auto" style={{ width: 200, height: 200 }} loop play />
    <div className="flex flex-col text-center text-grayscale-60 body-sm-15-regular">
      <p>메모를 분석하고 있습니다.</p>
      <p>조금만 기다려주세요!</p>
    </div>
  </div>
);

export default loading;
