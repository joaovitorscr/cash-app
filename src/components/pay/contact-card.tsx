interface ContactCard {
  name: string
  image: string
}

export function ContactCard({ image, name }: ContactCard) {
  return (
    <button className="group flex items-center space-x-2 rounded-md outline-none focus-visible:ring focus-visible:ring-ring">
      <div className="flex size-8 items-center justify-center rounded-full bg-secondary transition duration-300 group-hover:bg-secondary-foreground">
        <p className="group-hover:text-accent">{image}</p>
      </div>
      <h3>{name}</h3>
    </button>
  )
}
