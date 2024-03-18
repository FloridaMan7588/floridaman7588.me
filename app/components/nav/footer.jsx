import Socials from '@/app/components/socials.jsx';

export default function Footer() {
	return (
		<footer className="bg-mantle text-text">
			<div className='flex text-center flex-col md:flex-row md:justify-between'>
				<div className='px-4 md:py-4 py-2'>
					<div className='md:py-4'>
						<p>© 2024 FloridaMan7588</p>
						<p>All rights reserved</p>
					</div>
				</div>
				<div className='px-4 md:py-4 py-2'>
					<div className='md:py-4'>
						<p>Designed in Figma &</p>
						<p>Made with ❤ in React + Next.JS</p>
					</div>
				</div>
				<div className='px-4 md:py-4 py-2'>
					<Socials type='footer'/>
				</div>
			</div>
		</footer>
	);
}