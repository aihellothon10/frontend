'use client';

import { cn } from 'dotori-utils';

import type { Step } from './BabyContentTabs';

const BabyContentTab = ({ label, id, current, onClick }: BabyContentTabProps & Step) => (
  <button key={id} className={tabsStyle({ current })} onClick={() => onClick(id)}>
    {label}
  </button>
);

const tabsStyle = cn('body-sm-15-regular inline-block py-3 border-b-3', {
  variants: {
    current: {
      true: 'text-blue-50 border-b-blue-50',
      false: 'text-grayscale-60 border-b-transparent',
    },
  },
});

interface BabyContentTabProps {
  current: boolean;
  onClick: (id: Step['id']) => void;
}

export default BabyContentTab;
