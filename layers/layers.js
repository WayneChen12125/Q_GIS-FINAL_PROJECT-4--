var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_2021_1 = new ol.format.GeoJSON();
var features_2021_1 = format_2021_1.readFeatures(json_2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_1.addFeatures(features_2021_1);
var lyr_2021_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_1, 
                style: style_2021_1,
                interactive: true,
    title: '2021台中人口<br />\
    <img src="styles/legend/2021_1_0.png" /> 1 - 200<br />\
    <img src="styles/legend/2021_1_1.png" /> 200 - 400<br />\
    <img src="styles/legend/2021_1_2.png" /> 400 - 600<br />\
    <img src="styles/legend/2021_1_3.png" /> 600 - 800<br />\
    <img src="styles/legend/2021_1_4.png" /> 800 - 1000<br />\
    <img src="styles/legend/2021_1_5.png" /> 1000 - 1138<br />'
        });
var format_2021_2 = new ol.format.GeoJSON();
var features_2021_2 = format_2021_2.readFeatures(json_2021_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2021_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2021_2.addFeatures(features_2021_2);
var lyr_2021_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2021_2, 
                style: style_2021_2,
                interactive: false,
    title: '2021台中地價<br />\
    <img src="styles/legend/2021_2_0.png" /> 25000 - 40000<br />\
    <img src="styles/legend/2021_2_1.png" /> 40000 - 60000<br />\
    <img src="styles/legend/2021_2_2.png" /> 60000 - 80000<br />\
    <img src="styles/legend/2021_2_3.png" /> 80000 - 100000<br />\
    <img src="styles/legend/2021_2_4.png" /> 100000 - 120000<br />\
    <img src="styles/legend/2021_2_5.png" /> 120000 - 129000<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_2021_1.setVisible(true);lyr_2021_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_2021_1,lyr_2021_2];
lyr_2021_1.set('fieldAliases', {'fid': 'fid', '台中人口': '台中人口', });
lyr_2021_2.set('fieldAliases', {'fid': 'fid', '台中地價': '台中地價', });
lyr_2021_1.set('fieldImages', {'fid': 'TextEdit', '台中人口': 'Range', });
lyr_2021_2.set('fieldImages', {'fid': 'TextEdit', '台中地價': 'Range', });
lyr_2021_1.set('fieldLabels', {'fid': 'inline label', '台中人口': 'inline label', });
lyr_2021_2.set('fieldLabels', {'fid': 'no label', '台中地價': 'inline label', });
lyr_2021_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});