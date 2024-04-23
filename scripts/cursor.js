const customCursor = document.querySelector('.cursor');
const cursorSizeInput = document.getElementById('cursorSize');
const cursorSizeSlider = document.getElementById('cursorSizeSlider');
// const toggleCursorBtn = document.getElementById('toggleCursor');
const images = [
  'icons/cursors/empty.png',
  'icons/cursors/cursor1.gif',
  'icons/cursors/cursor2.png',
  'icons/cursors/cursor3.png',
  // 'icons/cursors/cursor4.png',
  'icons/cursors/cursor5.png'
];
const imageOptions = document.getElementById('imageOptions');

document.addEventListener('mousemove', (event) => {
  customCursor.style.left = event.clientX + 'px';
  customCursor.style.top = event.clientY + 'px';
});

// function updateCursorState(cursorIsActive) {
//   // Update cursor display
//   customCursor.style.display = cursorIsActive ? 'none' : 'block';

//   // Update image options display
//   imageOptions.style.display = cursorIsActive ? 'none' : 'flex';
//   cursorSizeSlider.style.display = cursorIsActive ? "none" : 'block';
// }


document.addEventListener('DOMContentLoaded', function() {

  // Toggle cursor active state and save it
// Toggle cursor active state and save it
// toggleCursorBtn.addEventListener('click', function (event) {
//   event.stopPropagation();
//   const cursorIsActive = !customCursor.classList.contains('active');
//   customCursor.classList.toggle('active', cursorIsActive);

//   updateCursorState(cursorIsActive);
//   // Save the state to Chrome storage
//   chrome.storage.sync.set({ cursorIsActive: cursorIsActive });

// });


  // Load saved cursor size
  chrome.storage.sync.get('cursorSize', function(data) {
    const size = data.cursorSize || 32;
    customCursor.style.width = size + 'px';
    customCursor.style.height = size + 'px';
    cursorSizeInput.value = size;
  });

  // Load saved cursor state
  // chrome.storage.sync.get(['cursorIsActive'], function (result) {
  //   const cursorIsActive = result.cursorIsActive;
  //   if (cursorIsActive) {
  //     customCursor.classList.add('active');
  //   } else {
  //     customCursor.classList.remove('active');
  //   }
  //   updateCursorState(cursorIsActive);
  // });

  // images.forEach((imagePath) => {
  //   const img = document.createElement('img');
  //   img.src = imagePath;
  //   img.style.width = '3rem';
  //   img.style.height = '3rem';
  //   img.style.margin = '10px';
  //   img.style.padding = '0.5rem';

  //   img.style.cursor = 'pointer';
  //   img.style.backgroundColor = 'gray';
  //   img.style.borderRadius='10px';
  //   img.style.border='none';
  //   img.addEventListener('click', function() {
  //     customCursor.style.backgroundImage = `url(${imagePath})`;
  //     // Save the chosen image path to Chrome storage
  //       chrome.storage.sync.set({ cursorImagePath: imagePath });
  //   });

  //   imageOptions.appendChild(img);
  // });
  // Load saved cursor image path
    chrome.storage.sync.get(['cursorImagePath'], function (result) {
        const cursorImagePath = result.cursorImagePath;
        if (cursorImagePath) {
        customCursor.style.backgroundImage = `url(${cursorImagePath})`;
        }
    });

    images.forEach((imagePath) => {
    const img = document.createElement('img');
    img.src = imagePath;
    img.style.width = '3rem';
    img.style.height = '3rem';
    img.style.margin = '10px';
    img.style.padding = '0.5rem';

    img.style.cursor = 'pointer';
    img.style.backgroundColor = 'gray';
    img.style.borderRadius='10px';
    img.style.border='none';
    img.addEventListener('click', function() {
      customCursor.style.backgroundImage = `url(${imagePath})`;
      // Save the chosen image path to Chrome storage
        chrome.storage.sync.set({ cursorImagePath: imagePath });
    });

    imageOptions.appendChild(img);
  });
  // Update and save cursor size
  cursorSizeInput.addEventListener('input', (event) => {
    const newSize = event.target.value;
    customCursor.style.width = newSize + 'px';
    customCursor.style.height = newSize + 'px';
    chrome.storage.sync.set({cursorSize: newSize});
  });
  document.addEventListener('mouseleave', () => {
    customCursor.style.display = 'none';
  });

  document.addEventListener('mouseenter', () => {
    customCursor.style.display = 'block';
  });
});
