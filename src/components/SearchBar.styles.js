import styled from 'styled-components'

export const SearchWrapper = styled.div`
  position: relative;
  max-width: 560px;
  margin: 0 auto;
`

export const SearchIcon = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing.lg};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.textMuted};
  pointer-events: none;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.md} 48px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ theme }) => theme.colors.surface};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: inherit;
  outline: none;
  transition: all ${({ theme }) => theme.transitions.normal};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    box-shadow: 0 0 0 4px rgba(201, 169, 110, 0.15);
  }
`

export const ClearButton = styled.button`
  position: absolute;
  right: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.border};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.75rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`
