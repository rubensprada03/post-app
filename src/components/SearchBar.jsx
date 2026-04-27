import { SearchWrapper, SearchIcon, SearchInput, ClearButton } from './SearchBar.styles'

export function SearchBar({ value, onChange }) {
  return (
    <SearchWrapper>
      <SearchIcon>🔍</SearchIcon>
      <SearchInput
        type="text"
        placeholder="Buscar posts por título..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <ClearButton onClick={() => onChange('')} title="Limpar busca">
          ✕
        </ClearButton>
      )}
    </SearchWrapper>
  )
}
