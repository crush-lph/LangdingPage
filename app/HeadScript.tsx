import Script from "next/script";

export default function HeadScript() {
  return (
    <>
      {/* Google */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11100615749" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11159253980" />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-GD8ST04HB5" />
      <Script id="google_track">
        {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'AW-11100615749');
            gtag('config', 'AW-11159253980');
            gtag('config', 'G-GD8ST04HB5');
        `}
      </Script>

      {/* Bing */}
      <Script id="bing_track">
        {` (function (w, d, t, r, u) {
          var f, n, i;
          (w[u] = w[u] || []),
          (f = function () {
          var o = { ti: '343104444', enableAutoSpaTracking: true };
          (o.q = w[u]), (w[u] = new UET(o)), w[u].push('pageLoad');
        }),
            (n = d.createElement(t)),
            (n.src = r),
            (n.async = 1),
            (n.onload = n.onreadystatechange =
            function () {
            var s = this.readyState;
            (s && s !== 'loaded' && s !== 'complete') || (f(), (n.onload = n.onreadystatechange = null));
        }),
          (i = d.getElementsByTagName(t)[0]),
          i.parentNode.insertBefore(n, i);
      })(window, document, 'script', '//bat.bing.com/bat.js', 'uetq');`}
      </Script>

      {/* Facebook */}
      <Script></Script>
    </>
  );
}
