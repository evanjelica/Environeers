$(document).ready(function()
{
    $("button").click(function()
    {
      if($("button").text() == "☰")
      {
        $("button").text("🞬");
      }
      else
      {
        $("button").text("☰");
      }
      
      $("li").toggle("slow");
    });  
});