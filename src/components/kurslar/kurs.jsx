import React, { Component } from 'react';
import "../css/kurslar.css"
import video from "../icons/Video.svg"
import star from "../icons/Star.svg"
import chat from "../icons/Chat.svg"
import bag from "../icons/Bag.svg"
import playbtn from "../icons/Playbutton.svg"
import fill from "../icons/Fill.svg"
import paper from "../icons/Paper.svg"

const data = require("../json/kurs.json")
const videos = require("../json/videos.json")

class Kurs extends Component {
    state = { 
        data:data,
        videos:videos
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="kurs">
                    <div className="kurs__1">
                        <div className="kurs__video">
                            <button><img src={playbtn} alt="" /></button>
                        </div>
                        
                            {this.state.data.map((data)=>{
                                if (data.id === "1") {
                                    return(
                                        <div className="kurs__info">
                                            <div className="kurs__info__1">
                                                <p>{data.kurs}</p>
                                            </div>
                                            <div className="kurs__info__2">
                                                <p>{data.title}<a href="#">yana</a></p>
                                            </div>
                                            <div className="kurs__info__3">
                                                <div className="kurs__info__3__1">
                                                    <h1>Avtor: <a href="#">{data.avtor}</a></h1>
                                                </div>
                                                <div className="kurs__info__3__2">
                                                    <div className="kurs__views">
                                                        <a href="#">
                                                            <img src={video} alt="" />
                                                            {data.video_view}
                                                        </a>
                                                    </div>
                                                    <div className="kurs__views">
                                                        <a href="#">
                                                             <img src={star} alt="" />
                                                            {data.reyt} <span>({data.views})</span>
                                                        </a>
                                                       
                                                    </div>
                                                    <div className="kurs__views">
                                                        <a href="#">
                                                            <img src={bag} alt="" />
                                                            {data.xarid}
                                                        </a>
                                                        
                                                    </div>
                                                    <div className="kurs__views">
                                                        <a href="#">
                                                            <img src={chat} alt="" />
                                                            {data.chat}
                                                        </a>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        <div className="kursxaqida">
                            <h1>Kursdan nima olasiz?</h1>
                            <div><img src={fill} alt="" /><p>CRM sistema o’rnatilsa biznes qanday foydalar ko’rishini</p></div>
                            <div><img src={fill} alt="" /><p>Sistemani qayerlardan o’rnatsa bo’lishini</p></div>
                            <div><img src={fill} alt="" /><p>Nega CRM ga o’tish shart ekanligini</p></div>
                            <div><img src={fill} alt="" /><p>CRM orqali LTVni hisoblash usullarini</p></div>
                            <div><img src={fill} alt="" /><p>LTVni oshiruvchi bir qancha ishlovchi keyslarni</p></div>
                        </div>
                        <div className="kursxaqida">
                            <h1>Kurs kimlar uchun?</h1>
                            <div><img src={fill} alt="" /><p>500,000$ aylanmaga ega bo’lgan tadbirkorlar</p></div>
                            <div><img src={fill} alt="" /><p>CEO yoki kompaniyaning bosh marketologlari</p></div>
                            <div><img src={fill} alt="" /><p>IT sohasidagi katta kompaniyalar CTOsi</p></div>
                            <div><img src={fill} alt="" /><p>Senior leveldagi dasturchilar</p></div>
                        </div>
                    </div>
                    <div className="kurs__2">
                        <div className="kurs__2__1">
                            <h1>Kurs tarkibi</h1>
                            <p>30 ta video</p>
                        </div>
                        {this.state.videos.map((videos)=>{
                            return(
                                <a href="#" className="kurs__2__video">
                                    {videos.type === "video" ?
                                    <img src={video} alt="" />:
                                    <img src={paper} alt="" />}
                                    <p>{videos.name}</p>
                                </a>
                            )
                        })}
                        <div className="kurs__2__ban">
                            <div><h1>Karantinga yuborish</h1></div>
                            <div><textarea name="" placeholder="Sababini yozing..." id="" cols="30" rows="10"></textarea></div>
                            <div  className="kurs__2__ban_3"><a href="#">Tasdiqlash</a></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Kurs;