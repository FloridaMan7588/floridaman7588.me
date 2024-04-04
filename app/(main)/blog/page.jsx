import BaseCard from '@/app/components/cards/basecard';
import { getPosts, getMastodonPosts } from '@/app/lib/posts.js';

export default async function Blog() {
	const postList = await getPosts()
	return (
		<main className="bg-ctp-base min-h-screen max-w-screen">
			<BaseCard>
				<h1 className='text-ctp-text text-center text-3xl font-bold py-4 px-2'>Recent Blog Posts</h1>
				<div className='md:grid md:grid-cols-2'>{postList}</div>
			</BaseCard>
		</main>
	)
}