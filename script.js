var customerName = document.querySelector('#customname');

var randomButton = document.querySelector('.randomize');
var story = document.querySelector('.story');

randomButton.addEventListener('click', generateStory);

// \ was used for multiple lines generation in javascript

var storyContent = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror \
for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

//arrays for storing the names
var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted',' melted into a puddle on the sidewalk',' turned into a slug and crawled away'];

//select random value 
function randomGenerateContent(array){
    return array[Math.floor(Math.random() * array.length)];
}

function generateStory(){
    var customernameValue = customerName.value;
    var firstValue = randomGenerateContent(insertX);
    console.log(firstValue);
    var secondValue = randomGenerateContent(insertY);
    var thirdValue = randomGenerateContent(insertZ);

    // a map object to change the multiple values in the same String 
    var mapObj = {
        insertx : firstValue,
        inserty : secondValue,
        insertz : thirdValue
      };

      // new String after replacing the required contents from the previous String
    newStoryContent = storyContent.replace(/insertx|inserty|insertz/gi, function(matched){
        return mapObj[matched];
    });

     if(customernameValue !== ""){
        var name = customernameValue;
        story.textContent = newStoryContent.replace('Bob', name);
    }
    else{
       
        story.textContent = newStoryContent;
     }

     if(document.getElementById("uk").checked) {
        var weight = Math.round(300 * 0.071);
        var temperature =  Math.round(94 - 32 / 1.8);
        story.textContent = newStoryContent.replace( "94 fahrenheit", temperature + " centigrade");
        story.textContent = newStoryContent.replace("300 pounds" , weight + " stones");
    
      }
    story.style.visibility = 'visible';
}

