'use client';

import { useEffect, useRef, useState } from 'react';

import { useMutation, useQuery, QueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { MUTATION_KEYS, QUERY_KEYS } from '../constants';

import ChatBody, { ChatResponse } from './_components/ChatBody';
import ChatFooter from './_components/ChatFooter';
import ChatHeader from './_components/ChatHeader';

const charRoomIdMutationFn = async () => {
  const url = `${process.env.NEXT_PUBLIC_SAFE_CHILD_BASE_URL}/api/chats`;
  const {
    data: { chatRoomId },
  } = await axios<{ chatRoomId: number }>({
    url,
    method: 'POST',
  });

  return chatRoomId;
};

const addChatMutationFn = async ({
  text,
  links,
  chatRoomId,
}: {
  text: string;
  links: string[];
  chatRoomId: number;
}) => {
  const url = `${process.env.NEXT_PUBLIC_SAFE_CHILD_BASE_URL}/api/chats/${chatRoomId}/analyze`;
  const data = links.length === 0 ? { text } : { text, links };

  await axios<{ chatRoomId: number }>({
    url,
    data,
    method: 'POST',
  });
};

const getChats = async (chatRoomId: number) => {
  const url = `${process.env.NEXT_PUBLIC_SAFE_CHILD_BASE_URL}/api/chats/${chatRoomId}/jobs`;
  const { data } = await axios<ChatResponse[]>({
    url,
    method: 'GET',
  });

  return data;
};

const Chat = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const queryClient = new QueryClient();
  const [chatRoomId, setChatRoomId] = useState(0);

  const { data: chats, refetch } = useQuery({
    queryKey: QUERY_KEYS.CHATS,
    queryFn: async () => getChats(chatRoomId),
    enabled: chatRoomId !== 0,
  });

  console.log('chats', chats);

  const { mutate: chatRoomIdMutate } = useMutation({
    mutationKey: MUTATION_KEYS.CHAT_ROOM_ID,
    mutationFn: charRoomIdMutationFn,
    onSuccess: newChatRoomId => {
      setChatRoomId(newChatRoomId);
    },
  });

  const { mutate: addChatMutate } = useMutation({
    mutationKey: MUTATION_KEYS.CHAT_ROOM_ID,
    mutationFn: addChatMutationFn,
    onSuccess: async () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.CHATS }),
  });

  const addChat = (value: { text: string; links: string[] }) => {
    addChatMutate({ ...value, chatRoomId });
  };

  useEffect(() => {
    chatRoomIdMutate();

    try {
      timerRef.current = setInterval(async () => {
        await refetch();
      }, 2000);
    } catch (err) {
      console.log(err);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-1 bg-grayscale-20">
      <ChatHeader />
      <ChatBody chats={chats} />
      <ChatFooter addChat={addChat} />
    </div>
  );
};

export default Chat;
