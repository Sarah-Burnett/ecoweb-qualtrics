
<div id="gert" style="position:relative">
    <video height="100%" width="100%"><source src="https://exeterctu.fra1.qualtrics.com/CP/File.php?F=F_bj8gNTlQALhLZWJ" type="video/mp4" />Your browser does not support the video tag</video>
    <div class="video-hide"><img src="https://exeterctu.fra1.qualtrics.com/CP/Graphic.php?IM=IM_3qRABn76bMurQ1f" style="width: 55px; height: 55px"/></div>
</div>

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
