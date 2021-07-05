import React, { Component } from 'react';
import "../css/kurslar.css"
import {Link} from "react-router-dom"
import Left from "../icons/Left.svg"
import Right from "../icons/Right.svg"

const data = require("../json/kurs.json")

class Kurslar extends Component {
    state = { 
        data:data
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="kurslar">
                    <table>
                        <tr className="kurslar__category">
                            <th>Video</th>
                            <th>Kurs mavzusi</th>
                            <th>Ko’rishlar</th>
                            <th>Xaridlar</th>
                            <th>Reyting</th>
                        </tr>
                        {this.state.data.map((data) => {
                            return (
                                <tr className="kurslar__tr">
                                    <td>
                                        <div className="kurslar__imgs">
                                            <Link to="/kurs">
                                                <div className="kurslar__imgbig"><img src={data.imgbig} alt="" /></div>
                                                <div className="kurslar__imgsmall"><img src={data.imgsmall} alt="" /></div>
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="kurslar__title">
                                            <div className="kurslar__t1">
                                                <Link to="/kurs">{data.kurs}</Link>
                                            </div>
                                            <div className="kurslar__t2">
                                                <h2>{data.narxi}</h2>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{data.views}</p>
                                    </td>
                                    <td>
                                        <p>{data.xarid}</p>
                                    </td>
                                    <td>
                                        <p>{data.reyt}</p>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>
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
            </React.Fragment>
         );
    }
}
 
export default Kurslar;