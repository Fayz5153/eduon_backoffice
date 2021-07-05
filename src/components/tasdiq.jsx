import React, { Component } from 'react';
import "./css/tasdiq.css"

const data = require("./json/tasdiq.json")
class Tasdiq extends Component {
    state = { 
        data:data
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="tasdiq">
                    {this.state.data.map((data)=>{
                        return(
                            <div className="tasdiq__group">
                                <div className="tasdiq__g1">
                                    <h1>{data.ismi}</h1>
                                </div>
                                <div className="tasdiq__g2">
                                    <p>Telefon: <span>{data.tel}</span></p>
                                    <p>Email: <span>{data.email}</span></p> 
                                    <p>Tug'ilgan kun: <span>{data.tugilgan_sana}</span></p> 
                                    <p>Turar hudud: <span>{data.manzil}</span></p> 
                                    <p>Kasbi: <span>{data.kasbi}</span></p> 
                                </div>
                                <div className="tasdiq__g3">
                                    <a className="tasdiq__a" href="#">Tasdiq</a>
                                    <a className="radetish" href="#">Rad etish</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
         );
    }
}
 
export default Tasdiq;