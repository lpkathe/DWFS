function f(a) {
    for (i=1; i<11; i++) {
        var li = document.createElement("LI");                 // Create a <li> node
        var liName = document.createTextNode("Item " + i);     // Create a text node
        li.appendChild(liName);                              // Append the text to <li>
        document.getElementById("myListFor").appendChild(li);     // Append <li> to <ul> with id="myListFor"
    }
}

function w(a) {
    for (i=1; i<11; i++) {
        var li = document.createElement("LI");                 // Create a <li> node
        var liName = document.createTextNode("Item " + i);     // Create a text node
        li.appendChild(liName);                              // Append the text to <li>
        document.getElementById("myListWhile").appendChild(li);     // Append <li> to <ul> with id="myListFor"
    }
}
