document.addEventListener('DOMContentLoaded', function () {
    const colorInput = document.getElementById('colorInput');
    const colorFeedback = document.getElementById('colorFeedback');

    colorInput.addEventListener('input', function () {
        const color = colorInput.value;
        document.body.style.backgroundColor = color;
        colorFeedback.textContent = `Current Color: ${color}`;
    });
});