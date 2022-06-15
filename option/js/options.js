function saveOptions(e) {
   // prefs object
    let data = {
        setStatus : document.querySelector('#setStatus').value  || 'true'
        ,setMode : document.querySelector('#setMode').value  || 'penjagaan'
        ,setNIP    : document.querySelector('#setNIP').value    || ''
		,setOtoLogin : document.getElementById('auto').checked
        ,setPass : document.querySelector('#setPass').value || ''
        ,setJamPagi : document.querySelector('#setJamPagi').value || ''
        ,setJamSiang : document.querySelector('#setJamSiang').value || ''
        ,setJamMalam : document.querySelector('#setJamMalam').value || ''
        ,codeSKP : document.querySelector('#codeSKP').value || ''
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
        ,setSKP11 : document.querySelector('#setSKP11').value || ''
        ,setSKP12 : document.querySelector('#setSKP12').value || ''
        ,setSKP13 : document.querySelector('#setSKP13').value || ''
        ,setSKP14 : document.querySelector('#setSKP14').value || ''
        ,setSKP15 : document.querySelector('#setSKP15').value || ''
        ,setSKP16 : document.querySelector('#setSKP16').value || ''
        ,setSKP17 : document.querySelector('#setSKP17').value || ''
        ,setSKP18 : document.querySelector('#setSKP18').value || ''
        ,setSKP19 : document.querySelector('#setSKP19').value || ''
        ,setSKP20 : document.querySelector('#setSKP20').value || ''
        ,setNM : document.querySelector('#nm').value || ''
        ,setNP : document.querySelector('#np').value || ''
        ,setJamPagiH : document.querySelector('#setJamPagi').style.height
        ,setJamSiangH : document.querySelector('#setJamSiang').style.height
        ,setJamMalamH : document.querySelector('#setJamMalam').style.height 
        ,setSKP1H : document.querySelector('#setSKP1').style.height 
        ,setSKP2H : document.querySelector('#setSKP2').style.height 
        ,setSKP3H : document.querySelector('#setSKP3').style.height 
        ,setSKP4H : document.querySelector('#setSKP4').style.height 
        ,setSKP5H : document.querySelector('#setSKP5').style.height 
        ,setSKP6H : document.querySelector('#setSKP6').style.height 
        ,setSKP7H : document.querySelector('#setSKP7').style.height 
        ,setSKP8H : document.querySelector('#setSKP8').style.height 
        ,setSKP9H : document.querySelector('#setSKP9').style.height 
        ,setSKP10H : document.querySelector('#setSKP10').style.height
        ,setSKP11H : document.querySelector('#setSKP11').style.height
        ,setSKP12H : document.querySelector('#setSKP12').style.height 
        ,setSKP13H : document.querySelector('#setSKP13').style.height 
        ,setSKP14H : document.querySelector('#setSKP14').style.height 
        ,setSKP15H : document.querySelector('#setSKP15').style.height 
        ,setSKP16H : document.querySelector('#setSKP16').style.height 
        ,setSKP17H : document.querySelector('#setSKP17').style.height
        ,setSKP18H : document.querySelector('#setSKP18').style.height
        ,setSKP19H : document.querySelector('#setSKP19').style.height
        ,setSKP20H : document.querySelector('#setSKP20').style.height
        ,setNMH : document.querySelector('#nm').style.height
        ,setNPH : document.querySelector('#np').style.height
    }
	
	browser.storage.sync.set(data);

    // reload prefs
    browser.runtime.getBackgroundPage().then((item) => {
        item.simMan.loadData(function(){
            // refresh options
            restoreOptions();
            
        });
        
    });
    mode()
    e.preventDefault();    
    browser.tabs.query({currentWindow: true, active: true}).then((tabs) => {
        let tab = tabs[0]; // Safe to assume there will only be one result
        console.log(tab.url);
        browser.tabs.update({url: ''+tab.url+''})
        window.close()
    }, console.error), 

    window.close()
	
}

