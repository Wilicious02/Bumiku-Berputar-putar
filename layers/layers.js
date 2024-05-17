var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WilayahAdministrasi_1 = new ol.format.GeoJSON();
var features_WilayahAdministrasi_1 = format_WilayahAdministrasi_1.readFeatures(json_WilayahAdministrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasi_1.addFeatures(features_WilayahAdministrasi_1);
var lyr_WilayahAdministrasi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahAdministrasi_1, 
                style: style_WilayahAdministrasi_1,
                popuplayertitle: "Wilayah Administrasi",
                interactive: true,
    title: 'Wilayah Administrasi<br />\
    <img src="styles/legend/WilayahAdministrasi_1_0.png" /> KECAMATAN BAE<br />\
    <img src="styles/legend/WilayahAdministrasi_1_1.png" /> KECAMATAN DAWE<br />\
    <img src="styles/legend/WilayahAdministrasi_1_2.png" /> KECAMATAN GEBOG<br />\
    <img src="styles/legend/WilayahAdministrasi_1_3.png" /> KECAMATAN JATI<br />\
    <img src="styles/legend/WilayahAdministrasi_1_4.png" /> KECAMATAN JEKULO<br />\
    <img src="styles/legend/WilayahAdministrasi_1_5.png" /> KECAMATAN KALIWUNGU<br />\
    <img src="styles/legend/WilayahAdministrasi_1_6.png" /> KECAMATAN KOTA KUDUS<br />\
    <img src="styles/legend/WilayahAdministrasi_1_7.png" /> KECAMATAN MEJOBO<br />\
    <img src="styles/legend/WilayahAdministrasi_1_8.png" /> KECAMATAN UNDAAN<br />\
    <img src="styles/legend/WilayahAdministrasi_1_9.png" /> <br />'
        });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_Posyandu_3 = new ol.format.GeoJSON();
var features_Posyandu_3 = format_Posyandu_3.readFeatures(json_Posyandu_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Posyandu_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Posyandu_3.addFeatures(features_Posyandu_3);
var lyr_Posyandu_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Posyandu_3, 
                style: style_Posyandu_3,
                popuplayertitle: "Posyandu",
                interactive: true,
                title: '<img src="styles/legend/Posyandu_3.png" /> Posyandu'
            });

