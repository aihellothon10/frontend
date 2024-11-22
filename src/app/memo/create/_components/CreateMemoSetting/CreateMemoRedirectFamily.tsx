import Link from 'next/link';

import { PATH } from '@/app/constants';

const CreateMemoRedirectFamily = () => (
  <div className="text-center text-grayscale-60 label-md-14-regular">
    관련 있는 사람을 찾을 수 없나요?{' '}
    <Link className="text-blue-50 underline" href={PATH.FAMILY}>
      초대하기
    </Link>
  </div>
);

export default CreateMemoRedirectFamily;
