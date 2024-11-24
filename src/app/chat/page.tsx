'use client';

import { useEffect, useState } from 'react';

import { useMutation, useQuery, QueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { MUTATION_KEYS, QUERY_KEYS } from '../constants';

import ChatBody from './_components/ChatBody';
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
  await axios<{ chatRoomId: number }>({
    url,
    data: { text, links },
    method: 'POST',
  });
};

const getChats = async (chatRoomId: number) => {
  const url = `${process.env.NEXT_PUBLIC_SAFE_CHILD_BASE_URL}/api/chats/${chatRoomId}/jobs`;
  const { data } = await axios<{ chatRoomId: number }>({
    url,
    method: 'GET',
  });

  return data;
};

const Chat = () => {
  const queryClient = new QueryClient();
  const [chatRoomId, setChatRoomId] = useState(0);

  const { data: chats } = useQuery({
    queryKey: QUERY_KEYS.CHATS,
    queryFn: async () => getChats(chatRoomId),
    enabled: chatRoomId !== 0,
  });

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

  console.log(chatRoomId);

  console.log(chats);

  const addChat = (value: string) => {
    addChatMutate({ text: value, links: [], chatRoomId });
  };

  useEffect(() => {
    chatRoomIdMutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-1 bg-grayscale-20">
      <ChatHeader />
      {/* <ChatBody chats={chats} /> */}
      <ChatFooter addChat={addChat} />
    </div>
  );
};

export default Chat;
