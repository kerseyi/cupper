+++
title = "Tables"
toc = true
tags = ["table, grid, sorting"]
+++

## WCAG Criteria
{{< wcag include="1.3.1, 4.1.1, 4.1.2" >}}

## Techniques

{{< snippet file="techniques/h43.md" >}}


 {{< rawhtml >}}
 <style>
 	th {
 		overflow-wrap: break-word;

 	}
 </style>
	<table>
   <tr>
     <th rowspan="2" id="h">Homework</th>
     <th colspan="3" id="e">Exams</th>
     <th colspan="3" id="p">Projects</th>
   </tr>
   <tr>
     <th id="e1" headers="e">1</th>
     <th id="e2" headers="e">2</th>
     <th id="ef" headers="e">Final</th>
     <th id="p1" headers="p">1</th>
     <th id="p2" headers="p">2</th>
     <th id="pf" headers="p">Final</th>
   </tr>
   <tr>
    <td headers="h">15%</td>
    <td headers="e e1">15%</td>
    <td headers="e e2">15%</td>
    <td headers="e ef">20%</td>
    <td headers="p p1">10%</td>
    <td headers="p p2">10%</td>
    <td headers="p pf">15%</td>
   </tr>
  </table>
{{< /rawhtml >}}

## References

 - [Inclusive Components](https://inclusive-components.design/data-tables/)
 - [It's still OK to use Tables!](https://adrianroselli.com/2017/11/hey-its-still-ok-to-use-tables.html)

