import { getPostSlugs, getPostData } from '@lib/posts';
import BaseCard from '@components/cards/base';
import CommentCard from '@components/cards/comment';
import './post.css'

interface Content {
	title?: string;
	date: string;
	author?: string;
	slug: string;
	renderedHtml: {
		__html: string;
	}
}

export default async function Post(req) {
	const validSlugs = await getPostSlugs()
	let pageSlug = '404'
	for (const slug of validSlugs) {
		if (req.params.slug == slug) {
			pageSlug = slug
		}
	}
	const postContent: Content = await getPostData(pageSlug)
	return (
		<main className="bg-ctp-base min-h-screen max-w-screen">
			<BaseCard>
				<h1 className='text-ctp-text text-center text-3xl font-bold py-4 px-2'>{postContent.title}</h1>
				<div className='flex justify-between px-4 py-2'>
					<p className='text-ctp-text text-md font-bold'>{postContent.date}</p>
					<p className='text-ctp-text text-md font-bold'>{postContent.author}</p>
				</div>
				<div dangerouslySetInnerHTML={postContent.renderedHtml} className='text-ctp-text' id='postContent' />
				<CommentCard />
			</BaseCard>
		</main>
	)
}