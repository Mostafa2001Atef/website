$(document).ready(function() {
    $(".tab-links li a").click(function(event) {
      event.preventDefault();
  
      
      var targetDiv = $(this).attr("href");
  
      
      $(".tab-content").removeClass("active");
      $(targetDiv).addClass("active");
  
  
      $(".tab-links li a").removeClass("active");
      $(this).addClass("active");
    });
  
  
    $(".tab-links li:first-child a").click();
  });
  
// هذه الاضافه عباره عن بمجرد الضغط على علامه التيبويب تظهر المحتوى باللون المناسب 