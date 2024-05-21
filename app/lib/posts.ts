import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { format, compareDesc } from 'date-fns';

//unified JS stuff for markdown parsing
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import { all } from 'lowlight';


import PostCard from '@components/cards/postcard';
import { generateRssFeed } from '@lib/rss';

/* A lot of this comes from the Next.JS tutorial, and has been adapted to work with App Routing in Next14.
See https://nextjs.org/learn/basics/data-fetching for more info*/

const postsDirectory = path.join(process.cwd(), 'content/posts/');

export async function getSortedBlogsData() {
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

export async function getSortedTootsData() {
  const allTootData = await fetch('https://blahaj.zone/@floridaman.json').then(res => res.json())

  return allTootData.items.sort((a, b) => {
    if (a.date_modified < b.date_modified) {
      return 1;
    }
    if (a.date_modified > b.date_modified) {
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
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .use(remarkRehype)
    .use(rehypeHighlight, { languages: { ...all } })
    .use(rehypeStringify)
    .process(matterResult.content);

  const date = format(matterResult.data.date, 'do LLL. yyyy h:mm a');

  const renderedHtml = { __html: processedContent.toString() }
  // Combine the data with the id
  return {
    slug,
    renderedHtml,
    ...matterResult.data,
    date,
  };
}

export async function getBlogPosts() {

  const postData = await getSortedBlogsData()
  await generateRssFeed()

  const postList = []
  for (const post of postData) {
    const formattedDate = format(post.date, 'do LLL. yyyy h:mm a');
    postList.push(
      <div key={post.slug} className='py-4 px-2'>
        <PostCard
          title={post.title}
          date={post.date.toString()}
          formattedDate={formattedDate}
          author={post.author}
          description={post.description}
          slug={post.slug}
        />
      </div>
    )
  }
  return postList
}

export async function getMastoPosts() {
  const tootData = await getSortedTootsData()
  const postList = []
  for (const toot of tootData)  {
    const formattedDate = format(toot.date_modified, 'do LLL. yyyy h:mm a');
    let text;
    if ( toot.summary ) {
      text = toot.summary
    }
    else {
      text = toot.content_html?.substring(0, 128)
    }
    postList.push(
      <div key={toot.url}>
        <PostCard
        title='New Mastodon Status'
        date={toot.date_modified.toString()}
        formattedDate={formattedDate}
        author='Pascalr (FloridaMan)'
        description={text}
        url={toot.url}
        />
      </div>
    )
  }
  return postList
}


export async function getAllPosts() {
  // Theres probably a better way to do this but this website is already full of nasty hacks
  const blogList = await getBlogPosts()
  const tootList = await getMastoPosts()
  const allPostList = []

  for (const post of blogList) {
    allPostList.push(post)
  }
  for (const post of tootList) {
    allPostList.push(post)
  }
  allPostList.sort((a, b) => compareDesc(new Date(a.props.children.props.date), new Date(b.props.children.props.date)));
  return allPostList
}