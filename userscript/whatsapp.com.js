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

// ¡IMPORTANT!: To debug the code, each function must be tested on different sides
// of the script. The functions fail in waterfall.

// Search bar
document.querySelector("#side > div._ak9t").remove();

// Popup helper side chat
// document.evaluate('/html/body/div[1]/div/div/div[3]/div/div[3]/div/div[1]',
//     document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
//     .setAttribute("style", "display: none");

// Left side Setting bar. 
// NOTE: If you want the settings to appear (such as to mute the sounds of
// tabs) you must comment the line below.
document.evaluate('/html/body/div[1]/div/div/div[1]/div/div[3]/div/header',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    .setAttribute("style", "display: none");
    // .style.display = 'none';

// Chats header 
document.evaluate('/html/body/div[1]/div/div/div[1]/div/div[3]/div/div[4]/div/div[1]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    .setAttribute("style", "display: none");

// Whatsapp header 
document.evaluate('/html/body/div[1]/div/div/div[1]/div/div[3]/div/div[4]/header/header',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    .setAttribute("style", "display: none");

// ###############################################################################
// #                             Elements Modifications                          #
// ###############################################################################

// The margin of the archived chats is removed so that it does not overlap with
// the chats behind. 
document.evaluate('/html/body/div[1]/div/div/div[1]/div/div[3]/div/div[3]/div[1]',
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
