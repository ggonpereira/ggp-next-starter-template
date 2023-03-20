import { RootLayoutProps } from './interfaces'

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
