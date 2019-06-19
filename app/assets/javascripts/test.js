$(function() {
    var $win = $(window),
        $header = $('header'),
        headerHeight = $header.outerHeight(),
        startPos = 0;
  
    $win.on('load scroll', function() {
      var value = $(this).scrollTop();
      if ( value > startPos && value > headerHeight ) {
        $header.css('top', '-' + headerHeight + 'px');
      } else {
        $header.css('top', '0');
      }
      startPos = value;
    });
  });






var i = 0;
var v = 0;
msg = new Array();

msg[0] = "小さな星が世界にインパクトを与える";
msg[1] = "あなたの中で一番の";
msg[2] = "価値ある時間を創り出し";
msg[3] = "アクションまでの距離を最適に";
msg[4]= "あなたの世界を広くします";
msg[5]= "エゴイズムに価値を生み出す";
function Loopmsg() {
if (v < 50) {
v++;　 // vは繰り返し回数
if (i < msg.length) {
document.getElementById("tbox").innerHTML = msg[i];
i++;
if (i == msg.length) { // msg.lengthは配列の数
i = 0;
}
setTimeout("Loopmsg()", 2000);　//メッセージの変わる速度（単位は千分の一秒）
}
}
}



