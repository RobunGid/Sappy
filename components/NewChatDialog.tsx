'use client';

import { Doc } from '@/convex/_generated/dataModel';
import { useCreateNewChat } from '@/hooks/useCreateNewChat';
import { useUser } from '@clerk/nextjs';
import { ReactNode, useState } from 'react';
import { useChatContext } from 'stream-chat-react';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

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

	const handleSelectUser = (user: Doc<'users'>) => {
		if (!selectedUsers.find((u) => u._id === user._id)) {
			setSelectedUsers((prev) => [...prev, user]);
		}
	};

	const removeUser = (userId: string) => {
		setSelectedUsers((prev) => prev.filter((user) => user._id !== userId));
	};

	const handleOpenChange = (newOpenStatus: boolean) => {
		setOpen(newOpenStatus);
		if (!newOpenStatus) {
			setSelectedUsers([]);
			setGroupName('');
		}
	};

	return (
		<Dialog open={open} onOpenChange={handleOpenChange}>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className='sm:max-w-[500px] max-h-[80vh] overflow-y-auto'>
				<DialogHeader>
					<DialogTitle>Start a New Chat</DialogTitle>
					<DialogDescription>
						Search for users to start a chat with
					</DialogDescription>
				</DialogHeader>
				<div className='space-y-4'>
					<UserSearch onSelectUser={handleSelectUser} className='w-full' />
				</div>
			</DialogContent>
		</Dialog>
	);
};
