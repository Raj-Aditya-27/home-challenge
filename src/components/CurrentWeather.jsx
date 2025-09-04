import { getWeatherDescription, getWeatherIcon } from "../utils/weatherCodeMapper"
import { MapPin, Wind, Thermometer } from "lucide-react"

function CurrentWeather({ data }) {
  const { current, city } = data

  return (
    <div className="relative overflow-hidden rounded-3xl p-8 backdrop-blur-sm bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-white/20 shadow-2xl">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-white/80" />
          <h2 className="text-2xl font-bold text-white">{city}</h2>
        </div>
        <p className="text-sm text-white/70 mb-6">{current.time}</p>

        {/* Main weather display */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-7xl font-light text-white">{current.temperature}</span>
              <span className="text-3xl font-light text-white/80">°C</span>
            </div>
            <p className="text-lg text-white/90 font-medium mb-1">{getWeatherDescription(current.weathercode)}</p>
            <div className="flex items-center gap-1 text-white/70">
              <Thermometer className="w-4 h-4" />
              <span className="text-sm">Feels like {current.temperature}°C</span>
            </div>
          </div>

          <div className="w-24 h-24 flex items-center justify-center">{getWeatherIcon(current.weathercode)}</div>
        </div>

        {/* Weather details */}
        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Wind className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/70 uppercase tracking-wide">Wind Speed</p>
              <p className="text-lg font-semibold text-white">{current.windspeed} km/h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
