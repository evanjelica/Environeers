$(document).ready(function()
{
    $("x").click(function()
    {
      if($("x").text() == "☰")
      {
        $("x").text("🞬");
      }
      else
      {
        $("x").text("☰");
      }
      
      $("li").toggle("slow");
    });  
});