# Deploy weekly work board

## GitHub

Repository:
https://github.com/tommypagychoi/logoscloud

This board is stored under:
weekly-work-board/

## Cloudflare Pages

Create a Cloudflare Pages project from the GitHub repository.

Recommended settings:

- Repository: tommypagychoi/logoscloud
- Root directory: weekly-work-board
- Framework preset: None
- Build command: leave blank
- Build output directory: /

If Cloudflare asks for an output directory relative to the root directory, use:
/

## Custom domain

Add this custom domain in Cloudflare Pages:
www.logoscloud.kr

Cloudflare will show a target similar to:
logos-weekly-work-board.pages.dev

## WHOIS DNS

In WHOIS DNS management, add or update:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | www | the *.pages.dev value from Cloudflare |

Open the site after DNS propagation:
https://www.logoscloud.kr

## Google Sheets

Before production use, follow GOOGLE_SHEETS_SETUP.md and set GOOGLE_SCRIPT_URL in index.html.

Until GOOGLE_SCRIPT_URL is set, the board uses local browser storage only.
