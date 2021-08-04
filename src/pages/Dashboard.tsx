import React from 'react';

import Logo from '../../public/assets/img/logos/splash.png';

import '../../public/assets/scss/pages/dashboard.scss';

/**
 * The panel dashbaord.
 */
class Dashboard extends React.Component {
    render = () => (
        <main className="text-center m-5">
            <div className="row">
                <aside className="dash-box col-sm-2 me-2 p-2">
                    <div className="dash-logo my-3">
                        <img src={Logo} alt="StatPixel logo" />
                    </div>
                    <nav className="sidebar">
                        <ul className="nav flex-column align-items-start">
                            <li className="nav-item w-100 text-start">
                                <a href="#gamemode-module" className="nav-link dropdown-toggle text-light" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="gamemode-module">Gamemodes</a>
                                <ul className="list-unstyled collapse show text-start ms-4" id="gamemode-module">
                                    <li><a href="#bedwars" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="gamemode-module">Bedwars</a></li>
                                    <li><a href="#skywars" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="gamemode-module">Skywars</a></li>
                                    <li><a href="#duels" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="gamemode-module">Duels</a></li>
                                </ul>
                            </li>
                            <li className="nav-item w-100 text-start">
                                <a href="#verification-module" className="nav-link dropdown-toggle text-light" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="verification-module">Verification</a>
                                <ul className="list-unstyled collapse show text-start ms-4" id="verification-module">
                                    <li><a href="#verification-mc" className="nav-link" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="verification-mc">Minecraft Username</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <article className="dash-box col ms-2 p-2">
                    {/* Gamemode Module */}
                    <div className="collapse show" id="bedwars"></div>
                    <div className="collapse" id="skywars"></div>
                    <div className="collapse" id="duels"></div>

                    {/* Verification Module */}
                    <div className="collapse" id="verification-mc"></div>
                </article>
            </div>
        </main>
    );
}

export default Dashboard;
