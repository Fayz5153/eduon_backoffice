import React, { Component } from 'react';
import "./css/moliya.css"
import { NavLink, Switch, Route, BrowserRouter } from "react-router-dom"
import Swap1 from "./icons/Swap1.svg"
import Swap2 from "./icons/Swap2.svg"
import Left from "./icons/Left.svg"
import Right from "./icons/Right.svg"

const data = require("./json/moliya.json")

class Moliya extends Component {
    state = { 
        data:data
     }
    render() { 
        return ( 
            <React.Fragment>
                <BrowserRouter>
                    <div className="moliya">
                        <div className="moliya__1">
                            <NavLink activeClassName="moliya__activ" to="/moliya/barchasi">Barchasi</NavLink>
                            <NavLink activeClassName="moliya__activ" to="/kurssotibolish">Kurs sotib olish</NavLink>
                            <NavLink activeClassName="moliya__activ" to="/hisobtoldirish">Hisob to’ldirish</NavLink>
                            <NavLink activeClassName="moliya__activ" to="/kirim">Kirim</NavLink>
                            <NavLink activeClassName="moliya__activ" to="/chiqim">Chiqim</NavLink>
                        </div>
                        <div className="moliya__2">
                            <Switch>
                                <Route path="/moliya/barchasi">
                                {this.state.data.map((data) => {
                                    return (
                                        <tr className="moliya__tr">
                                            <td>
                                                {data.holat !== "kirim" ?
                                                 <img src={Swap1} alt="" />:
                                                 <img src={Swap2} alt="" />}
                                            </td>
                                            <td><p>{data.ismi}</p></td>
                                            <td><p>{data.sana}</p></td>
                                            <td><p>{data.qiymat}</p></td>
                                            <td><p>{data.status}</p></td>
                                        </tr>
                                    )
                                })}
                                </Route>
                                <Route path="/kurssotibolish">
                                {this.state.data.map((data) => {
                                    if (data.status === "Kurs sotildi") {
                                        return (
                                            <tr className="moliya__tr">
                                                <td>
                                                    {data.holat !== "kirim" ?
                                                    <img src={Swap1} alt="" />:
                                                    <img src={Swap2} alt="" />}
                                                </td>
                                                <td><p>{data.ismi}</p></td>
                                                <td><p>{data.sana}</p></td>
                                                <td><p>{data.qiymat}</p></td>
                                                <td><p>{data.status}</p></td>
                                            </tr>
                                        )
                                    }
                                })}
                                </Route>
                                <Route path="/hisobtoldirish">
                                {this.state.data.map((data) => {
                                    if (data.status === "Hisob to'ldirildi") {
                                        return (
                                            <tr className="moliya__tr">
                                                <td>
                                                    {data.holat !== "kirim" ?
                                                    <img src={Swap1} alt="" />:
                                                    <img src={Swap2} alt="" />}
                                                </td>
                                                <td><p>{data.ismi}</p></td>
                                                <td><p>{data.sana}</p></td>
                                                <td><p>{data.qiymat}</p></td>
                                                <td><p>{data.status}</p></td>
                                            </tr>
                                        )
                                    }
                                })}
                                </Route>
                                <Route path="/kirim">
                                {this.state.data.map((data) => {
                                    if (data.holat === "kirim") {
                                        return (
                                            <tr className="moliya__tr">
                                                <td>
                                                    {data.holat !== "kirim" ?
                                                    <img src={Swap1} alt="" />:
                                                    <img src={Swap2} alt="" />}
                                                </td>
                                                <td><p>{data.ismi}</p></td>
                                                <td><p>{data.sana}</p></td>
                                                <td><p>{data.qiymat}</p></td>
                                                <td><p>{data.status}</p></td>
                                            </tr>
                                        )
                                    }
                                })}
                                </Route>
                                <Route path="/chiqim">
                                {this.state.data.map((data) => {
                                    if (data.holat === "chiqim") {
                                        return (
                                            <tr className="moliya__tr">
                                                <td>
                                                    {data.holat !== "kirim" ?
                                                    <img src={Swap1} alt="" />:
                                                    <img src={Swap2} alt="" />}
                                                </td>
                                                <td><p>{data.ismi}</p></td>
                                                <td><p>{data.sana}</p></td>
                                                <td><p>{data.qiymat}</p></td>
                                                <td><p>{data.status}</p></td>
                                            </tr>
                                        )
                                    }
                                })}
                                </Route>
                            </Switch>
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
 
export default Moliya;