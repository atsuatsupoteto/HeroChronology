'use strict';
//取得ボタンクリック時
function clickBtn1(){

    //入力された年齢をageCurrentに格納
    const ageCurrent = document.getElementById("age").value;

    //現在の年をyearに取得
    let d = new Date();
    let year = d.getFullYear();
    
    //現在の年から入力された年齢を引き、生まれた年を取得
    let birthYear = year-ageCurrent;
    
    //歳と誕生月を画面に表示
    document.getElementById("select_age").textContent = ageCurrent + "歳";
    document.getElementById("birth_year").textContent = birthYear + "年生まれ";
}



//5行追加
var tableEle = document.getElementById('data-table');
for (var i = 0; i < 5; i++) {
  // テーブルの行を 5行追加する
  var tr = document.createElement('tr');
  for (var j = 0; j < 3; j++) {
    // テーブルの列を 3行追加する
    var td = document.createElement('td');
    td.innerHTML = 'データ'+(i+1)+"-"+(j+1);
    tr.appendChild(td);
  }
  tableEle.appendChild(tr);
}