import CreateMemoBottomButtons from './CreateMemoBottomButtons';
import CreateMemoConnection from './CreateMemoConnection';

const CreateMemoSetting = () => (
  <>
    <div className="flex flex-col gap-24 px-4 py-3">
      <CreateMemoConnection />
    </div>
    <CreateMemoBottomButtons />
  </>
);

export default CreateMemoSetting;
