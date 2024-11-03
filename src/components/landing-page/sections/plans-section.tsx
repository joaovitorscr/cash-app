import { OnScrollReveal } from '@/components/wrappers/on-scroll-reveal'
import { IPlanCard, PlanCard } from '../components/plan-card'

export function PlansSection() {
  const plans: IPlanCard[] = [
    {
      title: 'Starter',
      description: 'Best for new users just wanting a peek of our services.',
      price: '10',
      perks: [
        'Access from anywhere',
        'One account several currencies',
        '24/7 Customer Support',
        'Dedicated management dashboard',
      ],
    },
    {
      title: 'Basic',
      description:
        'Basic features for people that wants a premium customer service.',
      price: '15',
      perks: [
        'Financial Advising',
        'Special Discounts',
        'Cashback in every purchase',
        'Airport perks',
      ],
    },
    {
      title: 'Advanced',
      description: `If you need a advanced insight in your finances that&apos;s the plan for you.`,
      price: '30',
      perks: [
        'Advanced Dashboard',
        'Special Investment Opportunities',
        'Car Insurance',
        'Referee Program',
      ],
    },
    {
      title: 'Enterprise',
      description: 'Our custom service for any type of business or company.',
      actionText: 'Talk to a specialist',
      perks: [
        'Custom management',
        'Dedicated support',
        'Multiple access accounts',
        'Full customization of account permissions and access',
      ],
    },
  ]

  return (
    <section id="plans" className="relative h-dvh">
      <div className="container space-y-4 pt-16 text-center md:text-left">
        <OnScrollReveal>
          <h2 className="text-4xl">
            Our <span className="text-primary">Plans</span>
          </h2>
        </OnScrollReveal>
        <OnScrollReveal>
          <p className="text-lg font-light">
            Find the right plan for you, doesn&apos;t matter if you just wanna
            try it out or want to migrate your whole corporative financial
            structure.
          </p>
        </OnScrollReveal>
      </div>
      <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="mt-10 grid grid-cols-4 gap-16">
          {plans.map(
            (
              { title, description, price, actionText = 'Sign Up', perks },
              index,
            ) => (
              <OnScrollReveal key={index}>
                <PlanCard
                  title={title}
                  description={description}
                  price={price}
                  actionText={actionText}
                  perks={perks}
                />
              </OnScrollReveal>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
