import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { format } from 'date-fns';

import PostCard from '@/app/components/cards/postcard.jsx';
import { generateRssFeed } from '@/app/lib/rss.js';

/* A lot of this comes from the Next.JS tutorial, and has been adapted to work with App Routing in Next14.
See https://nextjs.org/learn/basics/data-fetching for more info*/

const postsDirectory = path.join(process.cwd(), 'content/posts/');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      slug,
      ...matterResult.data,
    };
  }); 
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
  });
}


export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}


export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(matterResult.content);

  const renderedHtml = { __html: processedContent.toString()}
  // Combine the data with the id
  return {
    slug,
    renderedHtml,
    ...matterResult.data,
  };
}

export async function getPosts() {

  const postData = await getSortedPostsData()
  await generateRssFeed()

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
  return postList;
}