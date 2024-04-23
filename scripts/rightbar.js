function saveVideoSelection(videoSelection) {
    localStorage.setItem("selectedVideo", videoSelection);
}

function saveGifSelection(gifSelection) {
localStorage.setItem("selectedGif", gifSelection);
}

function saveTogglePreference(preference, isChecked) {
localStorage.setItem(preference, isChecked);
}

function saveMusicSelection(musicSelection) {
    localStorage.setItem("selectedMusic", musicSelection);
}
    
function setActiveGif(selectedGif = "tot") {
    // Fade out all gifs
    $('.avatar-box > center').fadeOut("fast");
  
    // Fade in the selected gif
    $(`#${selectedGif}gif`).fadeIn("fast");

    // Save the selected gif to local storage
    saveGifSelection(selectedGif);
}
  

function setActiveMusic() {
    const selectedMusic = localStorage.getItem("selectedMusic") || "one";
    const musicPlayers = document.querySelectorAll('.music-player');

    // Hide all music players except the selected one
    musicPlayers.forEach((player) => {
        player.classList.add('hidden');
    });
    const selectedPlayer = document.getElementById(selectedMusic);
    selectedPlayer.classList.remove('hidden');

    // Show the music box
    const musicBox = document.querySelector('.music-box');
    musicBox.classList.remove('hidden');
}

  

function switchMusicPlayer(selectedMusic) {
    saveMusicSelection(selectedMusic);
    setActiveMusic();
}

let currentAvatar = 0;

const maxAvatar = 8;

function updateAvatarDisplay() {
  $('.avatar-img').each(function(index) {
    if (index === currentAvatar) {
      $(this).slideDown('fast');
    } else {
      $(this).slideUp('fast');
    }
  });
//   $('#avatar-counter').text(`${currentAvatar + 1}/${maxAvatar + 1}`);
}


  
jQuery(document).ready(function() {

  
  // show widget info
  const toggleElements = document.querySelectorAll('.hideshow');

  toggleElements.forEach(function(element) {
      const targetId = element.dataset.target;
      // const targetElement = document.getElementById(targetId);
      const isChecked = localStorage.getItem(targetId) === 'true';

      element.checked = isChecked;
      if (isChecked) {
          $('#' + targetId).show();
      } else {
          $('#' + targetId).hide();
      }

      element.addEventListener('change', function() {
          const isChecked = this.checked;
          saveTogglePreference(targetId, isChecked);
      
          if (isChecked) {
              $('#' + targetId).slideDown('fast');
          } else {
              $('#' + targetId).slideUp('fast');
          }
      });
  });

  const breatheBox = document.querySelector('.breathe-box');
  const images = breatheBox.querySelectorAll('img');
  let currentBreatheIndex = 0;
  // $('.breathe-box img:not(:first-child)').hide();

  breatheBox.addEventListener('click', () => {
      $(images[currentBreatheIndex]).fadeOut(200, function() {
          currentBreatheIndex = (currentBreatheIndex + 1) % images.length;
          $(images[currentBreatheIndex]).fadeIn(200);
      });
  });

  // GIFS/AVATARS
  $('#prev-btn').on('click', function() {
    if (currentAvatar === 0) {
        currentAvatar = maxAvatar-1;
    } else {
      currentAvatar = Math.max(currentAvatar - 1, 0);
    }
      updateAvatarDisplay();
      localStorage.setItem('selectedAvatar', currentAvatar);
  });
  
  $('#next-btn').on('click', function() {
      if (currentAvatar === maxAvatar) {
          currentAvatar = 0;
      } else {
          currentAvatar = Math.min(currentAvatar + 1, maxAvatar);
      }
      updateAvatarDisplay();
      localStorage.setItem('selectedAvatar', currentAvatar);
  });
  
  const selectedAvatar = localStorage.getItem('selectedAvatar');
  if (selectedAvatar !== null) {
      currentAvatar = parseInt(selectedAvatar);
  }
  updateAvatarDisplay();
  
    // MUSIC
    // Set the active music player on page load
    setActiveMusic();
    // Add click listeners to music selection buttons
    document.querySelectorAll('.music-btn').forEach((button) => {
        const musicSelection = button.dataset.music;
        button.addEventListener('click', () => {
            switchMusicPlayer(musicSelection);
        });
    });

});