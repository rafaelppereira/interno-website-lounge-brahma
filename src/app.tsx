import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { queryClient } from './@config/lib/react-query'
import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Lounge Brahma - Mais um do bando de loucos" />
      <ThemeProvider defaultTheme="light" storageKey="lounge-brahma">
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />

          <Toaster richColors position="bottom-left" />
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}
