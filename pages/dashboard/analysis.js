import router from 'umi/router';
import {Button} from 'antd';
import {DatePicker} from 'antd';
import React, {Component} from 'react';
import axios from 'axios'
import {Row, Col, Slider} from 'antd';
import {Input} from 'antd';
import {ThemeContext} from '../../layouts/index'
import {Alert} from 'antd';

import CircleIcon from '../../components/myDirectory/circleIcon'
import {
    BelowText,
    Container,
    Description,
    DateContainer,
    TextBoxLabel
} from '../../components/myDirectory/uiGlobalcomponent'
import moment from "moment";
import ShowResult from '../../components/myDirectory/ShowResult'


const dateFormat = 'YYYY-MM-DD';


export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '2011-01-01',
            number: 0,
            haveError: false,
        };

    }

    static contextType = ThemeContext;

    componentWillMount() {
        try {
            JSON.parse(localStorage.getItem('myArray')).map(data => this.context.myArray.push(data))
            this.setState(localStorage.getItem('myArray'))
        } catch (e) {
            console.log(e)
        }
        this.fetchData()
    }

    fetchData() {
        console.log('fetching')
        axios.post('http://0.0.0.0:8001/today').then(response => {
            this.setState({
                date: response.data,
            })
        }).catch(error =>
            console.log(error))

    }

    closeError() {
        this.setState({haveError: 0})
    }

    onSubmit() {
        if (Number.isInteger(parseInt(this.state.number))) {
            axios.post('http://0.0.0.0:8001/add', {
                'ranDate': this.state.date,
                'num': parseInt(this.state.number),

            }).then(response => (
                this.context.myArray.push({
                    'date': this.state.date,
                    'number': this.state.number,
                    'action': '+',
                    'result': response.data
                }),
                    this.setState({haveError: 0}),
                    localStorage.setItem('myArray', JSON.stringify(this.context.myArray))
            )).catch(error =>
                console.log(error))
        } else {
            this.setState({haveError: 1})
        }
    }

    ResetFields() {
        localStorage.clear()
        this.fetchData()
        this.setState({
            number: 0,
        })
        this.context.myArray = []
    }

    handleChangeNumber(event) {
        this.setState({
            number: event.target.value
        })
    }

    onChange(date, dateString) {

        this.setState({
            date: dateString
        })
    }


    render() {
        const context = this.context;

        return (
            <Container>
                <div style={{maxWidth: "720px", margin: "0 auto"}}>
                    <CircleIcon content={'+'}/>
                    <BelowText>Add to Date</BelowText>
                    <Description>Select a number of days to add to the selected date. <br/>
                        The resulting date will show on the history section of both pages.</Description>
                    <DateContainer>

                        <Row gutter={16}>
                            {this.state.haveError ?
                                <Alert style={{marginBottom: '26px'}}
                                       description="Error message. For example: Cannot enter a negative number of days."
                                       type="error"
                                       showIcon
                                       closable
                                       afterClose={this.closeError.bind(this)}/>
                                :
                                <div></div>}

                            <Col span={12}>
                                <TextBoxLabel>Date</TextBoxLabel>
                                <DatePicker style={{
                                    width: '294px',
                                    height: '32px',
                                    borderRadius: '4px',
                                    border: 'solid 1px #d9d9d9',
                                    backgroundColor: '#ffffff'
                                }}
                                            onChange={this.onChange.bind(this)}
                                            value={moment(this.state.date, dateFormat)}
                                            defaultValue={moment(this.state.date, dateFormat)}
                                />
                            </Col>
                            <Col span={12}>
                                <TextBoxLabel>Days to add</TextBoxLabel>
                                <Input style={{
                                    width: '294px',
                                    height: '32px',
                                    borderRadius: '4px',
                                    border: 'solid 1px #d9d9d9',
                                    backgroundColor: '#ffffff'
                                }}
                                       value={this.state.number}
                                       defaultValue={this.state.number}
                                       onChange={this.handleChangeNumber.bind(this)}
                                       placeholder="Basic usage"/>
                            </Col>
                        </Row>

                    </DateContainer>

                    <div style={{textAlign: 'center'}}>
                        <Button style={{margin: '0 5px'}} type="primary" onClick={this.onSubmit.bind(this)}>Add</Button>
                        <Button style={{margin: '0 5px'}} onClick={this.ResetFields.bind(this)}>Reset</Button>
                    </div>
                    <ShowResult data={this.context.myArray}/>
                </div>
            </Container>
        )
    }


}