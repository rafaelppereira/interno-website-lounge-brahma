/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../pages/(home)/page'

const router: any = createBrowserRouter([
  {
    path: '',
    element: <HomePage />,
  },
])

export { router }
