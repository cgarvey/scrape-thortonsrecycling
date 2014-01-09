/*
	jQuery loader by Ben Alman http://benalman.com/projects/run-jquery-code-bookmarklet/
	Scraper code by Cathal Garvey http://cgarvey.ie/

	Minimise this script for easier use by using uglifyjs (ver 2+) as follows
		tail -n+9 thorntons_scraper_bookmarklet.src.js | head -n-2 | uglifyjs -c --define DEBUG=false -o thorntons_scraper_bookmarklet.js.tmp; tail -n+8 thorntons_scraper_bookmarklet.src.js | head -n+1 | tr -d '\n' | cat > thorntons_scraper_bookmarklet.js; cat thorntons_scraper_bookmarklet.js.tmp >> thorntons_scraper_bookmarklet.js; tail -n-2 thorntons_scraper_bookmarklet.src.js | head -n+1 >> thorntons_scraper_bookmarklet.js; rm thorntons_scraper_bookmarklet.js.tmp; sed -i 's/\t/\\t/g' thorntons_scraper_bookmarklet.js
*/
javascript:(function(e,a,g,h,f,c,b,d){if(!(f=e.jQuery)||g>f.fn.jquery||h(f)){c=a.createElement("script");c.type="text/javascript";c.src="https://ajax.googleapis.com/ajax/libs/jquery/"+g+"/jquery.min.js";c.onload=c.onreadystatechange=function(){if(!b&&(!(d=this.readyState)||d=="loaded"||d=="complete")){h((f=e.jQuery).noConflict(1),b=1);f(c).remove()}};a.documentElement.childNodes[0].appendChild(c)}})(window,document,"1.3.2",function($,L){
	if( typeof( DEBUG ) === "undefined" ) DEBUG = true;
	DEBUG && console.log( "Stage 1: Check for 20 results per page" );
	var elQ = $( "#Content_MainContent_boxBinCollectionHistory_gridInvoices_GridViewPager1_DropDownListPageSize" );
	if( elQ && elQ[0] ) {
		var val = elQ.find(":selected").text();
		if( val != "20" ) {
			DEBUG && console.log( "Changing to 20" );
			$(".header").html( "<div style=\"color: #fff; font-size: 2em; font-style: italic;\">Updating (20 rows per page), one moment...</div>" );
			elQ.val( "20" ).change();
		}
		else {
			DEBUG && console.log( "Stage 2: Scraping Data" );
			var elT = $("#Content_MainContent_boxBinCollectionHistory_gridInvoices");
			if( elT && elT[0] ) {
				var s = "";

				elT.find( ".grdRow, .grdAltRow").each( function( idx, el ) {
					elTDs = $(el).children( "td" );
					if( elTDs && elTDs.length == 6 ) {
						var dt = $(elTDs[0]).text();
						dt = dt.replace( " 12:00 AM", "" );
						s += dt + "\x09" + $(elTDs[1]).text() + "\t";
						if( $(elTDs[2]).text() == "General Waste" ) s += "General";
						else if( $(elTDs[2]).text() == "Compost" ) s += "Compost";
						else if( $(elTDs[2]).text() == "General Recycling" ) s += "Recycling";
						else s += "n/a";
						s += "\n";
					}
				});

				DEBUG && console.log( "Stage 3: Displaying scraped data" );
				var win = window.open( null, "_blank", "width=400,height=400" );
				if( win ) {
					win.document.write( "<html><head><title>Thorntons Scraped Data</title><head><body><h2>Scraped Data:</h2><form><p>Header Row:</p><textarea style=\"width: 100%;\" rows=\"1\">Date\tWeight\tType\n</textarea><br /><p>Data:</p><textarea style=\"width: 100%;\" rows=\"10\">" + s + "</textarea><br/></form></body></html>" );
					var elA = $("#Content_MainContent_boxBinCollectionHistory_gridInvoices_GridViewPager1_ImageButtonNext" );
					if( elA && elA[0] ) {
						DEBUG && console.log( "Stage 4: Navigating to next page of results." );
						$(".header").html( "<div style=\"color: #fff; font-size: 2em; font-style: italic;\">Retrieving next page of results, one moment...</div>" );
						var href = elA.attr( "href" );
						href = href.replace( "javascript:", "" );
						eval( href );
					}
				}
				else alert( "Popup windows appear to be blocked, so I could not display the scraped data." );
			}
		}
	}
});

