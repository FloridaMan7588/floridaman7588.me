import Link from 'next/link'

interface Props {
	title: string;
	date?: Date;
	formattedDate: string;
	description?: string;
	author: string;
	slug?: string;
	url?: URL
}

export default function PostCard({ title, formattedDate, description, author, slug, url }: Props) {
	let link: string;
	if (url) {
		link = url.toString()
	}
	else if (slug) {
		link = '/blog/' + slug
	}
	return (
		<Link href={link}>
			<div className='bg-ctp-crust rounded-[45px] min-h-fit px-4 py-4 hoverPop105'>
				<div className='px-8 py-4'>
					<div className="flex justify-between">
						<h1 className='text-ctp-text text-4xl font-bold'>{title}</h1>
						<p className='text-ctp-text text-lg px-2 py-2'>{author}</p>
					</div>
					<p className='text-ctp-text text-left text-lg'>{formattedDate}</p>
					<br></br>
					<hr></hr>
					<br></br>
					<p className='text-ctp-text text-center text-lg'>{description}</p>
				</div>
			</div>
		</Link>
	)
}