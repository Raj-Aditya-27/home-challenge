"use client"

import { useState } from "react"
import { Search, MapPin } from "lucide-react"

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city)
      setCity("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative mb-8">
      <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-xl">
        <div className="flex items-center">
          <div className="pl-4 pr-2">
            <MapPin className="w-5 h-5 text-white/60" />
          </div>
          <input
            type="text"
            placeholder="Search for any city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="flex-1 p-4 bg-transparent text-white placeholder-white/60 focus:outline-none text-lg"
          />
          <button
            type="submit"
            className="m-2 p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
