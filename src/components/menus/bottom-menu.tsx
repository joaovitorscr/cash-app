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
    <footer className="fixed bottom-0 w-full border-t bg-white py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-center gap-2">
          <MenuItem title="Home" icon={<HomeIcon />} />
          <MenuItem title="Card" icon={<CreditCardIcon />} />
          <MenuItem
            title="Pay"
            icon={<ArrowUpDownIcon className="rotate-45" />}
          />
          <MenuItem title="Invite" icon={<HandHeartIcon />} />
          <MenuItem title="Explore" icon={<GlobeIcon />} />
        </nav>
      </div>
    </footer>
  )
}
