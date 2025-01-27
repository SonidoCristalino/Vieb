//      ██╗    ██╗██╗  ██╗ █████╗ ████████╗███████╗ █████╗ ██████╗ ██████╗ 
//      ██║    ██║██║  ██║██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗
//      ██║ █╗ ██║███████║███████║   ██║   ███████╗███████║██████╔╝██████╔╝
//      ██║███╗██║██╔══██║██╔══██║   ██║   ╚════██║██╔══██║██╔═══╝ ██╔═══╝ 
//      ╚███╔███╔╝██║  ██║██║  ██║   ██║   ███████║██║  ██║██║     ██║     
//       ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝     

// ###############################################################################
// #                             Elements Removal                                #
// ###############################################################################

// Select an element using "Copy full XPath" option through DevTools. For
// improve your experience, please use Google Chrome browser instead. 

// Search bar
document.querySelector("#side > div._ak9t").remove();

// // Chats header 
// So far, the head of the elements that have been archived could not be
// decoupled. Archived node depends on header node. 

// Popup helper side chat
document.evaluate('/html/body/div[1]/div/div/div[3]/div/div[3]/div/div[1]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    .setAttribute("style", "display: none");

// Chat filter 

// Left side Setting bar. 
// NOTE: If you want the settings to appear (such as to mute the sounds of
// tabs) you must comment the line below.
document.evaluate('/html/body/div[1]/div/div/div[3]/div/header',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    .setAttribute("style", "display: none");

// ###############################################################################
// #                             Elements Modifications                          #
// ###############################################################################

// The margin of the archived chats is removed so that it does not overlap with
// the chats behind. 
document.evaluate('/html/body/div[1]/div/div/div[3]/div/div[2]/div[1]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
    .singleNodeValue.setAttribute("style", "margin-left: 0px");

// ###############################################################################
// #                                 Functions                                   #
// ###############################################################################

// At the beginning unset Archive botton visibility 
document.querySelector("#pane-side > button").setAttribute("style", "display: none");

// Use a function to set or unset Archive visibility
(function() {

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
