 $(function(){
        csmapi.set_endpoint ('http://iot.iottalk.tw:9999');
        var profile = {
		    'dm_name': 'DataServer',
			'idf_list':[],
			'odf_list':[CO2_O,Humidity_O1,Humidity_O2,Humidity_O3,Humidity_O4,Humidity_O5,Humidity_O6,Humidity_O7,Humidity_O8,Humidity_O9,
            Temperature_O1,Temperature_O2,Temperature_O3,Temperature_O4,Temperature_O5,Temperature_O6,Temperature_O7,Temperature_O8,Temperature_O9,
            CO2range_O,Humidityrange_O1,Humidityrange_O2,Humidityrange_O3,Humidityrange_O4,Humidityrange_O5,Humidityrange_O6,Humidityrange_O7,Humidityrange_O8,Humidityrange_O9,
            Temperaturerange_O1,Temperaturerange_O2,Temperaturerange_O3,Temperaturerange_O4,Temperaturerange_O5,Temperaturerange_O6,Temperaturerange_O7,Temperaturerange_O8,Temperaturerange_O9,
            Sunshine_O1,Usewater_O1,Usewaterdelta_O1,Powergenerate_O1,LLSLux_O1,LLSLux_O2,LLSLux_O3,LLSLux_O4,LLSLux_O5,PF_O1],
		        'd_name': 'DataServer_range02',
        };
		
        function CO2_O(data){
           $('.CO2_O')[0].innerText=data[0];
            //console.log('data:', data[0]);
           }
        function Humidity_O1(data){
           $('.Humidity_O1')[0].innerText=data[0];}
        function Humidity_O2(data){
           $('.Humidity_O2')[0].innerText=data[0];}
        function Humidity_O3(data){
           $('.Humidity_O3')[0].innerText=data[0];}
        function Humidity_O4(data){
           $('.Humidity_O4')[0].innerText=data[0];}
        function Humidity_O5(data){
           $('.Humidity_O5')[0].innerText=data[0];}
        function Humidity_O6(data){
           $('.Humidity_O6')[0].innerText=data[0];}
        function Humidity_O7(data){
           $('.Humidity_O7')[0].innerText=data[0];}
        function Humidity_O8(data){
           $('.Humidity_O8')[0].innerText=data[0];}
        function Humidity_O9(data){
           $('.Humidity_O9')[0].innerText=data[0];}
        function Temperature_O1(data){
           $('.Temperature_O1')[0].innerText=data[0];}
        function Temperature_O2(data){
           $('.Temperature_O2')[0].innerText=data[0];}
        function Temperature_O3(data){
           $('.Temperature_O3')[0].innerText=data[0];}
        function Temperature_O4(data){
           $('.Temperature_O4')[0].innerText=data[0];}
        function Temperature_O5(data){
           $('.Temperature_O5')[0].innerText=data[0];}
        function Temperature_O6(data){
           $('.Temperature_O6')[0].innerText=data[0];}
        function Temperature_O7(data){
           $('.Temperature_O7')[0].innerText=data[0];}
        function Temperature_O8(data){
           $('.Temperature_O8')[0].innerText=data[0];}
        function Temperature_O9(data){
           $('.Temperature_O9')[0].innerText=data[0];}
        //range odf
        function CO2range_O(data){
           $('.CO2range_O')[0].innerText=data[0];
            //console.log('data:', data[0]);
           }
        function Humidityrange_O1(data){
           $('.Humidityrange_O1')[0].innerText=data[0];}
        function Humidityrange_O2(data){
           $('.Humidityrange_O2')[0].innerText=data[0];}
        function Humidityrange_O3(data){
           $('.Humidityrange_O3')[0].innerText=data[0];}
        function Humidityrange_O4(data){
           $('.Humidityrange_O4')[0].innerText=data[0];}
        function Humidityrange_O5(data){
           $('.Humidityrange_O5')[0].innerText=data[0];}
        function Humidityrange_O6(data){
           $('.Humidityrange_O6')[0].innerText=data[0];}
        function Humidityrange_O7(data){
           $('.Humidityrange_O7')[0].innerText=data[0];}
        function Humidityrange_O8(data){
           $('.Humidityrange_O8')[0].innerText=data[0];}
        function Humidityrange_O9(data){
           $('.Humidityrange_O9')[0].innerText=data[0];}
        function Temperaturerange_O1(data){
           $('.Temperaturerange_O1')[0].innerText=data[0];}
        function Temperaturerange_O2(data){
           $('.Temperaturerange_O2')[0].innerText=data[0];}
        function Temperaturerange_O3(data){
           $('.Temperaturerange_O3')[0].innerText=data[0];}
        function Temperaturerange_O4(data){
           $('.Temperaturerange_O4')[0].innerText=data[0];}
        function Temperaturerange_O5(data){
           $('.Temperaturerange_O5')[0].innerText=data[0];}
        function Temperaturerange_O6(data){
           $('.Temperaturerange_O6')[0].innerText=data[0];}
        function Temperaturerange_O7(data){
           $('.Temperaturerange_O7')[0].innerText=data[0];}
        function Temperaturerange_O8(data){
           $('.Temperaturerange_O8')[0].innerText=data[0];}
        function Temperaturerange_O9(data){
           $('.Temperaturerange_O9')[0].innerText=data[0];}
        //4/23add
        function Sunshine_O1(data){
           $('.Sunshine_O1')[0].innerText=data[0];}
        function Usewater_O1(data){
           $('.Usewater_O1')[0].innerText=data[0];}
        function Usewaterdelta_O1(data){
           $('.Usewaterdelta_O1')[0].innerText=data[0];}
        function Powergenerate_O1(data){
           $('.Powergenerate_O1')[0].innerText=data[0];}
        function LLSLux_O1(data){
           $('.LLSLux_O1')[0].innerText=data[0];}
        function LLSLux_O2(data){
           $('.LLSLux_O2')[0].innerText=data[0];}
        function LLSLux_O3(data){
           $('.LLSLux_O3')[0].innerText=data[0];}
        function LLSLux_O4(data){
           $('.LLSLux_O4')[0].innerText=data[0];}
        function LLSLux_O5(data){
           $('.LLSLux_O5')[0].innerText=data[0];}
        function PF_O1(data){
           $('.PF_O1')[0].innerText=data[0];}
        
        

/*******************************************************************/                
        function ida_init(){
	    console.log(profile.d_name);
	}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
