import React, { Component } from 'react';
import Swap1 from "../icons/Swap1.svg"
import Swap2 from "../icons/Swap2.svg"

const data = require("../json/spikers.json")
const data1 = require("../json/spiker.json")

class Spiker extends Component {
	state = { 
		data:data,
		data1:data1
	 }
	render() { 
		return ( 
			<React.Fragment>
				<div className="spiker">
					{this.state.data.map((data)=>{
						if (data.id === "1") {
							return(
								<div className="spiker__1__asos">
									<div className="spiker__1">
										<div className="spiker__pic">
											<img src={data.rasm} alt="" />
										</div>
										<div className="spiker__info">
											<p>{data.ism}</p>
											<p>{data.familya}</p>
										</div>
										<div className="spiker__info">
											<p>{data.tel}</p>
											<p>{data.email}</p>
										</div>
									</div>
									<div className="spiker__2">
										<div className="spiker__3">
											<div className="spiker__3__1"><h1>Karantinga yuborish</h1></div>
											<div className="spiker__3__2"><textarea name="" placeholder="Sababini yozing..." id="" cols="30" rows="10"></textarea></div>
											<div className="spiker__3__3"><a href="#">Tasdiqlash</a></div>
										</div>
										<div className="spiker__ban">
											<h1>Ban berish</h1>
											<div><input type="text" placeholder="Kunni kiriting" /><a href="#">Tasdiqlash</a></div>
										</div>
									</div>
									<div className="spiker__4">
										<p>Kurslar: <span>{data.kurslari} ta</span></p>
										<p>Sotilgan kurslar: <span>{data.sotilgan_kurslari} ta</span></p>
										<p>O'quvchilar: <span>{data.oquvchisi} ta</span></p>
									</div>
									<div className="spiker__5">
										<div>
											<p>Umumiy tushgan pul: <span>{data.umumiypuli} so'm</span></p>
											<p>Yechib olingan pul: <span>{data.yechilganpul} so'm</span></p>
										</div>
										<div className="spiker__tolovlar">
											<p>Saytdagi puli: <span>{data.sayttagipuli} so'm</span></p>
											<p>Vaucher: <span>{data.vaucher} so'm</span></p>
										</div>
									</div>
									<div className="spiker__6">
										<h1>Eduon foydasi: <span>{data.eduonfoydasi} so'm</span></h1>
									</div>
									<div className="spiker__7">
										<div><p>Tug’ilgan sana</p><h1>{data.tugilgansana}</h1></div>
										<div><p>Kasb</p><h1>{data.kasbi}</h1></div>
										<div><p>Mamlakat</p><h1>{data.mamlakat}</h1></div>
										<div><p>Viloyat</p><h1>{data.viloyat}</h1></div>
										<div><p>Kampaniya</p><h1>{data.company}</h1></div>
										<div><p>Karta raqami</p><h1>{data.karta}</h1></div>
									</div>
								</div>
							)
						}
					})}
					
					<div className="spiker__2__asos">
						<h1>Kirim chiqimlar</h1>
						<table>
							{this.state.data1.map((data1)=>{
								return(
									<tr className="spiker__tr">
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
 
export default Spiker;