import Link from 'next/link'
import Avatar from '@components/avatar';
import Socials from '@components/socials';
import waterfoxLogo from '@images/projects/waterfox-logo.png';
import mochadLogo from '@images/projects/mochad-logo.png';

import BaseCard from '@components/cards/base';
import AboutCard from '@components/cards/about';
import ProjectCard from '@components/cards/project';
import EducationCard from '@components/cards/education';

import { getBlogPosts } from '@lib/posts';

export default async function Home() {
	const postList = (await getBlogPosts()).slice(0, 4)

	return (
		<main className="bg-ctp-base min-h-screen max-w-screen">
			<div className="px-16 py-8 grid grid-cols-1 md:grid-cols-2 place-items-center md:justify-center">
				<div className='max-w-48 max-h-fit md:justify-center grid grid-cols-1 place-items-center'>
					<div className="md:flex relative min-h-48 min-w-48 py-4 md:min-h-64 md:min-w-64">
						<Avatar className='rounded-[70px] relative hoverPop110' />
					</div>
					<Socials type='hero' />
				</div>
				<div className="block md:flex relative text-center min-w-content">
					<p className="text-ctp-text font-light md:text-4xl text-xl text-center max-w-[694px] min-w-fit">Hello! I&lsquo;m Pascalrr, your average enby kittycoded programmer on the interwebs. I like to make things sometimes but I&lsquo;m not very good at it lol.</p>
				</div>
			</div>
			<BaseCard id='about'>
				<AboutCard
					about='Hi! I’m a 16 year old high school (and college!) student who likes to make things online. I’m not very good at it, but I do it.
        I also enjoy singing, and sometimes playing video games. Sometimes I stream on YouTube, although I haven’t uploaded there in a couple of years.
        I’ll talk about my shenanigans here, and sometimes I write on Mastodon (well, Misskey, well, Sharkey) sometimes too.
        I maintain a few projects, including packaging for my favorite browser Waterfox, some Javascript server applications (eg. discord bots),
        plus this website and a Home Assistant Addon. You can read my blog posts and project pages about those things here.'
					skills={['Public Speaking', 'Backend Code', 'Maintaining Linux Apps', 'Homelab & Sysadmin', 'Content Production']} />
			</BaseCard>
			<BaseCard id='education'>
				<h1 className='text-ctp-text text-center text-4xl font-bold px-7 py-4'>Education</h1>
				<ul className='px-2 py-4 text-ctp-text'>
					<li className='px-2 py-2'>
						<EducationCard url={new URL('https://jccc.edu')} title='Johonson County Community College' date='June 2024-Present' description='Computer Information Systems - Software Developer Certificate' />
					</li>
					<li className='px-2 py-2'>
						<EducationCard url={new URL('https://smnorthwest.smsd.org')} title='Shawnee Mission Northwest High School' date='August 2023-Present' description='High School Diploma | IB Diploma Candidate' />
					</li>
				</ul>
			</BaseCard>
			<BaseCard id='projects'>
				<h1 className='text-ctp-text text-center text-4xl font-bold px-7 py-4'>Featured Projects</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 py-4 px-4 md:justify-center'>
					<ProjectCard title='Waterfox Flatpak'
						description='Waterfox, a browser built for the modern web, now available as a Flatpak.'
						image={waterfoxLogo}
						imageLink='https://fm7588.me/redirect/waterfox-github'
						downloadUrl='https://fm7588.me/redirect/waterfox-flathub'
						sourceUrl='https://fm7588.me/redirect/waterfox-github' />
					<ProjectCard title='mochad-ha-addon'
						description='A simple Home Assistant add-on for connecting X-10 ActiveHome devices to your smart home.'
						image={mochadLogo}
						imageLink='https://fm7588.me/redirect/mochad-github'
						downloadUrl='https://fm7588.me/redirect/mochad-releases'
						sourceUrl='https://fm7588.me/redirect/mochad-github' />
				</div>
				<div className='py-4 md:px-16 px-4'>
					<div className='text-ctp-text bg-ctp-crust rounded-[45px] px-4 py-4'>
						<h2 className='text-left text-2xl font-bold py-4 px-4'>View Full Project List</h2>
						<div className='md:flex justify-between'>
							<p className='text-xl px-4 py-4 md:text-justify'>My other and less maintained projects can be found here.</p>
							<Link href='/projects' aria-label='Navigate to full projects page'><p className='font-bold text-xl px-4 py-4'>View List Here</p></Link>
						</div>
					</div>
				</div>
			</BaseCard>
			<BaseCard>
				<div>
					<h1 className='text-ctp-text text-center text-4xl font-bold px-7 py-4'>Recent Blog Posts</h1>
					<div className='grid md:grid-cols-4 justify-center'>{postList}</div>
				</div>
			</BaseCard>
		</main>
	);
}
