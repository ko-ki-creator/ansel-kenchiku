// ナビゲーション展開
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function() {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});


// お知らせ記事のスライド
const slider = document.getElementById('slider'); //記事全体
const prevBtn = document.getElementById('prevBtn'); //左ボタン
const nextBtn = document.getElementById('nextBtn'); //右ボタン

let position = 0 //現在のスライド位置を表す（1番左）
const visibleCards = 3; //一度に表示されるカードの枚数
const totalCards = slider.children.length; //記事全体にある記事の枚数を取得
const maxPosition = totalCards - visibleCards; //スライドできる最大の位置（5-3=2なので2回まで右にスライド可能）

//ボタンの有効・無効を切り替える関数
function updateButtons() { //disabledはスライド位置によって、ボタンが押せないように切り替える関数
    prevBtn.disabled = position === 0; //positionが0なら「左ボタン」は無効
    nextBtn.disabled = position >= maxPosition; //positionがmaxPosition以上なら「右ボタン」は無効
}

//スライドを動かす関数
function moveSlider(direction) { //directionの値によって、スライドを左か右に動かすかを判断
    if (direction === 'next' && position < maxPosition) {
         //「direction」の値が同じかつ「position」が「maxPosition(3)」より2以下の場合に+1
        position++;
    } else if (direction === 'prev' && position > 0) {
        //「direction」の値が同じかつ「position」が0より大きい場合に-1
        position--;
    }
    // movePercentは、記事全体の中でどのくらい移動させるかを計算
    const movePercent = (167 / totalCards) * position;
    // スライダーを左に移動させる
    slider.style.transform = `translateX(-${movePercent}%)`;
    // ボタンの状態を更新
    updateButtons();
}

//ボタンがクリックされたときの動作
nextBtn.addEventListener('click', () => moveSlider('next'));
prevBtn.addEventListener('click', () => moveSlider('prev'));

updateButtons();

// 施工事例のスライド
$(function () {
        $(".slider-1").slick({
        // autoplay: true,
        arrows: true,
        fade: true,
        asNavFor: ".thumbnail-1",
        prevArrow: '<img src="images/prev.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="images/next.png" class="slide-arrow next-arrow">',
    });

    $(".thumbnail-1").slick({
        slidesToShow: 5,
        arrows: false,
        asNavFor: ".slider-1",
        focusOnSelect: true,
    });
});

$(function () {
        $(".slider-2").slick({
        // autoplay: true,
        arrows: true,
        fade: true,
        asNavFor: ".thumbnail-2",
        prevArrow: '<img src="images/prev.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="images/next.png" class="slide-arrow next-arrow">',
    });

    $(".thumbnail-2").slick({
        slidesToShow: 5,
        arrows: false,
        asNavFor: ".slider-2",
        focusOnSelect: true,
    });
});

$(function () {
        $(".slider-3").slick({
        // autoplay: true,
        arrows: true,
        fade: true,
        asNavFor: ".thumbnail-3",
        prevArrow: '<img src="images/prev.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="images/next.png" class="slide-arrow next-arrow">',
    });

    $(".thumbnail-3").slick({
        slidesToShow: 5,
        arrows: false,
        asNavFor: ".slider-3",
        focusOnSelect: true,
    });
});

$(function () {
        $(".slider-4").slick({
        // autoplay: true,
        arrows: true,
        fade: true,
        asNavFor: ".thumbnail-4",
        prevArrow: '<img src="images/prev.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="images/next.png" class="slide-arrow next-arrow">',
    });

    $(".thumbnail-4").slick({
        slidesToShow: 5,
        arrows: false,
        asNavFor: ".slider-4",
        focusOnSelect: true,
    });
});

$(function () {
        $(".slider-5").slick({
        // autoplay: true,
        arrows: true,
        fade: true,
        asNavFor: ".thumbnail-5",
        prevArrow: '<img src="images/prev.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="images/next.png" class="slide-arrow next-arrow">',
    });

    $(".thumbnail-5").slick({
        slidesToShow: 5,
        arrows: false,
        asNavFor: ".slider-5",
        focusOnSelect: true,
    });
});

$(function () {
        $(".slider-6").slick({
        // autoplay: true,
        arrows: true,
        fade: true,
        asNavFor: ".thumbnail-6",
        prevArrow: '<img src="images/prev.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="images/next.png" class="slide-arrow next-arrow">',
    });

    $(".thumbnail-6").slick({
        slidesToShow: 5,
        arrows: false,
        asNavFor: ".slider-6",
        focusOnSelect: true,
    });
});