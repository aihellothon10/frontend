'use client';

import { BottomNavigation } from '@/app/_components/common';

import { FamilyGuardian, FamilyHeader, FamilyTitle } from './_components';
import FamilyBabies from './_components/FamilyBabies/FamilyBabies';

const page = () => (
  <>
    <FamilyHeader />
    <div className="relative flex h-full flex-1 flex-col gap-8 bg-grayscale-20 px-4 py-3">
      <FamilyTitle />
      <FamilyBabies />
      <FamilyGuardian />
    </div>
    <BottomNavigation />
  </>
);

export default page;
