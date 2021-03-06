// !!!!!!!!!!!!! SLIDER !!!!!!!!!!!!!!!

const slider = tns({
  container: ".slider__inner",
  items: 1,
  slideBy: "page",
  nav: false,
  responsive: {
    992: {
      nav: false,
      controls: false
    },
    320: {
      nav: true,
      controls: false
    }
  }
});

document.querySelector(".prev").onclick = function () {
  slider.goTo("prev");
};

document.querySelector(".next").onclick = function () {
  slider.goTo("next");
};

// !!!!!!!!!!!!! TABS !!!!!!!!!!!!!!!

$(function () {
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tabs-item_active)",
    function () {
      $(this)
        .addClass("catalog__tabs-item_active")
        .siblings()
        .removeClass("catalog__tabs-item_active")
        .closest("div.container")
        .find("div.catalog__content-wrapper")
        .removeClass("catalog__content-wrapper_active")
        .eq($(this).index())
        .addClass("catalog__content-wrapper_active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (prevent) {
        prevent.preventDefault();
        $(".catalog-card__content")
          .eq(i)
          .toggleClass("catalog-card__content_active");
        $(".catalog-card__list")
          .eq(i)
          .toggleClass("catalog-card__list_active");
      });
    });
  }

  toggleSlide(".catalog-card__link");
  toggleSlide(".catalog-card__back");

  // !!!!!!!!!!!!! MODAL !!!!!!!!!!!!!!!

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });

  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #thanks, #order").fadeOut("fast");
  });

  $(".catalog-card__btn").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text(
        $(".catalog-card__subtitle")
        .eq(i)
        .text()
      );
      $(".overlay, #order").fadeIn("slow");
    });
  });

  // $("#consultation-form").validate();
  // $("#order form").validate();
  // $("#consultation form").validate({
  //   rules: {
  //     name: 'required',
  //     phone: 'required',
  //     email: {
  //       required: true,
  //       email: true
  //     }
  //   },
  //   messages: {
  //     name: "Please, enter your name",
  //     phone: "Please, enter your phone number",
  //     email: {
  //       required: "Please, enter your email",
  //       email: "That email is incorrect (name@domain.com)"
  //     }
  //   }
  // });

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "Please, enter your name",
        phone: "Please, enter your phone number",
        email: {
          required: "Please, enter your email",
          email: "That email is incorrect (name@domain.com)"
        }
      }
    });
  }


  validateForm("#consultation-form");
  validateForm("#order form");
  validateForm("#consultation form")


});