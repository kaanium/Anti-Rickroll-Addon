function checkSite(a)
{
	return (  a === "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
				|| a === "https://www.youtube.com/watch?app=desktop&v=dQw4w9WgXcQ#menu"
				|| a === "https://www.youtube.com/watch?v=ub82Xb1C8os"
				|| a === "https://youtu.be/dQw4w9WgXcQ"
				|| a === "https://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtu.be"
				|| a === "https://www.youtube.com/watch?v=ub82Xb1C8os&feature=youtu.be"
				|| a === "https://www.youtube.com/watch?v=iik25wqIuFo&feature=youtu.be"
				|| a === "https://www.youtube.com/watch?v=oHg5SJYRHA0&feature=youtu.be"
				|| a === "https://www.youtube.com/watch?v=oHg5SJYRHA0"
				|| a === "https://www.youtube.com/watch?v=iik25wqIuFo"
				|| a.substring(0, 22) === "https://nedaugha.buzz/"
				|| a.substring(0, 26) === "https://stonordersity.xyz/");
}

chrome.tabs.onActivated.addListener(function() {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    if (checkSite(tabs[0].url))
		chrome.tabs.remove(tabs[0].id);
	});
});

chrome.tabs.onUpdated.addListener(function() {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    if (checkSite(tabs[0].url))
		chrome.tabs.remove(tabs[0].id);
	});
});

chrome.tabs.onCreated.addListener(function() {
	chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    if (checkSite(tabs[0].url))
		chrome.tabs.remove(tabs[0].id);
	});
});