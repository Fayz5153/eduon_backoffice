import React, { Component } from 'react';
import {BrowserRouter,Link, NavLink, Route, Switch} from "react-router-dom"
import Left from "../icons/Left.svg"
import Right from "../icons/Right.svg"
import Spiker from './spiker';
import "../css/spikerlar.css"

const data =require("../json/spikers.json")

class Spikers extends Component {
	state = { 
		data:data
	 }
	render() { 
		return ( 
			<React.Fragment>
			<BrowserRouter>
				<div className="spikers">
					
						<Switch>
							<Route exact path="/spikers">
							<div className="spikers__1">
								<NavLink activeClassName="spikers__activ" exact to="/spikers">Barchasi</NavLink>
								<NavLink activeClassName="spikers__activ" to="/top">Top</NavLink>
							</div>
							<div className="spikers__2">
							<table>
								<tr className="spikers__category">
										<th>Ism va tel.raqam</th>
										<th>Kurslar soni</th>
										<th>O’quvchilar soni</th>
										<th>Reyting</th>
										<th>Daromadi</th>
								</tr>
								{this.state.data.map((data)=>{
									return(
										<tr className="spikers__tr">
											<td>
												<Link to="/spiker"  className="spikers__info">
													<div><img src={data.rasm} alt="" /></div>
													<div  className="spikers__p">
														<p>{data.ism} {data.familya}</p>
														<h2>{data.tel}</h2>
													</div>
												</Link>
											</td>
											<td>
												<a  href="#">{data.kurslari} so'm</a>
											</td>
											<td>
												<a  href="#">{data.oquvchisi} so'm</a>
											</td>
											<td>
												<a  href="#">{data.reyt} ta</a>
											</td>
											<td>
												<a  href="#">{data.daromadi} ta</a>
											</td>
										</tr>
									)
								})}
								</table>
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
							</Route>
							<Route path="/top">
								<div className="spikers__1">
									<NavLink activeClassName="spikers__activ" exact to="/spikers">Barchasi</NavLink>
									<NavLink activeClassName="spikers__activ" to="/top">Top</NavLink>
								</div>
								<div className="spikers__2">
								<table>
									<tr className="spikers__category">
											<th>Ism va tel.raqam</th>
											<th>Kurslar soni</th>
											<th>O’quvchilar soni</th>
											<th>Reyting</th>
											<th>Daromadi</th>
									</tr>
								{this.state.data.map((data)=>{
										if (data.holat === "top") {
											return(
												<tr className="spikers__tr">
													<td>
														<Link to="/spiker"  className="spikers__info">
															<div><img src={data.rasm} alt="" /></div>
															<div  className="spikers__p">
																<p>{data.ism} {data.familya}</p>
																<h2>{data.tel}</h2>
															</div>
														</Link>
													</td>
													<td>
														<a  href="#">{data.kurslari} so'm</a>
													</td>
													<td>
														<a  href="#">{data.oquvchisi} so'm</a>
													</td>
													<td>
														<a  href="#">{data.reyt} ta</a>
													</td>
													<td>
														<a  href="#">{data.daromadi} ta</a>
													</td>
												</tr>
											)
										}
								})}
								</table>
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
							</Route>
							<Route>
								<Spiker/>
							</Route>
						</Switch>
					
					
				</div>
			</BrowserRouter>
			</React.Fragment>
		 );
	}
}
 
export default Spikers;