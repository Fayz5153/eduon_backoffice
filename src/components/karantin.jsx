import React, { Component } from 'react';
import "./css/karantin.css"
import { NavLink, Switch, Route, BrowserRouter } from "react-router-dom"
import Left from "./icons/Left.svg"
import Right from "./icons/Right.svg"

const data = require("./json/karantin.json")

class Karantin extends Component {
    state = {
        data: data
    }
    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <div className="karantin">
                        <div className="karantin__1">
                            <NavLink activeClassName="karantin__activ" exact to="/karantin/barchasi">Barchasi</NavLink>
                            <NavLink activeClassName="karantin__activ" to="/spikerlar">O’qituvchilar</NavLink>
                            <NavLink activeClassName="karantin__activ" to="/oquvchilar">O’quvchilar</NavLink>
                        </div>
                        <div className="karantin__tablitsa">
                            
                            <div className="karantin__2">
                                <table>
                                    <tr className="karantin__category">
                                        <th>Ism va tel.raqam</th>
                                        <th>Status</th>
                                        <th>Sana</th>
                                        <th>Sabab</th>
                                    </tr>
                                <Switch>
                                    <Route exact path="/karantin/barchasi">
                                            {this.state.data.map((data) => {
                                                return (
                                                    <tr className="karantin__tr">
                                                        <td>
                                                            <a href="#" className="karantin__info">
                                                                <div className=""><img src={data.rasm} alt="" /></div>
                                                                <div className="karantin__p">
                                                                    <p>{data.ism}</p>
                                                                    <h2>{data.tel}</h2>
                                                                </div>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="status">{data.status}</a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="sana">{data.sana}</a>
                                                        </td>
                                                        <td>
                                                            <a href="#" className="sabab">{data.sabab}</a>
                                                        </td>
                                                        
                                                    </tr>
                                                )
                                            })}
                                    </Route>
                                    <Route exact path="/spikerlar">
                                            {this.state.data.map((data) => {
                                                if (data.status === "Spiker") {
                                                    return (
                                                        <tr className="karantin__tr">
                                                            <td>
                                                                <a href="#" className="karantin__info">
                                                                    <div><img src={data.rasm} alt="" /></div>
                                                                    <div className="karantin__p">
                                                                        <p>{data.ism}</p>
                                                                        <h2>{data.tel}</h2>
                                                                    </div>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="status">{data.status}</a>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="sana">{data.sana}</a>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="sabab">{data.sabab}</a>
                                                            </td>
                                                            
                                                        </tr>
                                                    )
                                                }
                                            })}
                                    </Route>
                                    <Route exact path="/oquvchilar">
                                            {this.state.data.map((data) => {
                                                if (data.status === "O’quvchi") {
                                                    return (
                                                        <tr className="karantin__tr">
                                                            <td>
                                                                <a href="#" className="karantin__info">
                                                                    <div><img src={data.rasm} alt="" /></div>
                                                                    <div className="karantin__p">
                                                                        <p>{data.ism}</p>
                                                                        <h2>{data.tel}</h2>
                                                                    </div>
                                                                </a>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="status">{data.status}</a>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="sana">{data.sana}</a>
                                                            </td>
                                                            <td>
                                                                <a href="#" className="sabab">{data.sabab}</a>
                                                            </td>
                                                            
                                                        </tr>
                                                    )
                                                }
                                            })}
                                    </Route>
                                </Switch>
                            </table>
                            </div>
                        </div>
                        <div className="page__links">
                            <a href="#"><img src={Left} alt="" /></a>
                            <a href="#" className="page__activ">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">...</a>
                            <a href="#">23</a>
                            <a href="#"><img src={Right} alt="" /></a>
                        </div>
                    </div>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Karantin;