// SPDX-License-Identifier: CC-BY-4.0.
// https://stackoverflow.com/questions/14068031/embedding-external-svg-in-html-for-javascript-manipulation
let index = 0
let busy = false
let lands = [
    {id:"Lappland", name:"Lappland"},
    {id:"Norrbotten", name:"Norrbotten"},
    {id:"Vasterbotten", name:"Västerbotten"},
    {id:"Jamtland", name:"Jämtland"},
    {id:"Angermanland", name:"Ångermanland"},
    {id:"Harjedalen", name:"Härjedalen"},
    {id:"Medelpad", name:"Medelpad"},
    {id:"Halsingland", name:"Hälsingland"},
    {id:"Dalarna", name:"Dalarna"},
    {id:"Gastrikland", name:"Gästrikland"},
    {id:"Vastmanland", name:"Västmanland"},
    {id:"Uppland", name:"Uppland"},
    {id:"Varmland", name:"Värmland"},
    {id:"Narke", name:"Närke"},
    {id:"Sodermanland", name:"Södermanland"},
    {id:"Bohuslan", name:"Bohuslän"},
    {id:"Dalsland", name:"Dalsland"},
    {id:"Vastergotland", name:"Västergötland"},
    {id:"Ostergotland", name:"Östergötland"},
    {id:"Halland", name:"Halland"},
    {id:"Smaland", name:"Småland"},
    {id:"Oland", name:"Öland"},
    {id:"Gotland", name:"Gotland"},
    {id:"Skane", name:"Skåne"},
    {id:"Blekinge", name:"Blekinge"}
]
function shuffle() {
    for (i = 0; i < 25; i++) {
        i1 = Math.round(Math.random() * 25 - 0.5)
        i2 = Math.round(Math.random() * 25 - 0.5)
        tmp = lands[i1]
        lands[i1] = lands[i2]
        lands[i2] = tmp
    }
}
function load_table() {
    index = 0 
    shuffle()
    tc = '<tr id="tr0"><td><img src="/assets/Q-arrow_54x40.png"/></td><td class="select">'
        + lands[0].name  + '</td></tr>'
    for (i = 1; i < 25; i++) {
        tc = tc + '<tr id="tr' + i 
            + '"><td><img src="/assets/qg16x16.png"/></td><td>' 
            + lands[i].name  + '</td></tr>' 
    }
    document.getElementById('landq1').innerHTML = tc
}
// Called when a SVG path is clicked
function lselect(e) {
    if (index > 24 || busy) return
	const tr = document.getElementById("tr" + index) // Table row
    if (e.target.id == lands[index].id) {
		const c = '<td><img src="/assets/yes16x16.png"/></td><td>'
			+ lands[index].name  + '</td>'
		tr.innerHTML = c
		selectnext()
    } else {
		busy = true
        const c = '<td><img src="/assets/no16x16.png"/></td><td>'
            + lands[index].name  + '</td>'
		const o = document.getElementById(lands[index].id)
		o.setAttribute('fill', 'rgb(200, 200, 170)')
		setTimeout(function() {
			o.setAttribute('fill', 'rgb(239, 229, 197)')
			tr.innerHTML = c
			selectnext()
			busy = false
		}, 500)
    }
}
function selectnext() {
    index++
    if (index > 24) return
    c = '<td><img src="/assets/Q-arrow_54x40.png"/></td><td class="select">'
        + lands[index].name  + '</td>'
    id = "tr" + index
    document.getElementById(id).innerHTML = c
}
load_table()
