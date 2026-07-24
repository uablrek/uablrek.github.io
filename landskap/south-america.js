// SPDX-License-Identifier: CC-BY-4.0.

let busy = false
let index = 0
let lands = [
	{id:"polyline10", land:"Brazil"},
	{id:"polyline12", land:"Colombia"},
	{id:"polyline14", land:"Venezuela"},
	{id:"polyline16", land:"Ecuador"},
	{id:"polyline18", land:"Perú"},
	{id:"polyline20", land:"Guiana"},
	{id:"polyline22", land:"Suriname"},
	{id:"polyline24", land:"French Guiana"},
	{id:"polyline26", land:"Bolivia"},
	{id:"polyline28", land:"Paraguay"},
	{id:"polyline30", land:"Chile"},
	{id:"polyline48", land:"Argentina"},
	{id:"polyline52", land:"Uruguay"},
]
const len = lands.length
const max = len - 1
const dbg = '#fefee9'
function shuffle() {
	for (i = 0; i < len; i++) {
		i1 = Math.round(Math.random() * len - 0.5)
		i2 = Math.round(Math.random() * len - 0.5)
		tmp = lands[i1]
		lands[i1] = lands[i2]
		lands[i2] = tmp
	}
}
function load_table() {
	index = 0 
	shuffle()
	tc = '<tr id="tr0"><td><img src="images/Q-arrow_54x40.png"/></td><td class="select">'
		+ lands[0].land  + '</td></tr>'
	for (i = 1; i < len; i++) {
		tc = tc + '<tr id="tr' + i 
			+ '"><td><img src="images/qg16x16.png"/></td><td>' 
			+ lands[i].land + '</td></tr>' 
	}
	document.getElementById('landq1').innerHTML = tc
}
// Called when a SVG path is clicked
function lselect(e) {
	if (index > max || busy) return
	const tr = document.getElementById("tr" + index) // Table row
	if (e.target.id == lands[index].id) {
		const c = '<td><img src="images/yes16x16.png"/></td><td>'
			  + lands[index].land  + '</td>'
		tr.innerHTML = c
		selectnext()		
	} else {
		busy = true		
		const c = '<td><img src="images/no16x16.png"/></td><td>'
			+ lands[index].land  + '</td>'
		const o = document.getElementById(lands[index].id)
		o.setAttribute('fill', '#707070')
		setTimeout(function() {
			o.setAttribute('fill', dbg)
			tr.innerHTML = c
			selectnext()
			busy = false
		}, 500)
	}
}
function selectnext() {
	index++
	if (index > max) return
	const c =
		'<td><img src="images//Q-arrow_54x40.png"/></td><td class="select">'
		+ lands[index].land  + '</td>'
	const id = "tr" + index
	document.getElementById(id).innerHTML = c
}
// Add "onclick()" to all ID'd elements
for (const i of lands) {
	const elem = document.getElementById(i.id)
	elem.onclick = lselect
	elem.setAttribute('fill', dbg)
	console.log(i.id)
}
load_table()
