import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

import background from '@/public/images/links/background.png';
import Avatar from '@/app/components/avatar.jsx';
import LinkCard from '@/app/components/cards/linkcard';
import Image from 'next/image';

export default function Page() {
	return (
		<div className='h-screen'>
			<Image src={background} className='absolute -z-10 h-screen w-screen grayscale-[75%] blur-[25px]' quality={100} alt='A background for the page, both the bisexual and nonbinary flags intersecting' />
			<div className='flex flex-col justify-center items-center py-16'>
				<div className="flex relative min-h-48 min-w-48 py-4 md:min-h-64 md:min-w-64">
					<Avatar className='rounded-[70px] max-h-48 max-w-48 relative' />
				</div>
				<div className='flex flex-col py-8 text-center'>
					<h1 className='font-bold text-3xl py-4'>FloridaMan7588</h1>
					<p className='py-4 px-4 text-lg'>kittycoded enby programmer on the internet • minor • do drugs • become ungovernable</p>
					<p className='py-4 px-4 text-lg'>He/They</p>
					<LinkCard icon='fa-brands fa-github' name='GitHub' color='black'/>
				</div>
			</div>
		</div>
	)
}