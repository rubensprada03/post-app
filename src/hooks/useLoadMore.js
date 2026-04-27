import { useState, useMemo } from 'react'

const PAGE_SIZE = 9

export function useLoadMore(items) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  )

  const hasMore = visibleCount < items.length

  function loadMore() {
    setVisibleCount((prev) => prev + PAGE_SIZE)
  }

  function reset() {
    setVisibleCount(PAGE_SIZE)
  }

  return { visibleItems, hasMore, loadMore, reset }
}
