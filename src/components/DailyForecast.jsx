import { getWeatherIcon } from "../utils/weatherCodeMapper"
import { Calendar } from "lucide-react"

function DailyForecast({ data }) {
  const { daily } = data

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-5 h-5 text-white/80" />
        <h3 className="text-lg font-semibold text-white">7-Day Forecast</h3>
      </div>

      <div className="space-y-3">
        {daily.map((day, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
          >
            <div className="flex items-center gap-4 flex-1">
              <span className="text-white font-medium min-w-[80px]">{day.day}</span>
              <div className="w-8 h-8 flex items-center justify-center">{getWeatherIcon(day.weathercode)}</div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">{day.max}°</span>
              <span className="text-white/60">/{day.min}°</span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
    </div>
  )
}

export default DailyForecast
