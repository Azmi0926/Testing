document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');
    const changeColorButton = document.getElementById('changeColorButton');

    button.addEventListener('click', function() {
        message.textContent = 'Button clicked!';
        message.style.color = 'green';
    });

    changeColorButton.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
