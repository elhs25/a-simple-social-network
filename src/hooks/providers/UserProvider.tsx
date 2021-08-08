import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import users from '../../assets/users.json'

export const defaultUser: UserHook = {
  user: { id: 0, name: '', profilePhoto: '' },
  setUser: () => {},
}

export const UserContext = createContext(defaultUser)

export default function UserProvider({ children }: any) {
  const [user, setUser] = useState({} as User)
  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  )

  useEffect(() => {
    const selectedUser = Math.round(Math.random() * (users.length - 1))
    setUser(users[selectedUser])
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function withUserProvider(Component: any) {
  return (props: any) => {
    const { user, setUser } = useContext(UserContext)

    const _setUser = (user: UserHook) => {
      setUser(user)
    }

    return <Component {...props} user={user} setUser={_setUser} />
  }
}
