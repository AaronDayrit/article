import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="top">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_New_York_Times_logo.png/800px-The_New_York_Times_logo.png" />
                    <p className="link">Go to home page</p>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <ul className="">
                            <h2>News</h2>
                            <li>Home Page</li>
                            <li>World</li>
                            <li>Coronavirus</li>
                            <li>US</li>
                            <li>Politics</li>
                            <li>New York</li>
                            <li>Business</li>
                            <li>Tech</li>
                            <li>Science</li>
                            <li>Sports</li>
                            <li>Wildfire Tracker</li>
                            <li>Obituaries</li>
                            <li>Today's Paper</li>
                            <li>Corrections</li>
                            <li>Trending</li>
                        </ul>
                        <ul className="">
                            <h2>Opinion</h2>
                            <li>Today's Opinion</li>
                            <li>Columnists</li>
                            <li>Editorials</li>
                            <li>Guest Essays</li>
                            <li>Letters</li>
                            <li>Sunday Review</li>
                            <li>Opinion Video</li>
                        </ul>
                    </div>
                    <div className="grid-item">
                        <ul className="">
                            <h2>Arts</h2>
                            <li>Today's Arts</li>
                            <li>Art &#x26; design</li>
                            <li>Books</li>
                            <li>Best Sellers Book List</li>
                            <li>Dance</li>
                            <li>Movies</li>
                            <li>Music</li>
                            <li>Pop Culture</li>
                            <li>Television</li>
                            <li>Theater</li>
                            <li>Video: Arts</li>
                        </ul>
                        <ul className="">
                            <h2>Living</h2>
                            <li>AutoMotive</li>
                            <li>Games</li>
                            <li>Education</li>
                            <li>Food</li>
                            <li>Health</li>
                            <li>Jobs</li>
                            <li>Love</li>
                            <li>Magazine</li>
                            <li>Parenting</li>
                            <li>Real Estate</li>
                            <li>Style</li>
                            <li>T Magazine</li>
                            <li>Travel</li>
                        </ul>
                    </div>
                    <div className="grid-item">
                        <ul className="">
                            <h2>More</h2>
                            <li>Rader Center</li>
                            <li>The Athletic</li>
                            <li>Wirecutter</li>
                            <li>Cooking</li>
                            <li>Headway</li>
                            <li>Live Events</li>
                            <li>The Learning Network</li>
                            <li>Tools &#x26; Services</li>
                            <li>Podcasts</li>
                            <li>Video</li>
                            <li>TimesMachine</li>
                            <li>NYT Store</li>
                            <li>Manage my Account</li>
                            <li>NYTLicensing</li>
                        </ul>
                        <ul className="">
                            <h2>More</h2>
                            <ul>
                                <li>Email Newsletters</li>
                                <li>Corporate Substructions</li>
                                <li>Education Rate</li>
                                <li>Mobile Applications</li>
                                <li>Replica Edition</li>
                                <li>International</li>
                                <li>Canada</li>
                                <li>Español</li>
                                <li>中文网</li>
                            </ul>
                        </ul>
                    </div>

                </div>
                <div className="bottom">
                    <p><span>Copyright ©2022 FRC.</span> Website by Aaron Dayrit</p>
                </div>
            </footer>
        );
    }
}

export default Footer;