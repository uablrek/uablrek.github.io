---
layout: post
language: svenska
title: Atomkraft/kärnkraft - kortfattat
tags: ["energi"]
---


Atomkraft eller kärnkraft (nuclear power) framhålls som ett billigt
"grönt" sätt att producera el. Billigt och grönt kan diskuteras men
ingen påstår att kärnkraft är enkelt. Denna post är medvetet
kortfattad. Det finns *massor* mer att lära, men detta är ett minimum
enligt min åsikt. Antagligen vet du mer än vår energiminister om
kärnkraft när du läst detta.

Min egen åsikt är att man ska satsa på SMR'er, helst Thorium-reaktorer.


## Uran

I stort sett alla kommersiella kärnkraftverk använder <sup>235</sup>U
som bränsle.

Uran finns i jordskorpan som <sup>238</sup>U och <sup>235</sup>U med
halveringstid 4,51 miljarder respektive 710 miljoner år. Endast
<sup>235</sup>U är klyvbart (fissile) och kan användas som
kärnbränsle. Pga den kortare halveringstiden utgörs endast `0,72%` av
det naturliga uranet av <sup>235</sup>U. För att kunna användas som
kärnbränsle måste uranet [anrikas](
https://sv.wikipedia.org/wiki/Urananrikning), dvs man måste få upp
koncentrationen av <sup>235</sup>U till ca 3-5%. Detta görs med
centrifugering och är komplicerat och kostsamt, dessutom reglerat och
begränsat för att förhindra kärnvapenspridning (nuclear
proliferation).

Uranproducenter (ej anrikat):

<img src="https://world-nuclear.org/images/articles/7642d501-8b37-445d-98b1-60a3fe5a1b69.png" />

<small>(källa https://world-nuclear.org/information-library/nuclear-fuel-cycle/mining-of-uranium/world-uranium-mining-production)</small>

Som du kan se överskrider behovet (requirements) produktionen. Glappet
fylls genom att man utarmar (deplete) kärnstridsspetsar, som har upp
emot 90% koncentration av <sup>235</sup>U, till civilt kärnbränsle.

<sup>235</sup>U är en ändlig resurs. Kända reserver beräknas räcka ca
90 år med nuvarande förbrukning. Med breed-reaktorer kan man dock tex
använda Thorium som beräknas räcka väl över 10000 år.

Sverige köper uran från tex Kanada, Kazakstan och
Australien. Anrikning sker i Europa, tex Frankrike.  Sverige har egna
stora [uranfyndigheter](https://www.sgu.se/samhallsplanering/energi/uran/)
i form av skiffer. Men dessa är inte lönsamma att bryta, och kanske
aldrig blir det.


## Konventionella kärnreaktorer

Majoriteten av existerande, och nya, reaktorer är [lättvatten
reaktorer](https://sv.wikipedia.org/wiki/L%C3%A4ttvattenreaktor)
(lättvatten=vanligt vatten). Bränslet är anrikat uran. De finns i två
typer, [kokvattenreaktorer](
https://sv.wikipedia.org/wiki/Kokvattenreaktor) (BWR) och
[tryckvattenreaktor](https://sv.wikipedia.org/wiki/Tryckvattenreaktor) (PWR).
Nybyggda reaktorer är nästan alltid tryckvattenreaktor.

De flesta producerar runt 1GW el (GWe). Men med en verkningsgrad på ca
35% är den totala effekten (termisk effekt) ca 3 ggr
större. Överskottet måste kylas bort av vatten eller [kyltorn](
https://sv.wikipedia.org/wiki/Kyltorn).


## Nya kärnreaktorer

Man hoppas jätte-jätte-mycket på 4'de generationens ([generation IV](
https://en.wikipedia.org/wiki/Generation_IV_reactor)) reaktorer och
Small Modular Reactors (SMR) men dom finns endast på
experiment/prototyp-stadiet. Vägen till storskalig (och lönsam) drift
är troligen *mycket* längre än "kärnkraftsindustin" påstår.

### Breed-reaktorer

Breed-reaktorer
([breeder-reaktor](https://en.wikipedia.org/wiki/Breeder_reactor))
kallas även "snabbreaktorer" för att neutronerna i kedjereaktionen rör
sig snabbt. I konventionella kärnreaktorer bromsas neutronerna av en
[moderator](https://sv.wikipedia.org/wiki/Moderator_(fysik)) (tex vatten).

I en reaktor skapas andra klyvbara isotoper än <sup>235</sup>U under
processen. Tex, i en vanlig reaktor skapas klyvbart Plutonium från
<sup>238</sup>U. En breed-reaktor är gjord så att det skapas mer
klyvbart bränsle (plutonium) än som förbrukas (så länge tillräckligt
med <sup>238</sup>U finns). Så en breed-reaktor behöver inte laddas
om, och man kan använda <sup>238</sup>U. Kanon!

Tyvärr är breed-reaktorer *mycket* mer komplicerade än "vanliga"
reaktorer.

### Thorium-reaktorer

En Thorium-reaktor är en sorts breed-reaktor som skapar klyvbart
<sup>233</sup>U från Thorium, istället för Plutonium från
<sup>238</sup>U. En stor fördel är att det inte går (åtminstonne är
extremt svårt) att bygga atombomber av bränslet. Med Plutonium är det
lättare. 6 kilo plutonium räckte för att förinta Nagasaki.

IMHO är Thorium-reaktorer vad världen borde satsa på istället för militär
upprustning och AI. Kina leder utvecklingen och har tom annonserat ett
atomdrivet containerfartyg med Thorium-reaktor. Indien, som har
världens största Thorium reserver, är också i experimenttagen.


### SMR

Med Small Modular Reactor (SMR) menas en liten reaktor som kan byggas
i en fabrik och installeras som moduler. "Liten" i det här fallet
menas mindre än 300 MWe (elektrisk effekt). En SMR *behöver* inte vara
en breed-reaktor men *kan* vara det.

SMR'er är ofta "high-temperature", dvs har mycket högre
arbetstemperatur än lättvatten-reaktorer. Detta kräver ett annat
kylmedium än vatten, tex gas eller flytande metall. En (potentiellt)
stor fördel med det är att man kan använda dom i processer som kräver
hög temperatur och där el inte kan användas. Om det är värmen man vill
åt (thermal effect) så rusar verkningsgraden upp, säkert en bit över
90%.


### MOX-bränsle

Man kan vilja använda förbrukat kärnbränsle "ett varv till" och göra
sig av med plutonium på något vettigt sätt. Svaret är [MOX-bränsle](
https://en.wikipedia.org/wiki/MOX_fuel) (Mixed oxide fuel). Man
blandar uran (naturligt eller upparbetat) med plutonium. MOX-bränsle
kan användas både i lättvatten-reaktorer och breed-reaktorer.

Ett problem är att plutonium kan användas till bomber som nämnts
tidigare. Det finns dock ganska mycket plutonium som man inte vill
göra bomber av (men det kan ju ändras i "det nya geopolitiska läget"),
tex i [Sellafield](
https://www.sverigesnatur.org/arkiv/har-ligger-850-kilo-svenskt-plutonium/).


## Att bygga/köpa nya kärnkraftverk

*Att bygga nya konventionella kärnkraftverk går inte fort!*

Kina och Ryssland verkar bli klara med sina byggen ganska fort, ibland
tom enligt plan. Kanske motiverar dom byggena [Darth Vader style](
https://youtu.be/Vi5Ti1sDnFw?si=vUAuXWy5CvZ0e_V0). I Europa går det
inte så bra. 

Finska [Olkiluoto 3](
https://sv.wikipedia.org/wiki/Olkiluoto_k%C3%A4rnkraftverk) påbörjades
2005 med planerad driftstart 2009 men kunde startas först 2023!
Kostnaden beräknades till 3,2 miljarder EUR men notan hamnade på 11
miljarder EUR! En reaktor av samma typ (EPR) började byggas 2007 i
[Frankrike](https://en.wikipedia.org/wiki/Flamanville_Nuclear_Power_Plant)
och blev klar 2024, [men är inte i drift](
https://www.reuters.com/business/energy/newest-french-reactor-faces-further-delays-due-new-issues-2025-04-11/)
(April 2025). Den beräknades kosta 3,3 miljarder EUR, men notan är nu
uppe i 13,2 miljarder EUR. Detta är de två nyaste reaktorerna i EU
jag kunde hitta.


[Hinkley Point C nuclear power station](
https://en.wikipedia.org/wiki/Hinkley_Point_C_nuclear_power_station)
påbörjades 2017 och skulle vara klart 2025. Senaste bedömningen är att
en reaktor (av två) blir klar 2029-2031. Kostnaden som beräknades till
18 miljarder pund väntas bli 31-35 miljarder, dvs "bara" en
fördubbling (än så länge). Fortsättning följer...

Det finns inget som talar för att det skulle gå bättre för Sverige.

Ett alternativ Turkiet har valt är att beställa ett Build-Own-Operate
(BOO) kraftverk från Ryssland. Kraftverket [Akkuyu](
https://en.wikipedia.org/wiki/Akkuyu_Nuclear_Power_Plant) började
byggas 2018 och första reaktorn (av fyra) skulle vara klar 2023 men
beräknas tas i drift 2025.

En fördel med BOO är att förseningar och fördyringar är leverantörens
bekymmer, inte skattebetalarnas. Om Sverige ska köpa nya
konventionella kärnkraftverk bör det vara som BOO. Inte av Ryssland
kanske, men kanske av ett konsortium.

Allmänt tycker jag dock att Sverige inte ska köpa konventionella
kärnkraftverk utan satsa på SMR'er. Dom finns inte ännu men eftersom
byggtiden för konventionella kärnkraftverk är så lång kan dom finnas
när dom står klara. Villkoren ska vara betalning vid leverans.

Staten kan också investera i vårt inhemska SMR/breed-reaktor företag
[Blykalla](https://www.blykalla.com/) (alltså inte skänka pengar till,
utan investera i).



## Övrigt

Här sammanfattas några aspekter summariskt. Anledningen kan vara att
dom är ointressanta (fusionskraft) eller skulle kräva en egen post
(tex olyckor/avfall), eller som bara inte passar in någon annanstans.

Allt kärnbränsle blir till slut radioaktivt avfall. Hur man ska ta
hand om det har ingen något bra svar på. Finland har antagligen kommit
längst tätt följt av Sverige.

Allvarliga olyckor har förekommit som alla vet. Dock har dom orsakat
förvånansvärt få dödsfall. Jag tror terrorism och sabotage är större
hot. Generation IV reaktorer skall vara "säkra".

Fusionskraft är det som drivit solen i mer än 4 miljarder år. I solens
kärna är trycket enormt och därför räcker 15 miljoner °C för
fusion. På jorden krävs ca 150 miljoner °C och väteisotopen tritium
som inte finns naturligt. Detta gör det *extremt* komplicerat (dyrt)
och någon SMR är inte att tänka på. Nej, satsa pengarna på
Thorium-reaktorer istället.

Det har spekulerats i att AI-företag skulle bygga egna kärnkraftverk,
kanske SMR, för att driva sina data-center. Att bygga ett
kärnkraftverk tar emellertid *lång tid* och SMR finns endast som
prototyper. Jag tror man kommer bygga gaskraftverk istället.

Om man vill veta mer om fysiken rekommenderas kapitlet "Nuclear
Energy" ur [Energy and Human Ambitions on a Finite Planet](
https://escholarship.org/uc/item/9js5291m) av Tom Murphy. F.ö
rekommenderar jag *hela boken* om man är naturvetenskapligt lagd.
