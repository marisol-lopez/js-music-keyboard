$(document).ready( function() {
  var callback = function(event){
    if(event.type == "click"){
      var letter = $(event.target).attr("class").slice(-1);
    } else if (event.type == "keydown") {
      var letter = event.key;
    }
    var audio = document.getElementById(letter + "Audio");
    audio.load(),
    audio.play();
  };
  $('body').keydown(callback);
  $('.note').click(callback);
});





// $(document).ready( function() {
//   // created callback that will parse through the event properties and grab whatever arrtibute I want based on
//   var callback = function(event){
//     // this is checking to see what type of event occurred
//     if(event.type == "click"){
//       //based on if type was click, it is going into events properties and grabbing target, which houses the button.className and then using jquery's attr "class" to specifically target the className, and grabbing the last character in the className, which is the letter, and sotring that in our letter variable
//       var letter = $(event.target).attr("class").slice(-1);
//       // this is checking to see what type of event occurred
//     } else if (event.type == "keydown") {
//       // based on if the event type was keydown, it is going through event's  properties and grabbing the event.key, which is a single letter and storing that in our letter variable
//       var letter = event.key;
//     }
//     // here i am creating a variable called audio, which is going through the document and choosing to grab an element in the document by the id, and then I'm passing in the letter I have stored above and concatenating "Audio", because that is the ID of the song I want to select.
//     var audio = document.getElementById(letter + "Audio");
//     // Once I've stored that in my audio element, I just call play on that, because my audio element is now directly calling the audio file by it's id
//     audio.play();
//   };
//   $('body').keydown(callback);
//   $('.note').click(callback);
// });
