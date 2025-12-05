'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

export const Header = () => {
	const pathname = usePathname();
	const isDashboard = pathname.startsWith("/dashboard")
	
  return (
	<header>
		<Link href="/dashboard">Sappy</Link>
	</header>
  )
}