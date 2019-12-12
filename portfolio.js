//var page = document.getElementsByClassName("page");
function btn_click(clicked) {
    var btnName = clicked;

    var modalName = btnName + "Modal";
    
    var closeName = btnName + "Close";

    // Get the modal
    var modal = document.getElementById(modalName);

    // Get the button that opens the modal
    var btn = document.getElementById(btnName);

    // Get the close button
    var close = document.getElementById(closeName);

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Close the modal
    close.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}