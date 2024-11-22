import { MemoHeader, MemoNote } from './_components';
import MemoBottomFooter from './_components/MemoBottomFooter';

const Memo = () => (
  <>
    <MemoHeader />
    <div className="h-full flex-1">
      <MemoNote />
    </div>
    <MemoBottomFooter />
  </>
);

export default Memo;
