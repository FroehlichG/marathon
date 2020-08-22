const character = {
    name: 'Pikachu',
    defaultHp: 100,
    damageHp: 100,
    playerType: 'character'
}

const enemy = {
    name: 'Charmander',
    defaultHp: 100,
    damageHp: 100,
    playerType: 'enemy'
}

function init(){
    statGame();
}

function statGame() {
    setEvent();
    drawHp('character', character.damageHp, character.defaultHp);
    drawHp('enemy', enemy.damageHp, enemy.defaultHp);

}

function setEvent() {
    const button = document.querySelector('#btn-kick');
    const buttonWave = document.querySelector('#btn-second-kick');

    button.addEventListener('click', clickHandler);
    buttonWave.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    const weaponChoice = event.target;
    const maxJoltPower = 20;
    const maxWavePower = 25;

    let maxPower;

    switch (weaponChoice.dataset.type) {
        case 'jolt':
            maxPower = maxJoltPower;
            break;
        case 'wave':
            maxPower = maxWavePower;
            break;
    }

    enemy.damageHp = enemy.damageHp - changeHP(1, maxPower);
    character.damageHp = character.damageHp - changeHP(1, maxPower);

    if (character.damageHp < 0) {
        drawHp('character', 0, character.defaultHp)
        gameOver('character');
    } else if (enemy.damageHp < 0) {
        drawHp('enemy', 0, enemy.defaultHp)
        gameOver('enemy');
    } else  {
        drawHp('character', character.damageHp, character.defaultHp)
        drawHp('enemy', enemy.damageHp, enemy.defaultHp)
    }
}

function gameOver(player) {
    const button = document.querySelector('#btn-kick');
    const buttonWave = document.querySelector('#btn-second-kick');

    switch (player) {
        case 'enemy':
            alert('Character wins!')
            break;
        case 'character':
            alert('Enemy wins!')
            break;
    }

    button.removeEventListener('click', clickHandler);
    buttonWave.removeEventListener('click', clickHandler);
    button.classList.add('disabled');
    buttonWave.classList.add('disabled');
}

function changeHP(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function drawHp(character, damageHp, defaultHp) {
    let valueContainer,
        progressContainer;

    console.log('1')

    switch (character) {
        case 'character':
            valueContainer = document.querySelector('#health-character');
            progressContainer = document.querySelector('#progressbar-character')
            break;
        case 'enemy':
            valueContainer = document.querySelector('#health-enemy');
            progressContainer = document.querySelector('#progressbar-enemy')
            break;
    }

    valueContainer.innerText = `${damageHp}/${defaultHp}`;
    progressContainer.style.width = `${damageHp}%`;
}

document.addEventListener('DOMContentLoaded', init);
