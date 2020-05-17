function scrollToElement(el) {
  $("html, body").animate({ scrollTop: $("#page" + el).offset().top }, 500);
}