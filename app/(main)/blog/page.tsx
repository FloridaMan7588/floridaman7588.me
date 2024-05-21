import BaseCard from '@components/cards/basecard';
import { getAllPosts } from '@lib/posts';

export default async function Blog() {
	const postList = await getAllPosts()

	return (
		<main className="bg-ctp-base min-h-screen max-w-screen">
			<BaseCard>
				<h1 className='text-ctp-text text-center text-3xl font-bold py-4 px-2'>Recent Posts</h1>
				<div className='md:grid md:grid-cols-2'>{postList}</div>
			</BaseCard>
		</main>
	)
}