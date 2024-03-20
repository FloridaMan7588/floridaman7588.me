import Script from "next/script";

export default function CommentCard({}) {
  return (
    <figure>
      <div className="bg-crust rounded-[45px] min-w-content">
        <div id="disqus_thread"></div>
        <Script id="disqus-script">
          {`
						var disqus_config = function () {
						this.page.url = PAGE_URL;
						this.page.identifier = req.params.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
						};
						(function() { // DON'T EDIT BELOW THIS LINE
							var d = document, s = d.createElement('script');
							s.src = 'https://floridaman7588.disqus.com/embed.js';
							s.setAttribute('data-timestamp', +new Date());
							(d.head || d.body).appendChild(s);
						})();
					`}
        </Script>
        <noscript>
          Please enable JavaScript to view the{" "}
          <a href="https://disqus.com/?ref_noscript">
            comments powered by Disqus.
          </a>
        </noscript>
      </div>
    </figure>
  );
}
