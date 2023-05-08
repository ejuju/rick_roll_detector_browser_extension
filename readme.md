# Protect yourself from Rick Rolls

This extension will add a warning text before links to Rick Astley's Never Gonna Give You Up.

Todo:
- [ ] CI/CD
- [ ] Settings page to add custom whitelist words and rick roll URLs to check
- [ ] Add button to disable checks on a page
- [ ] Show alert notification when at least one Rick Roll attempt is detected on the current page
- [ ] Add manifest icon(s)

Build:
```bash
zip -9 -r rick_roll_detector.zip manifest.json detect.js assets/icon_48x48.jpg
```