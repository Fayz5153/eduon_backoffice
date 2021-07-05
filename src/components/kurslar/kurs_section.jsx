import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Kurslar from './kurslar';
import Kurs from './kurs';

class Kurs_section extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/kurslar/barchasi" component={Kurslar}/>
                        <Route path="/kurs" component={Kurs}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
         );
    }
}
 
export default Kurs_section;