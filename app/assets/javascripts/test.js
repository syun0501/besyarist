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



  var i = 0, v = 0;
msg = new Array();　// 表示する文字列の配列

msg[0] = " ようこそ besyariへ　　　 ";
msg[1] = " ディスカッション　　 "; 
msg[2] = " を通して "; 
msg[3] = " ライバルや 　　 "; 
msg[4]= " 色に関することはColor Roomで 　"; 
msg[5]= " 色や文字に関連するJavaScript集もあります。 "; 
function Loopmsg() { 
if (v < 50) {
v++;　  // vは繰り返し回数
if (i < msg.length) {
document.myForm.tbox.value = msg[i];
i++;
if (i == msg.length) {  // msg.lengthは配列の数
i = 0;
}
setTimeout("Loopmsg()", 2000);　//メッセージの変わる速度（単位は千分の一秒）
}
}
}