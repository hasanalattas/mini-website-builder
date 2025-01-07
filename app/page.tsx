'use client'

import { WebsiteBuilder } from '@/components/website-builder'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Mini Website Builder</h1>
      <WebsiteBuilder />
    </main>
  )
}

