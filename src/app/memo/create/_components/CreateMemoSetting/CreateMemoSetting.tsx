// import axios from 'axios';

import { MemoWarningCard } from '@/app/memo/_components';
// import { sleep } from '@/app/utils';

import CreateMemoBottomButtons from './CreateMemoBottomButtons';
import CreateMemoConnection from './CreateMemoConnection';
import CreateMemoNote from './CreateMemoNote';
import CreateMemoRedirectFamily from './CreateMemoRedirectFamily';
import CreateMemoTitle from './CreateMemoTitle';

const CreateMemoSetting = () => (
  // await sleep(5000);

  // api/analyzers 로 AI 자동생성 요청 => jobId
  // api/analyzers/form 에 jobId를 쿼리스트링으로 전달해주면, 생성된 제목, 요약된 내용을 얻을 수 있다.
  // const res = await axios({
  //   url: 'http://dpgmmeasqncchwmr.tunnel-pt.elice.io/api/analyzers/form',
  //   method: 'POST',
  //   data: {
  //     query: '아이들 감기에는 달리기가 좋다.',
  //     jobType: 'Memo',
  //     links: ['link1', 'link2'],

  //     // images: [],
  //   },
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  // });

  // {
  //   "status": "Completed",
  //   "generatedTitle": "감기에 달리기 효과",
  //   "answer": "감기에 달리기는 오히려 몸에 악영향을 줄 수 있습니다. 감기에 걸렸을 때는 휴식을 취하는 것이 좋습니다. ",
  //   "contentContainBoolean": 0,
  //   "contentContainBooleanExplain": "감기에 운동은 좋지 않다"
  // }

  // console.log(res);
  // console.log();
  <>
    <div className="flex flex-col gap-24 px-4 py-3">
      <MemoWarningCard />
      <CreateMemoTitle />
      <CreateMemoNote />
      <CreateMemoConnection />
      <CreateMemoRedirectFamily />
    </div>
    <CreateMemoBottomButtons />
  </>
);
export default CreateMemoSetting;
