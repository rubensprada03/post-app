import { LoaderWrapper, LoaderRing, LoaderText } from './Loader.styles'

export function Loader({ text = 'Carregando...' }) {
  return (
    <LoaderWrapper>
      <LoaderRing />
      <LoaderText>{text}</LoaderText>
    </LoaderWrapper>
  )
}
