import { GoogleLogo } from '@/assets/explore/stocks/google-logo'
import { IbmLogo } from '@/assets/explore/stocks/ibm-logo'
import { MicrosoftLogo } from '@/assets/explore/stocks/microsoft-logo'
import { NetflixLogo } from '@/assets/explore/stocks/netflix-logo'
import { PaypalLogo } from '@/assets/explore/stocks/paypal-logo'
import { AdidasLogo } from '@/assets/explore/stores/adidas-logo'
import { AppleLogo } from '@/assets/explore/stores/apple-logo'
import { LevisLogo } from '@/assets/explore/stores/levis-logo'
import { McDonaldsLogo } from '@/assets/explore/stores/mcdonalds-logo'
import { NikeLogo } from '@/assets/explore/stores/nike-logo'
import { PradaLogo } from '@/assets/explore/stores/prada-logo'

export default function Explore() {
  return (
    <main className="container mx-auto my-20 p-2">
      <h2 className="text-2xl font-medium md:text-3xl">Explore</h2>
      <div className="my-8">
        <h3 className="font-medium md:text-lg">
          Check the most bought stokes recently
        </h3>
        <ul className="mt-4 flex items-center justify-center space-x-4 md:space-x-8">
          <li className="cursor-pointer overflow-hidden rounded-full ring-2 ring-blue-400">
            <NetflixLogo className="size-12 md:size-20" />
          </li>
          <li className="cursor-pointer overflow-hidden rounded-full ring-2 ring-blue-400">
            <GoogleLogo className="size-12 md:size-20" />
          </li>
          <li className="cursor-pointer overflow-hidden rounded-full ring-2 ring-blue-400">
            <IbmLogo className="size-12 md:size-20" />
          </li>
          <li className="cursor-pointer overflow-hidden rounded-full ring-2 ring-blue-400">
            <PaypalLogo className="size-12 md:size-20" />
          </li>
          <li className="cursor-pointer overflow-hidden rounded-full ring-2 ring-blue-400">
            <MicrosoftLogo className="size-12 md:size-20" />
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-medium md:text-lg">
          Stores with discount using you credit card
        </h3>
        <div className="mt-4 space-y-4 rounded-md border">
          <ul className="my-4  grid grid-cols-3 gap-4">
            <li className="flex cursor-pointer flex-col items-center">
              <AdidasLogo className="size-12 md:size-20" />
              <p className="mt-2 font-medium text-red-600">20% Off</p>
            </li>
            <li className="flex cursor-pointer flex-col items-center">
              <AppleLogo className="size-12 md:size-20" />
              <p className="mt-2 font-medium text-red-600">5% Off</p>
            </li>
            <li className="flex cursor-pointer flex-col items-center">
              <LevisLogo className="size-12 md:size-20" />
              <p className="mt-2 font-medium text-red-600">15% Off</p>
            </li>
            <li className="flex cursor-pointer flex-col items-center">
              <McDonaldsLogo className="size-12 md:size-20" />
              <p className="mt-2 font-medium text-red-600">30% Off</p>
            </li>
            <li className="flex cursor-pointer flex-col items-center">
              <NikeLogo className="size-12 md:size-20" />
              <p className="mt-2 font-medium text-red-600">80% Off</p>
            </li>
            <li className="flex cursor-pointer flex-col items-center">
              <PradaLogo className="size-12 md:size-20" />
              <p className="mt-2 font-medium text-red-600">20% Off</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
