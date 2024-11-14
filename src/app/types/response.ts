export type HelpyVResponse = {
  id: string;
  object: 'chat.completion';
  created: number;
  model: 'helpy-v-large';
  choices: {
    finish_reason: string;
    index: number;
    logprobs: null;
    message: {
      role: string;
      content: string;
      tool_calls: [];
    };
    stop_reason: null;
  }[];
  usage: { prompt_tokens: number; total_tokens: number; completion_tokens: number };
  prompt_logprobs: null;
};
