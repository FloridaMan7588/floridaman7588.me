import { checkRedirect } from "@lib/shorturls"

export default function Redirector(req) {
	const destination = checkRedirect(req.params.shorturl)
	return (
			<meta httpEquiv="refresh" content={`0;url=${destination}`} />
	)
}