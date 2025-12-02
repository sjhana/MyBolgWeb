// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-gray-900/70 backdrop-blur-md transition-all">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo 区域 */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              Hello 👋
            </Link>
          </div>

          {/* 导航链接区域 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-xl font-bold text-white">
                    Welcome to Aris' Universe!🛸
                </Link>
            </div>
          </div>
          <div className='rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-500'>
            <Link href = "/">
                guestbook
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}