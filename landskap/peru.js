// SPDX-License-Identifier: CC-BY-4.0.

let busy = false
let index = 0
let lands = [
	{id:"Arequipa"},
	{id:"Ancash"},
	{id:"Apurímac"},
	{id:"Ica"},
	{id:"Lima"},
	{id:"Ayacucho"},
	{id:"Piura"},
	{id:"Lambayeque"},
	{id:"Tumbes"},
	{id:"Tacna"},
	{id:"Puno"},
	{id:"Huancavelica"},
	{id:"Cuzco"},
	{id:"Junín"},
	{id:"Ucayali"},
	{id:"Pasco"},
	{id:"Huánuco"},
	{id:"San Martín"},
	{id:"Cajamarca"},
	{id:"Amazonas"},
	{id:"La Libertad"},
	{id:"Loreto"},
	{id:"Moquegua"},
	{id:"Madre de Dios"}
]

function shuffle() {
	for (i = 0; i < 25; i++) {
		i1 = Math.round(Math.random() * 24 - 0.5)
		i2 = Math.round(Math.random() * 24 - 0.5)
		tmp = lands[i1]
		lands[i1] = lands[i2]
		lands[i2] = tmp
	}
}
function load_table() {
	index = 0 
	shuffle()
	tc = '<tr id="tr0"><td><img src="/assets/Q-arrow_54x40.png"/></td><td class="select">'
		+ lands[0].id  + '</td></tr>'
	for (i = 1; i < 24; i++) {
		tc = tc + '<tr id="tr' + i 
			+ '"><td><img src="/assets/qg16x16.png"/></td><td>' 
			+ lands[i].id + '</td></tr>' 
	}
	document.getElementById('landq1').innerHTML = tc
}
// Called when a SVG path is clicked
function lselect(e) {
	if (index > 24 || busy) return
	const tr = document.getElementById("tr" + index) // Table row
	if (e.target.id == lands[index].id) {
		const c = '<td><img src="/assets/yes16x16.png"/></td><td>'
			  + lands[index].id  + '</td>'
		tr.innerHTML = c
		selectnext()		
	} else {
		busy = true		
		const c = '<td><img src="/assets/no16x16.png"/></td><td>'
			+ lands[index].id  + '</td>'
		const o = document.getElementById(lands[index].id)
		o.setAttribute('fill', '#707070')
		setTimeout(function() {
			o.setAttribute('fill', '#fefee9')
			tr.innerHTML = c
			selectnext()
			busy = false
		}, 500)
	}
}
function selectnext() {
	index++
	if (index > 23) return
	const c =
		'<td><img src="/assets/Q-arrow_54x40.png"/></td><td class="select">'
		+ lands[index].id  + '</td>'
	const id = "tr" + index
	document.getElementById(id).innerHTML = c
}
load_table()
