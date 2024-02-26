import { NavbarItem } from './navbar-item'
import {
  HomeIcon,
  CreditCardIcon,
  ArrowUpDownIcon,
  GlobeIcon,
} from 'lucide-react'

export function BottomMenu() {
  return (
    <div className="fixed bottom-0 w-full border-t bg-background py-4 md:hidden">
      <div>
        <nav className="flex items-center justify-center gap-2">
          <NavbarItem to="/" title="Home" icon={<HomeIcon />} />
          <NavbarItem to="/card" title="Card" icon={<CreditCardIcon />} />
          <NavbarItem
            to="/payment"
            title="Pay"
            icon={<ArrowUpDownIcon className="rotate-45" />}
          />
          <NavbarItem to="/explore" title="Explore" icon={<GlobeIcon />} />
        </nav>
      </div>
    </div>
  )
}
