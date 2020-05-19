// cheeto.js

$(function(){
    // 초기화
    $('.pop-up').hide();
    // 버튼 클릭시 보이게함
    $('#btn-choice').click(function(){
    $('.pop-up').show();
    // x버튼 클릭시 닫기
    $('.btn-xbox').click(function(){
    $('.pop-up').hide();    
    })    
    })
});

