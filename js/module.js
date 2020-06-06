$(document).ready(function () {
  $(".pushme").click(function () {
    //Ширина и высота всего документа
    var HeightDocument = $(document).height();
    var WidthDocument = $(document).width();

    //Плавное анимационное наложение на страницу серого фона
    $(".modal-bg").css({ width: WidthDocument, height: HeightDocument });
    $(".modal-bg").fadeIn(1000);
    $(".modal-bg").fadeTo("slow", 0.8);

    //Запрет на сколлинг страницы
    $("body").css({ overflow: "hidden" });

    $(".modal").css({ display: "block" });
    $(".modal").css({ transform: "translate(15%, 20%)" });

    //При клике на кнопке "Close Window", модальное окно и фон скрываются
    $(".skip").click(function () {
      $(".modal-bg, .modal").hide();
      $("body").css({ overflow: "auto" });
      console.log("close");
    });

    //При клике вне области модального окна, фон и модальное окно скрываются
    $(".modal-bg").click(function () {
      $(".modal-bg, .modal").hide();
      $("body").css({ overflow: "auto" });
    });
  });
});
