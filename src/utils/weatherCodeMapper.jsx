// import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudDrizzle, Eye } from "lucide-react"

// export function getWeatherDescription(code: number): string {
//   if (code === 0) return "Clear sky"
//   if ([1, 2, 3].includes(code)) return "Partly cloudy"
//   if ([45, 48].includes(code)) return "Foggy conditions"
//   if ([51, 53, 55, 61, 63, 65].includes(code)) return "Rain showers"
//   if ([71, 73, 75].includes(code)) return "Snow fall"
//   if ([95, 96, 99].includes(code)) return "Thunderstorm"
//   return "Unknown conditions"
// }

// export function getWeatherIcon(code: number) {
//   const iconClass = "w-full h-full text-white drop-shadow-lg"

//   if (code === 0) return <Sun className={iconClass} />
//   if ([1, 2, 3].includes(code)) return <Cloud className={iconClass} />
//   if ([45, 48].includes(code)) return <Eye className={iconClass} />
//   if ([51, 53, 55].includes(code)) return <CloudDrizzle className={iconClass} />
//   if ([61, 63, 65, 80, 81, 82].includes(code)) return <CloudRain className={iconClass} />
//   if ([71, 73, 75, 77, 85, 86].includes(code)) return <CloudSnow className={iconClass} />
//   if ([95, 96, 99].includes(code)) return <CloudLightning className={iconClass} />
//   return <Cloud className={iconClass} />
// }


import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  CloudDrizzle, 
  Eye 
} from "lucide-react"

export function getWeatherDescription(code) {
  if (code === 0) return "Clear sky"
  if ([1, 2, 3].includes(code)) return "Partly cloudy"
  if ([45, 48].includes(code)) return "Foggy conditions"
  if ([51, 53, 55, 61, 63, 65].includes(code)) return "Rain showers"
  if ([71, 73, 75].includes(code)) return "Snow fall"
  if ([95, 96, 99].includes(code)) return "Thunderstorm"
  return "Unknown conditions"
}

export function getWeatherIcon(code) {
  const iconClass = "w-full h-full text-white drop-shadow-lg"

  if (code === 0) return <Sun className={iconClass} />
  if ([1, 2, 3].includes(code)) return <Cloud className={iconClass} />
  if ([45, 48].includes(code)) return <Eye className={iconClass} />
  if ([51, 53, 55].includes(code)) return <CloudDrizzle className={iconClass} />
  if ([61, 63, 65, 80, 81, 82].includes(code)) return <CloudRain className={iconClass} />
  if ([71, 73, 75, 77, 85, 86].includes(code)) return <CloudSnow className={iconClass} />
  if ([95, 96, 99].includes(code)) return <CloudLightning className={iconClass} />
  return <Cloud className={iconClass} />
}
