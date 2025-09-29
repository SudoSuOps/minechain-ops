import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MineChain.ai - Decentralized GPU Compute',
  description: 'Deploy high-performance compute nodes. Pay with USDC. Scale infinitely.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
