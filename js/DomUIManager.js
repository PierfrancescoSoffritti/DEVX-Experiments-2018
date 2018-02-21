let pageLoaded = false

function onload() {
    pageLoaded = true

    if(meshLoaded)
        begin()
}

function startGame() {
    const htmlContainer = document.getElementById("htmlContainer")
    const disablingDiv = document.getElementById("disablingDiv")
    const gameOverContainer = document.getElementById("gameOverContainer")
    const instructionsContainer = document.getElementById("instructionsContainer")
    const countDownContainer = document.getElementById("countDownContainer")
    
    instructionsContainer.classList.add("fade")
    gameOverContainer.classList.add("fade")
	countDownContainer.classList.remove("fade")

    sceneManager.introScreenClosed()
    disablingDiv.style.display = 'block'

	startTimeOut()
}

function startTimeOut() {
	setTimeout( () => countDownContainer.innerText = "3", 1000 )
	setTimeout( () => countDownContainer.innerText = "2", 2000 )
	setTimeout( () => countDownContainer.innerText = "1", 3000 )

	setTimeout( () => { 
		countDownContainer.innerText = "0"
		eventBus.post(startCountDownFinishedEvent)
	}, 4000 )

	setTimeout( () => {
        countDownContainer.innerText = ""
        countDownContainer.classList.add("fade")
        instructionsContainer.style.display = "none"
	}, 4500 )
}

function gameOver(score) {
    const disablingDiv = document.getElementById("disablingDiv")
    const gameOverContainer = document.getElementById("gameOverContainer")
    const scoreContainer = document.getElementById("scoreContainer")

    gameOverContainer.classList.remove("fade")
    setTimeout( () => disablingDiv.style.display = 'none', 1000 )

    scoreContainer.innerText = score
}

eventBus.subscribe(gameOverEvent, gameOver)