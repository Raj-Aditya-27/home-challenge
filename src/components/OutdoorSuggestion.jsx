function OutdoorSuggestion({ data }) {
  const { current } = data

  let suggestion = "Perfect weather for outdoor activities! ☀️"
  let bgGradient = "from-emerald-500/20 to-teal-500/20"
  let textColor = "text-emerald-100"
  let iconBg = "bg-emerald-500/20"

  if (current.weathercode >= 50 && current.weathercode <= 67) {
    suggestion = "Light rain expected - grab an umbrella! 🌂"
    bgGradient = "from-amber-500/20 to-orange-500/20"
    textColor = "text-amber-100"
    iconBg = "bg-amber-500/20"
  } else if (current.weathercode >= 80) {
    suggestion = "Heavy rain ahead - cozy indoor day! 🏠"
    bgGradient = "from-blue-500/20 to-indigo-500/20"
    textColor = "text-blue-100"
    iconBg = "bg-blue-500/20"
  }

  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-6 backdrop-blur-sm bg-gradient-to-br ${bgGradient} border border-white/10 shadow-2xl`}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 rounded-full ${iconBg} flex items-center justify-center`}>
            <span className="text-lg">🚶‍♂️</span>
          </div>
          <h3 className="text-lg font-semibold text-white">Outdoor Activity</h3>
        </div>
        <p className={`text-base font-medium ${textColor} leading-relaxed`}>{suggestion}</p>
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
    </div>
  )
}

export default OutdoorSuggestion
