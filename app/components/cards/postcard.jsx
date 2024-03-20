import Link from 'next/link'

export default function PostCard({title, date, description, author, slug}) {
	return (
		<Link href={'/blog/' + slug}>
		<div className='bg-crust rounded-[45px] min-h-fit py-4 transition-transform duration-300 transform hover:scale-105'>
			<div className='px-8 py-4'>
				<div className="flex justify-between">
					<h1 className='text-text text-4xl font-bold'>{title}</h1>
					<p className='text-text text-lg px-2 py-2'>{author}</p>
				</div>
				<p className='text-text text-left text-lg'>{date}</p>
				<br></br>
				<hr></hr>
				<br></br>
				<p className='text-text text-center text-lg'>{description}</p>
			</div>
		</div>
		</Link>
	)
}