var DP_ID = {
  "name": "london-dashboard",
  "resources": [
    {
      "encoding": "ISO-8859-1",
      "format": "csv",
      "mediatype": "text/csv",
      "name": "unemployment-rate",
      "path": "https://datahub.io/london/unemployment/r/unemployment-rate.csv",
      "profile": "tabular-data-resource",
      "quotechar": "\"",
      "schema": {
        "fields": [
          {
            "format": "%Y-%m-%d",
            "name": "date",
            "type": "date"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "unemployment_real_numbers",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "unemployment_rate",
            "type": "number"
          }
        ],
        "missingValues": [
          ""
        ]
      },
      "signed": true
    },
    {
      "encoding": "ISO-8859-1",
      "format": "csv",
      "mediatype": "text/xls",
      "name": "monthly-averages",
      "path": "https://datahub.io/london/air-quality/r/monthly-averages.csv",
      "profile": "tabular-data-resource",
      "schema": {
        "fields": [
          {
            "format": "default",
            "name": "Month",
            "type": "any"
          },
          {
            "format": "default",
            "name": "London Mean Roadside Nitric Oxide (ug/m3)",
            "type": "any"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "London Mean Roadside Nitrogen Dioxide (ug/m3)",
            "type": "number"
          },
          {
            "format": "default",
            "name": "London Mean Roadside Oxides of Nitrogen (ug/m3)",
            "type": "any"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "London Mean Roadside Ozone (ug/m3)",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "London Mean Roadside PM10 Particulate (ug/m3)",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "London Mean Roadside PM2.5 Particulate (ug/m3)",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "London Mean Roadside Sulphur Dioxide (ug/m3)",
            "type": "number"
          },
          {
            "format": "default",
            "name": "London Mean Background Nitric Oxide (ug/m3)",
            "type": "any"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "London Mean Background Nitrogen Dioxide (ug/m3)",
            "type": "number"
          },
          {
            "format": "default",
            "name": "London Mean Background Oxides of Nitrogen (ug/m3)",
            "type": "any"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "London Mean Background Ozone (ug/m3)",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "London Mean Background PM10 Particulate (ug/m3)",
            "type": "number"
          },
          {
            "format": "default",
            "name": "London Mean Background PM2.5 Particulate (ug/m3)",
            "type": "any"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "London Mean Background Sulphur Dioxide (ug/m3)",
            "type": "number"
          }
        ],
        "missingValues": [
          ""
        ]
      }
    }
  ]
};


