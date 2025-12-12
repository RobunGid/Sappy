'use client';

import { useSidebar } from '@/components/ui/sidebar';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useChatContext } from 'stream-chat-react';

export default function Dashboard() {
	const { user } = useUser();
	const router = useRouter();
	const { channel, setActiveChannel } = useChatContext();
	const { setOpen } = useSidebar();

	return <div>Dashboard</div>;
}
