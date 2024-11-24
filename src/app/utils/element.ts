export const adjustTextareaHeight = <T extends HTMLElement>(element: T | null, rows: number) => {
  if (!element) return;

  const textarea = element;

  textarea.style.height = 'auto';

  const lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10);
  const maxHeight = lineHeight * rows;

  console.log(Math.min(textarea.scrollHeight, maxHeight));

  textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
};
