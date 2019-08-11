import router from 'umi/router';
import {Button} from 'antd';
import {DatePicker} from 'antd';
import React, {Component} from 'react';
import axios from 'axios'
import {Row, Col, Slider} from 'antd';
import {calcContext} from '../../layouts/index'
import {Input} from 'antd';

import CircleIcon from '../../components/myDirectory/circleIcon'
import {
    BelowText,
    Container,
    Description,
    DateContainer,
    TextBoxLabel
} from '../../components/myDirectory/uiGlobalcomponent'
import moment from "moment";

function onChange(date, dateString) {
    console.log(date, dateString);
}

const dateFormat = 'YYYY-MM-DD';
export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '2015-01-01',
            number: 0,
        };

    }

    componentWillMount() {
        this.fetchData()
    }

    fetchData() {
        axios.post('http://0.0.0.0:8001/today').then(response => {
            this.setState({
                date: response.data,
            })
        }).catch(error =>
            console.log(error))

    }

    onSubmit() {

    }

    ResetFields() {
        this.fetchData()
        this.setState({
            number: 0,
        })

    }

    handleChangeNumber(event) {
        this.setState({
            number: event.target.value
        })

    }

    render() {
        return (
            <Container>
                <CircleIcon content={'+'}/>
                <BelowText>Add to Date</BelowText>
                <Description>Select a number of days to add to the selected date. <br/>
                    The resulting date will show on the history section of both pages.</Description>
                <DateContainer>
                    <Row gutter={16}>

                        <Col span={12}>
                            <TextBoxLabel>Date</TextBoxLabel>

                            <DatePicker style={{
                                width: '294px',
                                height: '32px',
                                borderRadius: '4px',
                                border: 'solid 1px #d9d9d9',
                                backgroundColor: '#ffffff'
}} onChange={onChange} value={moment(this.state.date, dateFormat)}/>
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
                <Button style={{margin: '0 5px'}} type="primary" onClick={this.onSubmit()}>Add</Button>
                <Button style={{margin: '0 5px'}} onClick={this.ResetFields.bind(this)}>Reset</Button>

            </Container>
        )
    }


}