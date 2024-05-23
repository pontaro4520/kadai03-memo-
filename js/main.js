
    // 形状選択で入力フィールド発生
    $(".f").on("click", function(){
        const f = $("[name=f]:checked").prop("value");
        console.log(f)
        



    })




    //1.Save クリックイベント
    $("#save").on("click", function(){
        const m = $('[name=m]:checked').val();
        // console.log(m)
        const key = $("#material").val();
        console.log(key)
        const value = $("#text").val();
  
        localStorage.setItem(key, value);
        const html = `
        <li>
          <p>${key}</p>
          <p>${value}</p>
          <button id="clear">削除</button>
          </li>  
          `;
        $("#list").append(html);
  
  
      // ボタンを押した時に中身を削除
      $("#title").val("");
      $("#text").val("");
      });
  
      //2.clear クリックイベント
      $("#allclear").on("click", function(){
        localStorage.clear();
        $("#list").empty();
      })
  
      //3.ページ読み込み：保存データ取得表示
      for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
  
        // テンプレートリテラル
        const html = `
        <li>
          <p>${key}</p>
          <p>${value}</p>
          </li>  
          `;
  
          $("#list").append(html);
      }