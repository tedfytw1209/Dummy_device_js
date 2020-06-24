 $(function(){
        csmapi.set_endpoint ('http://iot.iottalk.tw:9999');
        var profile = {
		    'dm_name': 'DataServer',
			'idf_list':[],
			'odf_list':[CO2_O,Humidity_O1,Humidity_O2,Humidity_O3,Humidity_O4,Humidity_O5,Humidity_O6,Humidity_O7,Humidity_O8,Humidity_O9,
            Temperature_O1,Temperature_O2,Temperature_O3,Temperature_O4,Temperature_O5,Temperature_O6,Temperature_O7,Temperature_O8,Temperature_O9,
            CO2range_O,Humidityrange_O1,Humidityrange_O2,Humidityrange_O3,Humidityrange_O4,Humidityrange_O5,Humidityrange_O6,Humidityrange_O7,Humidityrange_O8,Humidityrange_O9,
            Temperaturerange_O1,Temperaturerange_O2,Temperaturerange_O3,Temperaturerange_O4,Temperaturerange_O5,Temperaturerange_O6,Temperaturerange_O7,Temperaturerange_O8,Temperaturerange_O9,
            Sunshine_O1,Usewater_O1,Usewaterdelta_O1,Powergenerate_O1,Lux_O1,Lux_O2,Lux_O3,Lux_O4,Lux_O5,PF_O1,
            WaterLevel_O1,WaterLevel_O2],
		        'd_name': 'DataServer_range03',
        };
		function number_format(val, decimals){
            //Parse the value as a float value
            val = parseFloat(val);
            //Format the value w/ the specified number
            //of decimal places and return it.
            return val.toFixed(decimals);
        }
        function CO2_O(data){
            if ($('.CO2_O')[0]){
           $('.CO2_O')[0].innerText=data[0];
            //console.log('data:', data[0]);
           }}
        function Humidity_O1(data){
            if ($('.Humidity_O1')[0]){
           $('.Humidity_O1')[0].innerText=data[0];}}
        function Humidity_O2(data){
            if ($('.Humidity_O2')[0]){
           $('.Humidity_O2')[0].innerText=data[0];}}
        function Humidity_O3(data){
            if ($('.Humidity_O3')[0]){
           $('.Humidity_O3')[0].innerText=data[0];}}
        function Humidity_O4(data){
            if ($('.Humidity_O4')[0]){
           $('.Humidity_O4')[0].innerText=data[0];}}
        function Humidity_O5(data){
            if ($('.Humidity_O5')[0]){
           $('.Humidity_O5')[0].innerText=data[0];}}
        function Humidity_O6(data){
            if ($('.Humidity_O6')[0]){
           $('.Humidity_O6')[0].innerText=data[0];}}
        function Humidity_O7(data){
            if ($('.Humidity_O7')[0]){
           $('.Humidity_O7')[0].innerText=data[0];}}
        function Humidity_O8(data){
            if ($('.Humidity_O8')[0]){
           $('.Humidity_O8')[0].innerText=data[0];}}
        function Humidity_O9(data){
            if ($('.Humidity_O9')[0]){
           $('.Humidity_O9')[0].innerText=data[0];}}
        function Temperature_O1(data){
            if ($('.Temperature_O1')[0]){
           $('.Temperature_O1')[0].innerText=data[0];}}
        function Temperature_O2(data){
            if ($('.Temperature_O2')[0]){
           $('.Temperature_O2')[0].innerText=data[0];}}
        function Temperature_O3(data){
            if ($('.Temperature_O3')[0]){
           $('.Temperature_O3')[0].innerText=data[0];}}
        function Temperature_O4(data){
            if ($('.Temperature_O4')[0]){
           $('.Temperature_O4')[0].innerText=data[0];}}
        function Temperature_O5(data){
            if ($('.Temperature_O5')[0]){
           $('.Temperature_O5')[0].innerText=data[0];}}
        function Temperature_O6(data){
            if ($('.Temperature_O6')[0]){
           $('.Temperature_O6')[0].innerText=data[0];}}
        function Temperature_O7(data){
            if ($('.Temperature_O7')[0]){
           $('.Temperature_O7')[0].innerText=data[0];}}
        function Temperature_O8(data){
            if ($('.Temperature_O8')[0]){
           $('.Temperature_O8')[0].innerText=data[0];}}
        function Temperature_O9(data){
            if ($('.Temperature_O9')[0]){
           $('.Temperature_O9')[0].innerText=data[0];}}
        //range odf
        function CO2range_O(data){
            if ($('.CO2range_O')[0]){
           $('.CO2range_O')[0].innerText=data[0];
            //console.log('data:', data[0]);
           }}
        function Humidityrange_O1(data){
            if ($('.Humidityrange_O1')){
           $('.Humidityrange_O1')[0].innerText=data[0];}}
        function Humidityrange_O2(data){
            if ($('.Humidityrange_O2')[0]){
           $('.Humidityrange_O2')[0].innerText=data[0];}}
        function Humidityrange_O3(data){
            if ($('.Humidityrange_O3')[0]){
           $('.Humidityrange_O3')[0].innerText=data[0];}}
        function Humidityrange_O4(data){
            if ($('.Humidityrange_O4')[0]){
           $('.Humidityrange_O4')[0].innerText=data[0];}}
        function Humidityrange_O5(data){
            if ($('.Humidityrange_O5')[0]){
           $('.Humidityrange_O5')[0].innerText=data[0];}}
        function Humidityrange_O6(data){
            if ($('.Humidityrange_O6')[0]){
           $('.Humidityrange_O6')[0].innerText=data[0];}}
        function Humidityrange_O7(data){
            if ($('.Humidityrange_O7')[0]){
           $('.Humidityrange_O7')[0].innerText=data[0];}}
        function Humidityrange_O8(data){
            if ($('.Humidityrange_O8')[0]){
           $('.Humidityrange_O8')[0].innerText=data[0];}}
        function Humidityrange_O9(data){
            if ($('.Humidityrange_O9')[0]){
           $('.Humidityrange_O9')[0].innerText=data[0];}}
        function Temperaturerange_O1(data){
            if ($('.Temperaturerange_O1')[0]){
           $('.Temperaturerange_O1')[0].innerText=data[0];}}
        function Temperaturerange_O2(data){
            if ($('.Temperaturerange_O2')[0]){
           $('.Temperaturerange_O2')[0].innerText=data[0];}}
        function Temperaturerange_O3(data){
            if ($('.Temperaturerange_O3')[0]){
           $('.Temperaturerange_O3')[0].innerText=data[0];}}
        function Temperaturerange_O4(data){
            if ($('.Temperaturerange_O4')[0]){
           $('.Temperaturerange_O4')[0].innerText=data[0];}}
        function Temperaturerange_O5(data){
            if ($('.Temperaturerange_O5')[0]){
           $('.Temperaturerange_O5')[0].innerText=data[0];}}
        function Temperaturerange_O6(data){
            if ($('.Temperaturerange_O6')[0]){
           $('.Temperaturerange_O6')[0].innerText=data[0];}}
        function Temperaturerange_O7(data){
            if ($('.Temperaturerange_O7')[0]){
           $('.Temperaturerange_O7')[0].innerText=data[0];}}
        function Temperaturerange_O8(data){
            if ($('.Temperaturerange_O8')[0]){
           $('.Temperaturerange_O8')[0].innerText=data[0];}}
        function Temperaturerange_O9(data){
            if ($('.Temperaturerange_O9')[0]){
           $('.Temperaturerange_O9')[0].innerText=data[0];}}
        //4/23add
        function Sunshine_O1(data){
            if ($('.Sunshine_O1')[0]){
           $('.Sunshine_O1')[0].innerText=data[0];}}
        function Usewater_O1(data){
            if ($('.Usewater_O1')[0]){
           $('.Usewater_O1')[0].innerText=number_format(data[0],1);}}
        function Usewaterdelta_O1(data){
            if ($('.Usewaterdelta_O1')[0]){
           $('.Usewaterdelta_O1')[0].innerText=number_format(data[0],1);}}
        function Powergenerate_O1(data){
            if ($('.Powergenerate_O1')[0]){
           $('.Powergenerate_O1')[0].innerText=data[0];}}
        function Lux_O1(data){
            if ($('.Lux_O1')[0]){
           $('.Lux_O1')[0].innerText=number_format(data[0],0);}}
        function Lux_O2(data){
            if ($('.Lux_O2')[0]){
           $('.Lux_O2')[0].innerText=number_format(data[0],0);}}
        function Lux_O3(data){
            if ($('.Lux_O3')[0]){
           $('.Lux_O3')[0].innerText=number_format(data[0],0);}}
        function Lux_O4(data){
            if ($('.Lux_O4')[0]){
           $('.Lux_O4')[0].innerText=number_format(data[0],0);}}
        function Lux_O5(data){
            if ($('.Lux_O5')[0]){
           $('.Lux_O5')[0].innerText=number_format(data[0],0);}}
        function PF_O1(data){
            if ($('.PF_O1')[0]){
            $('.PF_O1')[0].innerText=number_format(data[0],2);}}
        function WaterLevel_O1(data){
            if ($('.WaterLevel_O1')[0]){
            $('.WaterLevel_O1')[0].innerText=number_format(data[0],1);}}
        function WaterLevel_O2(data){
            if ($('.WaterLevel_O2')[0]){
            $('.WaterLevel_O2')[0].innerText=number_format(data[0],1);}}

/*******************************************************************/                
        function ida_init(){
	    console.log(profile.d_name);
	}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