DP_ID.views = [
  {
    "resources": [
      "unemployment-rate"
    ],
    "specType": "vega",
    "spec": {
      "$schema": "https://vega.github.io/schema/vega/v3.json",
      "width": 250,
      "height": 160,
      "padding": 0,
      "data": [
        {
          "name": "unemployment-rate",
          "format": {
            "parse": {
              "date": "date"
            }
          }
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "utc",
          "range": "width",
          "domain": {
            "data": "unemployment-rate",
            "field": "date"
          }
        },
        {
          "name": "y",
          "type": "linear",
          "range": "height",
          "nice": true,
          "zero": false,
          "domain": {
            "data": "unemployment-rate",
            "field": "unemployment_rate"
          }
        }
      ],
      "axes": [
        {
          "orient": "bottom",
          "scale": "x",
          "labelFont": "Lato",
          "format": "%Y",
          "domain": false,
          "ticks": false,
          "labelAngle": 30,
          "labelPadding": 10
        },
        {
          "orient": "right",
          "scale": "y",
          "labelFont": "Lato",
          "domain": false,
          "ticks": false,
          "grid": true,
          "labelFontSize": 4
        }
      ],
      "marks": [
        {
          "type": "line",
          "from": {
            "data": "unemployment-rate"
          },
          "encode": {
            "enter": {
              "x": {
                "scale": "x",
                "field": "date"
              },
              "y": {
                "scale": "y",
                "field": "unemployment_rate"
              },
              "strokeWidth": {
                "value": 2
              },
              "stroke": {
                "value": "#A95F6D"
              }
            }
          }
        }
      ]
    }
  },
  {
    "resources": ["monthly-averages"],
    "specType": "vega",
    "spec": {
      "$schema": "https://vega.github.io/schema/vega/v3.json",
      "width": 195,
      "height": 160,
      "padding": 0,
      "data": [
        {
          "name": "monthly-averages",
          "format": {
            "parse": {
              "Month": "date"
            }
          }
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "utc",
          "range": "width",
          "domain": {
            "data": "monthly-averages",
            "field": "Month"
          }
        },
        {
          "name": "roadside",
          "type": "linear",
          "range": "height",
          "zero": false,
          "domain": {
            "data": "monthly-averages",
            "field": "[London Mean Roadside PM2.5 Particulate (ug/m3)]"
          }
        }
      ],
      "axes": [
        {
          "orient": "bottom",
          "scale": "x",
          "labelFont": "Lato",
          "format": "%Y",
          "domain": false,
          "ticks": false,
          "labelPadding": 10,
          "labelBound": true
        },
        {
          "orient": "right",
          "scale": "roadside",
          "labelFont": "Lato",
          "domain": false,
          "ticks": false
        }
      ],
      "marks": [
        {
          "type": "line",
          "from": {"data": "monthly-averages"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Month"},
              "y": {"scale": "roadside", "field": "[London Mean Roadside PM2.5 Particulate (ug/m3)]"},
              "strokeWidth": {"value": 2},
              "stroke": {"value": "#A95F6D"}
            }
          }
        },
        {
          "type": "line",
          "from": {"data": "monthly-averages"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Month"},
              "y": {"scale": "roadside", "value": 11},
              "strokeWidth": {"value": 1},
              "stroke": {"value": "gray"},
              "strokeDash": {"value": [5,5]}
            }
          }
        },
        {
          "type": "line",
          "from": {"data": "monthly-averages"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Month"},
              "y": {"scale": "roadside", "value": 23},
              "strokeWidth": {"value": 1},
              "stroke": {"value": "gray"},
              "strokeDash": {"value": [5,5]}
            }
          }
        },
        {
          "type": "line",
          "from": {"data": "monthly-averages"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Month"},
              "y": {"scale": "roadside", "value": 35},
              "strokeWidth": {"value": 1},
              "stroke": {"value": "gray"},
              "strokeDash": {"value": [5,5]}
            }
          }
        },
        {
          "type": "text",
          "encode": {
            "enter": {
              "fill": {"value": "gray"},
              "zindex": {"value": 10},
              "text": {"value": "Low (index 1)"},
              "x": {"scale": "x", "field": "Month"},
              "y": {"scale": "roadside", "value": 11},
              "dx": {"value": -55},
              "font": {"value": "Lato"},
              "fontSize": {"value": 9}
            }
          }
        },
        {
          "type": "text",
          "encode": {
            "enter": {
              "fill": {"value": "gray"},
              "zindex": {"value": 10},
              "text": {"value": "Low (index 2)"},
              "x": {"scale": "x", "field": "Month"},
              "y": {"scale": "roadside", "value": 23},
              "dx": {"value": -55},
              "font": {"value": "Lato"},
              "fontSize": {"value": 9}
            }
          }
        },
        {
          "type": "text",
          "encode": {
            "enter": {
              "fill": {"value": "gray"},
              "zindex": {"value": 10},
              "text": {"value": "Low (index 3): Enjoy your usual outdoor activities up to this level."},
              "x": {"scale": "x", "field": "Month"},
              "y": {"scale": "roadside", "value": 35.5},
              "dx": {"value": -55},
              "font": {"value": "Lato"},
              "fontSize": {"value": 9}
            }
          }
        }
      ]
    }
  }
]
