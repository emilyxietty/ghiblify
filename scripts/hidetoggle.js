
jQuery(document).ready(function(){
    jQuery('#hideshow').on('click', function(event) {
        jQuery('#content').toggle('show');
        jQuery('#content8').toggle('show');

        jQuery('#totgif').toggle('show');
        // jQuery('#grid-btn').toggle('show');

    });
});
jQuery(document).ready(function(){
        $('#one').fadeIn("fast");
        $('#two').fadeOut("fast");
        $('#three').fadeOut("fast");
        $('#four').fadeOut("fast");
        $('#five').fadeOut("fast");

});

jQuery(document).ready(function(){
    jQuery('#onebut').on('click', function(event) {
        $('#one').fadeIn("fast");
        $('#two').fadeOut("fast");
    });
});

jQuery(document).ready(function(){
    jQuery('#onebut').on('click', function(event) {
        $('#one').fadeIn("fast");
        $('#two').fadeOut("fast");
        $('#three').fadeOut("fast");
        $('#four').fadeOut("fast");
        $('#five').fadeOut("fast");

    });
});
jQuery(document).ready(function(){
    jQuery('#twobut').on('click', function(event) {
        $('#one').fadeOut("fast");
        $('#two').fadeIn("fast");
        $('#three').fadeOut("fast");
        $('#four').fadeOut("fast");
        $('#five').fadeOut("fast");

    });
});
jQuery(document).ready(function(){
    jQuery('#threebut').on('click', function(event) {
        $('#one').fadeOut("fast");
        $('#two').fadeOut("fast");
        $('#three').fadeIn("fast");
        $('#four').fadeOut("fast");
        $('#five').fadeOut("fast");
    });
});
jQuery(document).ready(function(){
    jQuery('#fourbut').on('click', function(event) {
        $('#one').fadeOut("fast");
        $('#two').fadeOut("fast");
        $('#three').fadeOut("fast");
        $('#four').fadeIn("fast");
        $('#five').fadeOut("fast");

    });
});
jQuery(document).ready(function(){
    jQuery('#fivebut').on('click', function(event) {
        $('#one').fadeOut("fast");
        $('#two').fadeOut("fast");
        $('#three').fadeOut("fast");
        $('#four').fadeOut("fast");
        $('#five').fadeIn("fast");
    });
});

jQuery(document).ready(function(){
    jQuery('#hideshow1').on('click', function(event) {
        jQuery('#content1').toggle('show');
    });
});

jQuery(document).ready(function(){
    jQuery('#hideright').on('click', function(event) {
        jQuery('#rightpref').toggle('show');
        jQuery('#otherright').toggle('show');

    });
});
jQuery(document).ready(function(){
    jQuery('#hidefav').on('click', function(event) {
        jQuery('#favinfo').toggle('show');
    });
});

jQuery(document).ready(function(){
    jQuery('#hideshow2').on('click', function(event) {
        jQuery('#content2').toggle('show');
    });
});

jQuery(document).ready(function(){
    jQuery('#hideshow3').on('click', function(event) {
        jQuery('#content3').toggle('show');
    });
});


jQuery(document).ready(function(){

        $('#totgif').fadeIn("fast");
        $('#sopgif').fadeOut("fast");
        $('#chigif').fadeOut("fast");
        $('#calgif').fadeOut("fast");
});

jQuery(document).ready(function(){
    jQuery('#tot').on('click', function(event) {
        $('#totgif').fadeIn("fast");
        $('#sopgif').fadeOut("fast");
        $('#chigif').fadeOut("fast");
        $('#calgif').fadeOut("fast");
    });
});
jQuery(document).ready(function(){
    jQuery('#sop').on('click', function(event) {
      $('#sopgif').fadeIn("fast");
        $('#totgif').fadeOut("fast");
        $('#chigif').fadeOut("fast");
        $('#calgif').fadeOut("fast");
    });
});
jQuery(document).ready(function(){
    jQuery('#chi').on('click', function(event) {
      $('#chigif').fadeIn("fast");
        $('#totgif').fadeOut("fast");
        $('#sopgif').fadeOut("fast");
        $('#calgif').fadeOut("fast");
    });
});
jQuery(document).ready(function(){
    jQuery('#cal').on('click', function(event) {
      $('#calgif').fadeIn("fast");
        $('#sopgif').fadeOut("fast");
        $('#chigif').fadeOut("fast");
        $('#totgif').fadeOut("fast");
    });
});





// chrome saves
// chrome.storage.local.set({key: value}, function() {
//     console.log('Value is set to ' + value);
// });
//
// chrome.storage.local.get(['key'], function(result) {
//     console.log('Value currently is ' + result.key);
// });
//
// document.addEventListener('DOMContentLoaded', function () {
//     var checkbox = document.querySelector('input[type="checkbox"]');
//     chrome.storage.local.get('enabled', function (result) {
//         if (result.enabled != null) {
//             checkbox.checked = result.enabled;
//         }
//     });
//     checkbox.addEventListener('click', function () {
//         console.log(checkbox.checked);
//         chrome.storage.local.set({ 'enabled': checkbox.checked }, function () {
//             console.log("confirmed");
//         });
//     });
// });
