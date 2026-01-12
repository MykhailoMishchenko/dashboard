export type User = {
  id: number
  firstName: string
  lastName: string
  email: string
  image?: string
  username?: string
}

export type UsersResponse = {
  users: User[]
  total: number
  skip: number
  limit: number
}

