//Creating a widget paramater array
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
//Adding the record of openweather
window.myWidgetParam.push({
    id: 12,
    cityid: '933677',
    appid: '28ab9d51e8f37a8847abacee48914614',
    units: 'metric',
    containerid: 'openweathermap-widget-12',
});
(function () {
    //Dynamically adding the open wather javascript into the page
    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    //Url of the open weather widget
    script.src =
        "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    //Insert the open weather js before the script tag
    s.parentNode.insertBefore(script, s);
})();