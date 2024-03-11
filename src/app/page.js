import Gravatar from 'react-awesome-gravatar'
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-base min-h-screen max-w-screen">
      <div className="px-16 grid-cols-1 sm:flex">
        <div className="block sm:flex relative min-h-48 min-w-48 max-h-48 max-w-48 auto-cols-max">
					<Gravatar email='me@floridaman7588.me'>
						{url => (<Image src={url} alt='Avatar' className="rounded-[45px]" fill/>)}
					</Gravatar>
				</div>
        <div className="block sm:flex px-32 relative text-center">
          <p className="text-text font-light text-4xl text-center max-w-[694px] min-w-fit">Hello! I&lsquo;m FloridaMan7588, your average enby kittycoded programmer on the interwebs. I like to make things sometimes but I&lsquo;m not very good at it lol.</p>
        </div>
      </div>
    </main>
  );
}
