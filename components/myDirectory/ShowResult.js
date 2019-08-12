import styled, {keyframes} from "styled-components";
import React, {Component} from "react";
import {ThemeContext} from "../../layouts";
import library from "umi-plugin-react/src/plugins/library";

export const Title = styled.div`
    margin-top: 50px;
    width: 100%;
    border-bottom: 1px solid #e9e9e9;
    margin-bottom: -10px;
`
const LineNum = styled.span`
  color:rgba(0, 0, 0, 0.35);
      width: 25px;
    display: inline-block;
`

export default class ShowResult extends Component {
    constructor(props) {
        super(props);
    }

    static contextType = ThemeContext;

    calcMonth(month) {
        switch (parseInt(month)) {
            case 1:
                return ("January");
            case 2:
                return ("February");
            case 3:
                return ("March");
            case 4:
                return ("April");
            case 5:
                return ("May");
            case 6:
                return ("June");
            case 7:
                return ("July");
            case 8:
                return ("August");
            case 9:
                return ("September");
            case 10:
                return ("October");
            case 11:
                return ("November");
            case 12:
                return ("December");
            default:
                return ("")
        }

    }

    showDate(date) {

        let [year, month, day] = date.split('-')
        return (`${year} ${this.calcMonth(month)} ${day}`)
    }

    render() {

        const context = this.context;
        return (
            <div>
                <Title>Add/Subtract Result History</Title>
                <br/>
                {this.props.data.map((data, i) => (<div key={i}>
                    <LineNum>{i} </LineNum>
                    <span dangerouslySetInnerHTML={{__html: this.showDate(data.date)}}/>
                    <span style={data.action === '+' ? {color: '#017bc3'} : {color: '#af0150\n'}}> {data.action} </span>
                    <span>{data.number} Days = </span>
                    <span dangerouslySetInnerHTML={{__html: this.showDate(data.result)}}/>
                </div>))}
            </div>
        )

    }
}