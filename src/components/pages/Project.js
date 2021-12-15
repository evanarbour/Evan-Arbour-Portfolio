import React from 'react';


import City from '../../assets/images/city.jpg';
import Clouds from '../../assets/images/clouds.jpg';
import Fitness from '../../assets/images/fitness.jpg';
import Keyboard from '../../assets/images/keyboard.jpg';
import Notes from '../../assets/images/notes.jpg';
import Social from '../../assets/images/social.jpg';
import { BsGithub } from "react-icons/bs";


export default function Project() {

    return (
        <div>
            <div class="row">
                <div class="text-center col-md-6 col-sm-12 project">
                <img class="gallery-img" src={City} alt=''/>
                    <div class="overlay">
                    <span><a class="port-link" href="https://michaelhermes.github.io/City-Scan/">City Scan</a></span>
                    <span><a class="port-link" href="https://github.com/MichaelHermes/City-Scan"><BsGithub /></a></span>
                    <span><h6 class="port-desc">MERN Stack app that allows users to see health data by city: React, MongoDB, Node, Express</h6></span>
                    </div>
                </div>
                <div class="text-center col-md-6 col-sm-12 project">
                <img class="gallery-img" src={Social} alt=''/>
                    <div class="overlay">
                    <span><a class="port-link" href="https://echochamber12.herokuapp.com/">Echo Chamber</a></span>
                    <span><a class="port-link" href="https://github.com/ZakkFast/EchoChamber"><BsGithub /></a></span>
                    <span><h6 class="port-desc">Users can create profiles, write posts, and post them: MySQL, Sequelize, Handlebars, Materalize CSS</h6></span>
                    </div>
                </div>
        </div>
        <div class="row">
                <div class="text-center col-md-6 col-sm-12 project">
                <img class="gallery-img" src={Fitness} alt=''/>
                    <div class="overlay text-center">
                    <span><a class="port-link" href="https://secure-retreat-27936.herokuapp.com/">Workout Tracker</a></span>
                    <span><a class="port-link" href="https://github.com/evanarbour/fitness-tracker"><BsGithub /></a></span>
                    <span><h6 class="port-desc">Allows user to create, update, and view workouts and track progress! MongoDB, Express, Node.js</h6></span>
                    </div>
                </div>
                <div class="text-center col-md-6 col-sm-12 project">
                <img class="gallery-img" src={Clouds} alt=''/>
                    <div class="overlay">
                    <span><a class="port-link" href="https://evanarbour.github.io/weather-forecast/">Weather Dashboard</a></span>
                    <span><a class="port-link" href="https://github.com/evanarbour/weather-forecast"><BsGithub /></a></span>
                    <span><h6 class="port-desc">Receive up-to-date weather data by city: OpenWeatherMap API </h6></span>
                    </div>
                </div>
        </div>
        <div class="row">
                <div class="text-center col-md-6 col-sm-12 project">
                <img class="gallery-img" src={Notes} alt=''/>
                    <div class="overlay">
                    <span><a class="port-link" href="https://cryptic-fortress-99665.herokuapp.com/">Note Taker</a></span>
                    <span><a class="port-link" href="https://github.com/evanarbour/note-taker"><BsGithub /></a></span>
                    <span><h6 class="port-desc">Create, update, save, and delete notes with a simple effective design: Node.js, Express </h6></span>
                    </div>
                </div>
                <div class="text-center col-md-6 col-sm-12 project">
                <img class="gallery-img" src={Keyboard} alt=''/>
                    <div class="overlay">
                    <span><a class="port-link" href="https://evanarbour.github.io/password-generator/">Password Generator</a></span>
                    <span><a class="port-link" href="https://github.com/evanarbour/password-generator"><BsGithub /></a></span>
                    <span><h6 class="port-desc">An app to create randomly generated, secure passwords: JavaScript, CSS, HTML</h6></span>
                    </div>
                </div>
        </div>
        </div>
    )

};
