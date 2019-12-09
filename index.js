const App = () => {

    const inputOne = document.querySelector('#input-one');
    const inputTwo = document.querySelector('#input-two');
    const summa = document.querySelector('#summa');
    const lorem = document.querySelector('#lorem');
    const minus = document.querySelector('#minus');
    const plus = document.querySelector('#plus');
    const minusTwo = document.querySelector('#minus-two');
    const plusTwo = document.querySelector('#plus-two');

    const state = {
        currentSumma: '',
        currentLorem: ''
    };


    const inputOneHandler = () => {
        summa.value = event.target.value + `${'$'}`;
        state.currentSumma = event.target.value;
    };

    const inputTwoHandler = () => {
        lorem.value = event.target.value + `${'.  men'}`;
        state.currentLorem = event.target.value;
    };

    const minusHandler = () => {
        if (state.currentSumma > 1) {
            state.currentSumma = state.currentSumma - 10;
            inputOne.value = state.currentSumma - 10;
            summa.value = state.currentSumma + `${'$'}`;
        };
    };

    const minusTwoHandler = () => {
        if (state.currentLorem > 1) {
            state.currentLorem = state.currentLorem - 10;
            inputTwo.value = state.currentLorem - 10;
            lorem.value = state.currentLorem + `${'.  men'}`;
        };
    };

    const plusHandler = () => {
        if (state.currentSumma < 500) {
            state.currentSumma = +state.currentSumma + 10;
            inputOne.value = state.currentSumma + 10;
            summa.value = state.currentSumma + `${'$'}`;
        };
    };

    const plusTwoHandler = () => {
        if (state.currentLorem < 100) {
            state.currentLorem = +state.currentLorem + 10;
            inputTwo.value = state.currentLorem + 10;
            lorem.value = state.currentLorem + `${'.  men'}`;
        };
    };



    inputOne.addEventListener('change', inputOneHandler);
    inputTwo.addEventListener('change', inputTwoHandler);
    minus.addEventListener('click', minusHandler);
    minusTwo.addEventListener('click', minusTwoHandler);
    plus.addEventListener('click', plusHandler);
    plusTwo.addEventListener('click', plusTwoHandler);

};

document.addEventListener("DOMContentLoaded", App);