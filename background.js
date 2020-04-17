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

};




//************************************************************************** run
var bg = simMan.init();


