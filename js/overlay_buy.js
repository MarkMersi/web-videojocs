document.addEventListener('DOMContentLoaded', function() {
    const btnMinus = document.querySelector('.btn-minus');
    const btnPlus = document.querySelector('.btn-plus');
    const inputCopies = document.querySelector('#copies');

    btnMinus.addEventListener('click', function() {
        let value = parseInt(inputCopies.value);
        if (value > 1) {
            value--;
            inputCopies.value = value;
        }
    });

    btnPlus.addEventListener('click', function() {
        let value = parseInt(inputCopies.value);
        if (value < 99) {
            value++;
            inputCopies.value = value;
        }
    });
});