lyr_OSMStandard_0.setVisible(true);lyr_WilayahAdministrasi_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Posyandu_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_WilayahAdministrasi_1,lyr_Jalan_2,lyr_Posyandu_3];
lyr_WilayahAdministrasi_1.set('fieldAliases', {'nama_desa': 'nama_desa', 'nama_kec': 'nama_kec', 'nama_kab': 'nama_kab', 'nama_prop': 'nama_prop', 'macem': 'macem', 'swp': 'swp', 'air_limbah': 'air_limbah', 'phbs': 'phbs', });
lyr_Jalan_2.set('fieldAliases', {'objectid': 'objectid', 'kl_dat_das': 'kl_dat_das', 'nm_ruas': 'nm_ruas', 'thn_data': 'thn_data', 'status': 'status', 'fungsi': 'fungsi', 'mendukung': 'mendukung', 'ura_dukung': 'ura_dukung', 'kd_bd_pu': 'kd_bd_pu', 'kd_jns_inf': 'kd_jns_inf', 'kd_inf': 'kd_inf', 'propinsi': 'propinsi', 'kab_kot': 'kab_kot', 'kecamatan': 'kecamatan', 'desa_kel': 'desa_kel', 'tk_ruas_aw': 'tk_ruas_aw', 'tk_ruas_ak': 'tk_ruas_ak', 'kd_patok': 'kd_patok', 'km_awal': 'km_awal', 'km_akhir': 'km_akhir', 'nm_lintas': 'nm_lintas', 'kon_baik': 'kon_baik', 'kon_sdg': 'kon_sdg', 'kon_rgn': 'kon_rgn', 'kon_rusak': 'kon_rusak', 'kon_mntp': 'kon_mntp', 'kon_t_mntp': 'kon_t_mntp', 'panjang': 'panjang', 'lbr_keras': 'lbr_keras', 'lhrt': 'lhrt', 'vcr': 'vcr', 'tipe_jln': 'tipe_jln', 'mst': 'mst', 'tanah_kri': 'tanah_kri', 'macadam': 'macadam', 'aspal': 'aspal', 'rigid': 'rigid', 'thn_pen_ak': 'thn_pen_ak', 'jns_pen': 'jns_pen', 'koord_x_aw': 'koord_x_aw', 'koord_y_aw': 'koord_y_aw', 'koord_x_ak': 'koord_x_ak', 'koord_y_ak': 'koord_y_ak', 'shape_leng': 'shape_leng', });
lyr_Posyandu_3.set('fieldAliases', {'desa': 'desa', 'nama_posya': 'nama_posya', 'lokasi': 'lokasi', 'tpk': 'tpk', 'y': 'y', 'x': 'x', });
lyr_WilayahAdministrasi_1.set('fieldImages', {'nama_desa': 'TextEdit', 'nama_kec': 'TextEdit', 'nama_kab': 'TextEdit', 'nama_prop': 'TextEdit', 'macem': 'TextEdit', 'swp': 'TextEdit', 'air_limbah': 'TextEdit', 'phbs': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'objectid': 'Range', 'kl_dat_das': 'TextEdit', 'nm_ruas': 'TextEdit', 'thn_data': 'Range', 'status': 'TextEdit', 'fungsi': 'TextEdit', 'mendukung': 'TextEdit', 'ura_dukung': 'TextEdit', 'kd_bd_pu': 'TextEdit', 'kd_jns_inf': 'TextEdit', 'kd_inf': 'TextEdit', 'propinsi': 'TextEdit', 'kab_kot': 'TextEdit', 'kecamatan': 'TextEdit', 'desa_kel': 'TextEdit', 'tk_ruas_aw': 'TextEdit', 'tk_ruas_ak': 'TextEdit', 'kd_patok': 'TextEdit', 'km_awal': 'TextEdit', 'km_akhir': 'TextEdit', 'nm_lintas': 'TextEdit', 'kon_baik': 'TextEdit', 'kon_sdg': 'TextEdit', 'kon_rgn': 'TextEdit', 'kon_rusak': 'TextEdit', 'kon_mntp': 'TextEdit', 'kon_t_mntp': 'TextEdit', 'panjang': 'TextEdit', 'lbr_keras': 'TextEdit', 'lhrt': 'TextEdit', 'vcr': 'TextEdit', 'tipe_jln': 'Range', 'mst': 'TextEdit', 'tanah_kri': 'TextEdit', 'macadam': 'TextEdit', 'aspal': 'TextEdit', 'rigid': 'TextEdit', 'thn_pen_ak': 'Range', 'jns_pen': 'TextEdit', 'koord_x_aw': 'TextEdit', 'koord_y_aw': 'TextEdit', 'koord_x_ak': 'TextEdit', 'koord_y_ak': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Posyandu_3.set('fieldImages', {'desa': 'TextEdit', 'nama_posya': 'TextEdit', 'lokasi': 'TextEdit', 'tpk': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', });
lyr_WilayahAdministrasi_1.set('fieldLabels', {'nama_desa': 'inline label - always visible', 'nama_kec': 'inline label - always visible', 'nama_kab': 'inline label - always visible', 'nama_prop': 'inline label - always visible', 'macem': 'inline label - always visible', 'swp': 'inline label - always visible', 'air_limbah': 'inline label - always visible', 'phbs': 'inline label - always visible', });
lyr_Jalan_2.set('fieldLabels', {'objectid': 'inline label - always visible', 'kl_dat_das': 'inline label - always visible', 'nm_ruas': 'inline label - always visible', 'thn_data': 'inline label - always visible', 'status': 'inline label - always visible', 'fungsi': 'inline label - always visible', 'mendukung': 'inline label - always visible', 'ura_dukung': 'inline label - always visible', 'kd_bd_pu': 'inline label - always visible', 'kd_jns_inf': 'inline label - always visible', 'kd_inf': 'inline label - always visible', 'propinsi': 'inline label - always visible', 'kab_kot': 'inline label - always visible', 'kecamatan': 'inline label - always visible', 'desa_kel': 'inline label - always visible', 'tk_ruas_aw': 'inline label - always visible', 'tk_ruas_ak': 'inline label - always visible', 'kd_patok': 'inline label - always visible', 'km_awal': 'inline label - always visible', 'km_akhir': 'inline label - always visible', 'nm_lintas': 'inline label - always visible', 'kon_baik': 'inline label - always visible', 'kon_sdg': 'inline label - always visible', 'kon_rgn': 'inline label - always visible', 'kon_rusak': 'inline label - always visible', 'kon_mntp': 'inline label - always visible', 'kon_t_mntp': 'inline label - always visible', 'panjang': 'inline label - always visible', 'lbr_keras': 'inline label - always visible', 'lhrt': 'inline label - always visible', 'vcr': 'inline label - always visible', 'tipe_jln': 'inline label - always visible', 'mst': 'inline label - always visible', 'tanah_kri': 'inline label - always visible', 'macadam': 'inline label - always visible', 'aspal': 'inline label - always visible', 'rigid': 'inline label - always visible', 'thn_pen_ak': 'inline label - always visible', 'jns_pen': 'inline label - always visible', 'koord_x_aw': 'inline label - always visible', 'koord_y_aw': 'inline label - always visible', 'koord_x_ak': 'inline label - always visible', 'koord_y_ak': 'inline label - always visible', 'shape_leng': 'inline label - always visible', });
lyr_Posyandu_3.set('fieldLabels', {'desa': 'inline label - always visible', 'nama_posya': 'inline label - always visible', 'lokasi': 'inline label - always visible', 'tpk': 'inline label - always visible', 'y': 'inline label - always visible', 'x': 'inline label - always visible', });
lyr_Posyandu_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});