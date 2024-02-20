//JS FOR CONSOLE CHROME MSGS THRU FLASK SOCKET-IO 
// _____________________________________________________________________________________
document.addEventListener('DOMContentLoaded', function () {
  var socket = io();

  // Log a message when the connection is established
  socket.on('connect', function () {
      console.log('connection established, socket running');
  });

  // Send a message from the client to the server
  socket.emit('message_from_client', 'This worked!');

  // Receive a message from the server
  socket.on('message_from_server', function (message) {
      console.log('ITT WORRRKKEED', message);
  });
});

// _____________________________________________________________________________________


// JS FOR ARC.HTML 
// _____________________________________________________________________________________
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
        popup2.classList.remove('right'); 
        popup2.classList.add('ishidden'); 
      }
    });
  }
});
//_______________________________________________________________________________________

//JS FOR CONSOLE CHROME MSGS THRU FLASK SOCKET-IO 
// _____________________________________________________________________________________
document.addEventListener('DOMContentLoaded', function () {
    var socket = io();
  
    // Log a message when the connection is established
    socket.on('connect', function () {
        console.log('connection established, socket running');
    });
  
    // Send a message from the client to the server
    socket.emit('message_from_client', 'This worked!');
  
    // Receive a message from the server
    socket.on('message_from_server', function (message) {
        console.log('ITT WORRRKKEED', message);
    });
  });
  
  // _____________________________________________________________________________________
  
  
  // JS FOR ARC.HTML 
  // _____________________________________________________________________________________
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
          popup2.classList.remove('right'); 
          popup2.classList.add('ishidden'); 
        }
      });
    }
  });
  //_______________________________________________________________________________________