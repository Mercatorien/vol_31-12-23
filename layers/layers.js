var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Project1GPKGvol1_1 = new ol.format.GeoJSON();
var features_Project1GPKGvol1_1 = format_Project1GPKGvol1_1.readFeatures(json_Project1GPKGvol1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Project1GPKGvol1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Project1GPKGvol1_1.addFeatures(features_Project1GPKGvol1_1);
var lyr_Project1GPKGvol1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Project1GPKGvol1_1, 
                style: style_Project1GPKGvol1_1,
                popuplayertitle: "Project 1 GPKG — vol1",
                interactive: true,
                title: '<img src="styles/legend/Project1GPKGvol1_1.png" /> Project 1 GPKG — vol1'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Project1GPKGvol1_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Project1GPKGvol1_1];
lyr_Project1GPKGvol1_1.set('fieldAliases', {'ID': 'ID', });
lyr_Project1GPKGvol1_1.set('fieldImages', {'ID': 'TextEdit', });
lyr_Project1GPKGvol1_1.set('fieldLabels', {'ID': 'no label', });
lyr_Project1GPKGvol1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});