const deadSpan = document.getElementById('dead');
const lostSpan = document.getElementById('lost');

let deadCount = 0;
let lostCount = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            deadCount++;
            deadSpan.textContent = deadCount;

            if (deadCount >= 10) {
                alert('Вы выиграли!');
                deadCount = 0;
                lostCount = 0;
                deadSpan.textContent = deadCount;
                lostSpan.textContent = lostCount;
            }
        } else {
            lostCount++;
            lostSpan.textContent = lostCount;

            if (lostCount >= 5) {
                alert('Вы проиграли!');
                deadCount = 0;
                lostCount = 0;
                deadSpan.textContent = deadCount;
                lostSpan.textContent = lostCount;
            }
        }
    };
}