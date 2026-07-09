# Google Sheets setup

Target spreadsheet:
https://docs.google.com/spreadsheets/d/1a1X9ediHP77v_XPkWLjjUdOi2-H8KKLFRg1VaQ0s8UU/edit?hl=ko&pli=1&gid=0#gid=0

## 1. Create Apps Script

1. Open the Google Sheet.
2. Go to Extensions > Apps Script.
3. Replace Code.gs with apps-script/Code.gs from this project.
4. Save the script.

The script creates a tab named WeeklyWork and header columns:
id, title, owner, due, status, priority, memo, createdAt, updatedAt

## 2. Deploy as web app

1. Click Deploy > New deployment.
2. Select Web app.
3. Execute as: Me.
4. Who has access: Anyone.
5. Copy the web app URL ending in /exec.

## 3. Connect the board

Open index.html and replace:
const GOOGLE_SCRIPT_URL = "";

With:
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/xxxx/exec";

Refresh the board. The sync bar should show Google Sheets sync complete.

## 4. Cloudflare Pages settings

Repository: tommypagychoi/logoscloud
Root directory: weekly-work-board
Framework preset: None
Build command: leave blank
Build output directory: /
Custom domain: www.logoscloud.kr

WHOIS DNS:
Type CNAME, Host www, Value: the *.pages.dev value Cloudflare shows.

## Required access

- Google Sheet owner/editor access
- Apps Script deployment permission
- GitHub repository access
- Cloudflare account
- WHOIS DNS edit permission

Note: Codex Google Drive connector currently receives 403 permission denied for this sheet, so the Apps Script deployment should be done from the Google account that owns or can edit the sheet.
