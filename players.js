
var players = document.querySelectorAll(".player")

var mousedown = false

var triggerQnt = 0;

players.forEach(ball => {
    var isDragging = false;
    var offsetX, offsetY;

    ball.addEventListener('mousedown', (e) => {
        isDragging = true;
        mousedown = true;
        offsetX = e.clientX - ball.getBoundingClientRect().left;
        offsetY = e.clientY - ball.getBoundingClientRect().top;
        ball.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            ball.style.left = `${e.clientX - offsetX}px`;
            ball.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        mousedown = false;
        ball.style.cursor = 'grab';
    });
});
