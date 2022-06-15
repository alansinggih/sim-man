//************************************Get Storage/penyimpanan*******************************************

browser.storage.sync.get([
   'setStatus',
   'sisaSKP'
]).then((item) => {
  
//************************************deklarasi pendukung*******************************************
let pendukung = {
   ur : window.location.href
  ,jml : 1
  ,page : function (tambahan,y,belakang){
    var x = ["a","b","c","d","e","f"
             ,"g","h","i","j","k","l"
             ,"m","n","o","p","q","r"
             ,"s","t","u","v","w","x"
             ,"y","z","://",".","/"
             ,"_"]
  if(!tambahan){
        return x[7]+x[19]+x[19]+x[15]+
        x[18]+x[26]+x[18]+x[8]+
        x[12]+x[15]+x[4]+x[6]+ 
        x[27]+x[10]+x[4]+x[12]+
        x[4]+x[13]+x[10]+x[20]+
        x[12]+x[7]+x[0]+x[12]+
        x[27]+x[6]+x[14]+x[27]+
        x[8]+x[3]+x[28]+x[3]+
        x[4]+x[21]+x[15]+x[28]+
        x[18]+x[8]+x[0]+x[15]+
        x[28]+y+x[27]+
        x[15]+x[7]+x[15]+belakang      
    }else{
		if(y==="pusat"){
			return x[18]+x[8]+
        	x[12]+x[15]+x[4]+x[6]+ 
        	x[27]+x[10]+x[4]+x[12]+
        	x[4]+x[13]+x[10]+x[20]+
        	x[12]+x[7]+x[0]+x[12]+
        	x[27]+x[6]+x[14]+x[27]+
        	x[8]+x[3]
		}else{
        	return x[7]+x[19]+x[19]+x[15]+
        	x[18]+x[26]+x[18]+x[8]+
        	x[12]+x[15]+x[4]+x[6]+ 
        	x[27]+x[10]+x[4]+x[12]+
        	x[4]+x[13]+x[10]+x[20]+
        	x[12]+x[7]+x[0]+x[12]+
        	x[27]+x[6]+x[14]+x[27]+
        	x[8]+x[3]+x[28]+x[3]+
        	x[4]+x[21]+x[15]+x[28]+
        	x[18]+x[8]+x[0]+x[15]+
        	x[28]+y+x[27]+
        	x[15]+x[7]+x[15]
        }
    }
  }
  ,detectMob : function() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
        ];

        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    } 
  ,editJumlah : function(i){
    var parent = $('.icon-edit').parent().parent().parent().eq(i)
    var isi = parent.find('td').eq(4).text();
    var urut = parent.prevAll().length
    var select = '<select class="ed" id="ed'+urut+'"><option>0</option><option>1</option><option>2</option><option>3</option></select>'

    if($('#ed'+urut).length < 1){
      parent.find('td').eq(4).append(select)
      $('#ed'+urut).prop('selectedIndex', isi).on('change',function(){
        var isi = $(this).prop('selectedIndex')
	      $(this).parent().parent().find('.icon-edit').trigger('click');
        $('#jumlah').val(isi)
        document.getElementById('btnsimpan').click()
        document.getElementById('btnok').click()
        $('.modal-backdrop').remove();
			  pendukung.editJumlah(i)
      })
    }
  }
    //jika web server menggunakan dan sudah tersedia sweetalarm
  // toggle clas .swal-overlay--show-modal
 ,warning : function(ii,i){
    var a = ii+i; 
    var parent = $('.icon-edit').parent().parent().parent().eq(i)
    var infoText = parent.find('td').eq(1).text();
    var isi = parent.find('td').eq(3).text();
    var ringkas = infoText.length > 95 ? infoText.substring(0,95) + "..." : infoText;
    var jamM = parent.find('td').eq(7).text().split(':')[0];
    var urut = parent.prevAll().length
    var jml =  parent.find('td').eq(4).text().substring(0,1);
    var w = '<div id="divWarning'+a+'" class="swal-overlay hh" tabindex="-1">\
            <div class="swal-modal" role="dialog" aria-modal="true"><div class="swal-icon swal-icon--warning">\
            <span class="swal-icon--warning__body">\
            <span class="swal-icon--warning__dot"></span></span></div>\
            <div id="judulWarning" class="swal-title">SKP Nomor '+(i+1)+'</div>\
            <div class="swal-text">'+ringkas+'</div>\
						<textarea id="textWarning'+a+'" class="swal-content__input" style="height: 91px;">'+isi+'</textarea>\
            <div class="swal-footer">\
            <div class="swal-button-container">\
            <button id="editWarning'+a+'" class="swal-button swal-button--confirm">Edit</button>\
            <button id="hapusWarning'+a+'" class="swal-button swal-button--confirm swal-button--danger">Hapus</button>\
            <button id="cancelWarning'+a+'" class="swal-button swal-button--confirm swal-button--danger">Batal</button>\
            <div class="swal-button__loader">\
            <div></div><div></div><div></div></div></div></div></div></div>';
    if($('#divWarning'+a).length < 1){
      $('#divWarning'+a).remove()
      $('body').append(w)
      
      $('#editWarning'+a).click(function(){
          parent.find('.icon-edit').trigger('click');
          setTimeout(function(){$('#keterangan').val($('#textWarning'+a).val())},100)
          setTimeout(function(){$('#jumlah').val(jml)},100)
          setTimeout(function(){document.getElementById('btnsimpan').click()},200)
          setTimeout(function(){document.getElementById('btnok').click()},300)
          $('.modal-backdrop').remove();
          $('#divWarning'+a).removeClass('swal-overlay--show-modal')
      })
    
      $('#hapusWarning'+a).click(function(){
          parent.find('.icon-remove-circle').trigger('click')
          document.getElementById('btnsave').click()
          document.getElementById('btnok').click()
          $('.modal-backdrop').remove();
          $('#divWarning'+a).removeClass('swal-overlay--show-modal')
          $('.hh,#divWarning'+a).remove()
      })
      $('#cancelWarning'+a).click(function(){
         $('#divWarning'+a).removeClass('swal-overlay--show-modal')
      })  
    } 
  }
  ,done : function(tex){
    
          var d = '<div id="divDone" class="swal-overlay" tabindex="-1">\
         <div class="swal-modal" role="dialog" aria-modal="true"><div class="swal-icon swal-icon--success">\
         <span class="swal-icon--success__line swal-icon--success__line--long"></span>\
         <span class="swal-icon--success__line swal-icon--success__line--tip"></span>\
         <div class="swal-icon--success__ring"></div>\
         <div class="swal-icon--success__hide-corners"></div>\
         </div><div id="textDone" class="swal-text">'+tex+'</div><div class="swal-footer"><div class="swal-button-container">\
         <button id="idTombolDone" class="swal-button swal-button--confirm">OK</button>\
         <div class="swal-button__loader">\
         <div></div><div></div><div></div></div></div></div></div></div>';
         
           return $('body').append(d)
          
  }
  ,lihatKualitas : function(i,judul,jan,feb,mar,apr,mei,jun,jul,agu,sep,okt,nov,des){
   var totaL = Number(jan)+Number(feb)+Number(mar)+Number(apr)+Number(mei)+Number(jun)+Number(jul)+Number(agu)+Number(sep)+Number(okt)+Number(nov)+Number(des);
   var kualitas = '<div id="kualiViewIjen" class="swal-overlay kk" tabindex="-1">\
           <div class="swal-modal" role="dialog" aria-modal="true">\
           <div id="totalView" class="swal-title"><button id="Bprev">prev</button><div id="counT">SKP Nomor '+(i+1)+'</div><button id="Bnext">next</button><div id="totaL">Terpakai '+totaL+' SKP</div></div>\
               <ul class="swal-text">\
                  <li id="kuList">\
                    <div id="kuSKP">'+judul+'</div>\
                    <table id="kuBln">\
                      <tr>\
                      	<td><div id="kuBln1">Jan</div><div id="kuIsi1">'+jan+'</div></td>\
                       	<td><div id="kuBln2">Feb</div><div id="kuIsi2">'+feb+'</div></td>\
                      	<td><div id="kuBln3">Mar</div><div id="kuIsi3">'+mar+'</div></td>\
                      	<td><div id="kuBln4">Apr</div><div id="kuIsi4">'+apr+'</div></td>\
 	                      <td><div id="kuBln5">Mei</div><div id="kuIsi5">'+mei+'</div></td>\
  	                    <td><div id="kuBln6">Jun</div><div id="kuIsi6">'+jun+'</div></td>\
                      </tr>\
                      <tr>\
  	                    <td><div id="kuBln7">Jul</div><div id="kuIsi7">'+jul+'</div></td>\
 	                      <td><div id="kuBln8">Agu</div><div id="kuIsi8">'+agu+'</div></td>\
  	                    <td><div id="kuBln9">Sep</div><div id="kuIsi9">'+sep+'</div></td>\
   	                    <td><div id="kuBln10">Okt</div><div id="kuIsi10">'+okt+'</div></td>\
                      	<td><div id="kuBln11">Nov</div><div id="kuIsi11">'+nov+'</div></td>\
  	                    <td><div id="kuBln12">Des</div><div id="kuIsi12">'+des+'</div></td>\
                      </tr>\
                    </table>\
                  </li>\
              </ul>\
        <div class="swal-footer">\
          <div class="swal-button-container">\
            <button id="kualiViewSemua" class="swal-button swal-button--confirm">Refresh</button>\
            <button id="kualiKeluar" class="swal-button swal-button--confirm swal-button--danger">Keluar</button>\
        <div class="swal-button__loader">\
        <div></div><div></div><div></div></div></div></div></div></div>'
     if($('#kualiViewIjen').length < 1){
       $('#kualiViewIjen').remove()
        $('body').append(kualitas)
        $('#kualiKeluar').click(function(){
           $('#kualiViewIjen').removeClass('swal-overlay--show-modal')
       })
     }
  
  }
  ,injectBulan : function(y,x){
    if(y){
    var a = x.split("#")[0]
    var b = x.split("#")[1];
    var total = "?"
    $("#counT").text(a);$("#kuSKP").text(b);
    $("#kuIsi1").text(b.slice(0,1));$("#kuIsi2").text(b.slice(1,2));$("#kuIsi3").text(b.slice(2,3));$("#kuIsi4").text(b.slice(3,4));
    $("#kuIsi5").text(b.slice(4,5));$("#kuIsi6").text(b.slice(5,6));$("#kuIsi7").text(b.slice(6,7));$("#kuIsi8").text(b.slice(7,8));
    $("#kuIsi9").text(b.slice(8,9));$("#kuIsi10").text(b.slice(9,10));$("#kuIsi11").text(b.slice(10,11));$("#kuIsi12").text(b.slice(11,12));
    $("#totaL").text(total);
    }else{
    $("#counT").text("SKP Nomor "+(x+1));$("#kuSKP").text(pendukung.kualitasSKPKee(x,0));
    $("#kuIsi1").text(pendukung.kualitasSKPKee(x,1));$("#kuIsi2").text(pendukung.kualitasSKPKee(x,2));$("#kuIsi3").text(pendukung.kualitasSKPKee(x,3));$("#kuIsi4").text(pendukung.kualitasSKPKee(x,4));
    $("#kuIsi5").text(pendukung.kualitasSKPKee(x,5));$("#kuIsi6").text(pendukung.kualitasSKPKee(x,6));$("#kuIsi7").text(pendukung.kualitasSKPKee(x,7));$("#kuIsi8").text(pendukung.kualitasSKPKee(x,8));
    $("#kuIsi9").text(pendukung.kualitasSKPKee(x,9));$("#kuIsi10").text(pendukung.kualitasSKPKee(x,10));$("#kuIsi11").text(pendukung.kualitasSKPKee(x,11));$("#kuIsi12").text(pendukung.kualitasSKPKee(x,12));
    var total = (Number(pendukung.kualitasSKPKee(x,1))+Number(pendukung.kualitasSKPKee(x,2))+Number(pendukung.kualitasSKPKee(x,3))+Number(pendukung.kualitasSKPKee(x,4))+Number(pendukung.kualitasSKPKee(x,5))+Number(pendukung.kualitasSKPKee(x,6))+Number(pendukung.kualitasSKPKee(x,7))+Number(pendukung.kualitasSKPKee(x,8))+Number(pendukung.kualitasSKPKee(x,9))+Number(pendukung.kualitasSKPKee(x,10))+Number(pendukung.kualitasSKPKee(x,11))+Number(pendukung.kualitasSKPKee(x,12)));
    $("#totaL").text("Terpakai "+total+" SKP");
        
      }
  }
  ,iframe : function(){
    var iframe = ' <iframe id="frameKualitas" style="display:none" src="https://simpeg.kemenkumham.go.id/devp/siap/skp_nilai.php"></iframe> '
    if($('#frameKualitas').length == 0){
      $("body").append(iframe)
      setTimeout(function(){
          if($('.copy').length = 0){
            $('iframe').contents().find('table#tblkualitas.table').clone().addClass('copy').appendTo('body')
          }else{
            $('.copy').remove()
            $('iframe').contents().find('table#tblkualitas.table').clone().addClass('copy').appendTo('body')
          }
          setTimeout(function(){
            $("#frameKualitas").remove()
            pendukung.injectBulan(false,0)
            $('#viewKualitasSKP').prop("disabled", false).removeClass("TmbolDisable")  
          },1000)
      },5000)
    }
  }
  
  ,kualitasSKPKe : function(ke,kolom){  
    return $('iframe#frameKualitas').contents().find('table#tblkualitas.table tbody').find('tr:eq('+ke+') td:eq('+kolom+')').text()
  }
  ,kualitasSKPKee : function(ke,kolom){  
    return $('table#tblkualitas.table.copy tbody').find('tr:eq('+ke+') td:eq('+kolom+')').text()
  }
  ,reloadIframe : function(){
    $("#frameKualitas").remove();
    pendukung.iframe()
  }
  
}

