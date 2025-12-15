'use client';

import { Doc } from '@/convex/_generated/dataModel';
import { useCreateNewChat } from '@/hooks/useCreateNewChat';
import { useUser } from '@clerk/nextjs';
import { ReactNode, useState } from 'react';
import { useChatContext } from 'stream-chat-react';

interface NewChatDialogProps {
	children: ReactNode;
}

export const NewChatDialog = ({ children }: NewChatDialogProps) => {
	const [open, setOpen] = useState(false);
	const [selectedUsers, setSelectedUsers] = useState<Doc<'users'>[]>([]);
	const [groupName, setGroupName] = useState('');
	const createNewChat = useCreateNewChat();
	const { user } = useUser();
	const { setActiveChannel } = useChatContext();
	return <>{children}</>;
};
