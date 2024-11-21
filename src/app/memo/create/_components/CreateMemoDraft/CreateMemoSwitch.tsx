import { useState } from 'react';

import { Switch } from '@/app/_components/common';

import MemoSection from './MemoSection';

const CreateMemoSwitch = () => {
  const [currentId, setCurrentId] = useState(items[0].id);
  const handleSwitchBoxClick = ({ id }: { label: string; id: string }) => setCurrentId(id);

  return (
    <MemoSection title="메모 종류" help>
      <Switch currentId={currentId} items={items} onClick={handleSwitchBoxClick} />
    </MemoSection>
  );
};

const items = [
  { label: '일반 메모', id: 'normal' },
  { label: '질문 메모', id: 'question' },
];

export default CreateMemoSwitch;
