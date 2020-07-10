$(document).ready(function() {
    getResearch("아이폰 케이스")
});

$("#case").click(function() {
    getResearch("아이폰 케이스");
});

$( "#cable" ).click(function() {
    getResearch("아이폰 케이블");
});

$( "#film" ).click(function() {
    getResearch("아이폰 보호 필름");
});

function getResearch(query) {
    event.preventDefault();

    var tag = "";

    $.ajax({
      url: "./controller/research.php",
      type: "GET",
      data: {
        "query" : query
      },
      dataType: "json",
      cache: false,
      error: function (request, status, error){        
        console.log(request);
        console.log(status);
        console.log(error);
      },
      success: function (response) {
        console.log(response);

        $.each(response['items'], function (key, val) {
            tag += '<div id = "firstrow" onclick="goShop(\'' + val.link + '\')">';
            tag += '<div class="ui-grid-a">';
            tag += '<div class="ui-block-a">';
            tag += '<img src="' + val.image + '" />';
            tag += '</div>';
            tag += '<div class="ui-block-b">';
            tag += '<div class="ui-bar ui-bar-a">';
            tag += '<p>최저가 :' + val.lprice+ '원</p>';
            tag += '<p>최고가 :' + val.hprice + '원</p>';
            tag += '<p>판매처 :' + val.mallName + '</p>';
            tag += '<p>브랜드 :' + val.brand + '</p>';
            tag += '<p>카테고리 :' + val.category1 +'</p>';
            tag += '</div>';
            tag += '</div>';
            tag += '</div>';
            tag += '</div>';
        });

        $('#body').html(tag);
      },
      complete: function () {

      }
    });
}

function goShop(link) {
    window.open(link);
}