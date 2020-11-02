$(function() {
    // js-bargarが押された時
    $('.js-bargar').on('click', function() {
        $(this).toggleClass('active');
        $('.js-nav').toggleClass('active');
    });

    // js-nav-itemを押した時 
    $('.js-nav a[href^="#"]').on('click', function() {
        var adjust = 50;
        var speed = 400;
        var href = $(this).attr('href');
        var target = $(href === "#" || href === "" ? 'html' : href), position = target.offset().top - adjust;
        $('.js-bargar').removeClass('active');
        $('.js-nav').removeClass('active');
        $('html, body').animate({scrollTop: position}, speed, "swing");
        return false;
    });

    // Contact.htmlページにて
    // =======================

    // js-counter
    // 1. 要素がkeyupされたらイベント発火
    $('.js-targetCount').on('keyup', function() {
        
        // 2. 入力された要素内の文字数を変数へ格納
        var count = $(this).val().length;
        
        // 3. js-counterに文字数を表示させる
        $('.js-counter').text(count);
    });

    const MSG = {
        MSG01: '文字を入力してください。',
        MSG02: 'Email形式で入力してください。',
        MSG03: '20文字以内で入力してください。',
        MSG04: '100文字以内で入力してください。'
    }

    // Emailのバリデーションチェック
    $('.js-email').on('keyup', function() {

        var email = $(this).val();

        // 値が空だった場合
        if(email === '') {
            $('.js-err').text(MSG.MSG01);
        // email形式かどうか
        }else if(email.match(/.+@.+\..+/) == null) {
            $('.js-err').text(MSG.MSG02);
        }else{
            $('.js-err').text('');
        }

    });

    // タイトルのバリデーション
    $('.js-title').on('keyup', function() {

        var title = $(this).val();
        var err = $('.js-err-title');

        // 値が空だった場合
        if(title === '') {
            err.text(MSG.MSG01);
        // 20文字いないかどうか
        }else if(title.length >= 20) {
            err.text(MSG.MSG03);
        }else{
            err.text('');
        }

    });

    // フワッとフェードイン
    $(window).on('scroll', function() {

        // もし、スクロールした幅がフェードインしたい要素まで来たら
        $('.js-fadeUp').each(function() {
            // スクロールした縦幅を変数へ格納
            var scrollTop = $(window).scrollTop() + 600;
            // フェードインしたい要素と上からの幅を変数へ格納
            var fadeTop = $(this).offset().top;
            if(scrollTop > fadeTop) {
                $(this).addClass('fadeUp');
            }
        });
    })


});