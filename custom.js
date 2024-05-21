const _0x10e77f = _0x1559;
(function (_0x4e4c45, _0x2d989a) {
  const _0x2d352a = _0x1559,
    _0x5cc6f4 = _0x4e4c45();
  while (!![]) {
    try {
      const _0x4e0f68 =
        parseInt(_0x2d352a(0x20d)) / 0x1 +
        -parseInt(_0x2d352a(0x211)) / 0x2 +
        (parseInt(_0x2d352a(0x1f4)) / 0x3) *
          (-parseInt(_0x2d352a(0x1f6)) / 0x4) +
        parseInt(_0x2d352a(0x210)) / 0x5 +
        parseInt(_0x2d352a(0x20c)) / 0x6 +
        -parseInt(_0x2d352a(0x1ef)) / 0x7 +
        -parseInt(_0x2d352a(0x1f9)) / 0x8;
      if (_0x4e0f68 === _0x2d989a) break;
      else _0x5cc6f4["push"](_0x5cc6f4["shift"]());
    } catch (_0x1a56f1) {
      _0x5cc6f4["push"](_0x5cc6f4["shift"]());
    }
  }
})(_0x1538, 0x6380a);
function _0x1559(_0x11705, _0x21b7c8) {
  const _0x1538d4 = _0x1538();
  return (
    (_0x1559 = function (_0x1559e6, _0x4f3d26) {
      _0x1559e6 = _0x1559e6 - 0x1ee;
      let _0x11c775 = _0x1538d4[_0x1559e6];
      return _0x11c775;
    }),
    _0x1559(_0x11705, _0x21b7c8)
  );
}
const api_key = "3b65f9d35ac8d71d03070db7f1cc51de";
let temp = document[_0x10e77f(0x1fd)](_0x10e77f(0x209)),
  place = document[_0x10e77f(0x1fd)](_0x10e77f(0x217)),
  wind = document["querySelector"](_0x10e77f(0x1fe)),
  des = document[_0x10e77f(0x1fd)](_0x10e77f(0x204)),
  iconImg = document["querySelector"](_0x10e77f(0x1f7));
function App() {
  const _0x454ac2 = _0x10e77f;
  navigator[_0x454ac2(0x215)][_0x454ac2(0x1fa)]((_0x1bb4b7) => {
    const _0x11591c = _0x454ac2;
    let _0x234fb7 = _0x1bb4b7[_0x11591c(0x1f2)][_0x11591c(0x218)],
      _0x2fbf12 = _0x1bb4b7[_0x11591c(0x1f2)][_0x11591c(0x208)];
    getWeatherByCoords(_0x234fb7, _0x2fbf12);
  });
}
function _0x1538() {
  const _0x2ebde9 = [
    "geolocation",
    "src",
    "#place",
    "latitude",
    "Gimpo-si",
    "1366946mZMnIx",
    "&appid=",
    "Seoul",
    "coords",
    "Network\x20response\x20was\x20not\x20ok",
    "44502dOyQmN",
    "&lon=",
    "88SQBwiv",
    "#icon",
    "description",
    "831128wEbERp",
    "getCurrentPosition",
    "Fetching\x20weather\x20data\x20failed:",
    "@2x.png",
    "querySelector",
    "#wind",
    "main",
    "error",
    "speed",
    "weather",
    "#cur",
    "#des",
    "temp",
    "json",
    "#seoul",
    "longitude",
    "#temp",
    "&units=metric&lang=kr",
    "icon",
    "1308702Rhsayo",
    "423936abWZTS",
    "https://api.openweathermap.org/data/2.5/weather?q=",
    "addEventListener",
    "3097760KcwZel",
    "457052oJfHqi",
    "http://openweathermap.org/img/wn/",
    "click",
    "https://api.openweathermap.org/data/2.5/weather?lat=",
  ];
  _0x1538 = function () {
    return _0x2ebde9;
  };
  return _0x1538();
}
const getWeatherByCoords = async (_0x1c3f34, _0x4501b4) => {
    const _0x57579c = _0x10e77f;
    try {
      let _0x4090df = await fetch(
        _0x57579c(0x214) +
          _0x1c3f34 +
          _0x57579c(0x1f5) +
          _0x4501b4 +
          _0x57579c(0x1f0) +
          api_key +
          _0x57579c(0x20a)
      );
      if (!_0x4090df["ok"]) throw new Error(_0x57579c(0x1f3));
      let _0x443e2b = await _0x4090df[_0x57579c(0x206)]();
      updateWeather(_0x443e2b);
    } catch (_0xb0323d) {
      console["error"](_0x57579c(0x1fb), _0xb0323d);
    }
  },
  getWeatherByCityName = async (_0x2d3b7d) => {
    const _0x547a76 = _0x10e77f;
    try {
      let _0x10c830 = await fetch(
        _0x547a76(0x20e) +
          _0x2d3b7d +
          _0x547a76(0x1f0) +
          api_key +
          _0x547a76(0x20a)
      );
      if (!_0x10c830["ok"]) throw new Error(_0x547a76(0x1f3));
      let _0x4f0846 = await _0x10c830["json"]();
      updateWeather(_0x4f0846);
    } catch (_0x3e3992) {
      console[_0x547a76(0x200)](_0x547a76(0x1fb), _0x3e3992);
    }
  },
  updateWeather = (_0xea3ff5) => {
    const _0x188d9e = _0x10e77f;
    (temp["textContent"] = _0xea3ff5[_0x188d9e(0x1ff)][_0x188d9e(0x205)]),
      (place["textContent"] = _0xea3ff5["name"]),
      (wind["textContent"] = _0xea3ff5["wind"][_0x188d9e(0x201)]),
      (des["textContent"] = _0xea3ff5[_0x188d9e(0x202)][0x0][_0x188d9e(0x1f8)]);
    let _0x19dcc8 = _0xea3ff5[_0x188d9e(0x202)][0x0][_0x188d9e(0x20b)],
      _0x3a4b0f = _0x188d9e(0x212) + _0x19dcc8 + _0x188d9e(0x1fc);
    iconImg["setAttribute"](_0x188d9e(0x216), _0x3a4b0f);
  };
document["querySelector"](_0x10e77f(0x203))[_0x10e77f(0x20f)](
  _0x10e77f(0x213),
  () => App()
),
  document[_0x10e77f(0x1fd)]("#gim")[_0x10e77f(0x20f)](_0x10e77f(0x213), () =>
    getWeatherByCityName(_0x10e77f(0x1ee))
  ),
  document[_0x10e77f(0x1fd)](_0x10e77f(0x207))[_0x10e77f(0x20f)](
    _0x10e77f(0x213),
    () => getWeatherByCityName(_0x10e77f(0x1f1))
  ),
  App();
