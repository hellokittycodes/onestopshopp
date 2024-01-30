// this part of the main.js file is only specified to the ARC files - full main.js file is located in main branch 
document.addEventListener('DOMContentLoaded', function () 
{
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2')
  var popup1 = document.getElementById('popup1');
  var popup2 = document.getElementById('popup2')

  if (btn1) 
  {
    btn1.addEventListener('click', function () {
      if (popup1.classList.contains('ishidden')) 
      {
          popup1.classList.remove('ishidden');
          popup1.classList.add('left');
      }
      else 
      {
        popup1.classList.remove('left'); 
        popup1.classList.add('ishidden'); 
      }
    });
  }
  if (btn2) 
  {
    btn2.addEventListener('click', function () {
      if (popup2.classList.contains('ishidden')) 
      {
          popup2.classList.remove('ishidden');
          popup2.classList.add('right');
      }
      else 
      {
        popup2.classList.remove('left'); 
        popup2.classList.add('ishidden'); 
      }
    });
  }
});
