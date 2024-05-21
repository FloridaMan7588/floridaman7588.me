import { getAllPostSlugs, getPostData } from '@lib/posts';
import BaseCard from '@components/cards/basecard';
import CommentCard from '@components/cards/commentcard';
import './post.css'

export async function generatreStaticParams() {
	const paths = getAllPostSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getPostContent(params) {
	const postContent = await getPostData(params.slug);
	return postContent
}


export default async function Post(req) {
	const postContent = await getPostContent(req.params)
	return (
		<main className="bg-ctp-base min-h-screen max-w-screen">
			<BaseCard>
				<h1 className='text-ctp-text text-center text-3xl font-bold py-4 px-2'>{postContent.title}</h1>
				<div className='flex justify-between px-4 py-2'>
					<p className='text-ctp-text text-md font-bold'>{postContent.date}</p>
					<p className='text-ctp-text text-md font-bold'>{postContent.author}</p>
				</div>
				<div dangerouslySetInnerHTML={postContent.renderedHtml} className='text-ctp-text' id='postContent' />
				<CommentCard/>
			</BaseCard>
		</main>
	)
}