import { useState } from 'react';

import { Textarea } from '@/app/_components/common';

const MemoInput = () => {
  const [state, setState] = useState('');

  return (
    <Textarea
      className="bg-grayscale-10"
      maxRows={2}
      placeholder="메모 검색"
      value={state}
      search
      onChange={setState}
    />
  );
};

export default MemoInput;
