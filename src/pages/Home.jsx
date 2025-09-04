import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import HourlyForecast from "../components/HourlyForecast";
import DailyForecast from "../components/DailyForecast";
import OutdoorSuggestion from "../components/OutdoorSuggestion";
import { useWeather } from "../hooks/useWeather";

function Home() {
  const { weather, loading, error, fetchWeather } = useWeather();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a1930] via-[#0f2745] to-[#122b50] text-white">
      <div className="max-w-lg w-full p-4">
        <SearchBar onSearch={fetchWeather} />

        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center mt-4 text-red-400">{error}</p>}

        {weather && (
          <div className="space-y-6">
            <CurrentWeather data={weather} />
            <HourlyForecast data={weather} />
            <OutdoorSuggestion data={weather} />
            <DailyForecast data={weather} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