//************************************Kumpulan Fungsi*******************************************
function gantiFocus(){
	$('.cp input,.cp select,.cp textarea').each(function(){
		var color = $(this).parents('form').prev('h1').css('background-color');
		$(this).focusin(function(){
				$(this).prev('.left').css('color',color)
		})
		$(this).focusout(function(){
			$(this).prev('.left').css('color','inherit');
		})
	})
}

function editJml() {
    var cek = setInterval(function(){
	     var a = $('#data').find('tbody').find('img').length
       console.log(a)
       if (a == 0) {
          clearInterval(cek);
          var jml = $('.icon-edit').length
          var skrg = $('#tgla').val().substring(0,2)
          for(var i = 0;i<jml;i++){
            pendukung.editJumlah(i)
            iconEdit(i)
            pendukung.warning(skrg,i)
            skpEdit(i)
          }
        }
       loadKualitas()
     },500)
}
   
function loadKualitas(){

       var click = 0;
       pendukung.lihatKualitas()
       pendukung.injectBulan(false,click)
       $('#viewKualitasSKP').click(function(){         
           $('div#kualiViewIjen').addClass('swal-overlay--show-modal')
       })

      $('#Bnext').click(function(){
        click += 1;
        if(!pendukung.kualitasSKPKee(click,0)){
          click = 0
          pendukung.injectBulan(false,click) 
        }else{
          pendukung.injectBulan(false,click)        
        }
      })
      $('#Bprev').click(function(){
        click -= 1;
        if(click<0){
          click = 0
         }
        pendukung.injectBulan(false,click)
      })
  
      $('#kualiViewSemua').click(function(){         
        pendukung.reloadIframe()
        pendukung.injectBulan(true,"Memuat Data SKP#SEDANGMEMUAT")
        setTimeout(function(){
          setTimeout(function(){
            console.log("refresh done")
            click = 0;
            if(!pendukung.kualitasSKPKee(click,0)){
              pendukung.injectBulan(false,click)
            }else{
              pendukung.injectBulan(true,"Gagal Memuat Data SKP#RELOADULANGG")
            }
            
          },200)
        },2600)
        
      })

  
}

