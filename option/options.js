function saveOptions(e) {

    // prefs object
    let data = {
        setStatus : document.querySelector('#setStatus').value  || 'true'
        ,setNIP    : document.querySelector('#setNIP').value    || ''
        ,setPass : document.querySelector('#setPass').value || ''
        ,setJamPagi : document.querySelector('#setJamPagi').value || ''
        ,setJamSiang : document.querySelector('#setJamSiang').value || ''
        ,setJamMalam : document.querySelector('#setJamMalam').value || ''
        ,setSKP1 : document.querySelector('#setSKP1').value || ''
        ,setSKP2 : document.querySelector('#setSKP2').value || ''
        ,setSKP3 : document.querySelector('#setSKP3').value || ''
        ,setSKP4 : document.querySelector('#setSKP4').value || ''
        ,setSKP5 : document.querySelector('#setSKP5').value || ''
        ,setSKP6 : document.querySelector('#setSKP6').value || ''
        ,setSKP7 : document.querySelector('#setSKP7').value || ''
        ,setSKP8 : document.querySelector('#setSKP8').value || ''
        ,setSKP9 : document.querySelector('#setSKP9').value || ''
        ,setSKP10 : document.querySelector('#setSKP10').value || ''   
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
        document.querySelector('#setStatus').value = item.setStatus || 'true';
    });
    browser.storage.sync.get('setNIP').then((item) => {
        document.querySelector('#setNIP').value = item.setNIP || '';
    });
    browser.storage.sync.get('setPass').then((item) => {
        document.querySelector('#setPass').value = item.setPass || '';
    });
    browser.storage.sync.get('setJamPagi').then((item) => {
        document.querySelector('#setJamPagi').value = item.setJamPagi || '';
    });
    browser.storage.sync.get('setJamSiang').then((item) => {
        document.querySelector('#setJamSiang').value = item.setJamSiang || '';
    });
    browser.storage.sync.get('setJamMalam').then((item) => {
        document.querySelector('#setJamMalam').value = item.setJamMalam || '';
    });

    browser.storage.sync.get('setSKP1').then((item) => {
        document.querySelector('#setSKP1').value = item.setSKP1 || '';
    });
    browser.storage.sync.get('setSKP2').then((item) => {
        document.querySelector('#setSKP2').value = item.setSKP2 || '';
    });
    browser.storage.sync.get('setSKP3').then((item) => {
        document.querySelector('#setSKP3').value = item.setSKP3 || '';
    });
    browser.storage.sync.get('setSKP4').then((item) => {
        document.querySelector('#setSKP4').value = item.setSKP4 || '';
    });
    browser.storage.sync.get('setSKP5').then((item) => {
        document.querySelector('#setSKP5').value = item.setSKP5 || '';
    });
    browser.storage.sync.get('setSKP6').then((item) => {
        document.querySelector('#setSKP6').value = item.setSKP6 || '';
    });
    browser.storage.sync.get('setSKP7').then((item) => {
        document.querySelector('#setSKP7').value = item.setSKP7 || '';
    });
    browser.storage.sync.get('setSKP8').then((item) => {
        document.querySelector('#setSKP8').value = item.setSKP8 || '';
    });
    browser.storage.sync.get('setSKP9').then((item) => {
        document.querySelector('#setSKP9').value = item.setSKP9 || '';
    });
    browser.storage.sync.get('setSKP10').then((item) => {
        document.querySelector('#setSKP10').value = item.setSKP10 || '';
    });
    
    browser.storage.sync.get('setLabel0').then((item) => {
        document.querySelector('#setLabel0').innerHTML = item.setLabel0 || '';
    });
        browser.storage.sync.get('setLabel1').then((item) => {
        document.querySelector('#setLabel1').innerHTML = item.setLabel1 || '';
    });
        browser.storage.sync.get('setLabel2').then((item) => {
        document.querySelector('#setLabel2').innerHTML = item.setLabel2 || '';
    });
        browser.storage.sync.get('setLabel3').then((item) => {
        document.querySelector('#setLabel3').innerHTML = item.setLabel3 || '';
    });
        browser.storage.sync.get('setLabel4').then((item) => {
        document.querySelector('#setLabel4').innerHTML = item.setLabel4 || '';
    });
        browser.storage.sync.get('setLabel5').then((item) => {
        document.querySelector('#setLabel5').innerHTML = item.setLabel5 || '';
    });
        browser.storage.sync.get('setLabel6').then((item) => {
        document.querySelector('#setLabel6').innerHTML = item.setLabel6 || '';
    });
        browser.storage.sync.get('setLabel7').then((item) => {
        document.querySelector('#setLabel7').innerHTML = item.setLabel7 || '';
    });
        browser.storage.sync.get('setLabel8').then((item) => {
        document.querySelector('#setLabel8').innerHTML = item.setLabel8 || '';
    });
        browser.storage.sync.get('setLabel9').then((item) => {
        document.querySelector('#setLabel9').innerHTML = item.setLabel9 || '';
    });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions);