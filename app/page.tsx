import { FeatureCard } from '@/components/FeatureCard';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { MessageCircle, StarIcon, Type, UsersIcon, VideoIcon } from 'lucide-react';

export default function Home() {
	return (
		<div className=''>
			<Header />
			<main className='flex-1 flex flex-col items-center px-4 py-16 sm:px-6 text-center gap-20'>
				<div className='max-w-4xl space-y-8 relative'>
					<div
						className='absolute inset-0 -z-10 bg-linear-to-br from-white 
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
								Space for
							</span>
							<br />
							<span
								className='bg-clip-text text-transparent bg-linear-to-r 
					from-indigo-700 via-purple-700 to-blue-800 
					dark:from-indigo-500 dark:via-purple-500 dark:to-blue-600'
							>
								Math Enthusiasts
							</span>
						</h1>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
							Sappy is your modern platform for math enthusiasts. Explore
							ideas, solve problems, and share insights through crisp video
							calls, fast real-time chats, and effortless content
							sharing—anytime, anywhere. Stay inspired, stay connected, and
							enjoy mathematics without limits
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
							Trusted by hundreds of math lovers worldwide
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

					<div className='w-full max-w-6xl'>
						<div className='w-full flex items-center justify-center mb-16'>
							<div className='flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent'>
								<div className='px-6 flex justify-center'>
									<div className='w-8 h-2 rounded-full bg-primary/60'></div>
								</div>
								<div className='flex-1 h-px bg-linear-to-r from-transparent via-border to-transparent'></div>
							</div>
						</div>
						<div className='text-center mb-16'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
								Everything for your privacy and convenience
							</h2>
							<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
								Platform features designed for your privacy and convenient
								communication, wherever you are, whoever you are with.
							</p>
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
							<FeatureCard
								Icon={MessageCircle}
								title='Privacy Messaging'
								description='Private messaging keeps every conversation secure with end-to-end protection, giving users full control over who sees their content'
							/>
							<FeatureCard
								Icon={VideoIcon}
								title='HD Video Calls'
								description='Clear video calls that make every conversation feel face-to-face, no matter the distance'
							/>
							<FeatureCard
								Icon={UsersIcon}
								title='Group Chats'
								description='Connect and collaborate effortlessly with real-time messaging for multiple users'
							/>
							<FeatureCard
								Icon={StarIcon}
								title='Unlock Math potential'
								description='Unleash your mathematical potential with tools designed to explore, solve, and visualize complex problems. Dive deep into concepts, challenge yourself, and elevate your skills anytime, anywhere'
							/>
							<FeatureCard
								Icon={Type}
								title='LaTeX/TeX support'
								description='Easily write, share, and display mathematical formulas with full LaTeX/TeX support. Communicate complex equations clearly and professionally in chats, posts, and discussions'
							/>
						</div>
					</div>
					<div className='w-full max-w-4xl'>
						<div className='rounded-2xl border bg-linear-to-br from-primary/5 to-primary/10 p-12 text-center'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Want chat with other math enthusiasts?
							</h2>
							<p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
								Join our community right now
							</p>
							<div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
								<SignedOut>
									<SignUpButton mode='modal'>
										<Button
											size='lg'
											className='text-lg px-8 py-6 h-auto'
										>
											Start Now for Free
										</Button>
									</SignUpButton>
								</SignedOut>
							</div>

							<div className='flex justify-center flex-col sm:flex-row items-center gap-6 mt-8 text-sm text-muted-foreground'>
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 rounded-full bg-green-500'></div>
									No payment
								</div>
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 rounded-full bg-green-500'></div>
									Friendly community
								</div>
								<div className='flex items-center gap-2'>
									<div className='w-2 h-2 rounded-full bg-green-500'></div>
									Fast registration
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className='border-t bg-muted/30'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 py-12'>
					<div className='flex flex-col sm:flex-row justify-between items-center gap-6'>
						<div>
							<span className='text-xlfont-bold tracking-tight'>Sappy</span>
							<p className='text-sm text-muted-foreground mt-1'>
								Future of math community
							</p>
						</div>
						<div className='flex items-center gap-8'>
							<a
								href='#'
								className='text-sm text-muted-foreground hover:text-foreground transition-colors'
							>
								Privacy Policy
							</a>
							<a
								href='#'
								className='text-sm text-muted-foreground hover:text-foreground transition-colors'
							>
								Terms of Service
							</a>
							<a
								href='#'
								className='text-sm text-muted-foreground hover:text-foreground transition-colors'
							>
								Support
							</a>
						</div>
					</div>
					<div className='border-t mt-8 pt-6 text-center'>
						<p className='text-xs text-muted-foreground'>Sappy 2025 &copy;</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
