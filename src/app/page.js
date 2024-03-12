import Gravatar from 'react-awesome-gravatar'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faMastodon } from '@fortawesome/free-brands-svg-icons';
import waterfoxLogo from '../../public/waterfox-logo.png';
import mochadLogo from '../../public/mochad-logo.png';
const options = {
  size: 256
}

export default function Home() {
  return (
    <main className="bg-base min-h-screen max-w-screen">
      <div className="px-16 py-8 grid grid-cols-1 md:grid-cols-2 place-items-center md:justify-center">
        <div className='max-w-48 max-h-fit md:justify-center grid grid-cols-1 place-items-center'>
          <div className="md:flex relative min-h-48 min-w-48 py-4 md:min-h-64 md:min-w-64">
            <Gravatar email='me@floridaman7588.me' options={options}>
              {url => (<Image src={url} alt='Avatar' className="rounded-[70px]" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill />)}
            </Gravatar>
          </div>
          <div className='flex grid-cols-3 py-8'>
            <a href='https://fm7588.me/github' aria-label='GitHub profile link'><FontAwesomeIcon icon={faGithubSquare} className='px-4 min-w-16 min-h-16' /></a>
            <a href='https://fm7588.me/LinkedIn' aria-label='LinkedIn profile link'><FontAwesomeIcon icon={faLinkedin} className='px-4 min-w-16 min-h-16' /></a>
            <a href='https://fm7588.me/mastodon' aria-label='Mastodon profile link'><FontAwesomeIcon icon={faMastodon} className='px-4 min-w-16 min-h-16' /></a>
          </div>
        </div>
        <div className="block md:flex relative text-center min-w-content">
          <p className="text-text font-light md:text-4xl text-xl text-center max-w-[694px] min-w-fit">Hello! I&lsquo;m FloridaMan7588, your average enby kittycoded programmer on the interwebs. I like to make things sometimes but I&lsquo;m not very good at it lol.</p>
        </div>
      </div>
      <div className='md:px-16 px-8 py-8 md:py-8' id='about'>
        <div className='bg-mantle rounded-[45px]'>
          <h1 className='text-text text-center text-4xl font-bold px-7 py-8'>About Me</h1>
          <div className='grid-cols-1 grid md:flex md:justify-center place-items-center px-4'>
            <div className='text-text text-center px-2 md:text-2xl md:px-16 text-lg md:py-8'>
              <p>Hi! I’m a 15 year old high school student who likes to make things online. I’m not very good at it, but I do it. I also enjoy singing, and sometimes playing video games. Sometimes I stream on YouTube, although I haven’t uploaded there in a couple of years. I’ll talk about my shenanigans here, and sometimes I write on Mastodon (well, Misskey, well Hajkey) too. I maintain a few projects, including packaging for my favorite browser Waterfox, and some Javascript server applications. Plus this website and a Home Assistant Addon. You can read my blog posts and project pages about those things here.</p>
            </div>
            <div className='text-text px-8 md:px-16 py-4 justify-center min-w-fit'>
              <ul className='md:text-xl text-lg'>
                <li className='py-2 md:py-4'>• Frontend Design</li>
                <li className='py-2 md:py-4'>• Backend Code</li>
                <li className='py-2 md:py-4'>• Maintaining Linux Apps</li>
                <li className='py-2 md:py-4'>• Homelab/Sysadmin</li>
                <li className='py-2 md:py-4'>• Content Production</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='md:px-16 px-8 py-8' id='education'>
        <div className='bg-mantle rounded-[45px] min-h-fit'>
          <h1 className='text-text text-center text-4xl font-bold px-7 py-4'>Education</h1>
          <ul className='px-8 py-4 text-text'>
            <li className='bg-crust rounded-[32px]'>
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
        </div>
      </div>
      <div className='md:px-16 px-8 py-8' id='projects'>
        <div className='bg-mantle rounded-[45px] min-h-fit'>
          <h1 className='text-text text-center text-4xl font-bold px-7 py-4'>Featured Projects</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 py-4 px-4 md:justify-center'>
            <div className='py-4 md:px-16'>
              <div className='bg-crust rounded-[45px] px-4 py-4 text-text grid-cols-1 grid place-items-center'>
                <div className='px-4 py-4'>
                  <h2 className='text-left text-3xl font-bold py-4'>Waterfox Flatpak</h2>
                  <p className='text-xl py-4'>Waterfox, a browser built for the modern web, now available as a Flatpak.</p>
                </div>
                <div className=''>
                  <Image src={waterfoxLogo} alt='Waterfox Flatpak' className='rounded-[45px] px-8 py-8' width={384} height={384} />
                </div>
                <div className='min-w-full'>
                  <hr></hr>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 place-self-start'>
                      <a href='https://fm7588.me/waterfox-github' aria-label='waterfox flathub github page'><FontAwesomeIcon icon={faGithubSquare} className='px-4 py-8 min-w-12 min-h-12 place-self-start'/></a>
                    </div>
                    <div className='px-8 py-8 md:py-12 place-self-end'>
                      <a href='https://fm7588.me/waterfox-flathub' aria-label='waterfox flathub page'><p className='font-bold text-justify text-lg'>Download Here</p></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='py-4 md:px-16'>
              <div className='text-text bg-crust rounded-[45px] px-4 py-4 grid grid-cols-1 place-items-center'>
                <div className='py-4 px-4'>
                  <h2 className='text-left text-3xl font-bold py-4'>mochad-ha-addon</h2>
                  <p className='text-xl'>A simple Home Assistant add-on for connecting X-10 ActiveHome devices to your smart home.</p>
                </div>
                <div className=''>
                  <Image src={mochadLogo} alt='mochad-ha-addon' className='rounded-[45px] px-8 py-8' width={384} height={384} />
                </div>
                <div className='min-w-full'>
                  <hr></hr>
                  <div className='grid grid-cols-2'>
                    <div className='px-4 place-self-start'>
                      <a href='https://fm7588.me/mochad-github' aria-label='Mochad HA Addon github page'><FontAwesomeIcon icon={faGithubSquare} className='px-4 py-8 min-w-12 min-h-12 place-self-start'/></a>
                    </div>
                    <div className='px-8 py-8 md:py-12 place-self-end'>
                      <a href='https://fm7588.me/mochad-releases' aria-label='Mochad HA Addon download page'><p className='font-bold text-justify text-lg'>Download Here</p></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='py-4 md:px-16 px-4'>
              <div className='text-text bg-crust rounded-[45px] px-4 py-4'>
                <h2 className='text-left text-2xl font-bold py-4 px-4'>View Full Project List</h2>
                <div className='md:flex justify-between'>
                  <p className='text-xl px-4 py-4 md:text-justify'>My other and less maintained projects can be found here.</p>
                  <a href='/projects' aria-label='Navigate to full projects page'><p className='font-bold text-xl px-4 py-4'>Click Here</p></a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </main>
  );
}
