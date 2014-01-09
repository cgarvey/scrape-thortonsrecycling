Description
===========
This is a basic script, and bookmarklet, to parse the bin lift history for Irish residential waste collection customers of https://www.thorntonsonlineaccounts.com/ (Dublin, Kildare, Meath & Wicklow areas).

Both the script and bookmarklet will extract data from the **Bin Collection History** page and make it available in a format that you can copy-and-paste straight in to a spreadsheet (Excel, LibreOffice Calc, Googl Drive, etc.).

Usage
=====
I recommend using the bookmarklet, over the script, as it's easier to use.

Bookmarklet
-----------
*  Visit the <a href="http://cgarvey.github.io/scrape-thortonsrecycling/">project page</a> to access the bookmarklet, and its instructions.

Script
------
*  <a href="https://www.thorntonsonlineaccounts.com/WebAccess/">Login</a> to Thornton's online accounts site.
*  Visit the <a href="https://www.thorntonsonlineaccounts.com/WebAccess/Account/BinCollectionHistory.aspx">Bin Collection History</a> page.
*  For each page of available history, save the HTML (HTML Only, not a full web page).
*  For each saved HTML file, call the `parse.pl` script using the filename as an argument.
*  Copy the contents of the specified output file to your destination. It's tab-delimited, so it can be easily pasted in to Excel, OpenOffice, Numbers, LibreOffice, and Google Docs (Spreadsheet).
*  A sample usage of the script might be `parse.pl saved_1.html output.tab`.

License
-------
**Copyright 2012 Cathal Garvey. http://cgarvey.ie/**

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

*(Free) commercial licensing available on request.*
