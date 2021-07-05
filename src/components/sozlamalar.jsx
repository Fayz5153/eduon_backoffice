import React, { Component } from 'react';
import Edit from "./icons/Edit.svg"
import "./css/sozlamalar.css"

class Sozlamalar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="sozlamalar">
                    <div className="sozlamalar__1">
                        <div className="sozlama1">
                            <div className="sozlama1__1"><h1>70%</h1><h2>Spikerlar ulushi</h2></div>
                            <div className="sozlama1__2"><a href="#"><img src={Edit} alt="" /></a></div>
                        </div>
                        <div className="sozlama1">
                            <div className="sozlama1__1"><h1>80%</h1><h2>Top spikerlar ulushi</h2></div>
                            <div className="sozlama1__2"><a href="#"><img src={Edit} alt="" /></a></div>
                        </div>
                        <div className="sozlama1">
                            <div className="sozlama1__1"><h1>100,000 <span>so’m</span></h1><h2>R. o’tish vaucheri</h2></div>
                            <div className="sozlama1__2"><a href="#"><img src={Edit} alt="" /></a></div>
                        </div>
                        <div className="sozlama1">
                            <div className="sozlama1__1"><h1>50%</h1><h2>Kurslar chegirmasi</h2></div>
                            <div className="sozlama1__2"><a href="#"><img src={Edit} alt="" /></a></div>
                        </div>
                        <div className="sozlama1">
                            <div className="sozlama1__1"><h1>10,000 <span>so’m</span></h1><h2>Referal ulush</h2></div>
                            <div className="sozlama1__2"><a href="#"><img src={Edit} alt="" /></a></div>
                        </div>
                    </div>
                    <div className="sozlamalar__2">
                        <div className="sozlama2">
                            <div className="sozlama2__p">
                                <p>Spiker ulushi</p>
                            </div>
                            <div className="sozlama__input">
                                <input type="text" placeholder="Ismni kiriting"/>
                                <a href="#">70%</a>
                                <a href="#">Tasdiqlash</a>
                            </div>
                        </div>
                        <div className="sozlama2">
                            <div className="sozlama2__p">
                                <p>Kursga chegirma</p>
                            </div>
                            <div className="sozlama__input">
                                <input type="text" placeholder="Kursni kiriting"/>
                                <a href="#">500,000 so’m</a>
                                <a href="#">Tasdiqlash</a>
                            </div>
                        </div>
                        <div className="sozlama2">
                            <div className="sozlama2__p">
                                <p>Vaucher berish</p>
                            </div>
                            <div className="sozlama__input">
                                <input type="text" placeholder="Ismni kiriting"/>
                                <a href="#">500,000 so’m</a>
                                <a href="#">Tasdiqlash</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Sozlamalar;