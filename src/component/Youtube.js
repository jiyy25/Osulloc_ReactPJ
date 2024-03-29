import React, { useEffect } from 'react';
import { MoreBtn } from '../styled/Btns';
import { BigTitle, SmallTitle } from '../styled/Title';
import "@fontsource/noto-sans-kr/200.css"
import "@fontsource/noto-sans-kr/300.css"


const YouTubePlayer = () => {
    useEffect(() => {
        // This code loads the IFrame Player API code asynchronously.
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // This function creates an <iframe> (and YouTube player)
        // after the API code downloads.
        window.onYouTubeIframeAPIReady = () => {
            // Get the 'player' element by ID
            const playerElement = document.getElementById('player');

            // Create a new YouTube player
            new window.YT.Player(playerElement, {
                videoId: 'QDiZUF4HE3A', // Initial YouTube video ID
                playerVars: {
                    autoplay: 1, // Autoplay
                    loop: 1,     // Loop
                    playlist: 'QDiZUF4HE3A', // Playlist (same as videoId for a single video)
                },
                events: {
                    onReady: (event) => {
                        event.target.mute(); // Mute the player on ready
                    },
                },
            });
        };
    }, []);

    return (
        <section className="youtube">
            <BigTitle>오설록 프리미엄 말차 즐기는 법</BigTitle>
            <SmallTitle className='mb-4'>차와 함께하는 삶, 각자의 취향이 묻어있는레시피와 인터뷰를 만나보세요.</SmallTitle>
            <div className="youtube__area">
                <div id="player"></div>
            </div>
        </section>
    );
};

export default YouTubePlayer;
