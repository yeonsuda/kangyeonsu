var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CGV_1 = new ol.format.GeoJSON();
var features_CGV_1 = format_CGV_1.readFeatures(json_CGV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CGV_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CGV_1.addFeatures(features_CGV_1);
var lyr_CGV_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CGV_1, 
                style: style_CGV_1,
                interactive: true,
    title: 'CGV<br />\
    <img src="styles/legend/CGV_1_0.png" /> 강남구<br />\
    <img src="styles/legend/CGV_1_1.png" /> 강북구<br />\
    <img src="styles/legend/CGV_1_2.png" /> 강서구<br />\
    <img src="styles/legend/CGV_1_3.png" /> 광진구<br />\
    <img src="styles/legend/CGV_1_4.png" /> 구로구<br />\
    <img src="styles/legend/CGV_1_5.png" /> 노원구<br />\
    <img src="styles/legend/CGV_1_6.png" /> 마포구<br />\
    <img src="styles/legend/CGV_1_7.png" /> 서대문<br />\
    <img src="styles/legend/CGV_1_8.png" /> 성동구<br />\
    <img src="styles/legend/CGV_1_9.png" /> 성북구<br />\
    <img src="styles/legend/CGV_1_10.png" /> 송파구<br />\
    <img src="styles/legend/CGV_1_11.png" /> 양천구<br />\
    <img src="styles/legend/CGV_1_12.png" /> 영등포<br />\
    <img src="styles/legend/CGV_1_13.png" /> 용산구<br />\
    <img src="styles/legend/CGV_1_14.png" /> 은평구<br />\
    <img src="styles/legend/CGV_1_15.png" /> 종로구<br />\
    <img src="styles/legend/CGV_1_16.png" /> 중구 <br />\
    <img src="styles/legend/CGV_1_17.png" /> 중랑구<br />\
    <img src="styles/legend/CGV_1_18.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_CGV_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CGV_1];
lyr_CGV_1.set('fieldAliases', {'극장명': '극장명', '지역': '지역', '주소': '주소', '전화번호': '전화번호', '백신패스관유무': '백신패스관유무', '입력주소': '입력주소', 'X': 'X', 'Y': 'Y', 'CLSS': 'CLSS', 'PNU': 'PNU', '주소구분': '주소구분', '표준신주소': '표준신주소', '표준구주소': '표준구주소', '우편번호': '우편번호', '행정동코드': '행정동코드', '행정동명': '행정동명', '법정동코드': '법정동코드', '법정동명': '법정동명', '행정구': '행정구', });
lyr_CGV_1.set('fieldImages', {'극장명': 'TextEdit', '지역': 'TextEdit', '주소': 'TextEdit', '전화번호': 'TextEdit', '백신패스관유무': 'TextEdit', '입력주소': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'CLSS': 'TextEdit', 'PNU': 'TextEdit', '주소구분': 'TextEdit', '표준신주소': 'TextEdit', '표준구주소': 'TextEdit', '우편번호': 'TextEdit', '행정동코드': 'Range', '행정동명': 'TextEdit', '법정동코드': 'Range', '법정동명': 'TextEdit', '행정구': 'TextEdit', });
lyr_CGV_1.set('fieldLabels', {'극장명': 'no label', '지역': 'inline label', '주소': 'inline label', '전화번호': 'no label', '백신패스관유무': 'no label', '입력주소': 'no label', 'X': 'no label', 'Y': 'no label', 'CLSS': 'no label', 'PNU': 'no label', '주소구분': 'inline label', '표준신주소': 'inline label', '표준구주소': 'inline label', '우편번호': 'inline label', '행정동코드': 'inline label', '행정동명': 'inline label', '법정동코드': 'inline label', '법정동명': 'inline label', '행정구': 'no label', });
lyr_CGV_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});