import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { format } from 'date-fns';
import { createRestAPIClient } from "masto";

//unified JS stuff for markdown parsing
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import remarkGemoji from 'remark-gemoji';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import {all} from 'lowlight';


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

  //Parse Markdown, do fancy stuff, code highlighting, etc
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGemoji)
    .use(remarkHtml, { sanitize: false })
    .use(remarkRehype)
    .use (rehypeHighlight, {languages: {...all}})
    .use(rehypeStringify)
    .process(matterResult.content);

    const date = format(matterResult.data.date, 'do LLL. yyyy h:mm a');

  const renderedHtml = { __html: processedContent.toString()}
  // Combine the data with the id
  return {
    slug,
    renderedHtml,
    ...matterResult.data,
    date,
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

export async function getMastodonPosts() {
  // This is a placeholder for now, but will be used to fetch Mastodon posts in the future.
  return <div></div>
}