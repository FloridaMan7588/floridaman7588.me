import { getAllPostSlugs, getPostData } from '@/app/lib/posts';
import BaseCard from '@/app/components/cards/basecard';
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
		<main className="bg-base min-h-screen max-w-screen">
			<BaseCard>
			<h1 className='text-text text-center text-3xl font-bold py-4 px-2'>{postContent.title}</h1>
			<div dangerouslySetInnerHTML={ postContent.renderedHtml } className='text-text' id='postContent'/ >

			</BaseCard>
		</main>
	)
}