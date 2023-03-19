function sendKakaoMessage(data) {
	$("#loading").show();
	
	Kakao.init('23d44312ed2df62977953d5f0f8abd8e');
	if(Kakao.isInitialized()) {
		Kakao.Link.sendDefault({
			objectType: 'list',
			
			headerTitle: "💙하은's Favorite Things💙",
			headerLink: {
				mobileWebUrl: 'https://white-art-gallery.run.goorm.io/',
				webUrl: 'https://white-art-gallery.run.goorm.io/',
			},
			contents: [
				{
					title: data.like1,
					description: data.like1_option, 
					imageUrl: 'https://white-art-gallery.run.goorm.io/img/totoro1.jpeg',
					link: {
						mobileWebUrl: 'https://white-art-gallery.run.goorm.io/',
						webUrl: 'https://white-art-gallery.run.goorm.io/',
					},
				},
				{
					title: data.like2,
					description: data.like2_option, 
					imageUrl: 'https://white-art-gallery.run.goorm.io/img/majo018.jpeg',
					link: {
						mobileWebUrl: 'https://white-art-gallery.run.goorm.io/',
						webUrl: 'https://white-art-gallery.run.goorm.io/',
					},
				},
				{
					title: data.like3,
					description: data.like3_option, 
					imageUrl: 'https://white-art-gallery.run.goorm.io/img/park1.jpeg',
					link: {
						mobileWebUrl: 'https://white-art-gallery.run.goorm.io/',
						webUrl: 'https://white-art-gallery.run.goorm.io/',
					},
				},
			],
			buttons: [
				{
					title: '다시하기',
					link: {
						mobileWebUrl: 'https://white-art-gallery.run.goorm.io/',
						webUrl: 'https://white-art-gallery.run.goorm.io/',
					},
				},
			],
    	});
	}
	
	$("#loading").hide();
}