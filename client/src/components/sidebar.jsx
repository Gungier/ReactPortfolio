import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Gabriel Ungier</a></h1>
              <span className="email"><i className="icon-mail"></i> gungier1@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#projects" data-nav-section="projects">Art and Photography</a></li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  {/* <li><a href="#otherInterests" data-nav-section="otherInterests">Timeline</a></li> */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>

                <li><a href="https://www.linkedin.com/in/gabriel-ungier-10b5b467/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Gungier" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://stackoverflow.com/  user:11849502" target="_blank" rel="noopener noreferrer"><i className="icon-stackoverflow"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-time" aria-hidden="true"></i><br></br>
              </small></p>
              <p><small>
              <i className="text-muted text-align:center">Copyright 2019©</i>
                </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}