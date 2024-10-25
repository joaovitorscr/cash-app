import {
  ArchiveRestoreIcon,
  BanknoteIcon,
  BriefcaseBusinessIcon,
} from 'lucide-react'
import ProductCard from '../components/product-card'

export function ProductsSection() {
  return (
    <section id="#products">
      <div className="space-y-4">
        <h2 className="text-center text-4xl md:text-left">
          Our <span className="text-primary">Products</span>
        </h2>
        <p className="text-center text-lg font-light md:text-left">
          Discover a range of comprehensive and customizable banking products at
          YourBank, designed to suit your unique financial needs and aspirations
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-3">
        <ProductCard.Root>
          <div className="w-min rounded-full bg-[radial-gradient(circle,rgba(34,197,94,1)_57%,rgba(34,197,71,1)_78%)] p-2">
            <BriefcaseBusinessIcon />
          </div>
          <ProductCard.Title>Checking Accounts</ProductCard.Title>
          <ProductCard.Description>
            Enjoy easy and convenient access to your funds with our range of
            checking account options. Benefit from features such as online and
            mobile banking, debit cards, and free ATM access.
          </ProductCard.Description>
        </ProductCard.Root>
        <ProductCard.Root>
          <div className="w-min rounded-full bg-[radial-gradient(circle,rgba(34,197,94,1)_57%,rgba(34,197,71,1)_78%)] p-2">
            <ArchiveRestoreIcon />
          </div>
          <ProductCard.Title>Savings Accounts</ProductCard.Title>
          <ProductCard.Description>
            Build your savings with our competitive interest rates and flexible
            savings account options. Whether you&apos;re saving for a specific
            goal or want to grow your wealth over time, we have the right
            account for you.
          </ProductCard.Description>
        </ProductCard.Root>
        <ProductCard.Root>
          <div className="w-min rounded-full bg-[radial-gradient(circle,rgba(34,197,94,1)_57%,rgba(34,197,71,1)_78%)] p-2">
            <BanknoteIcon />
          </div>
          <ProductCard.Title>Loans and Mortgages</ProductCard.Title>
          <ProductCard.Description>
            Realize your dreams with our flexible loan and mortgage options.
            From personal loans to home mortgages, our experienced loan officers
            are here to guide you through the application process and help you
            secure the funds you need.
          </ProductCard.Description>
        </ProductCard.Root>
      </div>
    </section>
  )
}
