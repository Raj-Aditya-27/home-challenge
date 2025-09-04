"use client"

import { getWeatherIcon } from "../utils/weatherCodeMapper"

function DailyForecast({ data }) {
  const { daily } = data

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-white/10 shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-semibold text-white">7-Day Forecast</h3>
      </div>

      <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-7 lg:gap-3">
        {daily.map((day, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 lg:flex-col lg:items-center lg:justify-center lg:text-center lg:min-h-[140px]"
          >
            <div className="flex items-center  gap-4 flex-1 lg:flex-col lg:gap-2 lg:flex-none">
              <div className="lg:order-2">
                <span className="text-white font-medium min-w-[80px] lg:text-sm lg:min-w-0">{day.day}</span>
              </div>
              <div className="w-8 h-8 flex items-center justify-center lg:order-1 lg:mb-2">
                {getWeatherIcon(day.weathercode)}
              </div>
            </div>

            <div className="flex items-center gap-2 lg:flex-col lg:gap-1 lg:order-3">
              <span className="text-white font-semibold lg:text-lg">{day.max}°</span>
              <span className="text-white/60 lg:text-sm">/{day.min}°</span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
    </div>
  )
}

export default DailyForecast
