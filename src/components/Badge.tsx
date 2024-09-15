import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react"
import BronzeMedalIcon from "../assets/icons/BronzeMedalIcon"
import SilverMedalIcon from "../assets/icons/SilverMedalIcon"
import GoldMedalIcon from "./GoldMedalIcon"
import TrophyBlueLabelIcon from "../assets/icons/TrophyBlueLabelIcon"

const Badge = ({badge} : {badge: {title:string, type:string, description: string}}) => {
  
  const badgeIcon = (type: string) => {
    switch (type) {
      case 'bronce-medal':
        return <BronzeMedalIcon />
      case 'silver-medal':
        return <SilverMedalIcon />
      case 'gold-medal':
        return <GoldMedalIcon />
      case 'platinum-trophy':
        return <TrophyBlueLabelIcon />
        default:
          return null
    }
  }
  
  return (
    <article
        className="flex flex-col justify-center aspect-square items-center p-2 rounded-lg bg-white shadow-lg"
      >
        <Popover className="relative">
      <PopoverButton>
          {badgeIcon(badge.type)}
        </PopoverButton>
      <PopoverPanel anchor="top"
          transition
          className="rounded-xl text-sm/6 transition duration-100 p-3 ease-in-out [--anchor-gap:var(--spacing-5)] bg-opacity-80 data-[closed]:-translate-y-1 data-[closed]:opacity-0 bg-accent">
        <p className="text-sm text-black font-bold">
          {badge.title}
        </p>
        {badge.description}
      </PopoverPanel>
    </Popover>
    </article>
  )
}

export default Badge