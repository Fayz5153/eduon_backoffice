import React, { Component } from 'react';
import Swap1 from "../icons/Swap1.svg"
import Swap2 from "../icons/Swap2.svg"

const data = require("../json/users.json")
const data1 = require("../json/user.json")

class User extends Component {
	state = { 
		data:data,
		data1:data1
	 }
	render() { 
		return ( 
			<React.Fragment>
				<div className="user">
					{this.state.data.map((data)=>{
						if (data.id === "1") {
							return(
								<div className="user__1__asos">
									<div className="user__1">
										<div className="user__pic">
											<img src={data.rasm} alt="" />
										</div>
										<div className="user__info">
											<p>{data.ism}</p>
											<p>{data.familya}</p>
										</div>
										<div className="user__info">
											<p>{data.tel}</p>
											<p>{data.email}</p>
										</div>
									</div>
									<div className="user__2">
										<div className="user__ban">
											<h1>Ban berish</h1>
											<div><input type="text" placeholder="Kunni kiriting" /><a href="#">Tasdiqlash</a></div>
										</div>
										<div className="user__vaucher">
											<h1>Vaucher berish</h1>
											<div><input type="text" placeholder="Summani kiriting" /><a href="#">Tasdiqlash</a></div>
										</div>
									</div>
									<div className="user__3">
										<div className="user__3__1"><h1>Karantinga yuborish</h1></div>
										<div className="user__3__2"><textarea name="" placeholder="Sababini yozing..." id="" cols="30" rows="10"></textarea></div>
										<div className="user__3__3"><a href="#">Tasdiqlash</a></div>
									</div>
									<div className="user__4">
										<p>Kurslar: <span>{data.kurslari} ta</span></p>
										<p>Pul o'tkazmalari soni: <span>{data.tolovsoni} ta</span></p>
									</div>
									<div className="user__5">
										<div>
											<p>Umumiy to’ldirgan pul: <span>{data.umumiytolov} so'm</span></p>
											<p>Ishlatilgan pul: <span>{data.ishlatganpul} so'm</span></p>
											<p>Mavjud pul: <span>{data.balans} so'm</span></p>
										</div>
										<div className="user__tolovlar">
											<p>Umumiy vaucher: <span>{data.umumiyvaucher} so'm</span></p>
											<p>Ishlatilgan vaucher: <span>{data.ishlatganvaucher} so'm</span></p>
											<p>Mavjud vaucher: <span>{data.vaucherbalans} so'm</span></p>
										</div>
									</div>
									<div className="user__6">
										<div><p>Tug’ilgan sana</p><h1>{data.tugilgansana}</h1></div>
										<div><p>Kasb</p><h1>{data.kasbi}</h1></div>
										<div><p>Mamlakat</p><h1>{data.mamlakat}</h1></div>
										<div><p>Viloyat</p><h1>{data.viloyat}</h1></div>
									</div>
								</div>
							)
						}
					})}
					
					<div className="user__2__asos">
						<h1>Kirim chiqimlar</h1>
						<table>
							{this.state.data1.map((data1)=>{
								return(
									<tr className="user__tr">
										<td>
											{data1.holat !== "kirim" ?
											<img src={Swap1} alt="" />:
											<img src={Swap2} alt="" />}
										</td>
										<td><p>{data1.ismi}</p></td>
										<td><p>{data1.sana}</p></td>
										<td><p>{data1.qiymat}</p></td>
										<td><p>{data1.status}</p></td>
									</tr>
								)
							})}
						</table>
					</div>
				</div>
			</React.Fragment>
		 );
	}
}
 
export default User;