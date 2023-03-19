/* index.html document ready */
function openLetter() {
	window.open("letter.html");
}

$(document).ready(function () {
    // var secret_key = readTextFile("/data/secret_key.txt");
	var secret_key = "2022";
	$("form").submit(function() { return false; });
	
	var bgm; var bgmOn = false; var bgmFirstTime = true;
	$("#bgm_button").click(function() {
		if(!bgmOn) {
			if(bgmFirstTime) {
				bgm = new Audio("bgm/ghibli.mp3");
				bgmFirstTime = false;
			}
			bgm.play();
			
			bgmOn = true;
			$("#bgm_button").removeClass("bi-volume-up");
			$("#bgm_button").addClass("bi-volume-mute");
		} else {
			bgm.pause();
			
			bgmOn = false;
			$("#bgm_button").removeClass("bi-volume-mute");
			$("#bgm_button").addClass("bi-volume-up");
		}
	});
	
	////////////////////////////////////////////////////////////////////////////////
	// Enter
	$("#enter_button").click(function() {
		var key = $("#key_input").val();
		if(key != secret_key) {
			$("#alert_message").text("입장코드가 맞지 않습니다");
			$("#alert_fail").show();
			setTimeout(function() { $("#alert_fail").fadeOut(); }, 1000);
			return;
		}
		
		$("#enter").hide();
		$("body").css('background-image', 'url(img/park1_blur.jpg)');
		
		$("#gallery").fadeIn(2000);
	});
	////////////////////////////////////////////////////////////////////////////////
	
	////////////////////////////////////////////////////////////////////////////////
	// Gallery
	$("#profile_button_gallery").click(function() {
		var profileModal = new bootstrap.Modal(document.getElementById('profileModal'));
        profileModal.show();
	});
	
	$("#photo_button_gallery").click(function() {
		var photoModal = new bootstrap.Modal(document.getElementById('photoModal'));
        photoModal.show();
	});
	
	$("#survey_button_gallery").click(function() {
		var surveyModal = new bootstrap.Modal(document.getElementById('surveyModal'));
        surveyModal.show();
	});
	
	$("#gift_button_gallery").click(function() {
		var giftModal = new bootstrap.Modal(document.getElementById('giftModal'));
        giftModal.show();
	});
	////////////////////////////////////////////////////////////////////////////////
	
	$("#submit_button_survey").click(function() {
		var hauenData = {
			'name': $("#name_input_survey").val(),
			'birthday': $("#birthday_input_survey").val(),
			
			'like1_option': $("#like1_select_survey option:selected").val(),
			'like1': $("#like1_input_survey").val(),
			'like2_option': $("#like2_select_survey option:selected").val(),
			'like2': $("#like2_input_survey").val(),
			'like3_option': $("#like3_select_survey option:selected").val(),
			'like3': $("#like3_input_survey").val()
		}
		sendKakaoMessage(hauenData);
	});
	
	$("#gift_video").on("play", function() { if(bgmOn) { bgm.pause(); } });
	$("#gift_video").on("pause", function() { if(bgmOn) { bgm.play(); } });
	$("#pause_button_gift").click(function() { if(bgmOn) { bgm.play(); } });
});