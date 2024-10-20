import { checkRedirect } from "@lib/shorturls"

export default function Redirector(req) {
	const destination = checkRedirect(req.params.shorturl)
	console.log(`Redirecting to ${destination}`)
	return (
			<meta httpEquiv="refresh" content={`0;url=${destination}`} />
	)
}