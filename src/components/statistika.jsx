import React, { Component } from 'react';
import "./css/statistika.css"
import Voice from "./icons/Voice.svg"
import User3 from "./icons/User3.svg"
import Folder from "./icons/Folder.svg"
import Ticket from "./icons/Ticket.svg"
import arrowdown_2 from "./icons/arrowdown_2.svg"
import {Link} from "react-router-dom"
import {
	AreaChart,
	XAxis,
	YAxis,
	Area,
	Tooltip,
	CartesianGrid,
	BarChart,
	Bar,
	Legend,
} from "recharts";
import { Line, Circle } from 'rc-progress';

const data = require("./json/data.json")
const data1 = require("./json/data1.json")

const davlat = require("./json/stat_davlat.json")
const foiz_jinsi = 70
const foiz_kurs = 54

const yosh1_17 = 10
const yosh18_23 = 47
const yosh24_29 = 10
const yosh30_35 = 10
const yosh36_45 = 10

const biznes = 20
const it = 47
const marifat = 10

class Statistika extends Component {

	state = { 
		davlat:davlat
	 }
	render() { 
		const circleContainerStyle = {
			width: "158px",
			height: "158px"
		 };
		return ( 
			<React.Fragment>
				<div className="statistika__asos">
					<div className="statistika__1">
						<Link to="/spikers" className="stat__1" id="stat__1">
							<div><h1>341</h1><p>Spikerlar</p></div>
							<img src={Voice} alt="" />
						</Link>
						<Link to="/users" className="stat__1" id="stat__2">
							<div><h1>135,214</h1><p>Foydalanuvchilar</p></div>
							<img src={User3} alt="" />
						</Link>
						<Link to="/kurslar/barchasi" className="stat__1" id="stat__3">
							<div><h1>13,312</h1><p>Kurslar soni</p></div>
							<img src={Folder} alt="" />
						</Link>
						<Link to="/moliya/barchasi" className="stat__1" id="stat__4">
							<div><h1>9,317</h1><p>Sotilgan kurslar</p></div>
							<img src={Ticket} alt="" />
						</Link>
					</div>
					<div className="statistika__2">
						<div className="stat__2_1">
							<div className="stat__2_info">
								<h1>Kontent va auditoriya</h1>
							</div>
						<BarChart
							width={790}
							height={270}
							data={data1}
							margin={{
								top: 5,
								right: 10,
								left: 20,
								bottom: 5
							}}
							>
							<XAxis dataKey="hafta_kuni" />
							<YAxis />
							<Tooltip />
							<CartesianGrid vertical={false} stroke="rgba(17, 17, 17, 0.06)" />
							<Legend />
							<Bar dataKey="Auditoriya" fill="#006AFF" />
							<Bar dataKey="Kontent" fill="#939599" />
						</BarChart>
						</div>
						<div className="stat__2_2">
							<h1>O’quvchilar yoshi</h1>
							<h2>{yosh18_23}%</h2>
							<div style={circleContainerStyle}>
							<Circle
								percent={[yosh18_23, yosh1_17, yosh24_29, yosh30_35, yosh36_45]}
								gapDegree={0}
								gapPosition="top"
								strokeWidth={14}
								trailWidth={14}
								strokeLinecap="round"
								strokeColor={['#F2C94C', 'Orange', '#6FCF97','#2D9CDB','#006AFF']}
							/>
							</div>
							<ul>
								<li className="li_1">1-17</li>
								<li className="li_2">18-23</li>
								<li className="li_3">24-29</li>
								<li className="li_4">30-35</li>
								<li className="li_5">36-45</li>
								<li className="li_6">46+</li>
							</ul>
						</div>
					</div>
					<div className="statistika__3">
						<div className="stat__3_1">
							<div className="stat__3">
							<div id="stat__3_1"><button><h1>Sotilgan kurslar</h1><img src={arrowdown_2} alt="" /></button></div>
							<div id="stat__3_2"><button><h2>2 hafta</h2><img src={arrowdown_2} alt="" /></button></div>
							</div>
							<AreaChart stroke="10" width={790} height={240} data={data}
								margin={{ top: 10, right: 10, left: 30, bottom: 0 }}>
								<defs>
									<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
										<stop offset="5%" stopColor="#006AFF" stopOpacity={0.3}/>
										<stop offset="95%" stopColor="#006AFF" stopOpacity={0}/>
									</linearGradient>
								</defs>
								<XAxis dataKey="hafta_kuni" axisLine={false}/>
								<YAxis axisLine={true}/>
								<CartesianGrid vertical={false} stroke="rgba(17, 17, 17, 0.06)"/>
								<Tooltip />
								<Area type="monotone" dataKey={`Summa`} stroke="#006AFF" fillOpacity={1} fill="url(#colorUv)" />
							</AreaChart>
						</div>
						<div className="stat__3_2">
							<h1>O’quvchilar jinsi</h1>
							<h2>{foiz_jinsi}%</h2>
							<div style={circleContainerStyle}>
								<Circle
									percent={foiz_jinsi}
									gapDegree={0}
									gapPosition="top"
									strokeWidth={14}
									trailWidth={14}
									strokeLinecap="round"
									strokeColor={"#006AFF"}
								/>
							</div>
							<ul>
								<li className="yigitlar">Yigitlar</li>
								<li className="qizlar">Qizlar</li>
							</ul>
						</div>
					</div>
					<div className="statistika__4">
						<div className="stat__4">
							<div className="stat__4__1">
								<div><h1>Joylashuv</h1></div>
								<div id="stat__4_1"><h2>Davlat</h2><button><img src={arrowdown_2} alt="" /></button></div>
							</div>
							<div className="stat__4__2">
								{this.state.davlat.map((davlar)=>{
									return(
										<div className="davlat">
											<div className="davlat__1">
												<div><h1>{davlar.davlat}</h1></div>
												<div><h2>{davlar.foiz}%</h2></div>
											</div>
											<div className="davlar__foiz">
												<Line percent={davlar.foiz} strokeWidth="5" trailWidth="5" strokeColor="#006AFF" />
											</div>
										</div>
									)
								})}
							</div>
						</div>
						<div className="stat__4_2">
							<h1>Kurslar</h1>
							<h2>{foiz_kurs}%</h2>
							<div style={circleContainerStyle}>
								<Circle
									percent={foiz_kurs}
									gapDegree={0}
									gapPosition="top"
									strokeWidth={14}
									trailWidth={14}
									strokeLinecap="round"
									strokeColor={"#006AFF"}
								/>
							</div>
							<ul>
								<li className="pullik">Pullik</li>
								<li className="bepul">Bepul</li>
							</ul>
						</div>
						<div className="stat__4_3">
							<h1>Kurslar turkumi</h1>
							<h2>{it}%</h2>
							<div style={circleContainerStyle}>
							<Circle
								percent={[it, marifat, biznes]}
								gapDegree={0}
								gapPosition="top"
								strokeWidth={14}
								trailWidth={14}
								strokeLinecap="round"
								strokeColor={["#F2C94C","#6FCF97","#006AFF"]}
							/>
							</div>
							<ul>
								<li className="li_1">Biznes</li>
								<li className="li_2">IT Texno</li>
								<li className="li_3">M'rifat</li>
								<li className="li_4">Boshqasi</li>
							</ul>
						</div>
					</div>
				</div>
			</React.Fragment>
		 );
	}
}
 
export default Statistika;