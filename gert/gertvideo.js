Qualtrics.SurveyEngine.addOnReady(function()
{
	//from here
	const video = document.querySelector('video');
	const videoHide = document.querySelector('.video-hide');

	videoHide.addEventListener('click', () => {
		videoHide.style.visibility = "hidden";
		video.play();
		videoHide.innerHTML = "";
		});

	video.addEventListener('ended', () => {
			videoHide.style.visibility = "visible";
			setTimeout(this.clickNextButton(), 200);
	});
	document.querySelector('.NextButton').style.display = "none";
	//to here
});


	// tech check
	Qualtrics.SurveyEngine.addOnReady(function()
	{
		const video = document.querySelector('video');
		const videoHide = document.querySelector('.video-hide');
	
		videoHide.addEventListener('click', () => {
			videoHide.style.visibility = "hidden";
			video.play();
			});
	
		video.addEventListener('ended', () => {
				videoHide.style.visibility = "visible";
		});
		
	});
