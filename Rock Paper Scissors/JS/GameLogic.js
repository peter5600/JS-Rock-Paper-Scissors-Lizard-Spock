var AiChoiceArray = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
var PlayerScore = 0;
var AIScore = 0;
function UserChoosenBtn(Choice) {
    var RndNum = Math.floor(Math.random() * 5); //should gen a random num between 0 and 5 not including 5 since i floored it
    var AiChoice = AiChoiceArray[RndNum];
    if (Choice == "Rock") {
        if (AiChoice != "Rock") {
            if (AiChoice == "Paper") {
                AIScore++;
            }
            else if (AiChoice == "Scissors") {
                PlayerScore++;
            }
            else if (AiChoice == "Lizard") {
                PlayerScore++;
            }
            else if (AiChoice == "Spock") {
                AIScore++;
            }

        }
    }
    if (Choice == "Paper") {
        if (AiChoice != "Paper") {
            if (AiChoice == "Rock") {
                PlayerScore++;
            }
            else if (AiChoice == "Scissors") {
                AIScore++;
            }
            else if (AiChoice == "Lizard") {
                AIScore++;
            }
            else if (AiChoice == "Spock") {
                PlayerScore++;
            }

        }
    }
    if (Choice == "Scissors") {
        if (AiChoice != "Scissors") {
            if (AiChoice == "Paper") {
                PlayerScore++;
            }
            else if (AiChoice == "Rock") {
                AIScore++;
            }
            else if (AiChoice == "Lizard") {
                PlayerScore++;
            }
            else if (AiChoice == "Spock") {
                AIScore++;
            }

        }
    }
    if (Choice == "Lizard") {
        if (AiChoice != "Lizard") {
            if (AiChoice == "Paper") {
                PlayerScore++;
            }
            else if (AiChoice == "Scissors") {
                AIScore++;
            }
            else if (AiChoice == "Rock") {
                AIScore++;
            }
            else if (AiChoice == "Spock") {
                PlayerScore++;
            }

        }
    }
    if (Choice == "Spock") {
        if (AiChoice != "Spock") {
            if (AiChoice == "Paper") {
                AIScore++;
            }
            else if (AiChoice == "Scissors") {
                PlayerScore++;
            }
            else if (AiChoice == "Lizard") {
                AIScore++;
            }
            else if (AiChoice == "Rock") {
                PlayerScore++;
            }

        }
    
    }
    console.log(AIScore + " " + PlayerScore +  " " + Choice + " " + AiChoice);
    document.getElementById("Player1Txt").innerHTML = "Player 1  Score: " + PlayerScore;
    document.getElementById("Player2Txt").innerHTML = "Player 2  Score: " + AIScore; 
    document.getElementById("Player1").src = "Img/" + Choice + ".bmp";
    document.getElementById("Player2").src = "Img/" + AiChoice + ".bmp";
}