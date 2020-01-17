import React from 'react';

import Output from '../Output';
import Calc from '../Calc';

class Main extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            display: ' '
        }
    }

    display = (display) => {

        this.setState({
            display: display,
        })

    }

    render(){
        return(
            <div className ="App-main p-2">
                <input type='text' className='output p-1 rounded-top border border-dark container bg-secondary text-right text-white font-weight-bold' value={this.state.display} />              
                <Calc display={this.display}/>
            </div>

        )
    }

}

export default Main;