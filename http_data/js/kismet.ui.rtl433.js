(
  typeof define === "function" ? function (m) { define("kismet-ui-rtl433-js", m); } :
  typeof exports === "object" ? function (m) { module.exports = m(); } :
  function(m){ this.kismet_ui_rtl433 = m(); }
)(function () {

"use strict";

var exports = {};

// Flag we're still loading
exports.load_complete = 0;

kismet_ui.AddDeviceDetail("rtl433", "RTL-433 (SDR)", 0, {
    filter: function(data) {
        return (data['kismet_device_base_phyname'] === "RTL433");
    },
    draw: function(data, target) {
        target.devicedata(data, {
            "id": "rtl433Data",
            "fields": [
            {
                field: "rtl433_device.rtl433_device_common.rtl433_device_model",
                title: "Model",
                empty: "<i>Unknown</i>"
            },
            {
                field: "rtl433_device.rtl433_device_common.rtl433_device_id",
                title: "Device ID",
                empty: "<i>Unknown</i>"
            },
            {
                field: "rtl433_device.rtl433_device_common.rtl433_device_rtlchannel",
                title: "Channel",
                filterOnZero: true,
            },
            {
                field: "rtl433_device.rtl433_device_common.rtl433_device_battery",
                title: "Battery",
                filterOnEmpty: true,
            },
            {
                field: "rtl433_device.rtl433_device_thermometer",
                groupTitle: "Thermometer",
                id: "group_therm_data",
                filterOnEmpty: true,
                fields: [
                {
                    field: "rtl433_device.rtl433_device_thermometer.rtl433_device_temperature",
                    title: "Temperature (C)",
                    filterOnEmpty: true
                },
                {
                    field: "rtl433_device.rtl433_device_thermometer.rtl433_device_humidity",
                    title: "Humidity (%)",
                    filterOnEmpty: true,
                    filterOnZero: true
                },
                ]
            },
            {
                field: "rtl433_device.rtl433_device_weatherstation",
                groupTitle: "Weather",
                id: "group_weather_data",
                filterOnEmpty: true,
                fields: [
                {
                    field: "rtl433_device.rtl433_device_weatherstation.rtl433_device_wind_dir",
                    title: "Wind Direction (&deg;)",
                    filterOnEmpty: true
                },
                {
                    field: "rtl433_device.rtl433_device_weatherstation.rtl433_device_wind_speed",
                    title: "Wind Speed (KpH)",
                    filterOnEmpty: true
                },
                {
                    field: "rtl433_device.rtl433_device_weatherstation.rtl433_device_wind_gust",
                    title: "Wind Gust (KpH)",
                    filterOnEmpty: true
                },
                {
                    field: "rtl433_device.rtl433_device_weatherstation.rtl433_device_rain",
                    title: "Rain",
                    filterOnEmpty: true
                },
                ]
            },

            ],
        });
    },
});

console.log("kismet.ui.rtl433.js returning, we think we loaded everything?");

// We're done loading
exports.load_complete = 1;

return exports;

});