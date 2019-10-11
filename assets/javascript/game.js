var win = 0;
var loss = 0;
var guesses = 0;
var userGuess = "";
var compGen = Math.floor(Math.random() * 10) + 1
console.log(compGen)

function submit() {
    var guess = parseInt(document.getElementById("input-value").value)
    console.log(typeof guess)
    if (compGen === guess) {
        win++
        document.querySelector(".score").innerHTML=win 
        //run reset function here
        reset()
    } else {
        guesses++
        document.querySelector(".guess").innerHTML=guesses
        if (guesses === 3) {
            loss++
            document.querySelector(".loss").innerHTML=loss;
            //run reset function here
            reset()
        } else {
            userGuess = userGuess +" " + guess;
            document.querySelector(".history").innerHTML=userGuess;
        }
    }
}

function reset() {
    compGen = Math.floor(Math.random() * 10) + 1
    userGuess = "";
    document.querySelector(".history").innerHTML=userGuess;
    guesses = 0;
    document.querySelector(".guess").innerHTML=guesses;

}
document.querySelector(".submit")
.addEventListener("click", submit)