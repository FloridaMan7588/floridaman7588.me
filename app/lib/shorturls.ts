interface Config {
	shorturls: {
			redirect: string;
			target: string;
		}[];
}

const config: Config = {
	shorturls: [
		{
			redirect: "github",
			target: "https://github.com/floridaman7588"
		}
	]
}

export function checkRedirect(shorturl: string): string {
	let destination
	for (const shortnerObject of config.shorturls) {
		if (shorturl == shortnerObject.redirect) {
			destination = shortnerObject.target
		} else {
			destination = '/404'
		}
	}
	return destination
}