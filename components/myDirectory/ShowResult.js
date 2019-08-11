import styled, {keyframes} from "styled-components";
import {Component} from "react";
import {ThemeContext} from "../../layouts";


export default class ShowResult extends Component{
    constructor(props) {
        super(props);
    }
    static contextType = ThemeContext;

    render() {
        const context = this.context;
        return(
            <div>
                {console.log(this.props.data)}
                <div>Add/Subtract Result History</div>
                <br/>
                {this.props.data.map(data=>(<div>${data.date} </div> ))}
                {/*{context.myArray.map(data=>(<div>${data.date} </div>))}*/}
            </div>
        )
    }
}
