import React from 'react';
import { Recoverable } from 'repl';
import { Link } from 'react-router-dom';

export class FunApplicationComponent extends React.Component<any, any> {
    render() {
        return (
            <div>
                <div>
                <div id="margin-hero">
                    <div id="hero-get-all-car-information-background">
                        <h1>Fun Applications</h1>
                        <hr></hr>
                        <div className="form-row">
                            <div className="form-group col-md-3 offset-1">
                                <div className="card">
                                    <h3>To-Do List</h3>
                                    <br></br><br></br>
                                    <Link to="/to-do-list">
                                        <button>Go!</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="form-group col-md-3 offset-1">
                                <div className="card">
                                    <h3>Tip Calculator</h3>
                                    <br></br><br></br>
                                    <Link to="/to-do-list">
                                        <button>Go!</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="form-group col-md-3 offset-1">
                                <div className="card">
                                    <h3></h3>
                                    <br></br><br></br>
                                    <Link to="/to-do-list">
                                        <button>Go!</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3 offset-1">
                                <div className="card">
                                    <h3></h3>
                                    <br></br><br></br>
                                    <Link to="/to-do-list">
                                        <button>Go!</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="form-group col-md-3 offset-1">
                                <div className="card">
                                    <h3></h3>
                                    <br></br><br></br>
                                    <Link to="/to-do-list">
                                        <button>Go!</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="form-group col-md-3 offset-1">
                                <div className="card">
                                    <h3></h3>
                                    <br></br><br></br>
                                    <Link to="/to-do-list">
                                        <button>Go!</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}