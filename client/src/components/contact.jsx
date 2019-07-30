import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div>
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
        </div>
      );
    }};