export const metadata = {
  title: 'Sanity Studio',
  description: 'HE Architecture - Sanity Studio',
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
