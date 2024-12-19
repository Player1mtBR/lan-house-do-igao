document.getElementById('hoursSlider').addEventListener('input', function() {
    const hours = this.value;
    document.getElementById('hoursLabel').textContent = `${hours} Hora${hours > 1 ? 's' : ''}`;
});

function confirmReservation() {
    //alert("Reserva concluída!");
    window.location.href = "index.html";
}
