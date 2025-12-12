'use client';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Button } from './ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import { ChannelList } from 'stream-chat-react';
import { ChannelFilters, ChannelSort } from 'stream-chat';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { user } = useUser();

	const filters: ChannelFilters = {
		members: { $in: [user?.id as string] },
		type: { $in: ['team', 'messaging'] },
	};

	const sort: ChannelSort = {
		last_message_at: -1,
	};
	const options = { presence: true, state: true };

	return (
		<Sidebar variant='floating' {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size='lg' asChild>
							<div className='flex items-center justify-between w-full'>
								<div className='flex flex-col'>
									<span className='text-xs text-muted-foreground'>
										Welcome back, Genius!
									</span>
									<span className='text-sm font-semibold'>
										{user?.firstName} {user?.lastName}
										{user?.username}
									</span>
								</div>
								<UserButton signInUrl='/sign-in' />
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarMenu className='gap-2'>
						<Button className='w-full' variant='outline'>
							Start New Chat
						</Button>

						<ChannelList
							filters={filters}
							options={options}
							sort={sort}
							EmptyStateIndicator={() => {
								return (
									<div className='flex flex-col items-center justify-center h-full py-12 px-4'>
										<div className='text-6xl mb-66 opacity-20'></div>
										<h2 className='text-xl font-medium text-foreground mb-2'>
											Ready to chat?
										</h2>
										<p className='text-sm text-muted-foreground text-center leading-relaxed max-w-[200px]'>
											Your chats will appear here when you start
											chatting with somebody
										</p>
									</div>
								);
							}}
						/>
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
