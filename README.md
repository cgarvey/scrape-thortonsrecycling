Description
===========
This is a basic script to parse the bin lift history for Irish residential waste collection customers of https://www.thorntonsonlineaccounts.com/ (Dublin, Kildare, Meath & Wicklow areas).

The script will process a file which is the raw HTML output of the paged **Bin Collection History** feature on the site. It will output a tabbed summary (date, weight and bin category) suitable for exporting to Excel, Google Docs, etc.

Usage
=====
*  Visit the **Bin Collection history** page.
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
