import React, { Component } from "react";
import "./style.css";
import leah from "./leah.jpg";
import nicole from "./nicole.jpg";
import karen from "./karen.jpeg";

class AboutCard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mt-5 mb-4 justify-content-around align-self-center">
                        <div className="card border-0">
                            <div className="row no-gutters">
                                <div className="col">
                                    <img className="card-img rounded-circle" src={nicole} alt="Team Member: Brendan Kelly" />
                                </div>
                                <div className="col align-self-center">
                                    <div className="card-body">
                                        <p className="h3 card-title">Brendan Kelly</p>
                                        <a href="https://github.com/dagreatbrendino" className="github-link mr-2"><i className="fab fa-github fa-lg"></i></a>
                                        <a href="https://www.linkedin.com/in/brendan-kelly-133640106/" className="linkedin-link"><i className="fab fa-linkedin fa-lg"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mb-4 justify-content-around align-self-center">
                        <div className="card border-0">
                            <div className="row no-gutters">
                                <div className="col">
                                    <img className="card-img rounded-circle" src={nicole} alt="Team Member: Nicole Wilsey-Starr" />
                                </div>
                                <div className="col align-self-center">
                                    <div className="card-body">
                                        <p className="h3 card-title">Nicole Wilsey-Starr</p>
                                        <a href="https://github.com/nwilseystarr" className="github-link mr-2"><i className="fab fa-github fa-lg"></i></a>
                                        <a href="https://www.linkedin.com/in/nicolewilsey/" className="linkedin-link"><i className="fab fa-linkedin fa-lg"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mt-4 mb-4 justify-content-around align-self-center">
                        <div className="card border-0">
                            <div className="row no-gutters">
                                <div className="col">
                                    <img className="card-img rounded-circle" src={karen} alt="Team Member: Karen Shea" />
                                </div>
                                <div className="col align-self-center">
                                    <div className="card-body">
                                        <p className="h3 card-title">Karen Shea</p>
                                        <a href="https://github.com/ks563" className="github-link mr-2"><i className="fab fa-github fa-lg"></i></a>
                                        <a href="https://www.linkedin.com/in/karenmshea/" className="linkedin-link"><i className="fab fa-linkedin fa-lg"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-4 mb-4 justify-content-around align-self-center">
                        <div className="card border-0">
                            <div className="row no-gutters">
                                <div className="col">
                                    <img className="card-img rounded-circle" src={leah} alt="Team Member: Leah Morris" />
                                </div>
                                <div className="col align-self-center">
                                    <div className="card-body">
                                        <p className="h3 card-title">Leah Morris</p>
                                        <a href="https://github.com/morris-leaha" className="github-link mr-2"><i className="fab fa-github fa-lg"></i></a>
                                        <a href="https://www.linkedin.com/in/morris-leaha/" className="linkedin-link"><i className="fab fa-linkedin fa-lg"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutCard;