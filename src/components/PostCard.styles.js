import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`

export const CardWrapper = styled.article`
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.slow};
  animation: ${fadeUp} 0.4s ease both;
  animation-delay: ${({ $index }) => Math.min($index * 40, 600)}ms;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ theme }) => theme.colors.accent};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.accentLight};

    &::before {
      transform: scaleY(1);
    }
  }
`

export const CardNumber = styled.span`
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

export const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontDisplay};
  font-size: 1.1rem;
  line-height: 1.35;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-transform: capitalize;
`

export const CardExcerpt = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
`

export const CardArrow = styled.span`
  position: absolute;
  right: ${({ theme }) => theme.spacing.lg};
  top: 50%;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(-50%) translateX(4px);
  transition: all ${({ theme }) => theme.transitions.normal};

  ${CardWrapper}:hover & {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
`
