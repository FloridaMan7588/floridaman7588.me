export default function sitemap() {
	return [
		{
			url: 'https://floridaman7588.me',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://floridaman7588.me/blog',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		}
	]
}