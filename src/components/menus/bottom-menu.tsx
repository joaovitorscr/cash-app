import { MenuItem } from './menu-item'
import {
  HomeIcon,
  CreditCardIcon,
  ArrowUpDownIcon,
  HandHeartIcon,
  GlobeIcon,
} from 'lucide-react'

export function BottomMenu() {
  return (
    <footer className="container fixed bottom-0 mx-auto border-t py-4">
      <nav className="flex items-center justify-center space-x-8">
        <MenuItem title="Home" icon={<HomeIcon />} />
        <MenuItem title="Card" icon={<CreditCardIcon />} />
        <MenuItem
          title="Pay"
          icon={<ArrowUpDownIcon className="rotate-45" />}
        />
        <MenuItem title="Invite" icon={<HandHeartIcon />} />
        <MenuItem title="Explore" icon={<GlobeIcon />} />
      </nav>
    </footer>
  )
}
