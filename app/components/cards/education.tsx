import Link from 'next/link';

interface Props {
	url: URL;
	title: string;
	date: string;
	description: string;
}

export default function EducationCard({ url, title, date, description }: Props) {
	return (
		<div className='bg-ctp-crust rounded-[32px] px-2 py-2'>
			<div className='py-2 grid place-items-center md:flex md:justify-between'>
				<Link href={url.toString()}><h1 className='px-4 text-xl font-bold'>{title}</h1></Link>
				<h1 className='font-bold text-lg px-8'>{date}</h1>
			</div>
			<div className='py-2 text-center md:text-start'>
				<p className='px-4'>{description}</p>
			</div>
		</div>
	)
}