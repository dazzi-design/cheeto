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

$(function () {
    // 전역변수(초기값)
        var img_num = 0;  // 이미지 번호 ((아래의 함수화(change_slider();) 시키기 위해 num으로 바꿧음 // 다시전역변수로 바꿔서 0바꿔줌))
        var img_width = 1200; // 이미지 폭

    // 슬라이더 이미지 변경 함수
    function change_slider(num) {
        img_num = num;  // 이미지 번호 0~2 / 아래의 함수화(change_slider();) 시키기 위해 num으로 바꿧음
        img_width = 1200; // 이미지 폭
        $('.slider > .sliders')
            .css('margin-left', -(img_width * img_num) + 'px');
    }

    // 위처럼 함수화 시켜서 변수로 만들었다 (매개변수) - change_slider();
    // 자동 재생, 재생(대기)시간 5000ms *** 시험볼거면 외워야함.
    setInterval(function(){
        // 마지막 이미지면 처음으로
        if(img_num > 2) { img_num = 0; }
        change_slider(img_num);
        img_num++; //다음 이미지
    }, 5000);
    

});



