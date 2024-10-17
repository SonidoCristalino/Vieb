//      ██╗    ██╗██╗  ██╗ █████╗ ████████╗███████╗ █████╗ ██████╗ ██████╗ 
//      ██║    ██║██║  ██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗
//      ██║ █╗ ██║███████║███████║   ██║   ███████╗███████║██████╔╝██████╔╝
//      ██║███╗██║██╔══██║██╔══██║   ██║   ╚════██║██╔══██║██╔═══╝ ██╔═══╝ 
//      ╚███╔███╔╝██║  ██║██║  ██║   ██║   ███████║██║  ██║██║     ██║     
//       ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝     

// ###############################################################################
// #                             Elements Removal                                #
// ###############################################################################

// Select an element using "Copy full XPath" option through DevTools

// Search bar
document.querySelector("#side > div._ak9t").remove();

// Chats header 
document.evaluate('/html/body/div[1]/div/div/div[2]/div[3]/header',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.remove();

// Popup helper side chat
document.querySelector("#wa-popovers-bucket").remove();

// Chat filter 
document.querySelector("#side > div.x1ky8ojb.x78zum5.x1q0g3np.x1a02dak.x2lah0s.x3pnbk8.xfex06f.xeuugli.x2lwn1j.x1nn3v0j.x1ykpatu.x1swvt13.x1pi30zi").remove();

// Left side Setting bar. 
// NOTE: If you want the settings to appear (such as to mute the sounds of tabs) you must comment the line below.
document.evaluate('/html/body/div[1]/div/div/div/header', 
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.remove();

// ###############################################################################
// #                             Elements Modifications                          #
// ###############################################################################

// The margin of the archived chats is removed so that it does not overlap with
// the chats behind. 
document.evaluate('/html/body/div[1]/div/div/div/div[2]/div[1]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue.setAttribute("style", "margin-left: 0px");

// ###############################################################################
// #                                 Functions                                   #
// ###############################################################################

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
