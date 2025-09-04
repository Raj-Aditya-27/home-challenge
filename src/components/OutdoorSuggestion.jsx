function OutdoorSuggestion({ data }) {
  const { current } = data;

  let suggestion = "Great time to go outside!";
  if (current.weathercode >= 50 && current.weathercode <= 67) {
    suggestion = "You can go out, but take an umbrella 🌂";
  } else if (current.weathercode >= 80) {
    suggestion = "Better to stay home, heavy rain expected 🌧️";
  }

  return (
    <div className="bg-blue-800 rounded-2xl p-4 shadow-lg text-center">
      <p className="font-semibold">Want to go outside?</p>
      <p className="mt-2 text-green-300">{suggestion}</p>
    </div>
  );
}

export default OutdoorSuggestion;
