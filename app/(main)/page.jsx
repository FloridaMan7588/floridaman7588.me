import Link from 'next/link'
import Avatar from '@/app/components/avatar.jsx';
import Socials from '@/app/components/socials.jsx';
import waterfoxLogo from '@/public/images/projects/waterfox-logo.png';
import mochadLogo from '@/public/images/projects/mochad-logo.png';

import BaseCard from '@/app/components/cards/basecard.jsx';
import AboutCard from '@/app/components/cards/aboutcard.jsx';
import ProjectCard from '@/app/components/cards/projectcard.jsx';

import { getBlogPosts } from '@/app/lib/posts.js';

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
          <p className="text-ctp-text font-light md:text-4xl text-xl text-center max-w-[694px] min-w-fit">Hello! I&lsquo;m FloridaMan7588, your average enby kittycoded programmer on the interwebs. I like to make things sometimes but I&lsquo;m not very good at it lol.</p>
        </div>
      </div>
      <BaseCard id='about'>
        <AboutCard
          about='Hi! I’m a 15 year old high school student who likes to make things online. I’m not very good at it, but I do it. 
        I also enjoy singing, and sometimes playing video games. Sometimes I stream on YouTube, although I haven’t uploaded there in a couple of years. 
        I’ll talk about my shenanigans here, and sometimes I write on Mastodon (well, Misskey, well Hajkey) too. 
        I maintain a few projects, including packaging for my favorite browser Waterfox, and some Javascript server applications (eg. discord bots). 
        Plus this website and a Home Assistant Addon. You can read my blog posts and project pages about those things here.'
          skills={['Fronted Design', 'Backend Code', 'Maintaining Linux Apps', 'Homelab/Sysadmin', 'Content Production']} />
      </BaseCard>
      <BaseCard id='education'>
        <h1 className='text-ctp-text text-center text-4xl font-bold px-7 py-4'>Education</h1>
        <ul className='px-2 py-4 text-ctp-text'>
          <li className='bg-ctp-crust rounded-[32px]'>
            <div className='px-2 py-2'>
              <div className='py-2 grid place-items-center md:flex md:justify-between'>
                <h1 className='px-4 text-xl font-bold'>Attending High School</h1>
                <h1 className='font-bold text-lg px-8'>2023-Present</h1>
              </div>
              <div className='py-2 text-center md:text-start'>
                <p className='px-4'>Shawnee Mission Northwest High School</p>
              </div>
            </div>
          </li>
        </ul>
      </BaseCard>
      <BaseCard id='projects'>
        <h1 className='text-ctp-text text-center text-4xl font-bold px-7 py-4'>Featured Projects</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 py-4 px-4 md:justify-center'>
          <ProjectCard title='Waterfox Flatpak'
            description='Waterfox, a browser built for the modern web, now available as a Flatpak.'
            image={waterfoxLogo}
            imageLink='https://fm7588.me/waterfox-flatpak'
            downloadUrl='https://fm7588.me/waterfox-flathub'
            sourceUrl='https://fm7588.me/waterfox-github' />
          <ProjectCard title='mochad-ha-addon'
            description='A simple Home Assistant add-on for connecting X-10 ActiveHome devices to your smart home.'
            image={mochadLogo}
            imageLink='https://fm7588.me/mochad-ha-addon'
            downloadUrl='https://fm7588.me/mochad-releases'
            sourceUrl='https://fm7588.me/mochad-github' />
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
