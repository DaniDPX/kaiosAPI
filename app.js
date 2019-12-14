window.addEventListener("load", function() {
  console.log("Hello World!");
});

document.activeElement.addEventListener('keydown', handleKeydown);

function handleKeydown(e) {
  switch(e.key) {
    case 'ArrowUp':
      nav(-1);
      break;
    case 'ArrowDown':
      nav(1);
      break;
    case 'ArrowRight':
      nav(1);
      break;
    case 'ArrowLeft':
      nav(-1);
      break;
  }
}

function nav (move) {
  const currentIndex = document.activeElement.tabIndex;
  const next = currentIndex + move;
  const items = document.querySelectorAll('.items');
  const targetElement = items[next];
  targetElement.focus();
}







var volume = navigator.volumeManager;




// // request system application to show the volume status
// volume.requestShow();


function volumeUp(){
// request system application to increase audio volume
volume.requestUp();
}

function voulumeDown(){
  // request system application to decrease audio volume
volume.requestDown();
}