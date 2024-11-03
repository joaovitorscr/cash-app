import { Button } from '@/components/ui/button'
import Image from 'next/image'
import TransactionCard from '../components/transaction-card'
import { OnScrollReveal } from '@/components/wrappers/on-scroll-reveal'

export function HeroSection() {
  return (
    <section id="hero" className="relative h-dvh">
      <div className="container absolute left-1/2 top-1/2 grid -translate-x-1/2 -translate-y-1/2 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[37rem_1fr] lg:gap-40">
        <div className="space-y-4 text-center leading-6 md:text-left">
          <OnScrollReveal>
            <h2 className="text-4xl leading-10">
              Welcome to Cash App Empowering Your{' '}
              <span className="text-primary">Financial Journey</span>
            </h2>
          </OnScrollReveal>
          <OnScrollReveal>
            <p className="text-lg font-light">
              At Cash App, our mission is to provide comprehensive banking
              solutions that empower individuals and businesses to achieve their
              financial goals. We are committed to delivering personalized and
              innovative services that prioritize our customers&apos; needs.
            </p>
          </OnScrollReveal>
          <OnScrollReveal>
            <Button className="w-full">Open Account</Button>
          </OnScrollReveal>
        </div>
        <OnScrollReveal>
          <div className="h-fit space-y-8 rounded-lg border bg-card p-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Your Transactions</h2>
              <div className="space-y-2">
                <TransactionCard />
                <TransactionCard />
                <TransactionCard />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Money Exchange</h2>
              <div className="grid grid-cols-2 rounded-md border bg-card">
                <div className="border-b border-r p-4">
                  <div className="flex items-center gap-2">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/flags/brazil.svg"
                      alt="Brazil"
                      className="aspect-square rounded-full object-cover"
                    />
                    <p>BRL</p>
                  </div>
                  <p className="mt-2 font-light">Brazilian Real</p>
                </div>
                <div className="border-b p-4">
                  <div className="flex items-center gap-2">
                    <Image
                      className="aspect-square rounded-full object-cover"
                      width={32}
                      height={32}
                      src="/assets/flags/usa.svg"
                      alt="USA"
                    />
                    <p>USD</p>
                  </div>
                  <p className="mt-2 font-light">United States Dollar</p>
                </div>
                <div className="border-r p-4">5.00</div>
                <div className="p-4">1.00</div>
              </div>
              <Button className="w-full">Exchange</Button>
            </div>
          </div>
        </OnScrollReveal>
      </div>
    </section>
  )
}
