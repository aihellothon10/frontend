'use server';

import { redirect } from 'next/navigation';

import { PATH } from '@/app/constants';

const page = () => {
  redirect(PATH.FAMILY);
};

export default page;
