//************************************************************* class definition
var simMan = {
    /***************************************************************************
    props
    ***/
    enabled                     : false
    ,setPassEnabled             : false
    ,data                      : {} // holds user data
    ,transactions               : {} // contains requests/responses
    /***************************************************************************
    init
    ***/
    ,init : function() {

        // toggle activation on button click
        browser.browserAction.onClicked.addListener(function(){
            simMan.toggle();
        });

        // load data
        simMan.loadData(function(){
            // enact enabled at startup
            if(simMan.data.setStatus) {
                simMan.toggle(true);
            }

            // update button
            simMan.updateButton();
        });
        
        browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
                      const filter = "https://simpeg.kemenkumham.go.id/*";
                      if (!tab.url.match(filter)) {
                        browser.browserAction.setTitle({title:'Simpeg - Url Tidak Support'})
                        browser.browserAction.setIcon({path:{48:'icons/bs128-nosupport.png'}});
                        browser.browserAction.setPopup({popup: "option/selain.html"})
                      }
        })
        browser.runtime.onMessage.addListener(simMan.handleMessage);
        return this;
    }


    /***************************************************************************
    toggle
    ***/
    ,toggle : function(state) {

        // set state by input
        if(typeof state === 'boolean') {
            simMan.enabled = state;
        }
        // set state by toggle
        else {
            simMan.enabled = !simMan.enabled;
        }

        // update button
        simMan.updateButton();


        // add observer, observe http responses
        if(simMan.enabled) {

        }

        // remove observer
        else {


        }

        return this;
    } 

    /***************************************************************************
    re/load preferences
    Because fetching data returns a promise, we use a callback to do stuff when
    the promise is fullfilled.
    ***/
    ,loadData : function(callback) {

        browser.storage.sync.get([
            'setStatus',
            'setNIP',
            'setPass',
            'setJamPagi',
            'setJamSiang',
            'setJamMalam',
            'sisaSKP',
            'setSKP1',
            'setSKP2',
            'setSKP3',
            'setSKP4',
            'setSKP5',

        ]).then((item) => {

            // get data, set default value if n/a
            simMan.data.setStatus    = item.setStatus    || 'true';
            simMan.data.setNIP        = item.setNIP        || '';
            simMan.data.setPass = item.setPass || '';
            simMan.data.setJamPagi = item.setJamPagi || '';
            simMan.data.setJamSiang = item.setJamSiang || '';            
            simMan.data.setJamMalam = item.setJamMalam || '';
            simMan.data.sisaSKP = item.sisaSKP || '';
            simMan.data.setSKP1 = item.setSKP1 || '';
            simMan.data.setSKP2 = item.setSKP2 || '';
            simMan.data.setSKP3 = item.setSKP3 || '';
            simMan.data.setSKP4 = item.setSKP4 || '';
            simMan.data.setSKP5 = item.setSKP5 || '';

            // parse activation whitelist
            simMan.data.setPass = simMan.data.setPass
                ? simMan.data.setPass.split(/[\r\n]+/)
                : [];

            simMan.setPassEnabled = simMan.data.setPass.length > 0
                ? true
                : false;
            browser.tabs.reload();

            
            if(callback) {
                callback();
            }
        });

        return this;
    }

    /***************************************************************************
    updateButton
    ***/
    ,updateButton : function() {

        // icon
        let buttonStatus = simMan.enabled ? 'on' : 'off';

        // tooltip text
        let buttonTitle = simMan.enabled
            ? 'Sim-Man Aktif'
            : 'Sim-Man Tidak Aktif';

        // using activation whitelist while enabled
        if(simMan.enabled && simMan.setPassEnabled) {
            buttonStatus =  'SKP Oto Aktif';
            buttonTitle  += ' (setting SKP di option)';
        }

        // proceed
        browser.browserAction.setIcon({path:{48:'icons/bs48-'+buttonStatus+'.png'}});
        browser.browserAction.setTitle({title:buttonTitle});

        return this;
    }
    ,handleMessage : function (request, sender, sendResponse) {
            let greeting = request.greeting;
            function onError(error) {
                console.log(`Error: ${error}`);
            }
            if(greeting === "BukanTarget"){
                browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
                   if (tab.url.match(/^about:/)) {
                    var cekMob = "Simpeg Custom Nonaktif"
                    browser.browserAction.setTitle({title:cekMob})
                    browser.browserAction.setIcon({path:{48:'icons/bs128-off.png'}});
                    browser.browserAction.setPopup({popup: "option/selain.html"})                    
                   }else{
                    var cekMob = "Simpeg Custom Nonaktif"
                    browser.browserAction.setTitle({title:cekMob})
                    browser.browserAction.setIcon({path:{48:'icons/bs128-off.png'}});
                    browser.browserAction.setPopup({popup: "option/inactive.html"})
                   }
                })
                var cekMob = "Simpeg Custom Nonaktif"
                browser.browserAction.setTitle({title:cekMob})
                browser.browserAction.setIcon({path:{48:'icons/bs128-off.png'}});
                browser.browserAction.setPopup({popup: "option/inactive.html"})
            }else{
                if(greeting === "skp_journal"){
                   //var insertingCSS = browser.tabs.insertCSS({file: "css/Dekstop.css"});
                                       //insertingCSS.then(null, onError);
 
                    browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

                            const filter = "https://simpeg.kemenkumham.go.id/*";
                            if (!tab.url.match(filter)) {
                                browser.browserAction.setTitle({title:'Simpeg - Url Tidak Support'})
                                browser.browserAction.setIcon({path:{48:'icons/bs128-nosupport.png'}});
                                browser.browserAction.setPopup({popup: "option/selain.html"})
                            }else{
                                var cekMob = "Simpeg Custom V.Dekstop"
                                browser.browserAction.setTitle({title:cekMob})
                                browser.browserAction.setIcon({path:{48:'icons/bs128.png'}});
                                browser.browserAction.setPopup({popup: "option/options.html"})
                               // var insertingCSS = browser.tabs.insertCSS({file: "css/Dekstop.css"});
                                      // insertingCSS.then(null, onError);
                            }

                  })
                }else if(greeting === "selain_skp_journal"){
                    browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {

                            const filter = "https://simpeg.kemenkumham.go.id/*";
                            if (!tab.url.match(filter)) {
                                var cekMob = tab.url
                                browser.browserAction.setTitle({title:'Simpeg - Url Tidak Support'})
                                browser.browserAction.setIcon({path:{48:'icons/bs128-nosupport.png'}});
                                browser.browserAction.setPopup({popup: "option/selain.html"})
                            }else{
                                var cekMob = "Simpeg Custom V.Dekstop"
                                browser.browserAction.setTitle({title:cekMob})
                                browser.browserAction.setIcon({path:{48:'icons/bs128.png'}});
                                browser.browserAction.setPopup({popup: "option/options.html"})
                            }

                    })
                }else if(greeting){
                    var cekMob = "Setting Simpeg Custom"
                    browser.browserAction.setTitle({title:cekMob})
                    var removeCSS = browser.tabs.removeCSS({file: "css/Dekstop.css"});
                                    removeCSS.then(null, onError); 
                    var insertingCSS = browser.tabs.insertCSS({file: "css/Mobile.css"});
                                       insertingCSS.then(null, onError);
 
                    if(greeting === "SurveiCovid19"){
                        var cekMob = "Setting Simpeg Custom - SurveiCovid19"
                        browser.browserAction.setTitle({title:cekMob})
                        var removeCSS = browser.tabs.removeCSS({file: "css/Dekstop.css"});
                                    removeCSS.then(null, onError); 
                        var insertingCSS = browser.tabs.insertCSS({file: "css/survei.css"});
                                           insertingCSS.then(null, onError);
                    }else{
                        var cekMob = "Setting Simpeg Custom"
                        browser.browserAction.setTitle({title:cekMob})
                        var removeCSSD = browser.tabs.removeCSS({file: "css/Dekstop.css"});
                                    removeCSSD.then(null, onError); 
                        var removeCSS = browser.tabs.removeCSS({file: "css/survei.css"});
                                        removeCSS.then(null, onError);
                    }
               }
            }
        sendResponse({response : greeting})
    }

};


//************************************************************************** run
var bg = simMan.init();
