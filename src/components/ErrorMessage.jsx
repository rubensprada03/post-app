import {
  ErrorWrapper,
  ErrorIcon,
  ErrorTitle,
  ErrorText,
  ErrorButton,
} from './ErrorMessage.styles'

export function ErrorMessage({ message, onRetry }) {
  return (
    <ErrorWrapper>
      <ErrorIcon>⚠️</ErrorIcon>
      <ErrorTitle>Algo deu errado</ErrorTitle>
      <ErrorText>{message || 'Ocorreu um erro inesperado.'}</ErrorText>
      {onRetry && (
        <ErrorButton onClick={onRetry}>Tentar novamente</ErrorButton>
      )}
    </ErrorWrapper>
  )
}
