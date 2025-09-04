"use client"

import { getWeatherIcon } from "../utils/weatherCodeMapper"
import { Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

function HourlyForecast({ data }) {
  const { hourly } = data
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = 240 // Width of 3 cards
      const newScrollLeft = container.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      container.scrollTo({ left: newScrollLeft, behavior: "smooth" })

      // Update button states
      setTimeout(() => {
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
      }, 300)
    }
  }

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-white/80" />
          <h3 className="text-lg font-semibold text-white">24-Hour Forecast</h3>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
        onScroll={(e) => {
          const container = e.target
          setCanScrollLeft(container.scrollLeft > 0)
          setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
        }}
      >
        {hourly.map((hour, i) => (
          <div
            key={i}
            className="flex flex-col items-center min-w-[80px] p-3 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 flex-shrink-0"
          >
            <p className="text-sm text-white/70 font-medium mb-2">
              {new Date(hour.time).toLocaleTimeString("en-US", { hour: "numeric", hour12: true })}
            </p>
            <div className="w-8 h-8 mb-2 flex items-center justify-center">{getWeatherIcon(hour.weathercode)}</div>
            <p className="text-lg font-semibold text-white">{Math.round(hour.temperature)}°</p>
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>
    </div>
  )
}

export default HourlyForecast
