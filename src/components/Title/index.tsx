import TitleStyle from './styles'

export type Props = {
  children: string
  fontSize?: number
  marginBottom?: number
}

const Title = ({ children, fontSize, marginBottom }: Props) => (
  <TitleStyle fontSize={fontSize} marginBottom={marginBottom}>
    {children}
  </TitleStyle>
)

export default Title
