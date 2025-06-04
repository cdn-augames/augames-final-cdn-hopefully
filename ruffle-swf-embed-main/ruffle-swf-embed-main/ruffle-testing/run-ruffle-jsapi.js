function fillGame() {
	const ruffle = window.RufflePlayer.newest();
	const player = ruffle.createPlayer();
	const container = document.getElementById('container');
	container.appendChild(player);
	player.load({
		url: "https://cdn.jsdelivr.net/gh/cdn-augames/augames-final-cdn-hopefully@main/ruffle-swf-embed-main/ruffle-swf-embed-main/ruffle-testing/"+swfName,
		allowScriptAccess: true
	}).then(() => {
		console.info("Ruffle successfully loaded the file");
	}).catch((e) => {
		console.error(`Ruffle failed to load the file: ${e}`);
	});
	player.addEventListener('loadedmetadata', () => {
		console.info(player.metadata);
	})
}
if (document.readyState != 'loading') {
	fillGame();
} else {
	document.addEventListener("DOMContentLoaded", fillGame)
}
