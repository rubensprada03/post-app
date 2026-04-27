import styled, { keyframes } from 'styled-components'

const spin  = keyframes`to { transform: rotate(360deg); }`
const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  animation: ${fadeIn} 0.3s ease;
`

export const LoaderRing = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-top-color: ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

export const LoaderText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 0.05em;
`
