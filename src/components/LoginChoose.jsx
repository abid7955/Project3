import React from 'react'
import './LoginChoose.css'
import { Link } from 'react-router-dom'

function LoginChoose() {
    return (
        <>
            <section id="login-choose">
                <div className="stat-title">Pricing</div>
                <div>Choose the plan and interviewer that best fit your requirements.</div>
                <div className="plans">
                    <div className="plan1">
                        <div className="log-content">
                            <div>
                                <p className="plan-type">Intro</p>
                                <p className="login-desc">Basic Plan</p>
                            </div>
                            <div className="features">
                                <p className="f">Starter Features</p>

                                <div className="feature">
                                    <div className="check">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="feature">
                                    <div className="check">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="feature">
                                    <div className="check">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>

                        <Link to="/login1" className="primary">Choose Plan</Link>
                    </div>
                    <div className="plan1">
                        <div className="log-content">
                            <div>
                                <p className="plan-type">Intro</p>
                                <p className="login-desc">Basic Plan</p>
                            </div>
                            <div className="features">
                                <p className="f">Starter Features</p>
                                <div className="feature">
                                    <div className="check">
                                        <i className="fa-solid fa-check"></i>
                                    </div>

                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="feature">
                                    <div className="check">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="feature">
                                    <div className="check">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="feature">
                                    <div className="check">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="feature">
                                    <div className="check">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/login2" className="primary">Choose Plan</Link>
                    </div>
                    <div className="plan1">
                        <div className="log-content">
                            <div>
                                <p className="plan-type">Intro</p>
                                <p className="login-desc">Basic Plan</p>
                            </div>
                            <div className="features">
                                <p className="f">Starter Features</p>
                                <div className="feature">
                                    <div className="check">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>Lorem Ipsum</p>
                                </div>
                                <div className="feature">
                                    <div className="check">
                                        <i className="fa-solid fa-check"></i>
                                    </div>
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/login3" className="primary">Choose Plan</Link>
                    </div>
                   
                </div>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                        Don't have an account?
                        <Link to="/register" className="text-gray-700 underline">Register</Link>.
                    </p>
            </section>
        </>
    )
}

export default LoginChoose