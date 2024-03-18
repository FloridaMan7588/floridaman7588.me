import PostCard from '@/app/components/cards/postcard';
import BaseCard from '@/app/components/cards/basecard';
import { getSortedPostsData } from '@/app/lib/posts.js';
import { generateRssFeed } from '@/app/rss.js';
import { format } from 'date-fns';

async function getPosts() {
	const allPostsData = getSortedPostsData()
	await generateRssFeed()
	return allPostsData
}

export default async function Blog() {
	const postData = await getPosts()
	const postList = []
	for (const post of postData) {
		const date = format(post.date, 'do LLL. yyyy h:mm a');
		postList.push(
			<div key={post.slug} className='py-4 px-2'>
				<PostCard
					title={post.title}
					date={date.toString()}
					author={post.author}
					description={post.description}
					slug={post.slug}
				/>
			</div>
		)
	
	}
	return (
		<main className="bg-base min-h-screen max-w-screen">
			<BaseCard>
				<h1 className='text-text text-center text-3xl font-bold py-4 px-2'>Recent Blog Posts</h1>
				<div className='md:grid md:grid-cols-2'>{postList}</div>
			</BaseCard>
		</main>
	)
}