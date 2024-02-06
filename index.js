document.addEventListener("DOMContentLoaded", () => {

    let paddle = document.getElementById("paddle")
    let ball = document.getElementById("ball")
    let table = document.getElementById("table")

    // here the ballX and ballY will be helping us to set a starting point of ball w.r.t table
    let ballX = 10; // distance of the left of the ball w.r.t ping pong table
    let ballY = 10;  // distance of the top of the ball w.r.t ping pong table
    let rightHit = 0;

    let dx = 2; // displacement factor in x-direction, 2 -> you will displace by 2 px in +x direction , -2 -> you will displace by 2px in -x direction
    let dy = 2; // displacement factor in y-direction, 2 -> you will displace by 2 px in +y direction , -2 -> you will displace by 2px in -y direction

    ball.style.left = `${ballX}px`
    ball.style.top = `${ballY}px`
    setInterval(() => {
        ballX += dx
        ballY += dy
        ball.style.left = `${ballX}px`
        ball.style.top = `${ballY}px`

                /**
         * ballY + ball.offsetHeight -> bottom of the ball
         * paddle.offsetTop + paddle.offsetHeight -> bottom of the paddle
         */
        // collision of the ball
        if(ballX < paddle.offsetWidth && 
            ballY > paddle.offsetTop &&
            ballY + ball.offsetHeight < paddle.offsetTop + paddle.offsetHeight) {
            dx *= -1
            
        }
        else if (ballX <= 0) {
            alert("Game Over!")
        }

            
            if(ballX > table.offsetWidth - ball.offsetHeight || ballX <= 0) dx *= -1;
            if(ballY > table.offsetHeight - ball.offsetHeight || ballY <= 0) dy *= -1;
            
        }, 20)



    let paddleY = 0;
    let DPY = 2;

    document.addEventListener("keydown", (e) => {
        e.preventDefault()
        if(e.keyCode == 38 && paddleY > 0) {
            paddleY += (-1)*DPY;
        }
        else if (e.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight ) {
            paddleY += DPY;

        }
        paddle.style.top = `${paddleY}px`
    })
})