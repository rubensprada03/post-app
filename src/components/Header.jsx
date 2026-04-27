import { useNavigate } from 'react-router-dom'
import { HeaderWrapper, HeaderInner, HeaderLogo, HeaderTag } from './Header.styles'

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderLogo onClick={() => navigate('/')}>
          Posts<span>App</span>
        </HeaderLogo>
        <HeaderTag>JSONPlaceholder API</HeaderTag>
      </HeaderInner>
    </HeaderWrapper>
  )
}
