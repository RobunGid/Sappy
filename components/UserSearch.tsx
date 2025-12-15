'use client';

import { Doc } from '@/convex/_generated/dataModel';
import { useUserSearch } from '@/hooks/useUserSearch';
import { cn } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';
import { Input } from './ui/input';
import { Search, X } from 'lucide-react';

interface UserSearchProps {
	onSelectUser: (user: Doc<'users'>) => void;
	placeholder?: string;
	className?: string;
}

export const UserSearch = ({
	onSelectUser,
	placeholder = 'Search users by name or email...',
	className,
}: UserSearchProps) => {
	const { searchTerm, setSearchTerm, searchResults, isLoading } = useUserSearch();

	const { user } = useUser();

	const filteredResults = searchResults.filter(
		(searchUser) => searchUser.userId !== user?.id
	);

	const handleSelectUser = (user: (typeof searchResults)[0]) => {
		onSelectUser?.(user);
		setSearchTerm('');
	};

	const clearSearch = () => {
		setSearchTerm('');
	};

	return (
		<div className={cn('w-full max-w-2xl mx-auto', className)}>
			<div className='relative'>
				<Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
				<Input
					type='text'
					placeholder={placeholder}
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className='ps-10 pe-10 h-12 text-base'
				/>
				{searchTerm && (
					<button
						onClick={clearSearch}
						className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer'
					>
						<X className='w-4 h-4' />
					</button>
				)}
			</div>
		</div>
	);
};
