const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const api = {
  getPosts: async () => {
    const res = await fetch(`${BASE_URL}/posts`)
    if (!res.ok) throw new Error(`Erro ${res.status}: Não foi possível carregar os posts.`)
    return res.json()
  },

  getPost: async (id) => {
    const res = await fetch(`${BASE_URL}/posts/${id}`)
    if (!res.ok) throw new Error(`Erro ${res.status}: Post não encontrado.`)
    return res.json()
  },
}