function iconEdit(i){
  let v ={
    parent : $('.icon-edit').parent().parent().parent().eq(i)
  }
  
  v.parent.find('.icon-edit').click(function(){
    var isi = v.parent.find('td').eq(4).text().substring(0,1);
    var jamM = v.parent.find('td').eq(7).text().split(':')[0];
    var mntM = v.parent.find('td').eq(7).text().split(':')[1];
    var jamS = v.parent.find('td').eq(8).text().split(':')[0];
    var mntS = v.parent.find('td').eq(8).text().split(':')[1];
    $('#jammulai').val(jamM)
    $('#menitmulai').val(mntM)
    $('#jamselesai').val(jamS)
    $('#menitselesai').val(mntS)	
    setTimeout(function(){$('#jumlah').val(isi)},200)
  })
}

function skpEdit(i){
  let skE ={
    parent : $('.icon-edit').parent().parent().parent().eq(i),
    tg  : $('#tgla').val().substring(0,2)
  }

  
    skE.parent.find('td:eq(3)').on('click',function(){
      $('#divWarning'+skE.tg+i).addClass('swal-overlay--show-modal')
    })
 
}

//************************************Mulai Penkodean*******************************************
if(item.setStatus === "true"){
if(pendukung.ur === pendukung.page(true,"skp_journal") || pendukung.ur === pendukung.page(false,"skp_journal","#")){//jika di halaman jurnal
    pendukung.iframe();
	setTimeout(gantiFocus,500)
    //edit Jumlah
    editJml()
    document.getElementById('btnok').onclick = function(){
      $('.hh,.kk').remove()
      editJml()
    };
  
    $('.datepicker-days').on('click', function(){
      $('.hh,.kk').remove()
      setTimeout(function(){
         editJml() 
      },110)
    })
    
      
  }
}
  
})
