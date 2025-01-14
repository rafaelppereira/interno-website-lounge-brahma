import { Outlet } from 'react-router-dom'

import { Header } from '../components/application/header'

export function DefaultLayout() {
  return (
    <div>
      <Header />

      <div className="mt-[8.5rem] h-[calc(100vh-8.5rem)]">
        <Outlet />
      </div>
    </div>
  )
}
