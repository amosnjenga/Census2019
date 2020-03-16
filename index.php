<!DOCTYPE html>
<html>
<head>
	<title>Kenya Census 2019</title>
	<meta charset="utf-8" >
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=no">
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/custom.css">
	<style>
	     html,body{
	     	width: 100%;
	     	height: 100%
	     	margin: 0;
	     	padding: 0;
	     }
		
	</style>
</head>
<body class="fluid">
	<div id="main_header" class="row">
		<div id="title" class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<h1>Kenya Population and Housing Census 2019</h1>
		</div>
	</div>
	<div class="row" id="main_window">
		<div id="sidebar_1" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			<div class="introduction">
				<h3>Population by County<br> and Sub-County</h3>
			</div>
			<div class="summary">
				<div style="width: 100%;height: 20%;text-align:center;padding-top: 10px;">
					<h4 style="font-size: 22px;">Results Summary</h4>
				</div>
				<div style="width: 100%;height:80%;text-align: center;">
					<div id="svgsummary" width="100%" height="100%" style="background: #8c8c8c;padding-top: 5px;">
						<img src="img/man.svg" width="40px" height="40px"><img src="img/girl.svg" width="40px" height="40px"><img src="img/intersex.svg" width="40px" height="40px">
						<p class="numerical">47,564,296</p>
						<img src="img/man.svg" width="40px" height="40px">
						<p class="numerical">23,548,056</p>
						<img src="img/girl.svg" width="40px" height="40px">
						<p class="numerical">24,014,716</p>
						<img src="img/intersex.svg" width="40px" height="40px">
						<p class="numerical">1,524</p>
						<img src="img/house.svg" width="40px" height="40px">
						<p class="numerical">12,143,913</p>

					</div>
			    </div>
								
			</div>
		</div>

		<div id="mapview" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">

			<div id="map" width="100%" height="70%">
				
			</div>
			
		</div>

		<div id="sidebar_2" class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			<div id="countyInfo"> 
				<h4 style="border: solid blue 1px;background:blue;height: 30px;"></h4>
				<div id="countySummary">
					Male: <p></p>
                    Female:<p></p>
                    Intersex:<p></p>
                    Households:<p></p>
                    <strong>Total</strong>:<p><strong></strong></p>
                   </ul>
                  
				</div>
				<div id="summaryChart" style="padding-top: 10px;">
					<svg id="summaryPiechart" height="300" width="100%">
						
					</svg>
					
				</div>
                   
			</div>
			
		</div>
		
	</div>
	<div id="footer" class="footer">
		<div style="padding-top: 5px;">
			<p>Powered by Njenga Technologies &copy 2019</p>
		</div>
		
	</div>




    
	<script src="js/jquery-3.1.1.js"></script>
	<script src="js/topojson.min.js"></script>
	<script src="js/d3.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/custom.js"></script>

</body>
</html>