
// Replace each ??? with what you think its associated
    // function call will log to the console, or return.
    var word;
    var words = ["phone", "computer", "spanish", "water", "chocolate", "english", "weather", "basketball", "chair", "table", "bedroom"];
    var guesses=[];
    var number= words.length;
    var sizeofWord;
    var array=[];
    var x=0;
    var alreadyGuessed=false;
    var userGuess;
    var win=0;
    number=Math.floor(Math.random()*number);
 
   word=words[number];
   sizeofWord=word.length;
// console.log(sizeofWord);

for(x=0; x<sizeofWord;x++){
    array.push('_');

}
document.getElementById("word").innerHTML = array;


document.onkeydown = function(event) {
    document.getElementById("word").innerHTML = array;
    userGuess = event.key;
    if(event.keyCode<=64 || event.keyCode>=91){
        alert("Please enter a letter :3");
    }

    else{
    userGuess=userGuess.toString();
    


for(x=0; x<guesses.length;x++){
    if(guesses[x]==userGuess){
        alreadyGuessed=true;
    }
}

if(alreadyGuessed==true){
    alert("This letter has already been guessed! Try another");
    alreadyGuessed=false;
}

else{
    guesses.push(userGuess);

             for(x=0;x<sizeofWord;x++){
                if(word[x]===userGuess){
                       array[x]=userGuess;
                       document.getElementById("word").innerHTML = array;
                      winword=array.join();
                 
                   }

             }
    winword=array.join();
         for(x=0;x<sizeofWord;x++){
                 if(word[x]==array[x]){
                     win=win+1;
                 }
                 if(win==sizeofWord){
                   document.getElementById("guess").innerHTML = guesses;
                     alert("You Win!!!")
                 }
                    
                   }
    win=0;
    document.getElementById("guess").innerHTML = guesses;

    }
}


}


    
