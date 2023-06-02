import styled from 'styled-components'
import { Props } from '.'

const TitleStyle = styled.h3<Props>`
  font-weight: bold;
  color: ${(props) => props.theme.mainColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'em' : '1.17em')};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom + 'px' : '16px'};
`

export default TitleStyle
