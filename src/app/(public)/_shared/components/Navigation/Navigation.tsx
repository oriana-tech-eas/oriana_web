import Image from "next/image"

const Navigation = ({ brandImage, subMenu }: { brandImage: string, subMenu?: string[] }) => {
  return (
    <nav className="py-3 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between z-40 relative">
      <a href="/market" className="flex items-center gap-2">
        <Image src={brandImage} alt="Printit logo" width={130} height={32} />
      </a>
      {subMenu && (
        <div className="hidden md:flex gap-4">
          {subMenu.map((item) => (
            <a key={`nav-${item.toLowerCase()}`} href={`/${item.toLowerCase()}`} className="text-gray-700 hover:text-gray-900">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navigation