import React, { Component } from 'react';

const data = require("./json/tasdiq1.json")
class Tasdiq_kurs extends Component {
    state = { 
        data:data
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="tasdiq">
                    {this.state.data.map((data)=>{
                        return(
                            <div className="tasdiq__kurs">
                                <div className="tasdiq__img">
                                    <img src={data.rasm} alt="" />
                                </div>
                                <div className="tasdiq__title">
                                    <p>{data.title}</p>
                                </div>
                                <div className="tasdiq__g3">
                                    <a className="tasdiq__a" href="#">Tasdiqlash</a>
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
 
export default Tasdiq_kurs;