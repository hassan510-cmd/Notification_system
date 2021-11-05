import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Createuser extends Component {
    render() {
        return (
<div className='container'>
                <form onSubmit={this.HandleSendMessage}>
                    <div className='d-flex flex-column mt-5'>

                        <div className="form-group mb-3">
                            <label >Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" name='to_email' />

                        </div>
                        <div className="form-group mb-3">
                            <label >First name</label>
                            <input type="text" className="form-control" placeholder="Enter email" name='to_email' />

                        </div>
                        <div className="form-group mb-3">
                            <label >Last name</label>
                            <input type="text" className="form-control" placeholder="Enter email" name='to_email' />

                        </div>
                        <div className="form-group mb-3">
                            <label >Password</label>
                            <input type="password" className="form-control" placeholder="Enter message title" name='msg_title' />

                        </div>

                        <button type="submit" className="btn btn-primary">register</button>
                    </div>


                </form>
            </div>
        )
    }
}
