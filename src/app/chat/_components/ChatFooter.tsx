import { BottomNavigation } from '@/app/_components/common';

import ChatInput from './ChatInput';

const ChatFooter = ({ addChat }: ChatFooterProps) => (
  <div className="fixed bottom-0">
    <div className="mx-auto mb-mobile-bottom-navigation-height w-mobile px-4 pb-4">
      <ChatInput addChat={addChat} />
    </div>
    <BottomNavigation />
  </div>
);

interface ChatFooterProps {
  addChat: (value: { text: string; links: string[] }) => void;
}

export default ChatFooter;
