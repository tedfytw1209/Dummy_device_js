 $(function(){
        csmapi.set_endpoint ('http://iot.iottalk.tw:9999');
        var profile = {
		    'dm_name': 'DataServer',
			'idf_list':[],
			'odf_list':[CO2_O,Humidity_O1,Humidity_O2,Humidity_O3,Humidity_O4,Humidity_O5,Humidity_O6,Humidity_O7,Humidity_O8,Humidity_O9,
            Temperature_O1,Temperature_O2,Temperature_O3,Temperature_O4,Temperature_O5,Temperature_O6,Temperature_O7,Temperature_O8,Temperature_O9],
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
/*******************************************************************/                
        function ida_init(){
	    console.log(profile.d_name);
	}
        var ida = {
            'ida_init': ida_init,
        }; 
        dai(profile,ida);     
});
