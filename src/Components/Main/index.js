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
            <div className ="App-main p-2 bg-dark">
                <input type='text' className='output p-1 rounded-top border border-dark container' value={this.state.display} />              
                <Calc display={this.display}/>
            </div>

        )
    }

}

export default Main;