$(function() {

  /* ドロップダウンメニュー */
  if(window.matchMedia('(max-width: 768px)').matches) {
    $('#drop_menu_hidden').hide();
  }else {
    $('#drop_menu_hidden').show();
  }

  $('#spnavi li').click(function() {
    if($('#drop_menu_hidden').is(':hidden')) {
      $('#drop_menu_hidden:not(:animated)').slideDown('fast');
    }else {
      $('#drop_menu_hidden:not(:animated)').slideUp('fast');
    }
  });

  $(window).resize(function() {
    if(window.matchMedia('(max-width: 768px').matches) {
      $('#drop_menu_hidden').hide();
    }else {
      $('#drop_menu_hidden').show();
    }
  });


  /* モーダル */
  $('.modal1, .modal2, .modal3').hide();
  $('.mask').hide();
  $('.modal_window').hide();

  $('.modal_open1').click(function() {
    $('.modal1, .mask, .modal_window').show(); 
    $('body').addClass('action');
  });

  $('.modal_window').click(function() {
    $('.modal1').hide();
    $('.mask').hide();
    $('.modal_window').hide();
    $('body').removeClass('action');
  });

  $('.modal_open2').click(function() {
    $('.modal2, .mask, .modal_window').show(); 
    $('body').addClass('action');
  });

  $('.modal_window').click(function() {
    $('.modal2').hide();
    $('.mask').hide();
    $('.modal_window').hide();
    $('body').removeClass('action');
  });

  $('.modal_open3').click(function() {
    $('.modal3, .mask, .modal_window').show(); 
    $('body').addClass('action');
  });

  $('.modal_window').click(function() {
    $('.modal3').hide();
    $('.mask').hide();
    $('.modal_window').hide();
    $('body').removeClass('action');
  });



});