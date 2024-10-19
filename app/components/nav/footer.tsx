import Socials from '@components/socials';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="bg-ctp-mantle text-ctp-text">
			<div className='flex text-center flex-col md:flex-row md:justify-between'>
				<div className='px-4 md:py-4 py-2'>
					<div className='md:py-4'>
						<p>All Content © 2021-2024 by FloridaMan7588</p>
						<p>Licensed under CC BY-SA 4.0</p>
					</div>
				</div>
				<div className='px-4 md:py-4 py-2'>
					<div className='md:py-4'>
						<p>Designed in Figma &</p>
						<p>Made with ❤ in React + Next.JS</p>
					</div>
				</div>
				<div className='px-4 md:py-4 py-2'>
					<Socials type='footer' />
				</div>
				<div className='px-4 md:py-4 py-2'>
					<div className='md:py-4'>
						<p>View the <Link href='/privacy-policy' className='text-ctp-lavender'>Privacy Policy</Link></p>
					</div>
				</div>
			</div>
		</footer>
	);
}