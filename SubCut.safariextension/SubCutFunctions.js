// Open subreddit in a new tab if newTab == true
function goToSubreddit(newTab) {
  var sub = document.getElementById("subreddit").value;
  const subredditStem = "http://reddit.com/r/";
  if (!newTab) {
    safari.application.activeBrowserWindow.activeTab.url = subredditStem + sub;
  }
  else {
    var newTab = safari.application.activeBrowserWindow.openTab();
    newTab.url = subredditStem + sub;
  }
  safari.self.hide();
}
