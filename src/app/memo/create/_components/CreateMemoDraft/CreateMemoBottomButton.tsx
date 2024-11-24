// import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';

import { Button, Footer } from '@/app/_components/common';
// import { MUTATION_KEYS } from '@/app/constants';
import { useMemoStepStore } from '@/app/store';

// interface AnalyzersResponse {
//   jobId: number;
// }

// interface AnalyzersResponseByJobId {
//   status: 'Completed' | 'InProgress' | 'Failed';
//   analyzerInput: {
//     images: string[];
//     links: string[];
//     query: string;
//   };
//   analyzerResult: {
//     answer: string;
//     contentContainBoolean: 2;
//     contentContainBooleanExplain: string;
//     generatedTitle: string;
//   };
// }

// const requestAnalyzers = async () => {
//   const body = {
//     query: '아이들 감기에는 달리기가 좋다.',
//     jobType: 'Memo',
//   };
//   const {
//     data: { jobId },
//   } = await axios.post<AnalyzersResponse>(`${process.env.NEXT_PUBLIC_SAFE_CHILD_BASE_URL}/api/analyzers/form`, body, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   return jobId; // Returns jobId
// };

// const fetchCreateMemo = async (jobId: number) => {
//   const { data } = await axios.get<AnalyzersResponseByJobId>(
//     `${process.env.NEXT_PUBLIC_SAFE_CHILD_BASE_URL}/api/analyzers/${jobId}`,
//   );
//   return data;
// };

const CreateMemoBottomButton = ({ onChange }: CreateMemoBottomButtonProps) => {
  const { step, updateStep } = useMemoStepStore();

  // const analyzerMutation = useMutation({
  //   mutationKey: MUTATION_KEYS.ANALYZERS,
  //   mutationFn: requestAnalyzers,
  //   onSuccess: newJobId => {
  //     onChange(true);
  //     pollCreateMemo(newJobId);
  //   },
  //   onError: () => {
  //     onChange(false);
  //   },
  // });

  // const pollCreateMemo = (currentJobId: number) => {
  //   let retryCount = 0;
  //   const maxRetries = 5;

  //   const poll = setInterval(async () => {
  //     try {
  //       const { status: currentStatus } = await fetchCreateMemo(currentJobId);

  //       if (currentStatus === 'Completed') {
  //         clearInterval(poll);
  //         updateStep(step + 1);
  //         onChange(false);
  //       } else if (currentStatus === 'Failed') {
  //         clearInterval(poll);
  //         onChange(false);
  //         if (retryCount < maxRetries) {
  //           retryCount += 1;
  //           analyzerMutation.mutate();
  //         } else {
  //           console.error('Max retries reached. Failed to complete CreateMemo.');
  //         }
  //       }
  //     } catch (error) {
  //       console.error('Error during polling:', error);
  //       clearInterval(poll);
  //       onChange(false);
  //     }
  //   }, 2000);
  // };

  return (
    <Footer>
      <Button color="blue" onClick={() => updateStep(step + 1)}>
        다음 단계로
      </Button>
    </Footer>
  );
};

interface CreateMemoBottomButtonProps {
  onChange: (isLoading: boolean) => void;
}

export default CreateMemoBottomButton;
