import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { SignedOut, SignInButton } from '@clerk/nextjs';

export default function Home() {
	return (
		<div className=''>
			<Header />
			<main className='flex-1 flex flex-col items-center px-4 py-16 sm:px-6 text-center gap-20'>
				{/* BG Gradient */}
				<div className='max-w-4xl space-y-8 relative'>
					<div
						className='absolute inset-0 -z-10 bg-linear-to-br from-blue-50 
				via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 
				dark:to-purple-950/20 rounded-3xl blur-3xl scale-150 opacity-60'
					></div>
					<div className='max-w-4xl space-y-8 relative'>
						<h1 className='text-5xl sm:text-7xl font-bold tracking-tight'>
							<span
								className='bg-clip-text text-transparent bg-linear-to-r 
					from-blue-700 via-blue-800 to-indigo-700 
					dark:from-blue-500 dark:via-blue-600 dark:to-indigo-500'
							>
								Chat freely
							</span>
							<br />
							<span
								className='bg-clip-text text-transparent bg-linear-to-r 
					from-indigo-700 via-purple-700 to-blue-800 
					dark:from-indigo-500 dark:via-purple-500 dark:to-blue-600'
							>
								Chat safely
							</span>
							<br />
							<span
								className='bg-clip-text text-transparent bg-linear-to-r 
					from-blue-800 via-purple-700 to-indigo-700 
					dark:from-blue-600 dark:via-purple-500 dark:to-indigo-500'
							>
								Chat everywhere
							</span>
						</h1>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
							Sappy is your modern space for anonymous, secure
							conversations. Crisp video calls, fast real-time chats, and
							effortless sharing-anytime, anywhere. Stay protected, stay
							connected, and enjoy communication without limits
						</p>
					</div>
					<div className='flex flex-col sm:flex-row justify-center items-center gap-4 pt-6'>
						<SignedOut>
							<SignInButton mode='modal'>
								<Button size='lg' className='text-lg px-24 py-6 h-auto'>
									Start Now for Free
								</Button>
							</SignInButton>
						</SignedOut>
					</div>

					<div className='pt-8'>
						<p className='text-sm text-muted-foreground mb-4'>
							Trusted by hundreds of users worldwide
						</p>

						<div className='flex justify-center items-center gap-8 text-muted-foreground'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-foreground'>
									100+
								</div>

								<div className='text-sm'>Active Users</div>
							</div>

							<div className='w-px h-8 bg-border'></div>

							<div className='text-center'>
								<div className='text-2xl font-bold text-foreground'>
									10K+
								</div>

								<div className='text-sm'>Messages Sent</div>
							</div>

							<div className='w-px h-8 bg-border'></div>

							<div className='text-center'>
								<div className='text-2xl font-bold text-foreground'>
									99.9%
								</div>

								<div className='text-sm'>Uptime</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
