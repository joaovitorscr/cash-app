import {
  ArchiveRestoreIcon,
  BanknoteIcon,
  BriefcaseBusinessIcon,
} from 'lucide-react'
import ProductCard from '../components/product-card'
import { OnScrollReveal } from '@/components/wrappers/on-scroll-reveal'

export function ProductsSection() {
  return (
    <section id="products" className="relative h-dvh">
      <div className="container space-y-4 pt-16 text-center md:text-right">
        <OnScrollReveal>
          <h2 className="text-4xl">
            Our <span className="text-primary">Products</span>
          </h2>
        </OnScrollReveal>
        <OnScrollReveal>
          <p className="text-lg font-light">
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your unique financial needs and
            aspirations
          </p>
        </OnScrollReveal>
      </div>
      <div className="container absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center rounded-lg py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <OnScrollReveal>
            <ProductCard.Root>
              <div className="w-min rounded-full bg-[radial-gradient(circle,rgba(34,197,94,1)_57%,rgba(34,197,71,1)_78%)] p-2">
                <BriefcaseBusinessIcon />
              </div>
              <ProductCard.Title>Checking Accounts</ProductCard.Title>
              <ProductCard.Description>
                Enjoy easy and convenient access to your funds with our range of
                checking account options.
              </ProductCard.Description>
            </ProductCard.Root>
          </OnScrollReveal>
          <OnScrollReveal>
            <ProductCard.Root>
              <div className="w-min rounded-full bg-[radial-gradient(circle,rgba(34,197,94,1)_57%,rgba(34,197,71,1)_78%)] p-2">
                <ArchiveRestoreIcon />
              </div>
              <ProductCard.Title>Savings Accounts</ProductCard.Title>
              <ProductCard.Description>
                Build your savings with our competitive interest rates and
                flexible savings account options.
              </ProductCard.Description>
            </ProductCard.Root>
          </OnScrollReveal>
          <OnScrollReveal>
            <ProductCard.Root>
              <div className="w-min rounded-full bg-[radial-gradient(circle,rgba(34,197,94,1)_57%,rgba(34,197,71,1)_78%)] p-2">
                <BanknoteIcon />
              </div>
              <ProductCard.Title>Loans and Mortgages</ProductCard.Title>
              <ProductCard.Description>
                Realize your dreams with our flexible loan and mortgage options.
                From personal loans to home mortgages.
              </ProductCard.Description>
            </ProductCard.Root>
          </OnScrollReveal>
          <OnScrollReveal>
            <ProductCard.Root>
              <div className="w-min rounded-full bg-[radial-gradient(circle,rgba(34,197,94,1)_57%,rgba(34,197,71,1)_78%)] p-2">
                <BanknoteIcon />
              </div>
              <ProductCard.Title>Loans and Mortgages</ProductCard.Title>
              <ProductCard.Description>
                Realize your dreams with our flexible loan and mortgage options.
                From personal loans to home mortgages.
              </ProductCard.Description>
            </ProductCard.Root>
          </OnScrollReveal>
        </div>
      </div>
    </section>
  )
}
