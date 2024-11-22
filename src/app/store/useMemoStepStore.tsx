import { create } from 'zustand';

interface State {
  step: number;
}

interface Action {
  updateStep: (step: State['step']) => void;
  resetStep: () => void;
}

const STEP = 1;

export const useMemoStepStore = create<State & Action>()(set => ({
  step: STEP,
  updateStep: (step: State['step']) => set(() => ({ step })),
  resetStep: () => set(() => ({ step: STEP })),
}));
