import Gravatar from 'react-awesome-gravatar'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faMastodon } from '@fortawesome/free-brands-svg-icons';
const options = {
  size: 256
}

export default function Home() {
  return (
    <main className="bg-base min-h-screen max-w-screen">
      <div className="px-16 py-8 grid grid-cols-1 md:grid-cols-2 place-items-center md:justify-center">
        <div className='max-w-48 max-h-fit md:justify-center grid grid-cols-1 place-items-center'>
         <div className="md:flex relative min-h-48 min-w-48 py-4 md:min-h-64 md:min-w-64">
					  <Gravatar email='me@floridaman7588.me' options={ options }>
						  {url => (<Image src={url} alt='Avatar' className="rounded-[70px]" fill/>)}
					  </Gravatar>
				  </div>
          <div className='flex grid-cols-3 py-8'>
            <a href='https://fm7588.me/github'><FontAwesomeIcon icon={faGithubSquare} className='px-4 min-w-16 min-h-16'/></a>
            <a href='https://fm7588.me/LinkedIn'><FontAwesomeIcon icon={faLinkedin} className='px-4 min-w-16 min-h-16'/></a>
            <a href='https://fm7588.me/mastodon'><FontAwesomeIcon icon={faMastodon} className='px-4 min-w-16 min-h-16'/></a>
          </div>
        </div>
        <div className="block md:flex relative text-center min-w-content">
          <p className="text-text font-light md:text-4xl text-xl text-center max-w-[694px] min-w-fit">Hello! I&lsquo;m FloridaMan7588, your average enby kittycoded programmer on the interwebs. I like to make things sometimes but I&lsquo;m not very good at it lol.</p>
        </div>
      </div>
      <div className='md:px-16 px-8 py-8 md:py-8'>
        <div className='bg-mantle rounded-[45px]'>
          <h1 className='text-text text-center text-4xl font-bold px-7 py-8'>About Me</h1>
          <div className='grid-cols-1 grid md:flex md:justify-center place-items-center px-4'>
            <div className='text-text text-center px-16 md:text-2xl text-xl md:py-8'>
              <p>Hi! I’m a 15 year old high school student who likes to make things online. I’m not very good at it, but I do it. I also enjoy singing, and sometimes playing video games. Sometimes I stream on YouTube, although I haven’t uploaded there in a couple of years. I’ll talk about my shenanigans here, and sometimes I write on Mastodon (well, Misskey, well Hajkey) too. I maintain a few projects, including packaging for my favorite browser Waterfox, and some Javascript server applications. Plus this website and a Home Assistant Addon. You can read my blog posts and project pages about those things here.</p>
            </div>
            <div className='text-text px-16 py-4 justify-center min-w-fit'>
              <ul className='md:text-xl text-lg'>
                <li className='py-4'>• Frontend Design</li>
                <li className='py-4'>• Backend Code</li>
                <li className='py-4'>• Maintaining Linux Apps</li>
                <li className='py-4'>• Homelab/Sysadmin</li>
                <li className='py-4'>• Content Production</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='md:px-16 px-8 py-8'>
        <div className='bg-mantle rounded-[45px] min-h-fit'>
          <h1 className='text-text text-center text-4xl font-bold px-7 py-4'>Education</h1>
          <ul className='px-8 py-4 text-text'>
            <li className='bg-crust rounded-[32px]'>
              <div>
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
        </div>
      </div>
    </main>
  );
}
