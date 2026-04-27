import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.errorBg};
  border: 1px solid rgba(217, 79, 79, 0.2);
  border-radius: ${({ theme }) => theme.radii.lg};
  text-align: center;
  animation: ${fadeUp} 0.3s ease;
`

export const ErrorIcon = styled.div`
  font-size: 2.5rem;
  line-height: 1;
`

export const ErrorTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontDisplay};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.error};
`

export const ErrorText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 400px;
`

export const ErrorButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  border: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  background: transparent;
  transition: all ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`
