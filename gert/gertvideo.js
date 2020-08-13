//examples and test
Qualtrics.SurveyEngine.addOnReady(function()
{
	var that = this;
	var video = document.querySelector('video');
	var videoHide = document.querySelector('.video-hide');
	videoHide.addEventListener('click', function(){
		videoHide.style.visibility = "hidden";
		video.play();
		videoHide.innerHTML = "";
	});
	video.addEventListener('ended', function(){
		videoHide.style.visibility = "visible";
		setTimeout(that.clickNextButton(), 200);
	});
	document.querySelector('.NextButton').style.display = "none";
});


// tech check and intro
Qualtrics.SurveyEngine.addOnReady(function()
{
	var video = document.querySelector('video');
	var videoHide = document.querySelector('.video-hide');
	videoHide.addEventListener('click', function(){
		videoHide.style.visibility = "hidden";
		video.play();
	});
	video.addEventListener('ended', function(){
		videoHide.style.visibility = "visible";
	});	
});	
