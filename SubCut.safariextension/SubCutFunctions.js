// Open subreddit in a new tab if newTab == true
function goToSubreddit(newTab) {
  var sub = document.getElementById("subreddit").value;
  var subredditStem;
  if (safari.extension.settings.useHttps) {
    subredditStem = "https://reddit.com/r/";
  }
  else {
    subredditStem = "http://reddit.com/r/";
  }
  if (!newTab) {
    safari.application.activeBrowserWindow.activeTab.url = subredditStem + sub;
  }
  else {
    var newTab = safari.application.activeBrowserWindow.openTab();
    newTab.url = subredditStem + sub;
  }
  safari.self.hide();
}

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    goToSubreddit(safari.extension.settings.enterNewTab);
  }
});
