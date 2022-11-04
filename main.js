function createGame(player1, hour, player2) {
  return `
              <li>
              <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" />
            </li>
  `
}
let delay = 0;
function createcard(date, day, games) {
  delay = delay + 0.2;
  return `
          <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>
          ${games}
          </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createcard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createcard("28/11", "segunda", createGame("switzerland", "13:00", "brazil")) +
  createcard("02/12", "sexta", createGame("brazil", "16:00", "cameroon"))

