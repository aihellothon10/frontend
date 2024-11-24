import CreateMemoBottomButton from './CreateMemoBottomButton';
import CreateMemoLink from './CreateMemoLink';
import CreateMemoSwitch from './CreateMemoSwitch';
import CreateMemoTextarea from './CreateMemoTextarea';
import CreateMemoUpload from './CreateMemoUpload';

const CreateMemoDraft = ({ onChange }: CreateMemoDraftProps) => (
  <>
    <div className="flex flex-col gap-24 px-4 py-3">
      {/* <CreateMemoSwitch /> */}
      <CreateMemoTextarea />
      <CreateMemoLink />
      {/* <CreateMemoUpload /> */}
    </div>
    <CreateMemoBottomButton onChange={onChange} />
  </>
);

interface CreateMemoDraftProps {
  onChange: (isLoading: boolean) => void;
}

export default CreateMemoDraft;
