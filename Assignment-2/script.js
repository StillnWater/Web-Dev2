const API_KEY = "a6d33c42c42f7cd7aa93a115a6ac6fe0";

const consoleDiv = document.getElementById("consoleDiv");
const cityInput = document.getElementById("cityInput");


const pushLog = (text, category) => {
  const entry = document.createElement("div");
  entry.className = `log-line log-${category}`;
  entry.innerHTML = `<span>[${new Date().toLocaleTimeString().split(" ")[0]}]</span> ${text}`;
  consoleDiv.appendChild(entry);
  consoleDiv.scrollTop = consoleDiv.scrollHeight;
};

function clearConsole() {
  consoleDiv.innerHTML = "";
}

const loadCache = () => JSON.parse(localStorage.getItem("wthr_history")) || [];

const persistCity = (cityName) => {
  let cache = loadCache().filter(c => c.toLowerCase() !== cityName.toLowerCase());
  cache = [cityName, ...cache].slice(0, 8); // keep latest 8
  localStorage.setItem("wthr_history", JSON.stringify(cache));
};

function clearAllHistory() {
  localStorage.removeItem("wthr_history");
  rebuildHistoryUI();
}

function rebuildHistoryUI() {
  const container = document.getElementById("historyDiv");
  const clearBtn = document.getElementById("clearBtn");
  const cache = loadCache();
  container.innerHTML = "";

  if (cache.length === 0) {
    clearBtn.style.display = "none";
    return;
  }

  clearBtn.style.display = "inline-block";

  cache.forEach(city => {
    const tag = document.createElement("span");
    tag.className = "history-tag";
    tag.innerText = city;
    tag.onclick = () => runWeatherSearch(city); 
    container.appendChild(tag);
  });
}

async function runWeatherSearch(passedCity) {
  const target = passedCity || cityInput.value.trim();
  if (!target) return;

  consoleDiv.innerHTML = ""; 
  document.getElementById("weatherResult").innerHTML = `<p style="color:#aaa">Loading...</p>`;

  pushLog("SYNC: Execution starts", "sync");

  setTimeout(() => pushLog("EVENT: Macrotask (setTimeout) fired", "macro"), 0);
  Promise.resolve().then(() => pushLog("EVENT: Microtask (Promise.resolve) fired", "micro"));

  pushLog(`ASYNC: Fetching data for "${target}"...`, "async");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(target)}&units=metric&appid=${API_KEY}`;

  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error(res.status === 404 ? "City not found" : `API error ${res.status}`);

    const payload = await res.json();
    pushLog("SUCCESS: Response parsed", "data");

    document.getElementById("weatherResult").innerHTML = `
      <table class="weather-table">
        <tr><td>City</td>      <td style="color:#f97316;font-weight:bold">${payload.name}, ${payload.sys.country}</td></tr>
        <tr><td>Temp</td>      <td>${Math.round(payload.main.temp)} °C</td></tr>
        <tr><td>Weather</td>   <td>${payload.weather[0].description.toUpperCase()}</td></tr>
        <tr><td>Humidity</td>  <td>${payload.main.humidity}%</td></tr>
        <tr><td>Wind</td>      <td>${payload.wind.speed} m/s</td></tr>
      </table>
    `;

    persistCity(target);
    rebuildHistoryUI();

  } catch (err) {
    pushLog(`FAIL: ${err.message}`, "error");
    document.getElementById("weatherResult").innerHTML = `<p class="error-text">${err.message}</p>`;
  }

  pushLog("SYNC: Execution block complete", "sync");
}

document.getElementById("searchBtn").addEventListener("click", () => runWeatherSearch());
cityInput.addEventListener("keydown", e => { if (e.key === "Enter") runWeatherSearch(); });

window.onload = rebuildHistoryUI;