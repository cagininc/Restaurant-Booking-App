// app/providers.tsx
'use client'
import 'bootstrap/dist/css/bootstrap.min.css';

import  ChakraProvider  from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}