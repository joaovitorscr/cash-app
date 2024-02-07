import * as Dialog from '@radix-ui/react-dialog'
import {
  MenuIcon,
  Settings,
  UserIcon,
  ShieldCheckIcon,
  LogOutIcon,
} from 'lucide-react'
import { Button } from '../button'

export function SideMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <MenuIcon className="stroke-blue-600" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed left-0 top-0 z-10 h-screen w-full bg-black/85 after:transition after:ease-in-out">
          <Dialog.Content className="fixed left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 after:transition after:ease-in-out">
            <div className="flex flex-col items-center">
              <Button
                className="flex w-full items-center justify-center"
                variant="sideMenu"
              >
                <UserIcon className="mr-2" /> Account
              </Button>
              <Button
                className="flex w-full items-center justify-center"
                variant="sideMenu"
              >
                <ShieldCheckIcon className="mr-2" /> Personal Info
              </Button>
              <Button
                className="flex w-full items-center justify-center"
                variant="sideMenu"
              >
                <Settings className="mr-2" /> Settings
              </Button>
              <Button
                className="flex w-full items-center justify-center"
                variant="sideMenu"
              >
                <LogOutIcon className="mr-2" /> Log out
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
