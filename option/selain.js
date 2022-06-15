
function bukaURL(){
  function onUpdated(tab) {
  window.close()
  console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

var updating = browser.tabs.update({url: 'https://simpeg.kemenkumham.go.id'});
updating.then(onUpdated, onError);

}
document.getElementById("aktifDisable").addEventListener("click", bukaURL);