#! /usr/bin/perl

#  Copyright 2012 Cathal Garvey. http://cgarvey.ie/
#
#  Licensed under the Apache License, Version 2.0 (the "License");
#  you may not use this file except in compliance with the License.
#  You may obtain a copy of the License at
#
#  http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing, software
#  distributed under the License is distributed on an "AS IS" BASIS,
#  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#  See the License for the specific language governing permissions and
#  limitations under the License.

use strict;

my( $VERSION ) = "1.0";

if( $#ARGV == 1 ) {
	# Open files
	my( $sInput ) = $ARGV[0];
	my( $sOuput ) = $ARGV[1];
	open( FIN, $sInput ) or die "Could not open specified input file ($sInput)\n";
	open( FOUT, "> " . $sOuput ) or die "Could not open specified output file ($sOuput)\n";

	print "Reading... ";
	my( $html ) = "";
	my( $line );
	while( $line = <FIN> ) {
		$html .= $line;
	}
	print "done.\n";

	print "Parsing... ";
	my( $regex ) = "<tr[^>]*>\\s*<td[^>]*>\\s*([0-9]*-[A-Za-z]*-[0-9]*) 12:00 AM\\s*<\/td>\\s*<td[^>]*>\\s*([^<]*)<\/td>\\s*<td[^>]*>([^<]*)<\/td>"; #\s*([0-9]*)\s*<\/td>";
	my( $iCount ) = 0;
	while( $html =~ /$regex/g ) {
		my( $sDate ) = $1;
		my( $fWeight ) = $2;
		my( $sType ) = $3;
		if( $sType =~ /Waste/ ) { $sType = "Grey"; }
		elsif( $sType =~ /Compost/ ) { $sType = "Brown"; }
		elsif( $sType =~ /Recycling/ ) { $sType = "Green"; }
		else { $sType = "Unknown"; }
		print FOUT "$sDate\t$fWeight\t$sType\n";
		$iCount += 1;
	}
	print "done ($iCount).\n";

	close( FIN );
	close( FOUT );
}
else {
	print "Thorntons Recycling Lift History parser (ver $VERSION)\n\n";
	print "This script parses a saved HTML file from the Bin Collection History on\nhttps://www.thorntonsonlineaccounts.com/ (customers-only). For each page in the\nlift history, save the HTML to a file, and use this script to parse that file.\nThe output will be tab-delimited suitable for use in Excel, Google Docs, etc.\n\n";
	print "Usage: $0 <input file> <output file>\n";
	print "  <input file> : Path to the file containing the saved HTML.\n";
	print "  <output file>: Path to the file the parsed data will be written to.\n\n";
}
