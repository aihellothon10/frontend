import { create } from 'zustand';

interface State {
  step: number;
}

interface Action {
  updateStep: (step: State['step']) => void;
}

export const useMemoStepStore = create<State & Action>()(set => ({
  step: 1,
  updateStep: (step: State['step']) => set(() => ({ step })),
}));
