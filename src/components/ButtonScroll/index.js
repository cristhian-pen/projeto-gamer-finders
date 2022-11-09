import React, { useState } from "react";
import Lottie from 'react-lottie';

import animationData from '../../assets/18559-arrow-up.json';

export default function BtnScroll() {
    const [isLiked, setIsliked] = useState(false);
    const [animationState, setAnimationState] = useState({
        isStopped: true, isPaused: false,
        direction: -1,
    });

    const defaultOptions = {
        loop: false,
        animationData: animationData,
        redererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <>
            <button
                type="button"
                className="flex ml-auto flex-row items-end justify-end z-10"
                id="totop"
                onClick={() => {
                    let totop = document.getElementById('totop');
                    let scroll = window.captureEvents;

                    if (scroll.value === true) {
                        totop.classList.remove('hidden');
                        totop.addEventListener('click', () => {
                            window.scrollTo(0, 0)
                        });
                    } else if (scroll.value === false) {
                        totop.classList.add('hidden');
                    } else {
                        totop.classList.add('hidden');
                    }
                }}
            >

            <p>Teste</p>
            {/* <Lottie
                    options={defaultOptions}
                    height={90}
                    width={80}
                    direction={animationState.direction}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}
                /> */}
        </button>
        </>

    );
}