import Image from "next/image"

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <Image
        src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Secure financial operations"
        fill
        className="object-cover opacity-10"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80"></div>
    </div>
  )
}
