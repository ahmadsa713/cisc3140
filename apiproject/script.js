function myFunction() {
    console.log("I was clicked!");
    for (let i = 0; i < 20; i++) {
        fetch('https://api.chucknorris.io/jokes/random').then(function(response) {
    return response.json();
  }).then(function(myJson) {
    console.log(JSON.stringify(myJson));

    var theValue = myJson.value
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(theValue);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("myList").appendChild(node);  
  });

    }
    

  console.log("this runs before up top")
}