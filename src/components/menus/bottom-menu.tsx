import { MenuItem } from './botton-menu-item'
import {
  HomeIcon,
  CreditCardIcon,
  ArrowUpDownIcon,
  HandHeartIcon,
  GlobeIcon,
} from 'lucide-react'

export function BottomMenu() {
  return (
    <div className="fixed bottom-0 w-full border-t bg-white py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-center gap-2">
          <MenuItem to="/" title="Home" icon={<HomeIcon />} />
          <MenuItem to="/card" title="Card" icon={<CreditCardIcon />} />
          <MenuItem
            to="/"
            title="Pay"
            icon={<ArrowUpDownIcon className="rotate-45" />}
          />
          <MenuItem to="/" title="Invite" icon={<HandHeartIcon />} />
          <MenuItem to="/" title="Explore" icon={<GlobeIcon />} />
        </nav>
      </div>
    </div>
  )
}
