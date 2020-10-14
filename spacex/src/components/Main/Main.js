import React from 'react';
import './main.css';

const Main = () => (
    <section class="main">
    <h1 class="title">
        Falcon 1
    </h1>

    <div class="video-container">
        <video class="video" autoPlay loop muted src="./video/moon.mp4"></video>

    </div>
    </section>
);

export default Main;