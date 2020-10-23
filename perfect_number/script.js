document.getElementById("check").addEventListener(
    "click", perfectVerification)

    //let counter = 0;
    //const myNum = Math.floor(Math.random() * 3);

    function perfectVerification(){
        let number = document.getElementById("guess").value;

        let dividers = [];
        let sum_dividers = 0;

        for (let i = 1; i< number; i++){
            if (number % i == 0){
                dividers.push(i)
                sum_dividers+=i
            };
        }
        if (sum_dividers == number) {
            document.getElementById("answer").innerHTML = `${number} is a perfect number`;
        } else {
            document.getElementById("answer").innerHTML = `${number} is not a perfect number`;
        }
        document.getElementById("guess").value=""; 
        document.getElementById("guess").focus();
    }
    

    // function checkNumber(){
    //     let guessNum = document.getElementById("guess").value;
    //     counter += 1;

    //     document.getElementById("counter").innerHTML = "This is your test number:" + counter;

        
    //     if (guessNum == ""){
    //         document.getElementById("answer").innerHTML = "Write a number?";
    //     } else if (isNaN(guessNum)) {
    //         document.getElementById("answer").innerHTML = "Are you sure that this is a number?";
    //     } else if (guessNum < myNum){
    //         document.getElementById("answer").innerHTML = "I am thinking about higher number";
    //     } else if (guessNum > myNum) {
    //         document.getElementById("answer").innerHTML = "I am thinking about lower number";
    //     }
    //     else {
    //         alert("You are the winner :😀 👌. " + " You guessed after " + counter + " times!" );
    //         if (window.confirm("You wanna play again!")) {
    //             window.location.href = "./index.html"
    //         }
    //         else {
    //             document.getElementById("answer").innerHTML = "Thanks for playing game.";
    //             document.getElementById("counter").innerHTML = "";
    //         }
    //     }
    //document.getElementById("guess").value=""; 

    //}