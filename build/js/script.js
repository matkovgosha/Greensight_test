 window.onload = function() {
    document.getElementById("defaultOpen").click();
};
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    for (i = 0; i < tablinks.length; i++) {
        if((tablinks[i].classList.contains("active")) && (tablinks[i].classList.contains("arrow-1"))){
            document.getElementById("arrow-1").classList.add("open");
            document.getElementById("arrow-2").classList.remove("open");
        } 
        if((tablinks[i].classList.contains("active")) && (tablinks[i].classList.contains("arrow-2"))){
            document.getElementById("arrow-1").classList.remove("open");
            document.getElementById("arrow-2").classList.add("open");
        }
    }
}

jQuery(function($) {
  $('#form').on('submit', function(event) {
    if ( validateForm() ) { 
      event.preventDefault();
    }
  });
  
  function validateForm() {


    let v_phone, v_fio, v_fio_empty, v_adress, v_comment;

    $(".text-error").remove();
    // Проверка ФИО

    var el_l = $("#FIO");

    function isCor(str) {
    return /[^а-яё -]/i.test(str);
    };

    if(isCor(el_l.val())){
        v_fio = true;
        el_l.after('<span class="text-error">В поле “ФИО” допустимы только кириллица, пробел, тире</span>');
    }else{
        v_fio = false;  
    }

    $("#FIO").toggleClass('error', v_fio);
    $("#FIO").toggleClass('mb', v_fio);

    if(v_fio ==false){
        if(el_l.val()==""){
            v_fio_empty = true;
            el_l.after('<span class="text-error">Заполните поле</span>');
        }else{
            v_fio_empty = false;  
        } 

        $("#FIO").toggleClass('error', v_fio_empty );
        $("#FIO").toggleClass('mb', v_fio_empty );
    }
    // Проверка телефона
    
    var el_2 = $("#phone");
    if ( el_2.val().length < 18 ) {
      v_phone = true;
      el_2.after('<span class="text-error for-login">Заполните телефон</span>');
    }else{
        v_phone = false;  
    }

    $("#phone").toggleClass('error', v_phone );
    $("#phone").toggleClass('mb', v_phone );

     // Проверка адреса

    var el_3 = $("#adress");
    if(el_3.val()==""){
        v_adress = true;
        el_3.after('<span class="text-error">Заполните поле</span>');
    }else{
        v_adress = false;  
    }

    $("#adress").toggleClass('error',  v_adress );
    $("#adress").toggleClass('mb', v_adress );

    // Проверка комментария
    var el_4 = $("#comment");
    if(el_4.val()==""){
        v_comment = true;
        el_4.after('<span class="text-error">Заполните поле</span>');
    }else{
        v_comment = false;  
    } 

    $("#comment").toggleClass('error', v_comment );
    $("#comment").toggleClass('mb', v_comment );

    return (v_fio || v_fio_empty || v_phone || v_adress || v_comment);
  }
   
});



$.fn.setCursorPosition = function(pos) {
    this.each(function(index, elem) {
    if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
    });
    return this;
};

jQuery(function($){
   $("#phone").mask("+7 (999) 999-99-99");
    $("#phone").click(function(){
    if($("#phone").val() == ("+7 (___) ___-__-__")){
         $(this).setCursorPosition(4); 
         }
    });  
});
