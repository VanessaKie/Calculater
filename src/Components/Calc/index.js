import React from 'react';

class Calc extends React.Component{
    constructor(props){
        super(props)
        
        this.display = '';
        this.percent= '';
    }

    handleClickDisplay = (e) => {
        let input = e.target.value;
        this.percent = input;
        console.log('display', typeof(this.display))

        this.display += input;
        console.log('display after +input', typeof(this.display))
        
        console.log('input', typeof(input))
        

        this.props.display(this.display);
    }

    handleClear = () => {
        this.display= '';
        this.props.display(' ');
    }

    handleCalc = () => {
        let output = eval(this.display);
        this.props.display(output);
        this.display= ' ';
    }

    handlePercent = () => {
       /*  let percent = toString(this.percent);
        let calc = this.display.split(' ');
        let index = this.display.indexOf(percent);
        let start = index-1;
        let x = calc.splice(0, start);
        let calc2 = x.join('');

        let percentCalc = eval() */
       /*  let test = 'a + b + test'
        
        let a = test.split(' ');
        let y = a.indexOf('test')
        let start = y-1
        let z = a.splice(0, start) */
       /*  console.log('percent',this.percent);
        console.log('percent',typeof(percent));

        console.log('split', calc);
        console.log('index', index);
        console.log('splice', x);
        console.log('new', calc2); */
    }


    render(){
        return(
            <div className="input container">
                <div className="row">
                    <button  onClick={this.handleClear} className="col-3 clear btn btn-dark rounded-0" value='clear'>C</button>
                    <button  className="col-3 transform btn btn-dark rounded-0" value='transform'>+/-</button>
                    <button  onClick={this.handlePercent} className="col-3 percent btn btn-dark rounded-0" value="percent">%</button>
                    <button onClick={this.handleClickDisplay} className="col-3 divide btn btn-warning text-white rounded-0" value='/'>{String.fromCharCode(247)}</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='7'>7</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='8'>8</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='9'>9</button>
                    <button onClick={this.handleClickDisplay} className="col-3 mul btn btn-warning text-white rounded-0" value='*'>x</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='4'>4</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='5'>5</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='6'>6</button>
                    <button onClick={this.handleClickDisplay} className="col-3 min btn btn-warning text-white rounded-0" value='-'>-</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='1'>1</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='2'>2</button>
                    <button onClick={this.handleClickDisplay} className="col-3 numb btn btn-secondary rounded-0" value='3'>3</button>
                    <button onClick={this.handleClickDisplay} className="col-3 add btn btn-warning text-white rounded-0" value='+'>+</button>
                </div>
                <div className="row">
                    <button onClick={this.handleClickDisplay} className="col-6 numb btn btn-secondary rounded-0" value='0'>0</button>
                    <button onClick={this.handleClickDisplay} className="col-3 comma btn btn-secondary rounded-0" value='.'>,</button>
                    <button onClick={this.handleCalc} className="col-3 output btn btn-warning text-white rounded-0" value='output'>=</button>
                </div>
            </div>
        )
    }

}

export default Calc;