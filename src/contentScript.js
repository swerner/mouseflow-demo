$(function(){
  var mouseflow = false;
  $("script").each(function(){
    $this = $(this);
    src = $this.attr("src");

    if(src !== undefined && src.match("mouseflow")){
      mouseflow = true;
    }
  });

  console.log("Mouseflow: ", mouseflow);
});
