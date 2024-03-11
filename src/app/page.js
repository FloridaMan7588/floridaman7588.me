import Gravatar from 'react-awesome-gravatar'
import Image from 'next/image';
const options = {
  size: 256
}

export default function Home() {
  return (
    <main className="bg-base min-h-screen max-w-screen">
      <div className="px-16 grid grid-cols-1 md:grid-cols-2 place-items-center md:justify-center">
        <div className='max-w-content max-h-fit'>
         <div className="sm:flex relative min-h-48 min-w-48 py-4 sm:min-h-64 sm:min-w-64">
					  <Gravatar email='me@floridaman7588.me' options={ options }>
						  {url => (<Image src={url} alt='Avatar' className="rounded-[70px]" fill/>)}
					  </Gravatar>
				  </div>
          <div>
            <h1 className="text-text font-bold sm:text-6xl text-4xl">FloridaMan7588</h1>
          </div>
        </div>
        <div className="block md:flex relative text-center min-w-content">
          <p className="text-text font-light md:text-4xl text-xl text-center max-w-[694px] min-w-fit">Hello! I&lsquo;m FloridaMan7588, your average enby kittycoded programmer on the interwebs. I like to make things sometimes but I&lsquo;m not very good at it lol.</p>
        </div>
      </div>
    </main>
  );
}
