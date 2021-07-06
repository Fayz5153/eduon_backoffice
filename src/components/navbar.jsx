import React, { Component } from 'react';
import "./css/navbar.css"
import arrowdown from "./icons/arrowdown.svg"
import Search from "./icons/Search.svg"
import close from "./icons/close.svg"
import user from "./image/user.jpg"
import logo from "./image/logo.svg"

class Navbar extends Component {
    state = { 
        search:true
     }
    handlesearch = () =>{
        this.setState({
            search: !this.state.search
        })
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="navbar__backoffice">
                    <div>
                        <nav  className="container">
                            <div className="navbar__bo__left">
                                <img src={logo} alt="" />
                            </div>
                            <div className="navbar__bo__right">
                                {this.state.search === false ?
                                    <div className="bo__searchdiv">
                                        <button ><img src={Search} alt="" /></button>
                                        <input type="search" name="" id="" />
                                        <button onClick={this.handlesearch}><img src={close} alt="" /></button>
                                    </div>:
                                    <div className="bo_searchdiv">
                                        <button onClick={this.handlesearch}><img src={Search} alt="" /></button>
                                    </div>
                                }
                                <div className="language">
                                    <p>O'z</p>
                                    <ul className="languages">
                                        <li><a href="#">O'z</a></li>
                                        <li><a href="#">En</a></li>
                                        <li><a href="#">Рус</a></li>
                                    </ul>
                                    <img src={arrowdown} alt="" width="20" />
                                </div>
                                <div className="navbar__admin">
                                    <div className="admin__pic">
                                        <img src={user} alt="" />
                                    </div>
                                    <div className="admin__name">
                                        <h1>Murod N.</h1>
                                        <h2>Super admin</h2>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
					<div className="backoffice__fixed"></div>
				</React.Fragment>
         );
    }
}
 
export default Navbar;