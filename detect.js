// List URLs that play Rick Astley's Never Gonna Give You Up.
// Links to these URLs will considered Rick Roll attemps.
const rickRollUrls = [
	"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	"https://www.youtube.com/watch?v=eBGIQ7ZuuiU",
	"https://www.youtube.com/watch?v=xm3YgoEiEDc"
]

// List words that are included in legitmate Rick Roll links.
// Links that are actually pointing to the video without tricking the user.
const whiteListWords = [
	"Rick Astley",
	"Never Gonna Give You Up",
]

// Detect Rick Roll URLs on the current page.
// Detected link are prefixed with a "RICK ROLL WARNING" text.
rickRollUrls.forEach(url => {
	// Select <a> elements with href set to a rick roll URL
	const linkEls = document.querySelectorAll(`a[href='${url}']`)

	// Add prefix warning text to link if Rick Roll attempt
	let numRickRollAttemps = 0
	linkEls.forEach(linkEl => {
		console.log(linkEl.innerHTML)
		if (isLegitimateLink(linkEl)) return // Exclude legitimate links
		linkEl.innerText = `RICK ROLL WARNING: ${linkEl.innerText}`
		numRickRollAttemps++
	})
	if (numRickRollAttemps == 0) return
	notifyRickRollAttempt(numRickRollAttemps)
})

// Simple utility function to check if a link's inner text includes some of the whitelisted words.
function isLegitimateLink(linkEl) {
	whiteListWords.forEach(whiteListWord => {
		if (linkEl.innerText.includes(whiteListWord)) return true
	})
	return false
}

function notifyRickRollAttempt(numRickRollAttemps) {
	console.log("RICK ROLL WARNING!!!")
	console.log(`${numRickRollAttemps} Rick Roll attempt(s) have been detected on this page.`)
}