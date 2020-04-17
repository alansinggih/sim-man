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
						<textarea id="textWarning'+i+'" class="swal-content__input" style="height: 91px;">'+isi+'</textarea>\
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
          $('#keterangan').val($('#textWarning'+a).val())
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

}
//************************************Kumpulan Fungsi*******************************************
  
function editJml() {
    setTimeout(function(){  
      var jml = $('.icon-edit').length
      var skrg = $('#tgla').val().substring(0,2)
      for(var i = 0;i<jml;i++){
          pendukung.editJumlah(i)
          iconEdit(i)
          pendukung.warning(skrg,i)
          skpEdit(i)
      }
    },2000)
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
    tg : $('#tgla').val().substring(0,2)
  }
    skE.parent.find('td:eq(3)').on('click',function(){
      $('#divWarning'+skE.tg+i).addClass('swal-overlay--show-modal')
    })
}


//************************************Mulai Penkodean*******************************************
  if(pendukung.ur === pendukung.page(true,"skp_journal") || pendukung.ur === pendukung.page(false,"skp_journal","#")){//jika di halaman jurnal
    //edit Jumlah
    editJml()
    document.getElementById('btnok').onclick = function(){
      $('.hh').remove()
      editJml()
    };

    $('.datepicker-days').on('click', function(){
      $('.hh').remove()
      setTimeout(editJml,1500)
    })  
  }