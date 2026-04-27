import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`

export const HomeSection = styled.section`
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
`

export const HomeContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`

export const HeroBlock = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  animation: ${fadeUp} 0.5s ease both;
`

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontDisplay};
  font-size: clamp(2rem, 5vw, 3.25rem);
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 480px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
`

export const ResultsMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  animation: ${fadeIn} 0.4s ease;
`

export const ResultsCount = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
  font-weight: 500;
`

export const ResultsAccent = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 700;
`

export const ClearButton = styled.button`
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

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxxl} 0;
  color: ${({ theme }) => theme.colors.textMuted};
  animation: ${fadeIn} 0.3s ease;
`

export const EmptyIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const EmptyText = styled.p`
  font-size: 1rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const EmptyHint = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.accent};
`
