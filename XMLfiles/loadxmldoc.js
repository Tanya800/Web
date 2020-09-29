function loadXMLDoc(dname) 
{

// Create a connection to the file.
  var Connect = new XMLHttpRequest();
  // Define which file to open and
  // send the request.
  Connect.open("GET", "timetable.xml", false);
  Connect.setRequestHeader("Content-Type", "text/xml");
  Connect.send(null);
  // Place the response in an XML document.
  var TheDocument = Connect.responseXML;
  return TheDocument;
  // Place the root node in an element.
  /*var Customers = TheDocument.childNodes[0];
  // Retrieve each customer in turn.
  for (var i = 0; i < Customers.children.length; i++)
  {
   var Customer = Customers.children[i];
   // Access each of the data values.
   var Name = Customer.getElementsByTagName("Name");
   var Age = Customer.getElementsByTagName("Age");
   var Color = Customer.getElementsByTagName(
     "FavoriteColor");
   // Write the data to the page.
   document.write("<tr><td>");
   document.write(Name[0].textContent.toString());
   document.write("</td><td>");
   document.write(Age[0].textContent.toString());
   document.write("</td><td>");
   document.write(Color[0].textContent.toString());
   document.write("</td></tr>");
 }
try //Internet Explorer
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  }
catch(e)
  {
  try //Firefox, Mozilla, Opera, etc.
    {
    xmlDoc=document.implementation.createDocument("","",null);
    }
  catch(e) {alert(e.message)}
  }
try 
  {
  xmlDoc.async=false;
  xmlDoc.load(dname);
  return(xmlDoc);
  }
catch(e) {alert(e.message)}
return(null);*/
}
