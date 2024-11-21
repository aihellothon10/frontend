import { Button, Footer } from '@/app/_components/common';
import { useMemoStepStore } from '@/app/store';

const CreateMemoBottomButton = () => {
  const { step, updateStep } = useMemoStepStore();

  return (
    <Footer>
      <Button color="blue" onClick={() => updateStep(step + 1)}>
        다음 단계로
      </Button>
    </Footer>
  );
};

export default CreateMemoBottomButton;
