import Image from 'next/image'

export function Footer() {
  return (
    <footer className="h-20 border bg-card py-4 shadow-t-xl">
      <div className="container flex items-center">
        <div className="mx-auto">
          <p>&copy; {new Date().getFullYear()} Cash App </p>
        </div>
        <div className="flex justify-end">
          <Image
            className="stroke-primary "
            width={32}
            height={32}
            src="assets/logo.svg"
            alt="logo"
          />
        </div>
      </div>
    </footer>
  )
}
