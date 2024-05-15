const submit = document.querySelector('.button');
const result = document.getElementById('score');
submit.addEventListener('click', () => {
    submit.innerText = 'PLAY AGAIN';
    result.innerText = 'DRAW';
    start();
    submit.addEventListener('click', () => {
        window.location.reload();
    })
})


const start = () => {
    let com_score = 0;
    let user_score = 0;
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissor = document.querySelector('.scissor');
    const user_action = [rock, paper, scissor];
    const comp_action = ['rock', 'paper', 'scissors'];
    const playGame = () => {
        user_action.forEach(action => {
            action.addEventListener('click', () => {
                const actionList = action.classList;
                const actionClass = actionList[0];
                const number = Math.floor(Math.random() * 3);
                const comp_choice = comp_action[number];
                console.log(comp_choice);
                winner(actionClass, comp_choice)
            })
        })
    }

    const winner = (user, computer) => {
        const userScore = document.querySelector('.score1');
        const computerScore = document.querySelector('.score2');
        const turn = document.querySelector('.turn');


        if (user == 'rock') {
            if (computer == 'paper') {
                result.innerText = 'You Lost!';
                turn.textContent = 'computer choose paper'
                com_score++;
                computerScore.textContent = com_score.toString();

            } else {
                result.innerText = 'You Won!'
                turn.textContent = 'computer choose scissor'
                user_score++;
                userScore.textContent = user_score.toString();
            }
        } else if (user == 'scissor') {
            if (computer == 'rock') {
                result.innerText = 'You Lost!';
                turn.textContent = 'computer choose rock'
                com_score++;
                computerScore.textContent = com_score.toString();
            } else {
                result.innerText = 'You Won!';
                turn.textContent = 'computer choose paper'
                user_score++;
                userScore.textContent = user_score.toString();
            }
        } else if (user == 'paper') {
            if (computer == 'scissors') {
                result.innerText = 'You Lost!';
                turn.textContent = 'computer choose scissor'
                com_score++;
                computerScore.textContent = com_score.toString();
            } else {
                result.innerText = 'You Won!';
                turn.textContent = 'computer choose rock'
                user_score++;
                userScore.textContent = user_score.toString();
            }
        }
    }
    playGame();
}


