import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import { ReactNode } from "react"

const Badge = ({badge} : {badge: {icon: ReactNode, description: string}}) => {
  return (
    <article
        className="flex flex-col justify-center aspect-square items-center p-2 rounded-lg bg-white shadow-lg"
      >
        <>
        <Popover className="relative">
      <PopoverButton>{badge.icon}</PopoverButton>
      <PopoverPanel anchor="top"
          transition
          className="rounded-xl text-sm/6 transition duration-100 p-3 ease-in-out [--anchor-gap:var(--spacing-5)] bg-opacity-80 data-[closed]:-translate-y-1 data-[closed]:opacity-0 bg-accent">
        {badge.description}
      </PopoverPanel>
    </Popover>

        </>
    </article>
  )
}

export default Badge