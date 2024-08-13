fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // Step 4
    data.forEach((record) => {
      console.log(
        `Name: ${record.playerName}, Jersey Number: ${record.playerNumber}, Position: ${record.playerPosition}, Hometown: ${record.playerHometown}, Professional: ${record.playerPro}, Pro Team Name: ${record.proTeam}`
      );
    });

    // Step 5
    function getNames(data) {
      return data.map((record) => record.playerName).join(", ");
    }

    function getNumbers(data) {
      return data.map((record) => record.playerNumber).join(", ");
    }

    function getPositions(data) {
      return data.map((record) => record.playerPosition).join(", ");
    }

    function getHometowns(data) {
      return data.map((record) => record.playerHometown).join(", ");
    }

    function getPro(data) {
      return data.map((record) => record.playerPro).join(", ");
    }

    function getTeams(data) {
      return data.map((record) => record.proTeam).join(", ");
    }

    // Logging the results to the console
    console.log("Names: " + getNames(data));
    console.log("Player Numbers: " + getNumbers(data));
    console.log("Player Positions: " + getPositions(data));
    console.log("Player Hometowns: " + getHometowns(data));
    console.log("Pro?: " + getPro(data));
    console.log("Professional Teams: " + getTeams(data));

    // Displaying the results on the browser window
    document.body.innerHTML += `<p>Names: ${getNames(data)}</p>`;
    document.body.innerHTML += `<p>Player Numbers: ${getNumbers(data)}</p>`;
    document.body.innerHTML += `<p>Player Positions: ${getPositions(data)}</p>`;
    document.body.innerHTML += `<p>Player Hometowns: ${getHometowns(data)}</p>`;
    document.body.innerHTML += `<p>Pro?: ${getPro(data)}</p>`;
    document.body.innerHTML += `<p>:Professional Teams: ${getTeams(data)}</p>`;
  })
  .catch((error) => console.error("Error:", error));
