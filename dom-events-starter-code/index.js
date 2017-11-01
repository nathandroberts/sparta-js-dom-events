document.addEventListener("DOMContentLoaded", function(){

  console.log('the content is loaded');
  // write code here

  var myButton = document.getElementById("myButton");

  // First param - type of action
  // Second param - what will happen (callback)
  // myButton.addEventListener("click", function() {
  //
  //   console.log("Button was clicked");
  //
  // })

  myButton.addEventListener("click", handleClick);

  function handleClick() {
    console.log("Button was clicked via a function");

  }

  var myForm = document.getElementById('myForm');

  myForm.addEventListener('submit', function () {

    event.preventDefault()
    console.log('form was submitted');
  })
var buttons = document.querySelectorAll('.myButtons')
for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener('click', function (event) {
    console.log(this.value + ' was clicked');
  })
  
}





// End of the parameters
});
