import SearchBar from "../components/SearchBar"
import CurrentWeather from "../components/CurrentWeather"
import HourlyForecast from "../components/HourlyForecast"
import DailyForecast from "../components/DailyForecast"
import OutdoorSuggestion from "../components/OutdoorSuggestion"
import { useWeather } from "../hooks/useWeather"

function Home() {
  const { weather, loading, error, fetchWeather } = useWeather()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
              Weather App
            </h1>
            <p className="text-white/60">Get accurate weather forecasts</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-full max-w-md">
              <SearchBar onSearch={fetchWeather} />
            </div>
          </div>

          {loading && (
            <div className="flex items-center justify-center p-8">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span className="ml-3 text-white/80">Loading weather data...</span>
            </div>
          )}

          {error && (
            <div className="flex justify-center">
              <div className="w-full max-w-md p-4 rounded-2xl bg-red-500/20 border border-red-500/30 backdrop-blur-sm">
                <p className="text-red-200 text-center">{error}</p>
              </div>
            </div>
          )}

          {weather && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="lg:col-span-1">
                <CurrentWeather data={weather} />
              </div>
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <HourlyForecast data={weather} />
                  <OutdoorSuggestion data={weather} />
                </div>
              </div>
              <div className="lg:col-span-2 ">
                <DailyForecast data={weather} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
