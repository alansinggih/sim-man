function saveOptions(e) {

    // prefs object
    let data = {
        setStatus : document.querySelector('#setStatus').value  || ''
    }

    browser.storage.sync.set(data);

    // reload prefs
    browser.runtime.getBackgroundPage().then((item) => {
        item.simMan.loadData(function(){
            // refresh options
            restoreOptions();
            
        });
        
    });

    e.preventDefault();
    window.close()
}

function restoreOptions() {
    browser.storage.sync.get('setStatus').then((item) => {
        document.querySelector('#setStatus').value = item.setStatus || item.setStatus;
    });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById("setStatus").addEventListener("change", saveOptions);