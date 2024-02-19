
const btnColor = document.querySelectorAll('.colorChange');
btnColor.forEach(btn => {
    btn.addEventListener('click', function () {
        if (btn.style.backgroundColor === 'green') {
            btn.style.backgroundColor = '';
        }
        else {
            btn.style.backgroundColor = 'green';
        }
    })
})


function allSeatEvent() {
    const currentSeatAdded = document.getElementById('seatAdded');
    const currentSeat = parseInt(currentSeatAdded.innerText);
    const newSeat = currentSeat + 1;
    currentSeatAdded.innerText = newSeat;

    const currentSeatsLeft = document.getElementById('seatsLeft');
    const currentSeatLeft = parseInt(currentSeatsLeft.innerText);
    const newSeatLeft = currentSeatLeft - 1;
    currentSeatsLeft.innerText = newSeatLeft;

    const ticketTotalPrice = document.getElementById('totalPrice');
    const newPrice = parseInt(ticketTotalPrice.innerText);
    const newTicketPrice = newPrice + 550;
    ticketTotalPrice.innerText = newTicketPrice;

    const grandTotalPrice = document.getElementById('grandTotal');
    const newGrandTotal = parseInt(grandTotalPrice.innerText);
    const newGrandTotalPrice = newGrandTotal + 550;
    grandTotalPrice.innerText = newGrandTotalPrice;
}


function A1() {
    const appendData = document.getElementById('a1');
    appendData.classList.remove('hidden');

}
function A2() {
    const appendData = document.getElementById('a2');
    appendData.classList.remove('hidden');
}
function A3() {
    const appendData = document.getElementById('a3');
    appendData.classList.remove('hidden');
}
function A4() {
    const appendData = document.getElementById('a4');
    appendData.classList.remove('hidden');
}
function B1() {
    const appendData = document.getElementById('b1');
    appendData.classList.remove('hidden');
}
function B2() {
    const appendData = document.getElementById('b2');
    appendData.classList.remove('hidden');
}
function B3() {
    const appendData = document.getElementById('b3');
    appendData.classList.remove('hidden');
}
function B4() {
    const appendData = document.getElementById('b4');
    appendData.classList.remove('hidden');
}



