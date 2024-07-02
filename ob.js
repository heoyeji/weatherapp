const _0x3627a1 = _0x1df1;
(function (_0x63dbd1, _0x53bd73) {
  const _0x3ecf2a = _0x1df1,
    _0x3c2932 = _0x63dbd1();
  while (!![]) {
    try {
      const _0x41c4f1 =
        (-parseInt(_0x3ecf2a(0x1e6)) / 0x1) *
          (parseInt(_0x3ecf2a(0x1d6)) / 0x2) +
        -parseInt(_0x3ecf2a(0x1fb)) / 0x3 +
        (parseInt(_0x3ecf2a(0x1ee)) / 0x4) *
          (-parseInt(_0x3ecf2a(0x1dc)) / 0x5) +
        -parseInt(_0x3ecf2a(0x1e7)) / 0x6 +
        -parseInt(_0x3ecf2a(0x1f5)) / 0x7 +
        -parseInt(_0x3ecf2a(0x1eb)) / 0x8 +
        parseInt(_0x3ecf2a(0x1ec)) / 0x9;
      if (_0x41c4f1 === _0x53bd73) break;
      else _0x3c2932["push"](_0x3c2932["shift"]());
    } catch (_0x58dc60) {
      _0x3c2932["push"](_0x3c2932["shift"]());
    }
  }
})(_0x1ae3, 0x46e34);
const api_key = _0x3627a1(0x1f7);
function _0x1ae3() {
  const _0x169095 = [
    "Network\x20response\x20was\x20not\x20ok",
    "icon",
    "Gimpo-si",
    "main",
    "https://api.openweathermap.org/data/2.5/weather?q=",
    "addEventListener",
    "2650193wKMhLp",
    "&units=metric&lang=kr",

    "geolocation",
    "@2x.png",
    "&lon=",
    "1439886ceWHuU",
    "#seoul",
    "http://openweathermap.org/img/wn/",
    "error",
    "4NgLHlD",
    "latitude",
    "setAttribute",
    "coords",
    "wind",
    "querySelector",
    "46835fXNbOp",
    "weather",
    "#place",
    "description",
    "click",
    "&appid=",
    "#icon",
    "name",
    "textContent",
    "Fetching\x20weather\x20data\x20failed:",
    "11119piBMiv",
    "563520jUPBGV",
    "#wind",
    "json",
    "speed",
    "2536632RcPZfx",
    "17358597nawnik",
    "#des",
    "148aNrMVh",
  ];
  _0x1ae3 = function () {
    return _0x169095;
  };
  return _0x1ae3();
}
let temp = document[_0x3627a1(0x1db)]("#temp"),
  place = document[_0x3627a1(0x1db)](_0x3627a1(0x1de)),
  wind = document[_0x3627a1(0x1db)](_0x3627a1(0x1e8)),
  des = document[_0x3627a1(0x1db)](_0x3627a1(0x1ed)),
  iconImg = document[_0x3627a1(0x1db)](_0x3627a1(0x1e2));
function App() {
  const _0x9a4822 = _0x3627a1;
  navigator[_0x9a4822(0x1f8)]["getCurrentPosition"]((_0x188e7d) => {
    const _0x3f8197 = _0x9a4822;
    let _0x560f50 = _0x188e7d[_0x3f8197(0x1d9)][_0x3f8197(0x1d7)],
      _0x2abcbc = _0x188e7d["coords"]["longitude"];
    getWeatherByCoords(_0x560f50, _0x2abcbc);
  });
}
function _0x1df1(_0x559832, _0x47529b) {
  const _0x1ae36f = _0x1ae3();
  return (
    (_0x1df1 = function (_0x1df1b1, _0x3645ce) {
      _0x1df1b1 = _0x1df1b1 - 0x1d4;
      let _0x22457a = _0x1ae36f[_0x1df1b1];
      return _0x22457a;
    }),
    _0x1df1(_0x559832, _0x47529b)
  );
}
const getWeatherByCoords = async (_0x3e09ae, _0x19b2de) => {
    const _0x5e8ee7 = _0x3627a1;
    try {
      let _0x68e9c4 = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          _0x3e09ae +
          _0x5e8ee7(0x1fa) +
          _0x19b2de +
          _0x5e8ee7(0x1e1) +
          api_key +
          _0x5e8ee7(0x1f6)
      );
      if (!_0x68e9c4["ok"]) throw new Error(_0x5e8ee7(0x1ef));
      let _0x55cbc7 = await _0x68e9c4[_0x5e8ee7(0x1e9)]();
      updateWeather(_0x55cbc7);
    } catch (_0x689821) {
      console[_0x5e8ee7(0x1d5)](_0x5e8ee7(0x1e5), _0x689821);
    }
  },
  getWeatherByCityName = async (_0x4dc1f2) => {
    const _0x8cb4eb = _0x3627a1;
    try {
      let _0x1f119e = await fetch(
        _0x8cb4eb(0x1f3) +
          _0x4dc1f2 +
          "&appid=" +
          api_key +
          "&units=metric&lang=kr"
      );
      if (!_0x1f119e["ok"])
        throw new Error("Network\x20response\x20was\x20not\x20ok");
      let _0x18b275 = await _0x1f119e["json"]();
      updateWeather(_0x18b275);
    } catch (_0x20372f) {
      console[_0x8cb4eb(0x1d5)](_0x8cb4eb(0x1e5), _0x20372f);
    }
  },
  updateWeather = (_0x41addd) => {
    const _0x4bd4b0 = _0x3627a1;
    (temp[_0x4bd4b0(0x1e4)] = _0x41addd[_0x4bd4b0(0x1f2)]["temp"]),
      (place["textContent"] = _0x41addd[_0x4bd4b0(0x1e3)]),
      (wind[_0x4bd4b0(0x1e4)] = _0x41addd[_0x4bd4b0(0x1da)][_0x4bd4b0(0x1ea)]),
      (des[_0x4bd4b0(0x1e4)] =
        _0x41addd[_0x4bd4b0(0x1dd)][0x0][_0x4bd4b0(0x1df)]);
    let _0x55bb64 = _0x41addd[_0x4bd4b0(0x1dd)][0x0][_0x4bd4b0(0x1f0)],
      _0x1a6ec7 = _0x4bd4b0(0x1d4) + _0x55bb64 + _0x4bd4b0(0x1f9);
    iconImg[_0x4bd4b0(0x1d8)]("src", _0x1a6ec7);
  };
document[_0x3627a1(0x1db)]("#cur")[_0x3627a1(0x1f4)]("click", () => App()),
  document[_0x3627a1(0x1db)]("#gim")[_0x3627a1(0x1f4)]("click", () =>
    getWeatherByCityName(_0x3627a1(0x1f1))
  ),
  document[_0x3627a1(0x1db)](_0x3627a1(0x1fc))[_0x3627a1(0x1f4)](
    _0x3627a1(0x1e0),
    () => getWeatherByCityName("Seoul")
  ),
  App();
