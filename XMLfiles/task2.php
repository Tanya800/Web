
<html>
<head>

<script type="text/javascript" src="loadxmldoc.js"> 
</script>
</head>
<body>
<script type="text/javascript">

xmlDoc = loadXMLDoc("timetable.xml");
x=xmlDoc.getElementsByTagName("subject")[0].childNodes[0];
x.nodeValue="Java programming";

x = xmlDoc.getElementsByTagName("subject");
for (i=0; i<x.length; i++)
{ 
document.write(x[i].childNodes[0].nodeValue);
document.write("<br />");
}
/*
x = xmlDoc.getElementsByTagName("lesson")[0].childNodes;
y = xmlDoc.getElementsByTagName("lesson")[0].firstChild;

for (i = 0; i < x.length; i++)
{
if (y.nodeType == 1)
  {
  document.write(y.nodeName + "<br />");
  }
y=y.nextSibling;
}
*/
</script>
</body>
</html>
