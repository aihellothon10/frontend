import CreateMemoUpload from '../CreateMemoDraft/CreateMemoUpload';
import CreateMemoConnection from '../CreateMemoSetting/CreateMemoConnection';
import CreateMemoRedirectFamily from '../CreateMemoSetting/CreateMemoRedirectFamily';
import CreateMemoExtraBottomButton from './CreateMemoExtraBottomButton';

import CreateMemoKids from './CreateMemoKids';

const CreateMemoExtra = ({ onChange }: CreateMemoExtraProps) => (
  <div className="flex flex-col gap-24 px-4 py-3">
    <CreateMemoUpload />
    <CreateMemoKids />
    <CreateMemoConnection />
    <CreateMemoRedirectFamily />
    <CreateMemoExtraBottomButton onChange={onChange} />
  </div>
);

interface CreateMemoExtraProps {
  onChange: (isLoading: boolean) => void;
}

export default CreateMemoExtra;
