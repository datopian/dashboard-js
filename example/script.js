var config = {
  widgets: [
    {
      "elementId": "testWidget",
      "view": {
        "title": "Economy",
        "legend": "Recent unemployment rate",
        "resources": [
          {
            "datasetId": "unemployment",
            "name": "unemployment-rate",
            "transform": [
              {
                "type": "aggregate",
                "fields": [
                  "date"
                ],
                "operations": [
                  "argmax"
                ]
              }
            ]
          }
        ],
        "specType": "figure",
        "spec": {
          "fieldName": "unemployment_rate",
          "suffix": "%"
        }
      }
    }
  ],
  datasets: ["https://datahub.io/london/unemployment"]
}
