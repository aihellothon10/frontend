import { useState } from 'react';

import { Textarea } from '@/app/_components/common';

const MemoInput = () => {
  const [state, setState] = useState('');

  return (
    <Textarea
      className="bg-grayscale-10 py-3"
      maxRows={2}
      placeholder="메모 검색"
      rightIcon={<span className="text-grayscale-50 icon-sm">search</span>}
      value={state}
      onChange={setState}
    />
  );
};

export default MemoInput;