function restoreOptions() {
    browser.storage.sync.get('setStatus').then((item) => {
        document.querySelector('#setStatus').value = item.setStatus || 'true';
    });
    browser.storage.sync.get('setMode').then((item) => {
        document.querySelector('#setMode').value = item.setMode || 'penjagaan';
    });
    browser.storage.sync.get('setNIP').then((item) => {
        document.querySelector('#setNIP').value = item.setNIP || '';
    });
    browser.storage.sync.get('setOtoLogin').then((item) => {	
		document.querySelector('#auto').checked = item.setOtoLogin;
	});
    browser.storage.sync.get('setPass').then((item) => {
        document.querySelector('#setPass').value = item.setPass || '';
    });
    browser.storage.sync.get('setJamPagi').then((item) => {
        document.querySelector('#setJamPagi').value = item.setJamPagi || '07:30 - 11:30\n08:01 - 08:45\n09:01 - 10:01\n09:01 - 11:01\n11:01 - 11:45\n13:01 - 14:01\n13:01 - 15:01';
    });
    browser.storage.sync.get('setJamSiang').then((item) => {
        document.querySelector('#setJamSiang').value = item.setJamSiang || '';
    });
    browser.storage.sync.get('setJamMalam').then((item) => {
        document.querySelector('#setJamMalam').value = item.setJamMalam || '';
    });
    browser.storage.sync.get('codeSKP').then((item) => {
        document.querySelector('#codeSKP').value = item.codeSKP || '';
    });
    browser.storage.sync.get('setSKP1').then((item) => {
        document.querySelector('#setSKP1').value = item.setSKP1 || 'SKP KE 1 - rincian jurnal ke 1 (enter 2x untuk menambah rincian ke2\n\nRincian ke2\n\nRincian ke3\n\ndst)';
    });
    browser.storage.sync.get('setSKP2').then((item) => {
        document.querySelector('#setSKP2').value = item.setSKP2 || 'SKP KE 2 - rincian jurnal ke 1 (enter 2x untuk menambah rincian ke2\n\nRincian ke2\n\nRincian ke3\n\ndst';
    });
    browser.storage.sync.get('setSKP3').then((item) => {
        document.querySelector('#setSKP3').value = item.setSKP3 || 'SKP KE 3 - rincian jurnal ke 1 (enter 2x untuk menambah rincian ke2\n\nRincian ke2\n\nRincian ke3\n\ndst';
    });
    browser.storage.sync.get('setSKP4').then((item) => {
        document.querySelector('#setSKP4').value = item.setSKP4 || 'SKP KE 4 - rincian jurnal ke 1 (enter 2x untuk menambah rincian ke2\n\nRincian ke2\n\nRincian ke3\n\ndst';
    });
    browser.storage.sync.get('setSKP5').then((item) => {
        document.querySelector('#setSKP5').value = item.setSKP5 || 'SKP KE 5 - rincian jurnal ke 1 (enter 2x untuk menambah rincian ke2\n\nRincian ke2\n\nRincian ke3\n\ndst';
    });
    browser.storage.sync.get('setSKP6').then((item) => {
        document.querySelector('#setSKP6').value = item.setSKP6 || 'SKP KE 6 - rincian jurnal ke 1 (enter 2x untuk menambah rincian ke2\n\nRincian ke2\n\nRincian ke3\n\ndst';
    });
    browser.storage.sync.get('setSKP7').then((item) => {
        document.querySelector('#setSKP7').value = item.setSKP7 || 'SKP KE 7 - rincian jurnal ke 1 (enter 2x untuk menambah rincian ke2\n\nRincian ke2\n\nRincian ke3\n\ndst';
    });
    browser.storage.sync.get('setSKP8').then((item) => {
        document.querySelector('#setSKP8').value = item.setSKP8 || 'dst';
    });
    browser.storage.sync.get('setSKP9').then((item) => {
        document.querySelector('#setSKP9').value = item.setSKP9 || 'dst';
    });
    browser.storage.sync.get('setSKP10').then((item) => {
        document.querySelector('#setSKP10').value = item.setSKP10 || 'dst';
    });
    browser.storage.sync.get('setSKP11').then((item) => {
        document.querySelector('#setSKP11').value = item.setSKP11 || 'dst';
    });
    browser.storage.sync.get('setSKP12').then((item) => {
        document.querySelector('#setSKP12').value = item.setSKP12 || 'dst';
    });
    browser.storage.sync.get('setSKP13').then((item) => {
        document.querySelector('#setSKP13').value = item.setSKP13 || 'dst';
    });
    browser.storage.sync.get('setSKP14').then((item) => {
        document.querySelector('#setSKP14').value = item.setSKP14 || 'dst';
    });
    browser.storage.sync.get('setSKP15').then((item) => {
        document.querySelector('#setSKP15').value = item.setSKP15 || 'dst';
    });
    browser.storage.sync.get('setSKP16').then((item) => {
        document.querySelector('#setSKP16').value = item.setSKP16 || 'dst';
    });
    browser.storage.sync.get('setSKP17').then((item) => {
        document.querySelector('#setSKP17').value = item.setSKP17 || 'dst';
    });
    browser.storage.sync.get('setSKP18').then((item) => {
        document.querySelector('#setSKP18').value = item.setSKP18 || 'dst';
    });
    browser.storage.sync.get('setSKP19').then((item) => {
        document.querySelector('#setSKP19').value = item.setSKP19 || 'dst';
    });
    browser.storage.sync.get('setSKP20').then((item) => {
        document.querySelector('#setSKP20').value = item.setSKP20 || 'dst';
    });
        browser.storage.sync.get('setNM').then((item) => {
        document.querySelector('#nm').value = item.setNM || '';
    });
    browser.storage.sync.get('setNP').then((item) => {
        document.querySelector('#np').value = item.setNP || '';
    });
	
	
	 browser.storage.sync.get('setJamPagiH').then((item) => {
        document.querySelector('#setJamPagi').style.height = item.setJamPagiH;
    });
    browser.storage.sync.get('setJamSiangH').then((item) => {
        document.querySelector('#setJamSiang').style.height = item.setJamSiangH ;
    });
    browser.storage.sync.get('setJamMalamH').then((item) => {
        document.querySelector('#setJamMalam').style.height = item.setJamMalamH;
    });
    browser.storage.sync.get('setSKP1H').then((item) => {
        document.querySelector('#setSKP1').style.height = item.setSKP1H ;
    });
    browser.storage.sync.get('setSKP2H').then((item) => {
        document.querySelector('#setSKP2').style.height = item.setSKP2H ;
    });
    browser.storage.sync.get('setSKP3H').then((item) => {
        document.querySelector('#setSKP3').style.height= item.setSKP3H ;
    });
    browser.storage.sync.get('setSKP4H').then((item) => {
        document.querySelector('#setSKP4').style.height = item.setSKP4H ;
    });
    browser.storage.sync.get('setSKP5H').then((item) => {
        document.querySelector('#setSKP5').style.height = item.setSKP5H ;
    });
    browser.storage.sync.get('setSKP6H').then((item) => {
        document.querySelector('#setSKP6').style.height = item.setSKP6H ;
    });
    browser.storage.sync.get('setSKP7H').then((item) => {
        document.querySelector('#setSKP7').style.height = item.setSKP7H ;
    });
    browser.storage.sync.get('setSKP8H').then((item) => {
        document.querySelector('#setSKP8').style.height = item.setSKP8H ;
    });
    browser.storage.sync.get('setSKP9H').then((item) => {
        document.querySelector('#setSKP9').style.height = item.setSKP9H ;
    });
    browser.storage.sync.get('setSKP10H').then((item) => {
        document.querySelector('#setSKP10').style.height = item.setSKP10H ;
    });
    browser.storage.sync.get('setSKP11H').then((item) => {
        document.querySelector('#setSKP11').style.height = item.setSKP11H ;
    });
    browser.storage.sync.get('setSKP12H').then((item) => {
        document.querySelector('#setSKP12').style.height = item.setSKP12H ;
    });
    browser.storage.sync.get('setSKP13H').then((item) => {
        document.querySelector('#setSKP13').style.height = item.setSKP13H ;
    });
    browser.storage.sync.get('setSKP14H').then((item) => {
        document.querySelector('#setSKP14').style.height = item.setSKP14H ;
    });
    browser.storage.sync.get('setSKP15H').then((item) => {
        document.querySelector('#setSKP15').style.height = item.setSKP15H ;
    });
    browser.storage.sync.get('setSKP16H').then((item) => {
        document.querySelector('#setSKP16').style.height = item.setSKP16H ;
    });
    browser.storage.sync.get('setSKP17H').then((item) => {
        document.querySelector('#setSKP17').style.height = item.setSKP17H ;
    });
    browser.storage.sync.get('setSKP18H').then((item) => {
        document.querySelector('#setSKP18').style.height = item.setSKP18H ;
    });
    browser.storage.sync.get('setSKP19H').then((item) => {
        document.querySelector('#setSKP19').style.height = item.setSKP19H ;
    });
    browser.storage.sync.get('setSKP20H').then((item) => {
        document.querySelector('#setSKP20').style.height = item.setSKP20H ;
    });
        browser.storage.sync.get('setNMH').then((item) => {
        document.querySelector('#nm').style.height = item.setNMH ;
    });
    browser.storage.sync.get('setNPH').then((item) => {
        document.querySelector('#np').style.height = item.setNPH ;
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
        browser.storage.sync.get('setLabel10').then((item) => {
        document.querySelector('#setLabel10').innerHTML = item.setLabel10 || '';
    });
        browser.storage.sync.get('setLabel1').then((item) => {
        document.querySelector('#setLabel11').innerHTML = item.setLabel11 || '';
    });
        browser.storage.sync.get('setLabel12').then((item) => {
        document.querySelector('#setLabel12').innerHTML = item.setLabel12 || '';
    });
        browser.storage.sync.get('setLabel13').then((item) => {
        document.querySelector('#setLabel13').innerHTML = item.setLabel13 || '';
    });
        browser.storage.sync.get('setLabel14').then((item) => {
        document.querySelector('#setLabel14').innerHTML = item.setLabel14 || '';
    });
        browser.storage.sync.get('setLabel15').then((item) => {
        document.querySelector('#setLabel15').innerHTML = item.setLabel15 || '';
    });
        browser.storage.sync.get('setLabel16').then((item) => {
        document.querySelector('#setLabel16').innerHTML = item.setLabel16 || '';
    });
        browser.storage.sync.get('setLabel17').then((item) => {
        document.querySelector('#setLabel17').innerHTML = item.setLabel17 || '';
    });
        browser.storage.sync.get('setLabel18').then((item) => {
        document.querySelector('#setLabel118').innerHTML = item.setLabel18 || '';
    });
        browser.storage.sync.get('setLabel19').then((item) => {
        document.querySelector('#setLabel19').innerHTML = item.setLabel19 || '';
    });
        browser.storage.sync.get('infoCodeSKP').then((item) => {
        document.querySelector('#infoCodeSKP').innerHTML = item.infoCodeSKP || '';
    });

    mode()
}

function simpanAtribut(element){
	return element.style.height;
}


function mode(){
    browser.storage.sync.get([
   'setMode'
]).then((item) => {
   var status = document.getElementById("setMode")
   var ha1 = document.getElementsByTagName("h1")

   if(item.setMode === "penjagaan" || status.value === "penjagaan"){

        document.getElementById("setJamSiang").style.display = "block"
        document.getElementById("setJamMalam").style.display = "block"

    }else{
        document.getElementById("setJamSiang").style.display = "none"
        document.getElementById("setJamMalam").style.display = "none"
    }          
  })
}


function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = (25+element.scrollHeight)+"px";
}


function sisipkan(target, isinya) {
        if (target.selectionStart || target.selectionStart == '0') {
            var startPos = target.selectionStart;
            var endPos = target.selectionEnd;
            target.value = target.value.substring(0, startPos)
                + isinya
                + target.value.substring(endPos, target.value.length);
            target.focus();
            target.selectionEnd= endPos + isinya.length;
        } else {
            target.value += isinya;
            
        }
}

function keyUpNext(id,idname) {
  var x = document.getElementById(id);
  var y = document.getElementById(idname);
  var jml = x.value.length;
  
  if(jml == 200 ){
   y.focus()
  }
}


function toogleContent(index){
  var toogleContent = document.getElementsByClassName('nv');
  var a = toogleContent.length;
  for(var i=0;i<a;i++){toogleContent[i].classList.add('nvNone')};
  toogleContent[index-1].classList.remove('nvNone');
}

function aktif(event){
	const el = event.target;
	var total = document.querySelectorAll('#menu')[0].children;
	var a = total.length;
	for(var i=0;i<a;i++){ total[i].classList.remove('active');}
	el.parentElement.classList.add('active');
}

document.getElementsByClassName('nv')[1].classList.add('nvNone');
document.getElementsByClassName('nv')[2].classList.add('nvNone')
document.getElementsByClassName('nv')[3].classList.add('nvNone')

document.querySelectorAll('#menu')[0].children[0].onclick = function(){toogleContent(1);aktif(event)}
document.querySelectorAll('#menu')[0].children[1].onclick = function(){toogleContent(2);aktif(event)}
document.querySelectorAll('#menu')[0].children[2].onclick = function(){toogleContent(3);aktif(event)}
document.querySelectorAll('#menu')[0].children[3].onclick = function(){toogleContent(4);aktif(event)}

var totTextarea = document.querySelectorAll('textarea').length;
for(var i = 0;i<totTextarea;i++){
document.querySelectorAll('textarea')[i].onkeyup = function(){textAreaAdjust(this)}	
}

$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});			
});

(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        if(event.pageY >= 300 ){
			document.getElementById('save').style.top = (event.pageY-40)+'px'
		}else if(event.pageY <= 300){
			document.getElementById('save').style.top = '20px'
		}
    }
})();




document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click',
    saveOptions);


