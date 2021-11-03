import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

// import 'jquery/dist/jquery.min.js'
// import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
import Form from './Form'
export default class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            notify_content: [],
            notify_count: 0,
            current_username: '',
            current_mail:'',
            current_id:0
        }
        // this.url = "http://127.0.0.1:8000" //for npm start
        this.url = ""
    }

    // componentDidMount = () => {
    //     axios.get(`${this.url}/users/unread-notify/1/`).then(response => {
    //         console.log(response.data);
    //         this.setState({
    //             notify_count: response.data.count,
    //             notify_content: [...response.data.notifications],
    //             current_username: response.data.username
    //         }, () => { console.log(this.state.notify_content) })
    //     })
    // }

    HandleLoginas =(e)=>{
        e.preventDefault()
        const userID=e.target.user_id.value
        axios.get(`${this.url}/users/unread-notify/${userID}/`).then(response => {
            console.log(response.data);
            this.setState({
                notify_count: response.data.count,
                notify_content: [...response.data.notifications],
                current_username: response.data.username,
                current_mail:response.data.useremail,
                current_id:userID
            }, () => { console.log(this.state.notify_content) })
        })
    }

    ChangeNotifyState=(pk)=>{
        axios.patch(`${this.url}/notifications/notify/${pk}/`).then(()=>
          {  console.log(pk);
            // console.log(this.state.notify_content)
            const {notify_content:data}=this.state
            for (var notify of data){
                if (notify.id == pk){
                    data.splice(data.indexOf(notify),1)
                    this.setState({
                        notify_content:[...data],
                        notify_count:this.state.notify_count-=1
                    })
                }
            }
        }
        )
    }

    DeleteNotify=(pk)=>{
        axios.delete(`${this.url}/notifications/notify/${pk}/`).then(()=>
          {  console.log(pk);
            // console.log(this.state.notify_content)
            const {notify_content:data}=this.state
            for (var notify of data){
                if (notify.id == pk){
                    data.splice(data.indexOf(notify),1)
                    this.setState({
                        notify_content:[...data],
                        notify_count:this.state.notify_count-=1
                    })
                }
            }
        }
        )
    }

    render() {
        return (
            <div>

                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h5 className="text-white h4">Collapsed content</h5>
                        <span className="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                
                   
                            <form className='d-flex' onSubmit={this.HandleLoginas}>
                                <div class=" mx-sm-3 ">
                                
                                    <input type="text" class="form-control" placeholder="login as" name='user_id' />
                                </div>
                                <button type='submit' className='btn btn-light'>login</button>
                            </form>
                   
                         <h3 className='text-white'>{this.state.current_username ? 'welcom '+this.state.current_username :'' }</h3>
                         {this.state.current_username ?                         <button type="button" className="btn btn-primary position-relative">
                            Notification
                            <span className="position-absolute top-0 mt-1 mb-1 start-0 translate-middle badge rounded-pill bg-danger">
                                {this.state.notify_count}+
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button> :'' }
                        

                        {/* <button type="button" className="btn btn-lg btn-danger" data-bs-toggle="popover" title="Popover title" data-bs-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button> */}
                    </div>
                </nav>
                <Form useremail={this.state.current_mail} userid={this.state.current_id} />
                <hr />
                <div className="d-flex flex-row justify-content-center flex-wrap">
                    {this.state.notify_content.map((object, index) =>

                        <div className=" shadow card  m-3" style={{ "max-width": "18rem" }} key={index}>
                            <div className="card-header">{object.sender}</div>
                            <div className="card-body">
                                <h5 className="card-title">{object.title}</h5>
                                <p className="card-text">{object.content}</p>
                                <span>seen state : {object.state ? 'read' : 'unseen'}</span>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <button className='btn btn-success' onClick={()=>this.ChangeNotifyState(object.id)}>as read</button>
                                <button className='btn btn-danger' onClick={()=>this.DeleteNotify(object.id)}>delete</button>
                            </div>
                        </div>

                    )
                    }
                </div>
            </div>
        )
    }
}

