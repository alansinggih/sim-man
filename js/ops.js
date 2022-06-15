browser.storage.sync.get([
 'setStatus',
 'setMode',
 'setNIP',
 'setOtoLogin',
 'setPass',
 'codeSKP',
 'setJamPagi',
 'setJamSiang',
 'setJamMalam',
 'setSKP1',
   'setSKP2',
   'setSKP3',
   'setSKP4',
   'setSKP5',
   'setSKP6',
   'setSKP7',
   'setSKP8',
   'setSKP9',
   'setSKP10',
   'setSKP11',
   'setSKP12',
   'setSKP13',
   'setSKP14',
   'setSKP15',
   'setSKP16',
   'setSKP17',
   'setSKP18',
   'setSKP19',
   'setSKP20',
   'setLabe20',
   'setNM',
   'setNP'
]).then((item) => {
//************************************end deklarasi umum*******************************************
let umum = {
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
 ,customCodeSKP : function (sumber,x){
    var tt = sumber.split("\n").length
    var cstm = [];

    for (var i = 0; i < tt; i++) {
       var a = sumber.split("\n")[i]
       cstm.push(a);
    }
   return cstm[x]
  }
 ,infoCodeSKP : function(){
     var tt = $("select[id='skpkgid'] option").length - 3;
     var jj = [];
     for(i=0;tt>i;i++){
        a = $("select[id='skpkgid'] option:eq("+i+")").attr('value').substring($("select[id='skpkgid'] option:eq("+i+")").attr('value').substring(0,$("select[id='skpkgid'] option").attr('value').length-2).length)
        jj.push(a)
     }
    return jj
 }
 ,isiPilihanSKP : function (sumber,id){
    var tt = sumber.split("\n\n").length
    var jamText = [];
    var s = id;
    for (var i = 0; i < tt; i++) {
       var a = sumber.split("\n\n")[i]
       jamText.push(a);
    }
  if($('select#'+s).find('option').length != 0){
       console.log('Tag Select dengan ID '+s+' sudah ada')
     }else{ 
          $.each(jamText, function(index,text) {   
            $('select#'+s).append($("<option></option>").text(text).attr("value",index)); 
            $('select#'+s).find('option').filter(function() {
                return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
            }).remove();
          })
       ;
     }   
  }
 ,tambahPilihan : function (sumber,divTarget,id){
    var tt = sumber.split("\n").length
    var jamText = [];
    var s = id;
    for (var i = 0; i < tt; i++) {
       var a = sumber.split("\n")[i]
       jamText.push(a);
    }
     if($('#'+s).length != 0){
       console.log('Tag Select dengan ID '+s+' sudah ada')
     }else{
       $(divTarget).append('<select id="'+s+'"></select>');
       $(divTarget).length == 0 ?  console.log("Tidak Ditemukan ID " + divTarget) : console.log("Berhasil buat pilihan setelah ID "+divTarget)      
          $.each(jamText, function(index,text) {   
            $('#'+s).append($("<option></option>").text(text).attr("value",s+index)); 
            $('#'+s).find('option').filter(function() {
                return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
            }).remove();
          })
       ;
     }   
 }
 ,tengah : function(divID){
    var id = divID.replace(/ /g,"").replace("#","").replace(".","")
    var s = "tengah"+id;
    var elm = $(divID);
    if($('#'+s).length != 0){
          console.log('Tag Select pembungkus ID '+divID+' sudah ada')
    }else{
          $('<center id="'+s+'"><center>').insertBefore(divID);
          elm.clone().appendTo("#"+s).next();
          $("#"+s).next().remove();
          $("#"+s).find('center').remove();
    }
 }
  //jika web server menggunakan dan sudah tersedia sweetalarm
  // toggle clas .swal-overlay--show-modal
 ,warning : function (judul,tex){
            var w = '<div id="divWarning" class="swal-overlay" tabindex="-1">\
            <div class="swal-modal" role="dialog" aria-modal="true"><div class="swal-icon swal-icon--warning">\
            <span class="swal-icon--warning__body">\
            <span class="swal-icon--warning__dot"></span></span></div>\
            <div id="judulWarning" class="swal-title">'+judul+'</div>\
            <div id="textWarning" class="swal-text">'+tex+'</div>\
            <div class="swal-footer">\
            <div class="swal-button-container">\
            <button id="idTombolWarning" class="swal-button swal-button--confirm">OK</button>\
            <div class="swal-button__loader">\
            <div></div><div></div><div></div></div></div></div></div></div>';
             return $('body').append(w)
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
 ,tambahPrevNext : function (){
        if($('.tmbTANGGAL').length<1){
          var tmbLP = '<div id="tgPrev" class="tmbTANGGAL"><i class="fa fa-chevron-left"></i></div>';
          var tmbLN = '<div id="tgNext" class="tmbTANGGAL"><i class="fa fa-chevron-right"></i></div>';
          $('#tgla').after('<div style="display: grid;grid-template-columns: auto auto;margin: auto;">'+tmbLP+tmbLN+'</div>');

          $('#tgNext').on('click',function(){
            var indc = $('.table-condensed').find('tbody tr .active').index();
            if (indc==6){
              $('.table-condensed').find('tbody tr .active').parent().next().find('td:eq(0)').trigger('click')  
            }else{
              $('.table-condensed').find('tbody tr .active').next().eq(0).trigger('click')    
            }
          })

          $('#tgPrev').on('click',function(){
            var indc = $('.table-condensed').find('tbody tr .active').index();
            if (indc==0){
              $('.table-condensed').find('tbody tr .active').parent().prev().find('td:eq(6)').trigger('click')  
            }else{
              $('.table-condensed').find('tbody tr .active').prev().eq(0).trigger('click')    
            }
          })
        }
    }
  ,tambahLagi : function(i,isiJamPagi,isiJamSiang,isiJamMalam,isiSKP1,isiSKP2,isiSKP3,isiSKP4,isiSKP5,isiSKP6,isiSKP7,isiSKP8,isiSKP9,isiSKP10,
                         isiSKP11,isiSKP12,isiSKP13,isiSKP14,isiSKP15,isiSKP16,isiSKP17,isiSKP18,isiSKP19,isiSKP20){
    var f = '<input type="button" class="tyRadio" value="Tersimpan" id="tersimpan'+i+'">\
                <input type="button" class="tyRadio" value="Manual" id="manual'+i+'">';
    var g = '<input type="text" class="setInputJam" id="setInputJam'+i+'" maxlength="13"></input>'
    var c = '<div class="cp " id="cp'+i+'">\
					<label class="switcha" id="switcha'+i+'">\
						<input id="ya'+i+'" style="margin-top:0;padding:0" type="checkbox" checked>\
						<span class="slider round"></span>\
					</label>\
			<h1>Buat SKP '+i+'</h1>\
			<button class="remOp" id="remOp'+i+'"><i class="icon-remove fa-fm"></i></button>\
            <form id="fr'+i+'" class="fr">\
                <div>\
                <div class="left"><label >Dinas</label></div>\
                    <select class="setWaktu" id="setWaktu'+i+'">\
                        <option value="siang">Siang</option>\
                        <option value="pagi">Pagi</Option>\
                        <option value="malam">Malam</Option>\
                    </select>\
                </div>\
                <div class="setTempatJam" id="setTempatJam'+i+'" >\
                    <div class="left"><label >Pilih Waktunya</label>\
                    </div>\
                </div>\
                <div class="skp" id="skp'+i+'">\
                <div class="left"><label >Pilih SKP</label></div>\
                <select class="setSKP" id="setSKP'+i+'"><option>Mencari SKP....</option></select>\
                <div class="left"><label >Pilih Rincian Kegiatan</label></div>\
                <select class="setIsiSKP" id="setIsiSKP'+i+'"><option>....</option></select>\
                <div class="left"><label >Edit Kegiatan</label></div>\
                <textarea class="setTextSKP" id="setTextSKP'+i+'" ></textarea>\
                </div>\
                <div>\
                    <div class="left"><label>Jumlah Kegiatan</label></div>\
                     <select class="setKegiatan" id="setKegiatan'+i+'">\
                        <option value="nol">0</option>\
                        <option value="satu">1</option>\
                        <option value="dua">2</Option>\
                        <option value="tiga">3</Option>\
                        <option value="satu">4</option>\
                    </select>\
                </div>\
            </form></div>'
         $('#buatSKP').parent().before(c)
        //set isi skp
        
      if(item.setMode === "staff"){
        $('#setTempatJam'+i+' .left').append(f)
        $('#setTempatJam'+i).append(g)
        $(".setWaktu option[value='siang']").remove();
        $(".setWaktu option[value='malam']").remove();
          $(".setInputJam").keyup(function(){
            if(this.value.length === 2){
                this.value = this.value + ":"
            }else if(this.value.length === 5){
                this.value = this.value + " - "
            }else if(this.value.length === 10){
                this.value = this.value + ":"
            }
        });
        $('#setInputJam'+i).on('change',function(){
            $('#setTempatJam'+i+' :selected').text($('#setInputJam'+i).val());
       })
                
        
         $('#tersimpan'+i).on('click',function(){
             var ini =  $(this)
             ini.addClass('Active')
             $('#manual'+i).removeClass('Active')
             $('#jamPagi'+i).attr('style','display:initial')
             $('#setInputJam'+i).attr('style','display:none')
             $('#setTempatJam'+i+' select').remove()
             umum.tambahPilihan(isiJamPagi,"div#setTempatJam"+i,"jamPagi"+i)
         }).addClass('Active')
         $('#setInputJam'+i).attr('style','display:none')
          
         $('#manual'+i).on('click',function(){
             var ini =  $(this)
             ini.addClass('Active')
             $('#tersimpan'+i).removeClass('Active')
             $('#jamPagi'+i).attr('style','display:none')
             $('#setInputJam'+i).attr('style','display:initial')
         })
      }
      
        setTimeout(function(){
         $('#setSKP'+i+' option , #setIsiSKP'+i+' option').remove();
          umum.isiSKP('#setSKP'+i)
          umum.isiPilihanSKP(isiSKP1,"setIsiSKP"+i)
		  document.getElementById('setTextSKP'+i).value = document.querySelector('#setIsiSKP'+i+'  option').text;
        },2000)
            //set default waktu
        if($('#setWaktu'+i).val() === "pagi"){
            umum.tambahPilihan(isiJamPagi,"div#setTempatJam"+i,"jamPagi"+i)
        }else if($('#setWaktu'+i).val() === "siang"){
            umum.tambahPilihan(isiJamSiang,"div#setTempatJam"+i,"jamSiang"+i)     
        }else if($('#setWaktu'+i).val() === "malam"){
            umum.tambahPilihan(isiJamMalam,"div#setTempatJam"+i,"jamMalam"+i)             
        }
    
        //set waktu ketika dinas di rubah
        $('#setWaktu'+i).on('change',function(){
            if($(this).val() === "pagi"){
                $('#setTempatJam'+i+' select').remove()
                umum.tambahPilihan(isiJamPagi,"div#setTempatJam"+i,"jamPagi"+i)
            }else if($(this).val() === "siang"){
                $('#setTempatJam'+i+' select').remove()
                umum.tambahPilihan(isiJamSiang,"div#setTempatJam"+i,"jamSiang"+i)     
            }else if($(this).val() === "malam"){
                $('#setTempatJam'+i+' select').remove()  
                umum.tambahPilihan(isiJamMalam,"div#setTempatJam"+i,"jamMalam"+i)             
            }
        })
        //set text area ketika skp dirubah

        $('#setSKP'+i).on('change',function(){
          var selectSKP = $('#setSKP'+i+' :selected')
         
            if(selectSKP.index() == 0){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP1,"setIsiSKP"+i)
            }else if(selectSKP.index() == 1){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP2,"setIsiSKP"+i)
            }else if(selectSKP.index() == 2){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP3,"setIsiSKP"+i)
            }else if(selectSKP.index() == 3){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP4,"setIsiSKP"+i)
            }else if(selectSKP.index() == 4){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP5,"setIsiSKP"+i)
            }else if(selectSKP.index() == 5){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP6,"setIsiSKP"+i)
            }else if(selectSKP.index() == 6){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP7,"setIsiSKP"+i)
            }else if(selectSKP.index() == 7){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP8,"setIsiSKP"+i)
            }else if(selectSKP.index() == 8){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP9,"setIsiSKP"+i)
            }else if(selectSKP.index() == 9){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP10,"setIsiSKP"+i)
            }else if(selectSKP.index() == 10){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP11,"setIsiSKP"+i)
            }else if(selectSKP.index() == 11){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP12,"setIsiSKP"+i)
            }else if(selectSKP.index() == 12){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP13,"setIsiSKP"+i)
            }else if(selectSKP.index() == 13){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP14,"setIsiSKP"+i)
            }else if(selectSKP.index() == 14){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP15,"setIsiSKP"+i)
            }else if(selectSKP.index() == 15){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP16,"setIsiSKP"+i)
            }else if(selectSKP.index() == 16){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP17,"setIsiSKP"+i)
            }else if(selectSKP.index() == 17){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP18,"setIsiSKP"+i)
            }else if(selectSKP.index() == 18){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP19,"setIsiSKP"+i)
            }else if(selectSKP.index() == 19){
                $('#setIsiSKP'+i+' option').remove()
                umum.isiPilihanSKP(isiSKP20,"setIsiSKP"+i)
            }
			document.getElementById('setTextSKP'+i).value = document.querySelector('#setIsiSKP'+i+'  option').text;
        })
        $('#setIsiSKP'+i).on('change',function(){
            $('#setTextSKP'+i).val("")
            $('#setTextSKP'+i).val($('#setIsiSKP'+i+' :selected').text())
        })
        
        $('#remOp'+i).click(function(){
            if($('.cp').length == 1){
            }else{
              if($(this).parent().nextAll().length > 1){
                alert('Hapus mulai dari bawah') 
              }else{
                var g = confirm("Apakah ingin menghapus Form "+$(this).text());
                if (g == true) {
                    $(this).parent().remove();
                    umum.jml = $('.cp').length
                }                
              }
            }
        })
  }
  ,uiHome : function(){
    var c = '<div class="container">\
			  <div class="row">\
			  <div class="col-sm-8"><img src="devp/siap/template/img/logo-simpeg.png"></div>\
			</div>\
			<div class="row">\
				<div class="col"></div>\
				<div class="col"></div>\
				<div class="w-100"></div>\
				<div class="col"></div>\
				<div class="col"></div>\
			 </div>\
			<div class="row">\
			  <div class="col-sm-8">© Kemenkumham RI</div>\
			</div>\
			</div>'
	return $('body').prepend(c);
  },uiLogin : function(){
    var c = '<div class="container">\
			  <div class="row">\
			  <div class="col-sm-8"><img src="template/img/logo-simpeg.png"></div>\
			</div>\
			<div class="row">\
				<div class="col-sm-8"></div>\
				<div class="col-sm-8"></div>\
				<div class="w-100"></div>\
			 </div>\
			<div class="row">\
			  <div class="col-sm-8">© Kemenkumham RI</div>\
			</div>\
			</div>'
	return $('body').prepend(c);
  }
  ,uiMenuBawah : function(){
    var c = '<div id="icon-Bottom" class="icon-Bottom" style="visibility: visible;">\
				<a class="active-Bottom" id="togleAbsen">\
					<i class="fa fa-hand-paper-o"></i>\
					<p>Absen</p>\
				</a>\
				<a href="https://simpeg.kemenkumham.go.id/devp/siap/index.php/NC_Notification" style="position:relative">\
					<i class="fa fa-bell"></i>\
					<span class="blinking" style="font-weight: bold; color: inherit;position:absolute;top: 0;left: 8vw;">0</span>\
					<p>Notif</p>\
				</a>\
				<a href="pw.php"><i class="fa fa-key"></i><p>Password</p></a>\
				<a href="#" onclick="do_logout(); return false;">\
				<i class="fa fa-sign-out"></i><p>Logout</p></a>\
			</div>'
			

	return $('footer').prepend(c);
  }
  ,uiAbsenCepat : function(){
    var c = '<div id="icon-Bottom" class="icon-Bottom icon-Absen">\
				<a href="#" class="masuk" id="absenCepatMasuk"><i class="fa fa-cloud-upload"></i><p>Absen Masuk</p></a>\
				<a href="#" class="keluar" id="absenCepatKeluar"><i class="fa fa-cloud-upload"></i><p>Absen Keluar</p></a>\
			</div>\
			 <form class="pull-right" id="absen" action="https://simpeg.kemenkumham.go.id/devp/siap/index.php/AbsensiOnline/inout" method="POST">\
				<input id="inout" name="tipe" type="hidden">\
				<input name="timezone" id="timezone_out" type="hidden" value="Asia/Philippines">\
				<input name="absen_date" id="absen_date_out" type="hidden" value="2021-07-27">\
				<input name="absen_time" id="absen_time_out" type="hidden" value="12:12:12">\
			</form>'
						
	return $('footer').prepend(c);
  }
  ,uiBack : function(){
	  var link = $('ul.topMenuLink li:eq(0) a').attr('href');
	  var a = '<a href="'+link+'" style="margin-right:2em !important;;color:white;margin-left: .7em !important;">\
				<i class="icon-chevron-left" style="font-size:1.5em"></i></a>'
	return $('.userAccount').prepend(a);
  }
  ,buatWadah : function(){
    var c = '<div id="options">\
              <div class="tmb">\
                <button id="tambahForm"><i class="icon-file"></i></button>\
                <button id="buatSKP"><i class="icon-ok"></i></button>\
              </div>\
            </div>'
    return $('.COnTopMenu').after(c)
  }
   ,buatWadahHP : function(){
    var c = '<div id="options">\
              <div class="tmb">\
                <button id="tambahForm">Tambah Form</button>\
                <button id="buatSKP">Buat SKP</button>\
              </div>\
            </div>'
    return $('.COnTopMenu').after(c)
  }
  ,tombolKualitas : function(){
    var c = '<div id="wadahKualitas">\
              <div style="display: grid;grid-template-columns: auto auto;column-gap: 1vw;">\
                <button id="viewKualitasSKP" class="TmbolDisable"><i class="icon-file"></i> Lihat Sisa SKP</button>\
              </div>\
            </div>'
    return $('.pageheader').after(c);
  }
  ,waktu : function (id,hasil){
         var val = $(id+" :selected").text()
         var pecah = val.split(" - ")
         var jamAwal = pecah[0].split(":")[0]
         var menitAwal = pecah[0].split(":")[1]
         var jamAkir = pecah[1].split(":")[0]
         var menitAkir = pecah[1].split(":")[1]

         
		if(hasil == "jAwal"){
		  return jamAwal
		}else if(hasil == "mAwal"){
		   if(menitAwal === "00"){
	           return "01"
           }else{
               return menitAwal
           }
		}else if(hasil == "jAkir"){
		   return jamAkir
		}else if(hasil == "mAkir"){
    	   if(menitAkir === "00"){
	          return "01"
           }else{
              return menitAkir
           }		
	     }       
      }
  ,getDataJam : function(id,target,identf){
  		if(identf == "jAwal"){
           $(id).change(function(){
 			        $(target).text(umum.waktu(id,identf))
		       })
      }else if(identf == "mAwal"){
           $(id).change(function(){
 			         $(target).text(umum.waktu(id,identf))
	       	 })
      }else if(identf == "jAkir"){
           $(id).change(function(){
 			         $(target).text(umum.waktu(id,identf))
		       })
      }else if(identf == "mAkir"){
           $(id).change(function(){
 			         $(target).text(umum.waktu(id,identf))
		       })
      }    
   }
  ,isiSKP : function(target){
        var cstmx = "110";
        var idss = $("select[id='skpkgid'] option").attr('value').substring(0,$("select[id='skpkgid'] option").attr('value').length-2);
        var a = "01";var b = "02";var c = "03";var d = "04";var e = "05";
        var f = "06";var g = "07";var h = "08";var i = "09";var j = "10";
        var k = "11";var l = "12";var m = "13";var n = "14";var o = "15";
        var p = "16";var q = "17";var r = "18";var s = "19";var t = "20";
        var u = "21";var v = "22";var w = "23";var x = "24";var y = "25";
        var z = "26";
        var aa = "27";var ab = "28";var ac = "29";var ad = "30";var ae = "31";
        var af = "32";var ag = "33";var ah = "34";var ai = "35";var aj = "36";
        var ak = "37";var al = "38";var am = "39";var an = "40";var ao = "41";
        var ap = "42";var aq = "43";var ar = "44";var as = "45";var at = "46";
        var au = "47";var av = "48";var aw = "49";var ax = "50";var ay = "51";
        var az = "52";var ln = "lainlain";var tt = "2";var kr = "3";
        var cstm1 = umum.customCodeSKP(item.codeSKP,0);
        var cstm2 = umum.customCodeSKP(item.codeSKP,1);
        var cstm3 = umum.customCodeSKP(item.codeSKP,2);
        var cstm4 = umum.customCodeSKP(item.codeSKP,3);
        var a11 = $('#skpkgid option[value="'+ idss + a +'"]').text();
        var b11 = $('#skpkgid option[value="'+ idss + b +'"]').text();
        var c11 = $('#skpkgid option[value="'+ idss + c +'"]').text();
        var d11 = $('#skpkgid option[value="'+ idss + d +'"]').text();
        var e11 = $('#skpkgid option[value="'+ idss + e +'"]').text();
        var f11 = $('#skpkgid option[value="'+ idss + f +'"]').text();
        var g11 = $('#skpkgid option[value="'+ idss + g +'"]').text();
        var h11 = $('#skpkgid option[value="'+ idss + h +'"]').text();
        var i11 = $('#skpkgid option[value="'+ idss + i +'"]').text();
        var j11 = $('#skpkgid option[value="'+ idss + j +'"]').text();
        var k11 = $('#skpkgid option[value="'+ idss + k +'"]').text();
        var l11 = $('#skpkgid option[value="'+ idss + l +'"]').text();
        var m11 = $('#skpkgid option[value="'+ idss + m +'"]').text();
        var n11 = $('#skpkgid option[value="'+ idss + n +'"]').text();
        var o11 = $('#skpkgid option[value="'+ idss + o +'"]').text();
        var p11 = $('#skpkgid option[value="'+ idss + p +'"]').text();
        var q11 = $('#skpkgid option[value="'+ idss + q +'"]').text();
        var r11 = $('#skpkgid option[value="'+ idss + r +'"]').text();
        var s11 = $('#skpkgid option[value="'+ idss + s +'"]').text();
        var t11 = $('#skpkgid option[value="'+ idss + t +'"]').text();
        var u11 = $('#skpkgid option[value="'+ idss + u +'"]').text();
        var v11 = $('#skpkgid option[value="'+ idss + v +'"]').text();
        var w11 = $('#skpkgid option[value="'+ idss + w +'"]').text();
        var x11 = $('#skpkgid option[value="'+ idss + x +'"]').text();
        var y11 = $('#skpkgid option[value="'+ idss + y +'"]').text();
        var z11 = $('#skpkgid option[value="'+ idss + z +'"]').text();
        var aa11 = $('#skpkgid option[value="'+ idss + aa +'"]').text();
        var ab11 = $('#skpkgid option[value="'+ idss + ab +'"]').text();
        var ac11 = $('#skpkgid option[value="'+ idss + ac +'"]').text();
        var ad11 = $('#skpkgid option[value="'+ idss + ad +'"]').text();
        var ae11 = $('#skpkgid option[value="'+ idss + ae +'"]').text();
        var af11 = $('#skpkgid option[value="'+ idss + af +'"]').text();
        var ag11 = $('#skpkgid option[value="'+ idss + ag +'"]').text();
        var ah11 = $('#skpkgid option[value="'+ idss + ah +'"]').text();
        var ai11 = $('#skpkgid option[value="'+ idss + ai +'"]').text();
        var aj11 = $('#skpkgid option[value="'+ idss + aj +'"]').text();
        var ak11 = $('#skpkgid option[value="'+ idss + ak +'"]').text();
        var al11 = $('#skpkgid option[value="'+ idss + al +'"]').text();
        var am11 = $('#skpkgid option[value="'+ idss + am +'"]').text();
        var an11 = $('#skpkgid option[value="'+ idss + an +'"]').text();
        var ao11 = $('#skpkgid option[value="'+ idss + ao +'"]').text();
        var ap11 = $('#skpkgid option[value="'+ idss + ap +'"]').text();
        var aq11 = $('#skpkgid option[value="'+ idss + aq +'"]').text();
        var ar11 = $('#skpkgid option[value="'+ idss + ar +'"]').text();
        var as11 = $('#skpkgid option[value="'+ idss + as +'"]').text();
        var at11 = $('#skpkgid option[value="'+ idss + at +'"]').text();
        var au11 = $('#skpkgid option[value="'+ idss + au +'"]').text();
        var av11 = $('#skpkgid option[value="'+ idss + av +'"]').text();
        var aw11 = $('#skpkgid option[value="'+ idss + aw +'"]').text();
        var ax11 = $('#skpkgid option[value="'+ idss + ax +'"]').text();
        var ay11 = $('#skpkgid option[value="'+ idss + ay +'"]').text();
        var az11 = $('#skpkgid option[value="'+ idss + az +'"]').text();
        var cstm11 = $('#skpkgid option[value="'+ idss + cstm1 +'"]').text();
        var cstm12 = $('#skpkgid option[value="'+ idss + cstm2 +'"]').text();
        var cstm13 = $('#skpkgid option[value="'+ idss + cstm3 +'"]').text();
        var cstm14 = $('#skpkgid option[value="'+ idss + cstm4 +'"]').text();
        pilihan = {"01":a11,"02":b11,"03":c11,"04":d11,"05":e11,"06":f11,"07":g11,"08":h11,"09":i11,"10":j11,
                   "11":k11,"12":l11,"13":m11,"14":n11,"15":o11,"16":p11,"17":q11,"18":r11,"19":s11,"20":t11,
                   "21":u11,"22":v11,"23":w11,"24":x11,"25":y11,"26":z11,
                   "27":aa11,"28":ab11,"29":ac11,"30":ad11,"31":ae11,"32":af11,"33":ag11,"34":ah11,"35":ai11,"36":aj11,
                   "37":ak11,"38":al11,"39":am11,"40":an11,"41":ao11,"42":ap11,"43":aq11,"44":ar11,"45":as11,"46":at11,
                   "47":au11,"48":av11,"49":aw11,"50":ax11,"51":ay11,"52":az11,"lainlain":zx,cstm1:cstm11,cstm2:cstm12,cstm3:cstm13,cstm4:cstm14}
        $.each(pilihan, function(i, bl) {   
         $(target).append($("<option></option>").attr("value",idss+i).text(bl));
         });
        var zx = $('#skpkgid option[value="lainlain"]').text();
        $(target).append($("<option></option>").attr("value","lainlain").text(zx)); 
         
        $(target).find('option').filter(function() {
          return !this.value || $.trim(this.value).length == 0 || $.trim(this.text).length == 0;
        }).remove();
      }
  ,buatSKP : function(i){
   document.getElementById('tambah').click()
      $('#jammulai').val(umum.waktu('#setTempatJam'+i+' select','jAwal'))
      $('#menitmulai').val(umum.waktu('#setTempatJam'+i+' select','mAwal'))
      $('#jamselesai').val(umum.waktu('#setTempatJam'+i+' select','jAkir'))
      $('#menitselesai').val(umum.waktu('#setTempatJam'+i+' select','mAkir'))
      $('#skpkgid').val($('#setSKP'+i).val())
      $('#keterangan').val($('#setTextSKP'+i).val())
      $('#jumlah').val($('#setKegiatan'+i+' :selected').text())
   document.getElementById('btnsimpan').click()
   document.getElementById('btnok').click()
      $('.modal-backdrop').remove()
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
    ,handleResponse : function (message) {
        console.log(`pesan dari background :  ${message.response}`);
    }
    ,handleError : function(error) {
        console.log(`Error: ${error}`);
    }
   ,autoKomplit : function (idTarget,array,arrayNIP){
		var idtarget = idTarget;
		var arr = array;
		if($('.autocomplate').length < 1){
			$(idtarget).parent().find('span').after('<div class="autocomplete"></div>');
			$('.autocomplete').prepend($(idtarget)).append('<ul id="query-results"></ul>').find('idtarget').attr('autocomplete','off');
			$(idtarget).on({
				"focus": function() {
				$(this).parent().css('border-color', '#CCCCCC');
				
			  },
			  "blur": function() {
				$(this).parent().css('border-color', '#EEEEEE');
			  },
			  "keyup": function() {
				var results = [];
					var val = $(this).val();
				var $queryResults = $('#query-results');
				var queryResultsMarkup = "";

				if (val.length > 1) {
						$queryResults.html("").hide();
						$('head').append('<style class="autoC">.autocomplete::after{content: "";position:absolute;right:18px;border:8px solid #000;border-color:#ffffff69 transparent transparent transparent;top: 28px;border-radius: 0px 0;}</style>');
						$.each(arr, function(i) {
							if (arr[i].match(new RegExp(val,'i'))) {
								var $li = $('<li/>')
									.html(arr[i])
								.attr('data-value', arr[i]);
							$queryResults.append($li).show();
							
						}
					});

					$('li').on('click', function() {
						var selectedVal = $(this).attr('data-value');
						var index = jQuery.inArray( selectedVal, arr );
						var nip = arrayNIP[index];
						$(idtarget).val(nip);
						$('#query-results').html("").hide();
						console.log()
					});
				} else {
						$queryResults.html("").hide();
						$('.autoC').remove();
				}
			  }
			});
		}
   }

}
//************************************end deklarasi umum*******************************************



