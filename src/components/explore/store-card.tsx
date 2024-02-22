import Image from 'next/image'

interface StoreCardProps {
  image: string
  alt: string
  name: string
  discount: string
  description: string
}

export function StoreCard({
  alt,
  description,
  discount,
  image,
  name,
}: StoreCardProps) {
  return (
    <div className="group relative w-fit cursor-pointer">
      <div className="overflow-hidden rounded-md">
        <Image
          className="size-64 object-cover blur-[2px] transition duration-500 group-hover:scale-125"
          width={1920}
          height={1080}
          src={image}
          alt={alt}
        />
      </div>
      <div className="absolute bottom-0 w-full select-none space-y-2 pb-4 text-center text-white">
        <h3 className="text-3xl font-semibold">{name}</h3>
        <div>
          <span className="font-medium text-red-400 line-through">
            {discount}% OFF
          </span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
