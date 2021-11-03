import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            done: 'default'
        }
        // this.url = "http://127.0.0.1:8000" for npm start
        this.url = ""
    }

    HandleSendMessage = (e) => {
        e.preventDefault()
        const notify_data = {
            'title': e.target.msg_title.value,
            'content': e.target.msg_content.value,
            'receiver_email': e.target.to_email.value,
            'sender': this.props.userid
        }
        console.log(notify_data)
        axios.post(`${this.url}/notifications/notify/`, notify_data).then(() => {
            e.target.msg_title.value = '';
            e.target.msg_content.value = '';
            e.target.to_email.value = '';
            this.setState({
                done: 1
            })

        }).catch((error => {
            console.log(error)
        }))
    }

    // /notifications/notify/
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.HandleSendMessage}>
                    <div className='d-flex flex-column mt-5'>
                        <div className="form-group mb-3">
                            <label >From</label>
                            <input type="email" className="form-control" placeholder="Enter email" disabled value={this.props.useremail} />

                        </div>
                        <div className="form-group mb-3">
                            <label >To</label>
                            <input type="email" className="form-control" placeholder="Enter email" name='to_email' />

                        </div>
                        <div className="form-group mb-3">
                            <label >Message Title</label>
                            <input type="text" className="form-control" placeholder="Enter message title" name='msg_title' />

                        </div>
                        <div className="form-group mb-3">
                            <label >Message Content</label>
                            <textarea type="email" className="form-control" placeholder="Enter message content" name='msg_content' />

                        </div>
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>


                </form>
            </div>
        )
    }
}
