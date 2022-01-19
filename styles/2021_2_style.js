var size = 0;
var placement = 'point';

var style_2021_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("台中地價");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 25000.000000 && value <= 40000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,231,246,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 40000.000000 && value <= 60000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(199,208,229,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 60000.000000 && value <= 80000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,182,214,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 80000.000000 && value <= 100000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(87,157,200,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 100000.000000 && value <= 120000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(35,130,180,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 120000.000000 && value <= 129000.000000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(4,90,141,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
