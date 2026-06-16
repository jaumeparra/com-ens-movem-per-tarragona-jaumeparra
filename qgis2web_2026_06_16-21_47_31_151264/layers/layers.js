var wms_layers = [];

var lyr_STOrtofotocolor2024_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserveis.icgc.cat/servei/catalunya/orto-territorial/wms",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ortofoto_color_2024",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '[ST] Ortofoto color [2024]',
                            popuplayertitle: '[ST] Ortofoto color [2024]',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_STOrtofotocolor2024_0, 0]);
var format_paradesmapa18_1 = new ol.format.GeoJSON();
var features_paradesmapa18_1 = format_paradesmapa18_1.readFeatures(json_paradesmapa18_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paradesmapa18_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paradesmapa18_1.addFeatures(features_paradesmapa18_1);
var lyr_paradesmapa18_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_paradesmapa18_1, 
                style: style_paradesmapa18_1,
                popuplayertitle: 'parades mapa 18',
                interactive: true,
    title: 'parades mapa 18<br />\
    <img src="styles/legend/paradesmapa18_1_0.png" /> 200.000<br />\
    <img src="styles/legend/paradesmapa18_1_1.png" /> 315.000<br />\
    <img src="styles/legend/paradesmapa18_1_2.png" /> 430.000<br />' });
var group_Mapasdefondo = new ol.layer.Group({
                                layers: [lyr_STOrtofotocolor2024_0,],
                                fold: 'open',
                                title: 'Mapas de fondo'});

lyr_STOrtofotocolor2024_0.setVisible(true);lyr_paradesmapa18_1.setVisible(true);
var layersList = [group_Mapasdefondo,lyr_paradesmapa18_1];
lyr_paradesmapa18_1.set('fieldAliases', {'code': 'code', 'Parada': 'Parada', 'Codi_Parada': 'Codi_Parada', 'Viatgers': 'Viatgers', });
lyr_paradesmapa18_1.set('fieldImages', {'code': 'TextEdit', 'Parada': 'TextEdit', 'Codi_Parada': '', 'Viatgers': 'TextEdit', });
lyr_paradesmapa18_1.set('fieldLabels', {'code': 'no label', 'Parada': 'header label - always visible', 'Codi_Parada': 'no label', 'Viatgers': 'header label - always visible', });
lyr_paradesmapa18_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});