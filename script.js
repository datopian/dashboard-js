var DP_ID = {
  "name": "london-dashboard",
  "resources": [
    {
      "encoding": "utf-8",
      "format": "csv",
      "mediatype": "text/csv",
      "name": "london-home-index",
      "path": "https://datahub.io/london/home-affordability/r/london-home-index.csv",
      "profile": "tabular-data-resource",
      "quotechar": "\"",
      "schema": {
        "fields": [
          {
            "format": "default",
            "name": "New Code",
            "type": "string"
          },
          {
            "format": "default",
            "name": "Old Code",
            "type": "string"
          },
          {
            "format": "default",
            "name": "Area",
            "type": "string"
          },
          {
            "format": "default",
            "name": "Year",
            "type": "any"
          },
          {
            "format": "default",
            "name": "Value",
            "type": "any"
          }
        ],
        "missingValues": [
          ""
        ]
      },
      "signed": true
    },
    {
      "encoding": "utf-8",
      "format": "csv",
      "mediatype": "text/xlsx",
      "name": "recorded-offences",
      "path": "https://datahub.io/london/crime/r/recorded-offences.csv",
      "profile": "tabular-data-resource",
      "quotechar": "\"",
      "schema": {
        "fields": [
          {
            "format": "default",
            "name": "Code",
            "type": "any"
          },
          {
            "format": "default",
            "name": "Borough",
            "type": "string"
          },
          {
            "format": "%Y-%m-%d",
            "name": "Year",
            "type": "date"
          },
          {
            "format": "default",
            "name": "Value",
            "type": "any"
          }
        ],
        "missingValues": [
          ""
        ]
      }
    },
    {
      "encoding": "utf-8",
      "format": "csv",
      "mediatype": "text/xls",
      "name": "population",
      "path": "https://datahub.io/london/population/r/population.csv",
      "profile": "tabular-data-resource",
      "quotechar": "\"",
      "schema": {
        "fields": [
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1961",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1962",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1963",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1964",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1965",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1966",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1967",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1968",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1969",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1970",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1971",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1972",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1973",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1974",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1975",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1976",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1977",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1978",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1979",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1980",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1981",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1982",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1983",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1984",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1985",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1986",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1987",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1988",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1989",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1990",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1991",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1992",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1993",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1994",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1995",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1996",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1997",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1998",
            "type": "any"
          },
          {
            "format": "default",
            "name": "PERSONS ALL AGES 1999",
            "type": "any"
          },
          {
            "format": "%Y-%m-%d",
            "name": "Year",
            "type": "date"
          },
          {
            "format": "default",
            "name": "Value",
            "type": "integer"
          }
        ],
        "missingValues": [
          ""
        ]
      },
      "signed": true
    },
    {
      "encoding": "utf-8",
      "format": "json",
      "mediatype": "text/xls",
      "name": "gva",
      "path": "https://datahub.io/london/gva/r/gva.json",
      "profile": "tabular-data-resource",
      "quotechar": "\"",
      "schema": {
        "fields": [
          {
            "format": "default",
            "name": "NUTS level",
            "type": "string"
          },
          {
            "format": "default",
            "name": "NUTS code",
            "type": "string"
          },
          {
            "format": "default",
            "name": "Region name",
            "type": "string"
          },
          {
            "format": "%Y-%m-%d",
            "name": "Year",
            "type": "date"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "Value",
            "type": "number"
          }
        ],
        "missingValues": [
          ""
        ]
      }
    },
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
    },
    {
      "encoding": "ISO-8859-1",
      "format": "csv",
      "mediatype": "text/xls",
      "name": "london-public-transport",
      "path": "https://datahub.io/london/public-transport/r/london-public-transport.csv",
      "profile": "tabular-data-resource",
      "quotechar": "\"",
      "schema": {
        "fields": [
          {
            "format": "default",
            "name": "Period and Financial year",
            "type": "string"
          },
          {
            "format": "default",
            "name": "Reporting Period",
            "type": "integer"
          },
          {
            "format": "default",
            "name": "Days in period",
            "type": "integer"
          },
          {
            "format": "%Y-%m-%d %H:%M:%S",
            "name": "Period beginning",
            "type": "datetime"
          },
          {
            "format": "%Y-%m-%d %H:%M:%S",
            "name": "Period ending",
            "type": "datetime"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "Bus journeys (m)",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "Underground journeys (m)",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "DLR Journeys (m)",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "Tram Journeys (m)",
            "type": "number"
          },
          {
            "format": "default",
            "name": "Overground Journeys (m)",
            "type": "any"
          },
          {
            "format": "default",
            "name": "Emirates Airline Journeys (m)",
            "type": "any"
          },
          {
            "format": "default",
            "name": "TfL Rail Journeys (m)",
            "type": "any"
          }
        ],
        "missingValues": [
          ""
        ]
      }
    },
    {
      "encoding": "utf-8",
      "format": "csv",
      "mediatype": "text/xls",
      "name": "key-trends",
      "path": "https://datahub.io/london/underground-performance/r/key-trends.csv",
      "profile": "tabular-data-resource",
      "quotechar": "\"",
      "schema": {
        "fields": [
          {
            "format": "default",
            "name": "Period and Financial year",
            "type": "string"
          },
          {
            "format": "default",
            "name": "Reporting Period",
            "type": "integer"
          },
          {
            "format": "default",
            "name": "Days in period",
            "type": "integer"
          },
          {
            "format": "%Y-%m-%d %H:%M:%S",
            "name": "Period ending",
            "type": "datetime"
          },
          {
            "format": "%Y-%m-%d %H:%M:%S",
            "name": "Month",
            "type": "datetime"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "Number of Lost Customer Hours",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "Operated Kms (Peak and Off Peak)",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "% of Scheduled Operated",
            "type": "number"
          },
          {
            "decimalChar": ".",
            "format": "default",
            "groupChar": "",
            "name": "Excess Journey Time (mins)",
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
    "resources": ["gva"],
    "specType": "vega",
    "spec": {
      "$schema": "https://vega.github.io/schema/vega/v3.json",
      "width": 228,
      "height": 160,
      "padding": 0,
      "data": [
        {
          "name": "gva",
          "format": {
            "parse": {
              "Year": "date"
            }
          },
          "transform": [
            {
              "type": "filter",
              "expr": "datum['Region name'] == 'London'"
            }
          ]
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "utc",
          "range": "width",
          "domain": {
            "data": "gva",
            "field": "Year"
          }
        },
        {
          "name": "value",
          "type": "linear",
          "range": "height",
          "zero": false,
          "domain": {
            "data": "gva",
            "field": "Value"
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
          "labelPadding": 10
        },
        {
          "orient": "right",
          "scale": "value",
          "labelFont": "Lato",
          "format": "s",
          "grid": true,
          "domain": false,
          "ticks": false,
          "title": "GBP",
          "titleFontWeight": "light"
        }
      ],
      "marks": [
        {
          "type": "line",
          "from": {"data": "gva"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Year"},
              "y": {"scale": "value", "field": "Value"},
              "strokeWidth": {"value": 2},
              "stroke": {"value": "#A95F6D"}
            }
          }
        }
      ]
    }
  },
  {
    "resources": [
      "unemployment-rate"
    ],
    "specType": "vega",
    "spec": {
      "$schema": "https://vega.github.io/schema/vega/v3.json",
      "width": 245,
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
    "resources": ["population"],
    "specType": "vega",
    "spec": {
      "$schema": "https://vega.github.io/schema/vega/v3.json",
      "width": 238,
      "height": 160,
      "padding": 0,
      "data": [
        {
          "name": "population",
          "format": {
            "parse": {
              "Year": "date"
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
            "data": "population",
            "field": "Year"
          }
        },
        {
          "name": "value",
          "type": "linear",
          "range": "height",
          "zero": false,
          "domain": {
            "data": "population",
            "field": "Value"
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
          "scale": "value",
          "labelFont": "Lato",
          "grid": true,
          "format": "s",
          "domain": false,
          "ticks": false,
          "titleFontWeight": "light"
        }
      ],
      "marks": [
        {
          "type": "line",
          "from": {"data": "population"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Year"},
              "y": {"scale": "value", "field": "Value"},
              "strokeWidth": {"value": 2},
              "stroke": {"value": "#A95F6D"}
            }
          }
        }
      ]
    }
  },
  {
    "resources": ["recorded-offences"],
    "specType": "vega",
    "spec": {
      "$schema": "https://vega.github.io/schema/vega/v3.json",
      "width": 218,
      "height": 160,
      "padding": 0,
      "data": [
        {
          "name": "recorded-offences",
          "format": {
            "parse": {
              "Year": "date"
            }
          }
        },
        {
          "name": "inner-london",
          "source": "recorded-offences",
          "transform": [
            {
              "type": "filter",
              "expr": "datum.Borough == 'Inner London'"
            }
          ]
        },
        {
          "name": "outer-london",
          "source": "recorded-offences",
          "transform": [
            {
              "type": "filter",
              "expr": "datum.Borough == 'Outer London'"
            }
          ]
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "utc",
          "range": "width",
          "domain": {
            "data": "recorded-offences",
            "field": "Year"
          }
        },
        {
          "name": "value",
          "type": "linear",
          "range": "height",
          "zero": false,
          "domain": {
            "data": "recorded-offences",
            "field": "Value"
          },
          "domainMax": 600000,
          "domainMin": 250000
        }
      ],
      "axes": [
        {
          "orient": "bottom",
          "scale": "x",
          "labelFont": "Lato",
          "domain": false,
          "ticks": false,
          "labelPadding": 10,
          "labelBound": true
        },
        {
          "orient": "right",
          "scale": "value",
          "labelFont": "Lato",
          "format": "s",
          "domain": false,
          "ticks": false,
          "title": "recorded offences",
          "titleFontWeight": "light"
        }
      ],
      "marks": [
        {
          "type": "line",
          "from": {"data": "inner-london"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Year"},
              "y": {"scale": "value", "field": "Value"},
              "strokeWidth": {"value": 2},
              "stroke": {"value": "#A95F6D"}
            }
          }
        },
        {
          "type": "line",
          "from": {"data": "outer-london"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Year"},
              "y": {"scale": "value", "field": "Value"},
              "strokeWidth": {"value": 2},
              "stroke": {"value": "#ECAFAF"}
            }
          }
        },
        {
          "type": "text",
          "from": {"data": "inner-london"},
          "encode": {
            "enter": {
              "text": {"value": "Inner London"},
              "y": {"scale": "value", "value": 570000},
              "fill": {"value": "#A95F6D"},
              "font": {"value": "Lato"},
              "fontWeight": {"value": 100}
            }
          }
        },
        {
          "type": "text",
          "from": {"data": "outer-london"},
          "encode": {
            "enter": {
              "text": {"value": "Outer London"},
              "y": {"scale": "value", "value": 440000},
              "fill": {"value": "#ECAFAF"},
              "font": {"value": "Lato"},
              "fontWeight": {"value": 100}
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
  },
  {
    "resources": ["london-home-index"],
    "specType": "vega",
    "spec": {
      "$schema": "https://vega.github.io/schema/vega/v3.json",
      "width": 238,
      "height": 160,
      "padding": 0,
      "data": [
        {
          "name": "london-home-index",
          "format": {
            "parse": {
              "Year": "date"
            }
          },
          "transform": [
            {
              "type": "filter",
              "expr": "datum.Area == 'London'"
            }
          ]
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "utc",
          "range": "width",
          "domain": {
            "data": "london-home-index",
            "field": "Year"
          }
        },
        {
          "name": "value",
          "type": "linear",
          "range": "height",
          "zero": true,
          "domain": {
            "data": "london-home-index",
            "field": "Value"
          }
        }
      ],
      "axes": [
        {
          "orient": "bottom",
          "scale": "x",
          "labelFont": "Lato",
          "domain": false,
          "ticks": false,
          "labelPadding": 10,
        },
        {
          "orient": "right",
          "scale": "value",
          "labelFont": "Lato",
          "domain": false,
          "ticks": false
        }
      ],
      "marks": [
        {
          "type": "line",
          "from": {"data": "london-home-index"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Year"},
              "y": {"scale": "value", "field": "Value"},
              "strokeWidth": {"value": 2},
              "stroke": {"value": "#A95F6D"}
            }
          }
        }
      ]
    }
  },
  {
    "resources": ["key-trends"],
    "specType": "vega",
    "spec": {
      "$schema": "https://vega.github.io/schema/vega/v3.json",
      "width": 225,
      "height": 160,
      "padding": 0,
      "data": [
        {
          "name": "key-trends",
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
            "data": "key-trends",
            "field": "Month"
          }
        },
        {
          "name": "hours",
          "type": "linear",
          "range": "height",
          "zero": false,
          "domain": {
            "data": "key-trends",
            "field": "Number of Lost Customer Hours"
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
          "scale": "hours",
          "labelFont": "Lato",
          "format": "s",
          "domain": false,
          "ticks": false,
          "title": "hours",
          "titleFontWeight": "light"
        }
      ],
      "marks": [
        {
          "type": "line",
          "from": {"data": "key-trends"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Month"},
              "y": {"scale": "hours", "field": "Number of Lost Customer Hours"},
              "strokeWidth": {"value": 2},
              "stroke": {"value": "#A95F6D"}
            }
          }
        }
      ]
    }
  },
  {
    "resources": ["london-public-transport"],
    "specType": "vega",
    "spec": {
      "$schema": "https://vega.github.io/schema/vega/v3.json",
      "width": 230,
      "height": 160,
      "padding": 0,
      "data": [
        {
          "name": "london-public-transport",
          "format": {
            "parse": {
              "Period beginning": "date"
            }
          },
          "transform":[
            {
              "type": "formula",
              "expr": "parseInt(datum['DLR Journeys (m)']) + parseInt(datum['Tram Journeys (m)']) + parseInt(datum['Overground Journeys (m)']) || 0 + parseInt(datum['Emirates Airline Journeys (m)']) || 0 + parseInt(datum['TfL Rail Journeys (m)']) || 0",
              "as": "other total"
            }
          ]
        }
      ],
      "scales": [
        {
          "name": "x",
          "type": "utc",
          "range": "width",
          "domain": {
            "data": "london-public-transport",
            "field": "Period beginning"
          }
        },
        {
          "name": "journeys",
          "type": "linear",
          "range": "height",
          "domain": {
            "data": "london-public-transport",
            "field": "[Bus journeys (m)]"
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
          "scale": "journeys",
          "labelFont": "Lato",
          "domain": false,
          "ticks": false,
          "title": "millions",
          "titleFontWeight": "light"
        }
      ],
      "marks": [
        {
          "type": "line",
          "from": {"data": "london-public-transport"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Period beginning"},
              "y": {"scale": "journeys", "field": "[Bus journeys (m)]"},
              "strokeWidth": {"value": 2},
              "stroke": {"value": "#A95F6D"}
            }
          }
        },
        {
          "type": "line",
          "from": {"data": "london-public-transport"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Period beginning"},
              "y": {"scale": "journeys", "field": "[Underground journeys (m)]"},
              "strokeWidth": {"value": 2},
              "stroke": {"value": "#ECAFAF"}
            }
          }
        },
        {
          "type": "line",
          "from": {"data": "london-public-transport"},
          "encode": {
            "enter": {
              "x": {"scale": "x", "field": "Period beginning"},
              "y": {"scale": "journeys", "field": "other total"},
              "strokeWidth": {"value": 2},
              "stroke": {"value": "#D7706C"}
            }
          }
        },
        {
          "type": "text",
          "from": {"data": "london-public-transport"},
          "encode": {
            "enter": {
              "text": {"value": "Bus"},
              "y": {"scale": "journeys", "value": 200},
              "fill": {"value": "#A95F6D"},
              "font": {"value": "Lato"},
              "fontWeight": {"value": 100}
            }
          }
        },
        {
          "type": "text",
          "from": {"data": "london-public-transport"},
          "encode": {
            "enter": {
              "text": {"value": "Underground"},
              "y": {"scale": "journeys", "value": 100},
              "fill": {"value": "#ECAFAF"},
              "font": {"value": "Lato"},
              "fontWeight": {"value": 100}
            }
          }
        },
        {
          "type": "text",
          "from": {"data": "london-public-transport"},
          "encode": {
            "enter": {
              "text": {"value": "All other"},
              "y": {"scale": "journeys", "value": 25},
              "fill": {"value": "#D7706C"},
              "font": {"value": "Lato"},
              "fontWeight": {"value": 100}
            }
          }
        }
      ]
    }
  }
]
