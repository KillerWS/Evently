
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex h-screen flex-col">
        <Header/>
        <body className='flex-1'>{children}</body>
        <Footer/>
        </div>
    )
  }