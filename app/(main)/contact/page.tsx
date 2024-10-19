import BaseCard from '@components/cards/base';
import ContactCard from '@components/cards/contact';

export default async function Contact() {
	return (
		<main className="bg-ctp-base min-h-screen max-w-screen">
			<BaseCard>
				<ContactCard
					title='Contact Me'
					content='Want to get in touch with me? Have a question about something I do? Feel free to reach out to learn about my products, services, or just get to know me!'
					contacts={[
						{ title: 'Email', link: new URL('mailto:me@floridaman7588.me') },
						{ title: 'Mastodon', link: new URL('https://fm7588.me/mastodon') },
						{ title: 'LinkedIn', link: new URL('https://fm7588.me/linkedin') },
						{ title: 'Discord', link: new URL('https://fm7588.me/discord') },
						{ title: 'Full Social List', link: new URL('https://fm7588.me/links') }
					]} />
			</BaseCard>
		</main>
	)
}