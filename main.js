function a(event) {
  var btn = event.target.id;
  var imagePosition = document.getElementById("imageBox" + btn + "").offsetLeft;
  var contentPosition = document.getElementById("contentBox" + btn + "").offsetLeft;
  var contentPositionMobile = document.getElementById("contentBox" + btn + "").offsetTop;

  if (window.innerWidth > 1024) {
    document.getElementById("flexBoxImage").scrollTo({
      top: 0,
      left: imagePosition,
      behavior: 'smooth'
    });

    document.getElementById("flexBoxContent").scrollTo({
      top: 0,
      left: contentPosition,
      behavior: 'smooth'
    });
  }


  // MOBILE SCROLL

  if (window.innerWidth <= 1024) {
    document.getElementById("flexBoxImage").scrollTo({
      top: 0,
      left: imagePosition,
      behavior: 'smooth'
    });
    document.getElementById("flexBoxContent").scrollTo({
      top: contentPositionMobile,
      left: 0,
      behavior: 'smooth'
    });
  }

}
