// Remove the search bar
document.querySelector("#side > div._ak9t").remove();

// Remove all the chat header 
document.querySelector("#app > div > div.two._aigs > div._aigv._aigw > header").remove();

// Remove popup helper chat
document.querySelector("#wa-popovers-bucket").remove();

// Remove chat filter 
document.querySelector("#side > div.x1ky8ojb.x78zum5.x1q0g3np.x1a02dak.x2lah0s.x3pnbk8.xfex06f.xeuugli.x2lwn1j.x1nn3v0j.x1ykpatu.x1swvt13.x1pi30zi").remove();

// At the beginning unset Archive botton visibility 
document.querySelector("#pane-side > button").setAttribute("style", "display: none");

// Use a function to set or unset Archive visibility
(function() {
    'use strict';

    var elemento = document.querySelector("#pane-side > button");
    var visible = false;

    function alternarVisibilidad() {
        if (visible) {
            elemento.style.display = "none";
        } else {
            elemento.style.display = ""; 
        }
        visible = !visible;
    }

    // Add shortkey to set Archive visibility
    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.shiftKey && event.key === 'M') {
            alternarVisibilidad();
        }
    });

})();
