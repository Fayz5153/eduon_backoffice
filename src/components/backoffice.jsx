import React, { Component } from 'react';
import {BrowserRouter, NavLink, Switch, Route } from "react-router-dom"
import Karantin from './karantin';
import Sozlamalar from './sozlamalar';
import Tasdiq from './tasdiq';
import Tasdiq_kurs from './tasdiq_kurs';
import Moliya from './moliya';
import Kurs_section from './kurslar/kurs_section';
import Users from './users/users';
import User from './users/user';
import Spikers from './spikerlar/spikerlar';
import Statistika from './statistika';
import "./css/backoffice.css"

class Backoffice extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="backoffice container">
                    <div className="backoffice__left">
                        <NavLink activeClassName="activ__nav" exact to="/">
									<object data="" type="">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g id="Iconly/Bulk/Chart">
									<g id="Chart">
									<path id="Fill 1" opacity="0.4" d="M13.8963 1.66666H6.11107C3.27403 1.66666 1.66663 3.27406 1.66663 6.1111V13.8889C1.66663 16.7259 3.27403 18.3333 6.11107 18.3333H13.8963C16.7333 18.3333 18.3333 16.7259 18.3333 13.8889V6.1111C18.3333 3.27406 16.7333 1.66666 13.8963 1.66666Z" fill="#1111116b"/>
									<path id="Fill 4" d="M6.14055 7.80746C5.76277 7.80746 5.45166 8.11858 5.45166 8.50376V14.2297C5.45166 14.6075 5.76277 14.9186 6.14055 14.9186C6.52573 14.9186 6.83685 14.6075 6.83685 14.2297V8.50376C6.83685 8.11858 6.52573 7.80746 6.14055 7.80746Z" fill="#111111"/>
									<path id="Fill 6" d="M10.0295 5.07413C9.65169 5.07413 9.34058 5.38524 9.34058 5.77042V14.2297C9.34058 14.6075 9.65169 14.9186 10.0295 14.9186C10.4147 14.9186 10.7258 14.6075 10.7258 14.2297V5.77042C10.7258 5.38524 10.4147 5.07413 10.0295 5.07413Z" fill="#111111"/>
									<path id="Fill 8" d="M13.8666 10.8297C13.4814 10.8297 13.1703 11.1408 13.1703 11.526V14.2297C13.1703 14.6075 13.4814 14.9186 13.8592 14.9186C14.2444 14.9186 14.5555 14.6075 14.5555 14.2297V11.526C14.5555 11.1408 14.2444 10.8297 13.8666 10.8297Z" fill="#111111"/>
									</g>
									</g>
									</svg></object>
									Statiktika</NavLink>
                        <NavLink activeClassName="activ__nav" to="/spikers">
									<object data="" type="">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g id="Iconly/Bulk/Voice" opacity="0.72">
									<g id="Chart">
									<path id="Fill 1" opacity="0.4" d="M16.276 8.18805C15.8304 8.18805 15.4688 8.5444 15.4688 8.98526C15.4688 11.9628 13.0155 14.3855 10.0004 14.3855C6.98443 14.3855 4.53115 11.9628 4.53115 8.98526C4.53115 8.5444 4.1695 8.18805 3.72389 8.18805C3.27828 8.18805 2.91663 8.5444 2.91663 8.98526C2.91663 12.5727 5.66617 15.5343 9.1931 15.9321V17.5361C9.1931 17.9762 9.55395 18.3333 10.0004 18.3333C10.446 18.3333 10.8076 17.9762 10.8076 17.5361V15.9321C14.3338 15.5343 17.0833 12.5727 17.0833 8.98526C17.0833 8.5444 16.7216 8.18805 16.276 8.18805Z" fill="#111111" fill-opacity="0.54"/>
									<path id="Fill 4" d="M9.85377 12.6809H10.146C12.148 12.6809 13.7722 11.0777 13.7722 9.10062V5.24771C13.7722 3.26904 12.148 1.66666 10.146 1.66666H9.85377C7.85175 1.66666 6.22754 3.26904 6.22754 5.24771V9.10062C6.22754 11.0777 7.85175 12.6809 9.85377 12.6809Z" fill="#111111" fill-opacity="0.54"/>
									</g>
									</g>
									</svg>
									</object>
									Spikerlar</NavLink>
                        <NavLink activeClassName="activ__nav" to="/users">
									<object data="" type="">
									<svg id="Chart" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.95752 9.11661C7.08253 9.11661 4.65674 9.5864 4.65674 11.3995C4.65674 13.2134 7.0982 13.6667 9.95752 13.6667C12.8325 13.6667 15.2583 13.1969 15.2583 11.3838C15.2583 9.56989 12.8168 9.11661 9.95752 9.11661Z" fill="#111111" fill-opacity="0.54"/>
									<path opacity="0.4" d="M9.95757 7.38918C11.9043 7.38918 13.4653 5.81921 13.4653 3.86126C13.4653 1.90255 11.9043 0.333328 9.95757 0.333328C8.01082 0.333328 6.44983 1.90255 6.44983 3.86126C6.44983 5.81921 8.01082 7.38918 9.95757 7.38918Z" fill="#111111" fill-opacity="0.54"/>
									<path opacity="0.4" d="M17.5733 4.68272C18.077 2.7015 16.6003 0.92215 14.72 0.92215C14.5155 0.92215 14.32 0.944664 14.129 0.982937C14.1036 0.988941 14.0753 1.0017 14.0603 1.02421C14.0432 1.05273 14.0559 1.091 14.0745 1.11577C14.6394 1.91276 14.964 2.88311 14.964 3.92475C14.964 4.92287 14.6662 5.85345 14.1439 6.62567C14.0902 6.70522 14.1379 6.81254 14.2327 6.82905C14.364 6.85231 14.4983 6.86432 14.6356 6.86807C16.0049 6.90409 17.2338 6.0178 17.5733 4.68272Z" fill="#111111" fill-opacity="0.54"/>
									<path d="M19.0077 9.34744C18.757 8.81011 18.1519 8.44163 17.2318 8.26077C16.7976 8.15421 15.6223 8.00411 14.5292 8.02438C14.5128 8.02663 14.5038 8.03789 14.5023 8.04539C14.5001 8.0559 14.5046 8.07391 14.5262 8.08516C15.0314 8.33657 16.9841 9.42999 16.7386 11.7362C16.7282 11.836 16.808 11.9223 16.9073 11.9073C17.3878 11.8382 18.6242 11.5711 19.0077 10.7388C19.2196 10.299 19.2196 9.78797 19.0077 9.34744Z" fill="#111111" fill-opacity="0.54"/>
									<path opacity="0.4" d="M5.87069 0.983151C5.68042 0.944127 5.48418 0.922363 5.27973 0.922363C3.39938 0.922363 1.92271 2.70171 2.42712 4.68294C2.76588 6.01801 3.99482 6.90431 5.36404 6.86829C5.50134 6.86453 5.6364 6.85177 5.76698 6.82926C5.86174 6.81275 5.90949 6.70543 5.85577 6.62589C5.33345 5.85291 5.03573 4.92308 5.03573 3.92497C5.03573 2.88257 5.36106 1.91222 5.92591 1.11598C5.94382 1.09122 5.95725 1.05294 5.93934 1.02443C5.92442 1.00116 5.89681 0.989155 5.87069 0.983151Z" fill="#111111" fill-opacity="0.54"/>
									<path d="M2.768 8.26055C1.84798 8.44141 1.24358 8.80989 0.992868 9.34722C0.780209 9.78774 0.780209 10.2988 0.992868 10.7393C1.3764 11.5708 2.6128 11.8388 3.09333 11.9071C3.19257 11.9221 3.27167 11.8365 3.26122 11.7359C3.01573 9.43052 4.96846 8.3371 5.47436 8.08569C5.49525 8.07369 5.49973 8.05643 5.49749 8.04517C5.496 8.03766 5.48779 8.02641 5.47137 8.02491C4.37749 8.00389 3.20302 8.15399 2.768 8.26055Z" fill="#111111" fill-opacity="0.54"/>
									</svg>
									</object>
									Foydalanuvchilar</NavLink>
                        <NavLink activeClassName="activ__nav" to="/kurslar/barchasi">
									<object data="" type="">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g id="Iconly/Bulk/Folder" opacity="0.72">
									<g id="Chart">
									<path id="Folder 2" d="M14.0702 4.26238H11.6177C11.0067 4.26641 10.4266 3.99463 10.0394 3.52293L9.23179 2.40636C8.8511 1.93052 8.27104 1.65746 7.66097 1.66691H5.92713C2.81512 1.66691 1.66663 3.49335 1.66663 6.59904V9.95613C1.66276 10.3253 18.3297 10.3249 18.3307 9.95613V8.98006C18.3456 5.87438 17.2267 4.26238 14.0702 4.26238Z" fill="#DADADA"/>
									<path id="Folder_2" fill-rule="evenodd" clip-rule="evenodd" d="M17.3601 5.45291C17.6267 5.76464 17.8327 6.12324 17.9677 6.51032C18.2331 7.30589 18.3561 8.14194 18.3307 8.98008V13.3576C18.3297 13.7263 18.3024 14.0945 18.2492 14.4594C18.1479 15.1033 17.9214 15.7213 17.5824 16.2784C17.4265 16.5476 17.2373 16.796 17.0192 17.0179C16.0319 17.9241 14.7208 18.3958 13.3811 18.3267H6.6088C5.26704 18.3952 3.9538 17.9238 2.9633 17.0179C2.7478 16.7956 2.5611 16.5472 2.40758 16.2784C2.07058 15.7217 1.84887 15.1031 1.75554 14.4594C1.6962 14.0951 1.66647 13.7267 1.66663 13.3576V8.98008C1.66648 8.61448 1.68627 8.24915 1.7259 7.8857C1.73424 7.82193 1.74674 7.7592 1.75911 7.69713C1.77974 7.59364 1.8 7.49195 1.8 7.39027C1.87522 6.95166 2.01243 6.52593 2.20753 6.12581C2.78547 4.89093 3.971 4.2624 5.9123 4.2624H14.0628C15.1501 4.1783 16.2294 4.50563 17.0859 5.17931C17.1846 5.26296 17.2763 5.35446 17.3601 5.45291ZM5.80857 12.9509H14.1962H14.211C14.3951 12.9589 14.5746 12.893 14.7097 12.768C14.8447 12.6429 14.924 12.4691 14.9297 12.2854C14.9401 12.1239 14.887 11.9647 14.7815 11.8417C14.6603 11.6765 14.4681 11.5778 14.2629 11.5755H5.80857C5.428 11.5755 5.11948 11.8834 5.11948 12.2632C5.11948 12.643 5.428 12.9509 5.80857 12.9509Z" fill="#A2A2A2"/>
									</g>
									</g>
									</svg>
									</object>
									Kurslar</NavLink>
                        <NavLink activeClassName="activ__nav" to="/moliya/barchasi">
									<object data="" type="">
									<svg id="Chart" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3303 4.97927H13.8014C12.1592 4.98216 10.8288 6.27929 10.8259 7.88047C10.8237 9.48527 12.1555 10.7882 13.8014 10.7903H17.3333V11.0453C17.3333 13.8446 15.6363 15.5 12.7644 15.5H5.23626C2.36366 15.5 0.666626 13.8446 0.666626 11.0453V4.94822C0.666626 2.14885 2.36366 0.5 5.23626 0.5H12.7614C15.6333 0.5 17.3303 2.14885 17.3303 4.94822V4.97927ZM4.61613 4.97277H9.31613H9.31909H9.32502C9.67687 4.97133 9.96132 4.69182 9.95983 4.34804C9.95835 4.00498 9.67095 3.72765 9.31909 3.72909H4.61613C4.2665 3.73054 3.9828 4.00715 3.98132 4.34876C3.97983 4.69182 4.26428 4.97133 4.61613 4.97277Z" fill="#111111" fill-opacity="0.54"/>
									<path opacity="0.4" d="M12.3644 8.24722C12.5387 9.03987 13.2337 9.59756 14.0271 9.58306H16.7353C17.0655 9.58306 17.3333 9.30965 17.3333 8.97171V6.86208C17.3325 6.52485 17.0655 6.25073 16.7353 6.25H13.9633C13.0608 6.2529 12.3318 7.00204 12.3333 7.92523C12.3333 8.03329 12.3439 8.14134 12.3644 8.24722Z" fill="#111111" fill-opacity="0.54"/>
									<ellipse cx="14" cy="7.91666" rx="0.833334" ry="0.833333" fill="#111111" fill-opacity="0.54"/>
									</svg>
									</object>
									Moliya</NavLink>
                        <NavLink activeClassName="activ__nav" to="/tasdiqlar">
									<object data="" type="">
									<svg id="Chart" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.4" d="M12.6169 0.666496H5.39187C2.56687 0.666496 0.66687 2.64983 0.66687 5.59983V12.4082C0.66687 15.3498 2.56687 17.3332 5.39187 17.3332H12.6169C15.4419 17.3332 17.3335 15.3498 17.3335 12.4082V5.59983C17.3335 2.64983 15.4419 0.666496 12.6169 0.666496Z" fill="#111111" fill-opacity="0.54"/>
									<path d="M8.01116 11.7066C7.82449 11.7066 7.63783 11.6357 7.49533 11.4932L5.51783 9.51575C5.23283 9.23075 5.23283 8.76908 5.51783 8.48491C5.80283 8.19991 6.26366 8.19908 6.54866 8.48408L8.01116 9.94658L11.4512 6.50658C11.7362 6.22158 12.197 6.22158 12.482 6.50658C12.767 6.79158 12.767 7.25325 12.482 7.53825L8.52699 11.4932C8.38449 11.6357 8.19783 11.7066 8.01116 11.7066Z" fill="#111111" fill-opacity="0.54"/>
									</svg>
									</object>
									Tasdiqlar</NavLink>
                        <NavLink activeClassName="activ__nav" to="/sozlamalar">
									<object data="" type="">
									<svg id="Chart" width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M8.00994 11.3584C6.67288 11.3584 5.59131 10.3167 5.59131 9.00842C5.59131 7.70008 6.67288 6.65008 8.00994 6.65008C9.347 6.65008 10.403 7.70008 10.403 9.00842C10.403 10.3167 9.347 11.3584 8.00994 11.3584Z" fill="#111111" fill-opacity="0.54"/>
									<path opacity="0.4" d="M15.6917 10.9751C15.5299 10.7251 15.2999 10.4751 15.0019 10.3167C14.7634 10.2001 14.6101 10.0084 14.4739 9.78341C14.0395 9.06675 14.295 8.12508 15.0189 7.70008C15.8705 7.22508 16.1431 6.16675 15.6491 5.34175L15.0785 4.35841C14.5931 3.53341 13.5286 3.24175 12.6854 3.72508C11.936 4.12508 10.9737 3.85841 10.5393 3.15008C10.4031 2.91675 10.3264 2.66675 10.3435 2.41675C10.369 2.09175 10.2668 1.78341 10.1135 1.53341C9.79841 1.01675 9.22781 0.666748 8.59761 0.666748H7.39681C6.77512 0.683415 6.20452 1.01675 5.88942 1.53341C5.72761 1.78341 5.63393 2.09175 5.65096 2.41675C5.668 2.66675 5.59135 2.91675 5.45509 3.15008C5.02076 3.85841 4.05841 4.12508 3.31749 3.72508C2.46586 3.24175 1.40984 3.53341 0.915894 4.35841L0.345301 5.34175C-0.140129 6.16675 0.132393 7.22508 0.975508 7.70008C1.69939 8.12508 1.95488 9.06675 1.52907 9.78341C1.38429 10.0084 1.231 10.2001 0.992541 10.3167C0.702986 10.4751 0.447497 10.7251 0.311236 10.9751C-0.00386771 11.4917 0.0131649 12.1417 0.328268 12.6834L0.915894 13.6834C1.231 14.2167 1.81862 14.5501 2.4318 14.5501C2.72135 14.5501 3.062 14.4667 3.33453 14.3001C3.54743 14.1584 3.80292 14.1084 4.08396 14.1084C4.92708 14.1084 5.63393 14.8001 5.65096 15.6251C5.65096 16.5834 6.43446 17.3334 7.42236 17.3334H8.58057C9.55995 17.3334 10.3435 16.5834 10.3435 15.6251C10.369 14.8001 11.0759 14.1084 11.919 14.1084C12.1915 14.1084 12.447 14.1584 12.6684 14.3001C12.9409 14.4667 13.2731 14.5501 13.5711 14.5501C14.1758 14.5501 14.7634 14.2167 15.0785 13.6834L15.6747 12.6834C15.9812 12.1251 16.0068 11.4917 15.6917 10.9751Z" fill="#111111" fill-opacity="0.54"/>
									</svg>
									</object>
									Sozlamalar</NavLink>
                        <NavLink activeClassName="activ__nav" to="/karantin/barchasi">
									<object data="" type="">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g id="Iconly/Bulk/Danger" opacity="0.72">
									<g id="Chart">
									<path id="Fill 5" opacity="0.4" d="M3.93555 17.6394C3.92472 17.6394 3.91472 17.6394 3.90305 17.6386C3.64055 17.6252 3.38305 17.5686 3.13805 17.4694C1.93222 16.9794 1.35055 15.6019 1.83972 14.3969L7.94055 3.70858C8.15055 3.32858 8.46888 3.01025 8.85722 2.79525C9.99472 2.16525 11.4331 2.57942 12.0622 3.71608L18.1231 14.3227C18.2581 14.6402 18.3156 14.8986 18.3297 15.1619C18.3622 15.7919 18.1472 16.3961 17.7256 16.8636C17.3039 17.3311 16.7247 17.6069 16.0956 17.6386L3.99555 17.6394H3.93555Z" fill="#111111" fill-opacity="0.54"/>
									<path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M9.27039 8.35067C9.27039 7.949 9.59789 7.6215 9.99955 7.6215C10.4012 7.6215 10.7287 7.949 10.7287 8.35067V10.7073C10.7287 11.1098 10.4012 11.4365 9.99955 11.4365C9.59789 11.4365 9.27039 11.1098 9.27039 10.7073V8.35067ZM9.27039 13.5582C9.27039 13.1541 9.59789 12.8249 9.99955 12.8249C10.4012 12.8249 10.7287 13.1499 10.7287 13.5491C10.7287 13.9599 10.4012 14.2874 9.99955 14.2874C9.59789 14.2874 9.27039 13.9599 9.27039 13.5582Z" fill="#111111" fill-opacity="0.54"/>
									</g>
									</g>
									</svg>
									</object>
									Karantin</NavLink>
                        <div className="eduonga__foydasi">
                            <h1>13,233,500,000</h1><br/>
                            <h2>Eduon Foydasi</h2>
                        </div>
                    </div>
                    <div className="backoffice__right">
                        <Switch>
                            <Route exact path="/" component={Statistika}/>
                            <Route path="/spikers">
									 		<Spikers/>
									 </Route>
                            <Route path="/users">
										 <BrowserRouter>
										 	<Switch>
												<Route path="/users">
													<Users/>
												</Route>
												<Route path="/user">
													<User/>
												</Route>
											 </Switch>
										 </BrowserRouter>
									 </Route>
                            <Route path="/kurslar/barchasi" component={Kurs_section}/>
                            <Route path="/moliya/barchasi" component={Moliya}/>
                            <Route path="/tasdiqlar">
								<BrowserRouter>
									<NavLink className="back_tasdiq" activeClassName="tasdiq__activ" exact to="/tasdiqlar">Spikerlar</NavLink>
									<NavLink className="back_tasdiq" activeClassName="tasdiq__activ" to="/tasdiqlar/kurs">Kurslar</NavLink>
									<Switch>
										<Route exact path="/tasdiqlar">
											<Tasdiq/>
										</Route>
										<Route path="/tasdiqlar/kurs">
											<Tasdiq_kurs/>
										</Route>
									</Switch>
								</BrowserRouter>
							</Route>
                            <Route path="/sozlamalar" component={Sozlamalar}/>
                            <Route path="/karantin/barchasi" component={Karantin}/>
                        </Switch>
                    </div>
                </div>
                
                
            </React.Fragment>
         );
    }
}
 
export default Backoffice;