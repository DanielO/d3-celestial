  var config = {
    d3: {
      projection: "aitoff",
      //geopos: [-77.849495, 166.728622], // McMurdo
      //geopos: [65.1,-147.5], // Poker Flat
      geopos: [-53.785690, -67.751007], // Riogrande
      follow: "center",
      location: true,
      interactive: true,
      form: true,
      datapath: "../data",
      //stars: {proper: true},
      stars: {show: false},
      planets: {show: true},
      horizon: {show: false},
      constellations: {desig: false, namestyle: { opacity: 1, fill:"#ffffff" }},
    },
    //sitename: 'mcmurdo',
    //sitename: 'pokerflat',
    sitename: 'riogrande',
    nowdate: null,
    radiantpath: '../data/radiant',
  };

