'use client';

import { UserSyncWrapper } from '@/components/UserSyncWrapper';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
	return <UserSyncWrapper>{children}</UserSyncWrapper>;
}
