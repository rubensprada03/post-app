import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`

export const HeaderInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderLogo = styled.div`
  font-family: ${({ theme }) => theme.typography.fontDisplay};
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transitions.fast};

  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    opacity: 0.85;
  }
`

export const HeaderTag = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
`
