import { MemoWarningCard } from '@/app/memo/_components';

import CreateMemoBottomButtons from './CreateMemoBottomButtons';
import CreateMemoConnection from './CreateMemoConnection';
import CreateMemoNote from './CreateMemoNote';
import CreateMemoRedirectFamily from './CreateMemoRedirectFamily';
import CreateMemoTitle from './CreateMemoTitle';

const CreateMemoSetting = () => (
  <>
    <div className="flex flex-col gap-24 px-4 py-3">
      <MemoWarningCard>
        분석 결과, 해당 메모에는 <span className="text-red-50">잘못된 정보</span>와{' '}
        <span className="text-red-50">유해한 정보</span>가 포함되어 있을 수 있습니다.
      </MemoWarningCard>
      <CreateMemoTitle />
      <CreateMemoNote />
      <CreateMemoConnection />
      <CreateMemoRedirectFamily />
    </div>
    <CreateMemoBottomButtons />
  </>
);
export default CreateMemoSetting;
