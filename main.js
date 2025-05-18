$(function () {
  // メイン画像のオプション
  $(".slider").slick({
    autoplay: true, // 自動再生ON
    arrows: false, // 矢印非表示
    asNavFor: ".thumbnail", // サムネイルと同期
  });
  // サムネイルのオプション
  $(".thumbnail").slick({
    slidesToShow: 4, // サムネイルの表示数
    asNavFor: ".slider", // メイン画像と同期
    focusOnSelect: true, // サムネイルクリックを有効化
  });
});