//************************************Mulai Penkodean*******************************************

function notifyBackgroundPage(e) {
  if(umum.ur.match(umum.page(true,"pusat"))){
    if(umum.detectMob()){
        browser.runtime.sendMessage({greeting: umum.detectMob()}).then(umum.handleResponse, umum.handleError);
        if(umum.ur === umum.page(false,"index","/SurveiCovid19")){
            browser.runtime.sendMessage({greeting: "SurveiCovid19"}).then(umum.handleResponse, umum.handleError);            
        }
    }else{
       if(umum.ur === umum.page(true,"skp_journal") || umum.ur === umum.page(false,"skp_journal","#")){//jika di halaman jurnal 
            browser.runtime.sendMessage({greeting: "skp_journal"}).then(umum.handleResponse, umum.handleError);  
       }else{
            browser.runtime.sendMessage({greeting: "selain_skp_journal"}).then(umum.handleResponse, umum.handleError);
       }
    }
  }
}
function notifyBackgroundPageFalse(e) {
    browser.runtime.sendMessage({greeting: "BukanTarget"}).then(umum.handleResponse, umum.handleError);
}


    

if(item.setStatus === "true"){
       
if(document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', notifyBackgroundPage);   
   }else{  
      notifyBackgroundPage()
}
    
if(umum.detectMob()){
  //cekBrowser(umum.detectMob())
  console.log("mobile/tablet")   

  // end **inject meta untuk responsive mobile device
  try {
    var meta = "<meta name='viewport' content='width=device-width,height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no,viewport-fit=cover '></meta>"
	$('head').prepend(meta)
  }
    catch(err) {
        console.log(err.message)
    }
    
//*************************deklarasi membungkus div agar tengah********************************
umum.tengah('.boxLogin div#form_content')
umum.tengah('.boxLogin div#form_content span img')
umum.tengah('.logoSimpeg')
umum.tengah('div.datalist #data')
umum.tengah('div.datalist #data2')
umum.tengah('div.datalist #data3')
umum.uiMenuBawah();
umum.uiAbsenCepat();
umum.uiBack();

function LinkTunkir(apa){var date = new Date()
	var th = date.getFullYear();
	var bl = date.getMonth()+1;

	$('a[title="'+apa+'"]').attr('href',$('a[title="'+apa+'"]').attr('href') + "&y="+th+"&m="+bl ) 
}
LinkTunkir("PERHITUNGAN TUNKIR")

$('a#togleAbsen').click(function(){
	var bottom = $('.icon-Absen').css('bottom');
	var bawah = bottom.split(".")[0].replace(/\D/g, "");
	if(bottom < bawah ){
		$('.icon-Absen').attr('style','bottom:10vw !important')
	}else{
		$('.icon-Absen').attr('style','bottom:-41vw !important')
	}
})


$('a#absenCepatMasuk').click(function(){
	$("input#inout").val("in");
	$("#absen").submit();
})
$('a#absenCepatKeluar').click(function(){
	$("input#inout").val("out");
	$("#absen").submit();
})
//*************************end deklarasi membungkus div agar tengah********************************

    
//*************************code umum ********************************
	if(umum.ur.split("/")[2] === umum.page(true,"pusat") && umum.ur.split("/")[3] === ""){

		umum.uiHome()
		setTimeout(gantiMenuHome,500);
		function cariURL(x){
			  var url = document.getElementsByTagName("dd")[x].getAttribute("ext:url")
			  document.getElementsByTagName("dd")[x].onclick = function(){
				  document.location.href = url
			  }
		}

	  function gantiMenuHome(){
		var item = document.getElementsByTagName('dd')
		var col = document.getElementsByClassName('col')

		col[0].appendChild(item[0].cloneNode(true))
		col[1].appendChild(item[2].cloneNode(true))
		col[2].appendChild(item[4].cloneNode(true))
		col[3].appendChild(item[6].cloneNode(true))
		if(document.getElementById("viewport") != null || document.getElementById('ext-gen3') != null){
			document.getElementById("viewport").style.display = "none"
			document.getElementById('ext-gen3').style.width = "100vw"
			document.getElementById('ext-gen3').style.position = "static"
			document.getElementById('ext-gen3').style.height = "100vh"
		}

		cariURL(0);cariURL(1);cariURL(2);cariURL(3);
		
	  }

	}
if(umum.ur === umum.page(true,"signin") || umum.ur === umum.page(false,"signin","?l=logout")){
	//umum.uiLogin();
		if(document.getElementById("viewport") != null || document.getElementById('ext-gen3') != null){
			document.getElementById("viewport").style.display = "none"
			document.getElementById('ext-gen3').style.width = "100vw"
			document.getElementById('ext-gen3').style.position = "static"
			document.getElementById('ext-gen3').style.height = "100vh"
		}
}

if(umum.ur === umum.page(true,"index_new") || umum.ur === umum.page(false,"index_new","#")){
  $('a[title="TUNJANGAN KINERJA"]').parent().insertBefore('div#mainMenu ul li:eq(2)');
}
if(umum.ur === umum.page(true,"skp")){
  $('div#liststruktur').insertAfter('table#menuBox')
}
//if(umum.ur === umum.page(false,"index","/AbsensiOnline/dashboard/") || umum.ur === umum.page(false,"index","/AbsensiOnline/dashboard/saved")){
  //umum.warning("PERINGATAN","Tadi sudah absen masak absen lagi")
//}
$('div#cetakTunkir table#tunkirExcel center#tengahdivdatalistdata tbody#data').insertAfter('div#cetakTunkir table#tunkirExcel thead.text-center')
$('div#cetakTunkir table#tunkirExcel center#tengahdivdatalistdata').remove();
//*************************end code umum ********************************
  if(umum.ur === umum.page(true,"skp_journal") || umum.ur === umum.page(false,"skp_journal","#")){
      $('footer').remove();
	  var cek = $('.pageheader > span').length;
	  if(cek == 1){
		  umum.buatWadahHP();
		  umum.tambahPrevNext();
	  }else{
		  umum.tambahPrevNext();			
	  }
  }
}else{
      console.log("Dektop")
	  
      if(umum.ur === umum.page(true,"skp_journal") || umum.ur === umum.page(false,"skp_journal","#")){
        var cek = $('.pageheader > span').length;
		if(cek == 1){
			umum.buatWadah();
			umum.tambahPrevNext();
		}else{
			umum.tambahPrevNext();			
		}
      }
}

//************************************ambil data cache storage*******************************************
  
  if(umum.ur === umum.page(true,"signin") || umum.ur === umum.page(false,"signin","?l=logout")){
     
	 if(item.setOtoLogin){
		$('input#user_nip.inputan2').val(item.setNIP);
		$('input#vpassword.input-xlarge').val(item.setPass)
		$('#masuk').trigger('click')
		setTimeout(function(){$('#btnsimpan').trigger('click')},800)
	 }else{
		$('input#vpassword.input-xlarge').val(item.setPass)
		var arr = item.setNM.split("\n");
		var arrNP = item.setNP.split("\n");
	 
		umum.autoKomplit('#user_nip',arr,arrNP)
     }
	 
  }else if(umum.ur === umum.page(false,"index","/AbsensiOnline/dashboard/") || umum.ur === umum.page(false,"index","/AbsensiOnline/dashboard/saved")){ 

  }
  
  if(umum.ur === umum.page(true,"skp_journal") || umum.ur === umum.page(false,"skp_journal","#")){//jika di halaman jurnal
		$('header, .breadcrumb').hide()    

      function tambahSKP(i){
       var array = [i,item.setJamPagi,item.setJamSiang,
                    item.setJamMalam,item.setSKP1,item.setSKP2,
                    item.setSKP3,item.setSKP4,item.setSKP5,
                    item.setSKP6,item.setSKP7,item.setSKP8,
                    item.setSKP9,item.setSKP10,item.setSKP11,
                    item.setSKP12,item.setSKP13,item.setSKP14,
                    item.setSKP15,item.setSKP16,item.setSKP17,
                    item.setSKP18,item.setSKP19,item.setSKP20]
       umum.tambahLagi(array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8],array[9],array[10],array[11],array[12],array[13],
                      array[14],array[15],array[16],array[17],array[18],array[19],array[20],array[21],array[22],array[23],array[23]);

    }

    //buat formnya

    umum.tombolKualitas();
    $('form#frmthn').insertAfter('button#viewKualitasSKP')

    tambahSKP(1)
    setTimeout(function(){
      $('#buatSKP').click(function(){
        if(!$('#setTextSKP1').val()){
          alert('Kegiatan masih kosong..!!\nPilih salah satu SKP untuk menigisi Isian kegiatan\n.\n.\nJika tidak muncul, setting di pengaturan plugin.\ncara :\n1. Klik titik 3 kanan atas\n2. Pilih Sim-Man\n3. Input kegaitanya di SKP 1 dst. dan sesuaikan dengan SKP ')
        }else{
          var jml = $('.setWaktu').length
          for(var i = 1;i<jml+1;i++){
					 var r = $('#switcha'+(i)+' input[type="checkbox"]').is(':checked');
					 if (r == false) {
						continue;
					 }else{
						alert('INPUT SKP KE-'+i+'\n'+$('#setTextSKP'+(i)).val());
						umum.buatSKP(i);
					 }
              if(typeof $('#setTextSKP'+(i+1)).val() == 'undefined' || !$('#setTextSKP'+(i+1)).val()){
                  alert('berhasil');
                  break;
              }else{

             }
          }
        }
        
      })
    },2000)

    $('#tambahForm').click(function(){
      umum.jml += 1  
      tambahSKP(umum.jml)
    })
    
    setTimeout(function(){
      let data1 = {
        setLabel0 : $('#setSKP1 option:eq(0)').text()
        ,setLabel1 : $('#setSKP1 option:eq(1)').text()
        ,setLabel2 : $('#setSKP1 option:eq(2)').text()
        ,setLabel3 : $('#setSKP1 option:eq(3)').text()
        ,setLabel4 : $('#setSKP1 option:eq(4)').text()
        ,setLabel5 : $('#setSKP1 option:eq(5)').text()
        ,setLabel6 : $('#setSKP1 option:eq(6)').text()
        ,setLabel7 : $('#setSKP1 option:eq(7)').text()
        ,setLabel8 : $('#setSKP1 option:eq(8)').text()
        ,setLabel9 : $('#setSKP1 option:eq(9)').text()
        ,setLabel10 : $('#setSKP1 option:eq(10)').text()
        ,setLabel11 : $('#setSKP1 option:eq(11)').text()
        ,setLabel12 : $('#setSKP1 option:eq(12)').text()
        ,setLabel13 : $('#setSKP1 option:eq(13)').text()
        ,setLabel14 : $('#setSKP1 option:eq(14)').text()
        ,setLabel15 : $('#setSKP1 option:eq(15)').text()
        ,setLabel16 : $('#setSKP1 option:eq(16)').text()
        ,setLabel17 : $('#setSKP1 option:eq(17)').text()
        ,setLabel18 : $('#setSKP1 option:eq(18)').text()
        ,setLabel19 : $('#setSKP1 option:eq(19)').text()
        ,setLabel20 : $('#setSKP1 option:eq(20)').text()
        ,infoCodeSKP : umum.infoCodeSKP()
      }
         browser.storage.sync.set(data1)
     },2500);
	 
	 //keydown
	$(document).on("keydown", function(e) {
		
		  if (e.keyCode == 37) {
			$('#tgPrev').addClass('tgPress');
			var indc = $('.table-condensed').find('tbody tr .active').index();
            if (indc==0){
              $('.table-condensed').find('tbody tr .active').parent().prev().find('td:eq(6)').trigger('click')  
            }else{
              $('.table-condensed').find('tbody tr .active').prev().eq(0).trigger('click')    
            }
			setTimeout(function(){$('#tgPrev').removeClass('tgPress');},350);
		  }else if(e.keyCode == 39){
			$('#tgNext').addClass('tgPress');
			var indc = $('.table-condensed').find('tbody tr .active').index();
            if (indc==6){
              $('.table-condensed').find('tbody tr .active').parent().next().find('td:eq(0)').trigger('click')  
            }else{
              $('.table-condensed').find('tbody tr .active').next().eq(0).trigger('click')    
            }
			setTimeout(function(){$('#tgNext').removeClass('tgPress');},350);
		  }
	});
         
  }// jika di halaman jurnal
 }else{

  if(document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', notifyBackgroundPageFalse);   
   }else{  
      notifyBackgroundPageFalse()
  }

}
    
});

//************************************end ambil data cache storage*******************************************
