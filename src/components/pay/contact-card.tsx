interface ContactCard {
  name: string
  image: string
}

export function ContactCard({ image, name }: ContactCard) {
  return (
    <button className="group flex items-center space-x-2 outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-blue-400">
      <div className="flex size-8 items-center justify-center rounded-full bg-blue-200 group-hover:bg-blue-100">
        <p className="group-hover:text-zinc-400">{image}</p>
      </div>
      <h3 className="group-hover:text-zinc-400">{name}</h3>
    </button>
  )
}
