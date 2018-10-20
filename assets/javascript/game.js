
// Replace each ??? with what you think its associated
    // function call will log to the console, or return.
    var word;
    var words = ["overwhelmed","hungover","frazzeled","sleepy","defeated","homeword","stress", "procrastinate", "api", "javascript", "traffic", "death", "computer", "bob", "code", "bootstrap", "jquery", "html","css", "vscode","crying"];
    var guesses=[];
    var number= words.length;
    var sizeofWord;
    var array=[];
    var x=0;
    var alreadyGuessed=false;
    var userGuess;
    var win=0;
    var win1=false;
    var left=10;
    var correct=false;
    number=Math.floor(Math.random()*21);
 
   word=words[number];
   sizeofWord=word.length;
// console.log(sizeofWord);

for(x=0; x<sizeofWord;x++){
    array.push('_');

}
document.getElementById("word").innerHTML ="";

for(var i=0;i<sizeofWord;i++){
    document.getElementById("word").innerHTML +=array[i];
    document.getElementById("word").innerHTML +=" ";

 }

 document.getElementById("left").innerHTML =left;
document.onkeydown = function(event) {

    document.getElementById("win").innerHTML = "";
    document.getElementById("start").innerHTML = "";
 
    if(win1==true){
            array=[];
        number=Math.floor(Math.random()*words.length);
 
        word=words[number];
        sizeofWord=word.length;
     // console.log(sizeofWord);
     
     for(x=0; x<sizeofWord;x++){
         array.push('_');
     
     }
     document.getElementById("word").innerHTML ="";
     for(var i=0;i<sizeofWord;i++){
        document.getElementById("word").innerHTML +=array[i];
        document.getElementById("word").innerHTML +=" ";

     }
    left=10;
    document.getElementById("left").innerHTML =left;


     guesses=[];
     win1=false;
    }
    document.getElementById("word").innerHTML ="";
    for(var i=0;i<sizeofWord;i++){
        document.getElementById("word").innerHTML +=array[i];
        document.getElementById("word").innerHTML +=" ";

     }
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
                        correct=true;
                       array[x]=userGuess;
                       document.getElementById("word").innerHTML = "";

                    for(var i=0;i<sizeofWord;i++){
                       document.getElementById("word").innerHTML +=array[i];
                       document.getElementById("word").innerHTML +=" ";

                    }
                                                
                 
                   }

             }



    winword=array.join();
    for(x=0;x<sizeofWord;x++){
        if(word[x]==array[x]){
            win=win+1;
        }
        if(win==sizeofWord){
            document.getElementById("guess").innerHTML = guesses;
            document.getElementById("win").innerHTML = "YOU WIN!!!!!!!!";
            document.getElementById("start").innerHTML = "Press another button to start again :)";
            win1=true;
        }
          }
          win=0;
    document.getElementById("guess").innerHTML = guesses;

    if(correct==true){
        correct=false;
    }
    else{
    left--;

}
    if(left==0&&win1==false){
        alert("Out of guesses");
        win1=true;

    }
    else{
        document.getElementById("left").innerHTML =left;
    }
  


    }
}


}


    
