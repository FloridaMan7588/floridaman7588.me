import { readFileSync } from 'fs'
import { parse } from 'yaml'

interface Config {
	shorturls: [
		{
			redirect: string;
			target: string;
		}
	]
}

const config: Config = parse(readFileSync('/workspaces/floridaman7588.me/urls.yaml', 'utf8'))

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