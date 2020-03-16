
var width = 500;
var height = 530;
var svg = d3.select('#map')
            .append('svg')
            .attr('width',width)
            .attr('height',height);

var projection = d3.geo.mercator();
var path = d3.geo.path().projection(projection);
var kenya = void 0;
var b;

 var geoID = function(data){
      return "c" + data.properties.ID_1;
      };

 var radius = 100;
 var pieHeight = 250;
 var pieWidth = 200;
 var color2 = d3.scale.ordinal()
                 .range(['blue','pink']);
 var click = function(data){
      kenya.attr('fill-opacity',0.5);
      d3.select('#'+geoID(data)).attr('fill-opacity',1);
      $('#countyInfo h4').text(data.properties.NAME_1).css({'font-size':'25px','margin-left':'center','color':'white','text-align':'center'});
      $('#countySummary p:nth-child(1)').text(data.properties.SUM_Male);
      $('#countySummary p:nth-child(2)').text(data.properties.SUM_Female);
      $('#countySummary p:nth-child(3)').text(data.properties.SUM_Inters);
      $('#countySummary p:nth-child(4)').text(data.properties.SUM_Househ);
      $('#countySummary p:nth-child(5)').text(data.properties.SUM_Total);
      var piedata = [{label:"Male",value:Math.round(data.properties.SUM_Male/1000)},
                     {label:"Female",value:Math.round(data.properties.SUM_Female/1000)},
                     //{label:"Intersex",value:Math.round(data.properties.SUM_Inters/1000)}
                     ];
      var pie = d3.layout.pie()
                  .value(function(d){
                  	return d.value;
                  });
      var arc = d3.svg.arc()
                  .outerRadius(radius);
      var mychart = d3.select('#summaryPiechart')
                      .append('g')
                         .attr('transform','translate('+(pieWidth-radius)+','+(pieHeight-radius)+')')
                         .selectAll('path').data(pie(piedata))
                         .enter().append('g')
                         .attr('class','slice');

       var slices = d3.selectAll('g.slice')
                      .append('path')
                         .attr('fill',function(d,i){
                         	return color2(i);
                         })
                         .attr('d',arc);

       var text = d3.selectAll('g.slice')
                    .append('text')
                    .text(function(d,i){
                    	return d.data.label;
                    })
                    .attr('text-anchor','middle')
                    .attr('fill','white')
                    .attr('transform',function(d){
                           d.innerRadius = 0;
                           d.outerRadius = radius;
                           return 'translate('+arc.centroid(d)+')'
                    });
      };
 

d3.json('data/CensusCounties.json',function(data) {
	console.log('kenya',data);
	var counties = topojson.feature(data, data.objects.CensusCounties);
	projection.scale(1).translate([0,0]);
    b = path.bounds(counties);
	var s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height);
	var t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];
	projection.scale(s).translate(t);
	var map = svg.append('g').attr('class','boundary');

/*
   for (var i = 0; i < counties.features.length; i++) {
   	        var population = [];
   	        population.push(counties.features[i].properties.SUM_Total/1000000);
   	        console.log(population);
   	        var min = Math.min(population);
   	        var max = Math.max(population);
   	        console.log(min,max);

   	        //console.log(max);
		   	var color = d3.scale.linear()
			              //.domain([0,47])
                          .domain([min,max])
			              .range(['#662200','#ffff66']);
   };*/
   var population = [];
   var ranks;
   for (var i = 0; i < counties.features.length; i++) {
   	       //population.push(counties.features[i].properties.SUM_Total++);
   	      population.push(Math.round(counties.features[i].properties.SUM_Total++/counties.features[i].properties.Land_Area++*0.1)); 
   	      var sorted = population.slice().sort(function(a,b){return b-a;});
          ranks = population.slice().map(function(v){return sorted.indexOf(v)+1;}); 
    
   };
   console.log(ranks);
   var color = d3.scale.linear()
			              //.domain([0,47])
                          .domain([0,d3.max(ranks)])
                          //.range(['#800000','#ffaa00','#bf8040','#ffc34d','#ffffb3']);
                          .range(['green','yellow']);
                        

	kenya = map.selectAll('path')
	         .data(counties.features)
	         .enter().append('path')
	         .attr('d',path)
	         .attr('id',geoID)
	         .on("click",click)
	         .style('fill', function(d,i){
	         	return color(i);
	         });

	         
    
 
   
    });
