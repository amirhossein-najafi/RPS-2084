const start = document.querySelector('.buttons');
start.addEventListener('click', () => {
    start.innerText = 'PLAY AGAIN';
    result1.innerText = 'DRAW';
    playGame();
    start.addEventListener('click', () => {
        window.location.reload();
    })
})
function playGame(){
    const user1score = document.querySelector('.score1');
    const user2score = document.querySelector('.score2');
    const action1 = document.getElementById('action1');
    const action2 = document.getElementById('action2');
    const result1 = document.getElementsByI('result1');
    const result2 = document.getElementsByI('result2');
    let userAction1, userAction2;
    let userScore1 = 0;
    let userScore2 = 0;
    function game(userAction1, userAction2) {
        if (userAction1 && userAction2) {
            Winner();
        }
    }
    document.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase();
        if (key === 'a') {
            userAction1 = 'rock';
        } else if (key === 's') {
            userAction1 = 'paper';
        } else if (key === 'd') {
            userAction1 = 'scissors';
        }
        game(userAction1, userAction2);
    });
    
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (key === 'ArrowLeft') {
            userAction2 = 'rock';
        } else if (key === 'ArrowUp') {
            userAction2 = 'paper';
        } else if (key === 'ArrowRight') {
            userAction2 = 'scissors';
        }
        game(userAction1, userAction2);
    });
    
    function Winner() {
        if (
            (userAction1 === 'rock' && userAction2 === 'scissors') ||
            (userAction1 === 'paper' && userAction2 === 'rock') ||
            (userAction1 === 'scissors' && userAction2=== 'paper')
        ) {
            action1.innerText = 'You Won!';
            action2.innerText = 'You Lost!';
            action1.style.color = "green";
            action2.style.color = "red";
            result1.innerText = "choose "+userAction1;
            result2.innerText = "choose "+userAction2;
            userScore2++;
            user1score.textContent = userScore2.toString();
        } else if (
            (userAction2=== 'rock' && userAction1 === 'scissors') ||
            (userAction2 === 'paper' && userAction1 === 'rock') ||
            (userAction2 === 'scissors' && userAction1 === 'paper')
        ) {
            action2.innerText = 'You Won!';
            action1.innerText = 'You Lost!';
            action2.style.color = "green";
            action1.style.color = "red";
            result1.innerText = " user 1 choosed "+userAction1;
            result2.innerText = "user 2 chossed "+userAction2;
            userScore1++;
            user2score.textContent = userScore1.toString();
        } else{
            action2.innerText = 'Tie!';
            action1.innerText = 'Tie!';
            action2.style.color = "black";
            action1.style.color = "black";
            result1.innerText = "user 1 choosed "+userAction1;
            result2.innerText = "user 2 chossed "+userAction2;
        }
        userAction1 = null;
        userAction2 = null;
    }
}