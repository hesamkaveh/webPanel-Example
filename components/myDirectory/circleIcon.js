import styled, {keyframes} from "styled-components";
import {ThemeContext} from '../../layouts/index'

const CircleIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50px;
  background-color: #0092b8;
  font-size: 45px;
  color: #fff;
  text-align: center;
line-height: 72px;    
margin: 0 auto;
`;
export default (props) =>
    <>
        <CircleIcon style={props.content==='-'?{backgroundColor: 'rgb(175, 1, 80)'}:{}} >{props.content}</CircleIcon>
    </>

