import { checkRedirect } from "@lib/shorturls"

export default function Redirector(req) {
	const destination = checkRedirect(req.params.shorturl)
	if (destination == undefined) {
		return (
			<meta httpEquiv="refresh" content='0;url=/404' />
		)
	}
	return (
		<meta httpEquiv="refresh" content={`0;url=${destination}`} />
	)
}