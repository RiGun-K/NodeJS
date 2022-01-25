$(()=>{
    // 로그인 버튼아이디 클릭시 이벤트처리
    $('#signin').on('click', ()=>{
        const studentId = $('#studentId').val();  // 학생아이디 input값 을 읽어온다.
        const password = $('#password').val();
        if(studentId==''|| password=='') alert('빈 칸입니다.'); // 입력값이 공백이면 리턴

        const data = {
            studentId:studentId,
            password:password
        };

        $.ajax({
            url:'/api/auth/signin',
            type:'post',
            contentType:'application/json;charset=uft-8',
            dataType:'json',
            data:JSON.stringify(data),
            success:function(data) {
                alert('로그인 성공');
                window.location.href = "/";
            }
        })
        .done((res)=>{
            if(res.result=='ok'); 
            else alert('로그인 실패');
        })
        .fail((err)=>{

        });
    });

});