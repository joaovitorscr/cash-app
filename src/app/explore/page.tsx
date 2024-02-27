import { GoogleLogo } from '@/assets/explore/stocks/google-logo'
import { IbmLogo } from '@/assets/explore/stocks/ibm-logo'
import { MicrosoftLogo } from '@/assets/explore/stocks/microsoft-logo'
import { NetflixLogo } from '@/assets/explore/stocks/netflix-logo'
import { PaypalLogo } from '@/assets/explore/stocks/paypal-logo'
import { StoreCard } from '@/components/explore/store-card'
import data from '../../../data.json'

export default function Explore() {
  const stores = data.stores

  return (
    <main className="container mx-auto p-2">
      <h2 className="text-2xl font-medium md:text-3xl">Explore</h2>
      <div className="my-8">
        <h3 className="font-medium md:text-lg">
          Check the most bought stokes recently
        </h3>
        <ul className="mt-4 flex items-center justify-center space-x-4 md:space-x-8">
          <li className="cursor-pointer overflow-hidden rounded-full ring-2 ring-ring transition duration-300 hover:scale-125">
            <NetflixLogo className="size-12 md:size-20" />
          </li>
          <li className="cursor-pointer overflow-hidden rounded-full ring-2 ring-ring transition duration-300 hover:scale-125">
            <GoogleLogo className="size-12 md:size-20" />
          </li>
          <li className="cursor-pointer overflow-hidden rounded-full ring-2 ring-ring transition duration-300 hover:scale-125">
            <IbmLogo className="size-12 md:size-20" />
          </li>
          <li className="cursor-pointer overflow-hidden rounded-full ring-2 ring-ring transition duration-300 hover:scale-125">
            <PaypalLogo className="size-12 md:size-20" />
          </li>
          <li className="cursor-pointer overflow-hidden rounded-full ring-2 ring-ring transition duration-300 hover:scale-125">
            <MicrosoftLogo className="size-12 md:size-20" />
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium md:text-lg">
          Stores with discount using you credit card
        </h3>
        <div className="mt-4 flex justify-center rounded-md border">
          <div className="mt-4 grid grid-cols-1 gap-8 py-8 md:grid-cols-3 lg:grid-cols-4">
            {stores.map(({ alt, description, discount, id, image, name }) => (
              <StoreCard
                key={id}
                image={image}
                name={name}
                discount={discount}
                description={description}
                alt={alt}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
