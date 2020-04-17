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
  ,tambahLagi : function(i,isiJamPagi,isiJamSiang,isiJamMalam,isiSKP1,isiSKP2,isiSKP3,isiSKP4,isiSKP5,isiSKP6,isiSKP7,isiSKP8,isiSKP9,isiSKP10){
    var c = '<div class="cp" id="cp'+i+'"><h1>Buat SKP '+i+'</h1>\
            <form>\
                <div>\
                <div class="left"><label >Dinas</label></div>\
                    <select class="setWaktu" id="setWaktu'+i+'">\
                        <option value="siang">Siang</option>\
                        <option value="pagi">Pagi</Option>\
                        <option value="malam">Malam</Option>\
                    </select>\
                </div>\
                <div class="setTempatJam" id="setTempatJam'+i+'">\
                <div class="left"><label >Pilih Waktunya</label></div>\
                </div>\
                <div class="skp" id="skp'+i+'">\
                <div class="left"><label >Pilih Waktunya</label></div>\
                <select class="setSKP" id="setSKP'+i+'"><option>Mencari SKP....</option></select>\
                <textarea class="setTextSKP" id="setTextSKP'+i+'" disabled></textarea>\
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
        
        setTimeout(function(){
          $('#setSKP'+i+' option').remove();
          umum.isiSKP('#setSKP'+i)
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
                $('#setTextSKP'+i).val(isiSKP1)
            }else if(selectSKP.index() == 1){
                $('#setTextSKP'+i).val(isiSKP2)
            }else if(selectSKP.index() == 2){
                $('#setTextSKP'+i).val(isiSKP3)
            }else if(selectSKP.index() == 3){
                $('#setTextSKP'+i).val(isiSKP4)
            }else if(selectSKP.index() == 4){
                $('#setTextSKP'+i).val(isiSKP5)
            }else if(selectSKP.index() == 5){
                $('#setTextSKP'+i).val(isiSKP6)
            }else if(selectSKP.index() == 6){
                $('#setTextSKP'+i).val(isiSKP7)
            }else if(selectSKP.index() == 7){
                $('#setTextSKP'+i).val(isiSKP8)
            }else if(selectSKP.index() == 8){
                $('#setTextSKP'+i).val(isiSKP9)
            }else if(selectSKP.index() == 9){
                $('#setTextSKP'+i).val(isiSKP10)
            }
        })
        
        $('#cp'+i+' h1').click(function(){
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
  ,buatWadah : function(){
    var c = '<div id="options">\
              <div>\
                <button id="tambahForm">Tambah SKP</button>\
                <button id="buatSKP">Buat</button>\
              </div>\
            </div>'
    return $('.COnTopMenu').after(c)
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
        var idss = $("select[id='skpkgid'] option").attr('value').substring(0,$("select[id='skpkgid'] option").attr('value').length-2);
        var a = "01";var b = "02";var c = "03";var d = "04";var e = "05";
        var f = "06";var g = "07";var h = "08";var i = "09";var j = "10";
        var k = "11";var l = "12";var m = "13";var n = "14";var o = "15";
        var p = "16";var q = "17";var r = "18";var s = "19";var t = "20";
        var u = "21";var v = "22";var w = "23";var x = "24";var y = "25";
        var z = "26";var ln = "lainlain";var tt = "2";var kr = "3";
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
        pilihan = {"01":a11,"02":b11,"03":c11,"04":d11,"05":e11,"06":f11,"07":g11,"08":h11,"09":i11,"10":j11,
                   "11":k11,"12":l11,"13":m11,"14":n11,"15":o11,"16":p11,"17":q11,"18":r11,"19":s11,"20":t11,
                   "21":u11,"22":v11,"23":w11,"24":x11,"25":y11,"26":z11,"lainlain":zx}
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

  
}

//************************************end deklarasi umum*******************************************


//************************************Mulai Penkodean*******************************************


//**inject meta untuk responsive mobile device
try {
 var meta = "<meta name='viewport' content='width=device-width,height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no,viewport-fit=cover '></meta>"
 $('head').prepend(meta)
}
catch(err) {
  console.log(err.message)
}
// end **inject meta untuk responsive mobile device



//*************************deklarasi membungkus div agar tengah********************************
umum.tengah('.boxLogin div#form_content')
umum.tengah('.boxLogin div#form_content span img')
umum.tengah('.logoSimpeg')
umum.tengah('div.datalist #data')
umum.tengah('div.datalist #data2')
umum.tengah('div.datalist #data3')
//*************************end deklarasi membungkus div agar tengah********************************



//*************************code umum ********************************
if(umum.ur === umum.page(true,"index_new") || umum.ur === umum.page(false,"index_new","#")){
  $('a[title="TUNJANGAN KINERJA"]').parent().insertBefore('div#mainMenu ul li:eq(2)')
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



//************************************ambil data cache storage*******************************************
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
   'setSKP6',
   'setSKP7',
   'setSKP8',
   'setSKP9',
   'setSKP10',
   'setLabel0'
]).then((item) => {
  
  if(umum.ur === umum.page(true,"signin")){
     $('input#user_nip.inputan2').val(item.setNIP);
     $('input#vpassword.input-xlarge').val(item.setPass)
    
  }else if(umum.ur === umum.page(false,"index","/AbsensiOnline/dashboard/") || umum.ur === umum.page(false,"index","/AbsensiOnline/dashboard/saved")){ 

  }
  
  if(umum.ur === umum.page(true,"skp_journal") || umum.ur === umum.page(false,"skp_journal","#")){//jika di halaman jurnal
  $('header, .breadcrumb').hide()

    function tambahSKP(i){
       var array = [i,item.setJamPagi,item.setJamSiang,
                    item.setJamMalam,item.setSKP1,item.setSKP2,
                    item.setSKP3,item.setSKP4,item.setSKP5,
                    item.setSKP6,item.setSKP7,item.setSKP8,
                    item.setSKP9,item.setSKP10]
       umum.tambahLagi(array[0],array[1],array[2],array[3],array[4],array[5],array[6],array[7],array[8],array[9],array[10],array[11],array[12],array[13]);

    }
    
    
    //buat formnya
    umum.buatWadah();
    tambahSKP(1)
    setTimeout(function(){
      $('#buatSKP').click(function(){
        if(!$('#setTextSKP1').val()){
          alert('Kegiatan masih kosong..!!\nPilih salah satu SKP untuk menigisi Isian kegiatan\n.\n.\nJika tidak muncul, setting di pengaturan plugin.\ncara :\n1. Klik titik 3 kanan atas\n2. Pilih Sim-Man\n3. Input kegaitanya di SKP 1 dst. dan sesuaikan dengan SKP ')
        }else{
          var jml = $('.setWaktu').length
          for(var i = 1;i<jml+1;i++){
              umum.buatSKP(i)
              if(typeof $('#setTextSKP'+(i+1)).val() == 'undefined' || !$('#setTextSKP'+(i+1)).val()){
                  alert('berhasil');
                  break;
              }else{
                 var r = confirm("Apakah ingin melanjutkan input skp :\n" + $('#setTextSKP'+(i+1)).val());
                 if (r == false) {
                   break
                 }else{
                   continue;
                 }
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
      }
         browser.storage.sync.set(data1)
     },2500)
       
   

    
  }// jika di halaman jurnal
  
});





//************************************end ambil data cache storage*******************************************
