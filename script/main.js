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
    const comp_action = ['rock', 'paper', 'scissor'];
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


        if (
            (user === 'rock' && computer==='scissor') ||
            (user === 'paper' && computer==='rock') ||
            (user === 'scissor' && computer==='paper')) {
                result.innerText = 'You Won!';
                turn.textContent = 'computer choose '+computer;
                user_score++;
                userScore.textContent = user_score.toString();
            } else if(
            (user === 'rock' && computer==='paper') ||
            (user === 'paper' && computer==='scissor') ||
            (user === 'scissor' && computer==='rock')) {
                result.innerText = 'You lost!'
                turn.textContent = 'computer choose '+computer;
                com_score++;
                computerScore.textContent = com_score.toString();
            }
        else {
                result.innerText = 'Draw!';
                turn.textContent = 'computer choose '+computer;
            }
    }
    playGame();
}


