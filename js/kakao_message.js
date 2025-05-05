function sendKakaoMessage(data) {
    $("#loading").show();

    Kakao.init('23d44312ed2df62977953d5f0f8abd8e');
    if (Kakao.isInitialized()) {
        Kakao.Share.sendDefault({
            objectType: 'list',

            headerTitle: "💙하은's Favorite Things💙",
            headerLink: {
                mobileWebUrl: 'https://testrapod.github.io/white-art-gallery/',
                webUrl: 'https://testrapod.github.io/white-art-gallery/',
            },
            contents: [
                {
                    title: data.like1,
                    description: data.like1_option,
                    imageUrl: 'https://testrapod.github.io/white-art-gallery/img/totoro1.jpeg',
                    link: {
                        mobileWebUrl: 'https://testrapod.github.io/white-art-gallery/',
                        webUrl: 'https://testrapod.github.io/white-art-gallery/',
                    },
                },
                {
                    title: data.like2,
                    description: data.like2_option,
                    imageUrl: 'https://testrapod.github.io/white-art-gallery/img/majo018.jpeg',
                    link: {
                        mobileWebUrl: 'https://testrapod.github.io/white-art-gallery/',
                        webUrl: 'https://testrapod.github.io/white-art-gallery/',
                    },
                },
                {
                    title: data.like3,
                    description: data.like3_option,
                    imageUrl: 'https://testrapod.github.io/white-art-gallery/img/park1.jpeg',
                    link: {
                        mobileWebUrl: 'https://testrapod.github.io/white-art-gallery/',
                        webUrl: 'https://testrapod.github.io/white-art-gallery/',
                    },
                },
            ],
            buttons: [
                {
                    title: '다시하기',
                    link: {
                        mobileWebUrl: 'https://testrapod.github.io/white-art-gallery/',
                        webUrl: 'https://testrapod.github.io/white-art-gallery/',
                    },
                },
            ],
        });
    }

    $("#loading").hide();
}