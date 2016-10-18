/* Game reset */
var reset = function(e) {
    e.preventDefault();
    var conf = confirm("Restart the game from the beginning?");
    if (conf) {
        localStorage.clear();
        location.replace(window.location.href);
    }
}
