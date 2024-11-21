'use client';

import { cn } from 'dotori-utils';
import { usePathname, useRouter } from 'next/navigation';

import { PATH } from '@/app/constants';

const BottomNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (path: string) => () => {
    router.push(path);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 mx-auto h-mobile-bottom-navigation w-mobile bg-grayscale-10">
      <div className="flex justify-center">
        {navigations.map(({ label, iconText, path }) => (
          <button
            key={label}
            className={labelContainerStyle({ current: `/${pathname.split('/')[1]}` === path })}
            onClick={handleLinkClick(path)}>
            <span className="icon-fill icon-md">{iconText}</span>
            <span className="label-sm-12-medium">{label}</span>
          </button>
        ))}
      </div>
    </footer>
  );
};

const navigations = [
  { label: '홈', iconText: 'home', path: PATH.HOME },
  { label: '메모', iconText: 'description', path: PATH.MEMO },
  { label: '가족', iconText: 'diversity_4', path: PATH.FAMILY },
  { label: '나', iconText: 'account_circle', path: PATH.ME },
];

const labelContainerStyle = cn('flex flex-col items-center py-3 px-7 hover:bg-grayscale-20', {
  variants: {
    current: {
      true: 'text-blue-50',
      false: 'text-grayscale-50',
    },
  },
  defaultVariants: {
    current: false,
  },
});

export default BottomNavigation;
