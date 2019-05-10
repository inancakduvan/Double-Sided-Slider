function a(event) {
    var btn = event.target.id;
    var imagePosition = document.getElementById("imageBox" + btn + "").offsetLeft;
    var contentPosition = document.getElementById("contentBox" + btn + "").offsetLeft;
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

