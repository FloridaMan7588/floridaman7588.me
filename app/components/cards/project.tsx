import Image from 'next/image';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface Props {
	title: string;
	description: string;
	image: string | StaticImport;
	imageLink: string;
	downloadUrl: string;
	sourceUrl: string;
}

export default function ProjectCard({ title, description, image, imageLink, downloadUrl, sourceUrl }: Props) {
	return (
		<div className='py-4 px-2 md:px-16'>
			<div className='bg-ctp-crust rounded-[45px] px-4 py-4 text-ctp-text grid-cols-1 grid place-items-center'>
				<div className='px-4 py-4'>
					<h2 className='text-left text-3xl font-bold py-4'>{title}</h2>
					<p className='text-xl py-4'>{description}</p>
				</div>
				<div className='px-2 py-2'>
					<Link href={imageLink}>
						<Image src={image} alt={title} className='rounded-[45px] px-8 py-8 hoverPop110' width={384} height={384} priority={false} />
					</Link>
				</div>
				<div className='min-w-full px-2 py-2'>
					<hr></hr>
					<div className='grid grid-cols-2'>
						<div className='px-4 place-self-start'>
							<Link href={sourceUrl} aria-label={title + ' Source page'}><FontAwesomeIcon icon={faGitAlt} className='px-4 py-8 min-w-12 min-h-12 place-self-start hoverPop110' /></Link>
						</div>
						<div className='px-8 py-8 md:py-12 place-self-end'>
							<Link href={downloadUrl} aria-label={title + ' Download page'}><p className='font-bold text-justify text-lg'>Download Here</p></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};