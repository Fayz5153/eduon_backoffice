import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../css/users.css"
import Left from "../icons/Left.svg"
import Right from "../icons/Right.svg"

const data = require("../json/users.json")

class Users extends Component {
	state = { 
		data:data
	 }
	render() { 
		return ( 
			<React.Fragment>
				<div className="users">
					<table>
						<tr className="users__category">
								<th>Ism va tel.raqam</th>
								<th>Pul miqdori</th>
								<th>Vaucher</th>
								<th>Kurslar</th>
						</tr>
						{this.state.data.map((data)=>{
							return(
								<tr className="users__tr">
									<td>
										<Link to="/user"  className="users__info">
											<div><img src={data.rasm} alt="" /></div>
											<div  className="users__p">
												<p>{data.ism} {data.familya}</p>
												<h2>{data.tel}</h2>
											</div>
										</Link>
									</td>
									<td>
										<a  href="#">{data.balans} so'm</a>
									</td>
									<td>
										<a  href="#">{data.vaucher} so'm</a>
									</td>
									<td>
										<a  href="#">{data.kurslari} ta</a>
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
 
export default Users;