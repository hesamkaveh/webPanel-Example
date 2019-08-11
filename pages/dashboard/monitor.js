import router from 'umi/router';
import {Button} from 'antd';
import CircleIcon from '../../components/myDirectory/circleIcon'
import {BelowText,Container,Description} from '../../components/myDirectory/uiGlobalcomponent'
export default () =>
    <Container>
        <CircleIcon content={'-'}/>
        <BelowText>Subtract to Date</BelowText>
        <Description>Select a number of days to subtract to the selected date.
            The resulting date will show on the history section of both pages.</Description>

    </Container>

