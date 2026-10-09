# Reunion Treasurer Made Easy — Website Package

This is a responsive static landing website for the Family Reunion Treasurer Workbook.

## Preview locally

Open `index.html` in a web browser. No build tools are required.

## Files

- `index.html` — landing page and product information
- `styles.css` — responsive styling
- `site.js` — mobile navigation, price labels, checkout button behavior
- `config.js` — product price/currency and checkout link configuration
- `setup-guide.html` — step-by-step launch guide
- `favicon.svg` — small site icon

## Before you publish

1. Confirm that your chosen payment platform can accept you as a seller and pay out to an account you can use in the Cook Islands. PayPal currently lists Cook Islands as send-only in its country table, and Payhip requires a supported connected payment processor; verify the provider before choosing it. See https://developer.paypal.com/platforms/seller-onboarding and https://help.payhip.com/article/173-how-do-i-get-paid.
2. Upload `Family_Reunion_Treasurer_Workbook.xlsx` as a paid digital product on that platform.
3. Copy its secure checkout URL.
4. Open `config.js` and replace the empty `checkoutUrl: ""` with your checkout URL, inside the quotation marks. Update the price/currency there if necessary.
5. Upload only the website files to your hosting provider. Do not put the paid workbook in the public website folder, or anyone may download it without paying.
6. Test on desktop and mobile, then test your checkout and download delivery end-to-end.

The purchase buttons intentionally show a setup message while `checkoutUrl` is blank. This website does not take card details itself and does not yet process payments.

## Hosting

GitHub Pages can host static HTML, CSS and JavaScript. See the official overview: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
