var headerButton = document.getElementsByClassName("col-auto ml-auto mt-auto mb-2 pr-0");

var oldButton = document.getElementById("uniqueExtensionButtonId")
if (oldButton != null){
	oldButton.remove()
}
var randomizerButton = document.createElement("Button");
randomizerButton.id = "uniqueExtensionButtonId";
randomizerButton.innerHTML = "Random Pick";
randomizerButton.className = "btn btn-general";
randomizerButton.style.marginTop = "7%";
randomizerButton.onclick = onbuttonclicked;
headerButton[0].appendChild(randomizerButton);

function onbuttonclicked() {
	const gameNames = document.getElementsByClassName("game-text-centered");
	let gameNameForClipboard = ""
	for (const gameName of gameNames){
		gameNameForClipboard += gameName.innerText + "\n"
	}
	navigator.clipboard.writeText(gameNameForClipboard)
		.then(() => {
		console.log("Text copied to clipboard");
	})
		.catch(err => {
		console.error("Failed to write to clipboard:", err);
 });
	const wheelWindow = window.open("https://wheelofnames.com/");
}
