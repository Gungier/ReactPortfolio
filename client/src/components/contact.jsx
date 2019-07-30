import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div>
          <header>
            <div className="sticky-top">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="index.html">Gabriel Ungier</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="contact.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More Options
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="index.html">About</a>
                        <a className="dropdown-item" href="portfolio.html">Portfolio</a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="https://www.google.com">Google</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </header>
          <div className="container">
            <div className="col py-3 px-md-5 border bg-light">
              <div className="row mx-md-n5">
                <h1><strong className="col-md-4 px-5">Contact Me</strong> </h1>
                <div className="container-fluid">
                  <div className="col py-3 px-md-5 border bg-light clearfix">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder="First and Last Name" aria-label="Recipient's username" />
                      <div className="input-group-append">
                      </div>
                    </div>
                    <label htmlFor="basic-url">Email Address</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                      </div>
                      <input type="text" className="form-control" placeholder="My_Name@gmail.com" id="basic-url" />
                    </div>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">Comment Area</span>
                      </div>
                      <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer container clearfix">
            <span className="text-muted text-align:center">Copyright 2019©</span>
          </footer>
        </div>
      );
    }};