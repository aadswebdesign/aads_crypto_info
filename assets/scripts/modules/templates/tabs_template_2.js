/** templates/tabs_template_2.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Dutch	
 */
export async function tabsTemplateTwo(){
	const template = `
		<details class='page-tab tab-two open-down relative'>
			<summary class='to-down-caret relative' title='Open'>Blockchain</summary>
			<div class='details-spacer fixed'></div>
			<div class='details-content absolute display-flex'>
				<h3>Wat is een blockchain?</h3>
				<p>Een blockchain is een gedistribueerde grootboektechnologie (DLT) die veilige, transparante en fraudebestendige transacties mogelijk maakt. Het is een gedecentraliseerde database die wordt gedeeld door een netwerk van computers. Dit betekent dat er geen single point offail is en dat de gegevens zeer moeilijk te hacken zijn.</p>
				<p><strong>Blockchain</strong> is vooral bekend vanwege het gebruik ervan in cryptocurrency, maar heeft het potentieel om een revolutie teweeg te brengen in veel andere industrieën. Hier zijn enkele van de belangrijkste voordelen van blockchain:</p>
				<ul class='relative' role='list'>
					<li class='list-disc relative'><strong class='topic'>Beveiliging:</strong><strong>Blockchain</strong> is zeer veilig omdat het gedecentraliseerd is en gebruik maakt van cryptografie. Dit betekent dat de gegevens zeer moeilijk te hacken of te manipuleren zijn.</li>
					<li class='list-disc relative'><strong class='topic'>Transparantie:</strong><strong>Blockchain</strong> is transparant omdat alle transacties in het grootboek worden vastgelegd en voor iedereen zichtbaar zijn. Dit maakt het mogelijk om de geschiedenis van elk actief of elke transactie te volgen.</li>
					<li class='list-disc relative'><strong class='topic'>Efficiëntie:</strong><strong>Blockchain</strong> kan zeer efficiënt zijn omdat het de noodzaak voor tussenpersonen kan wegnemen. Dit kan tijd en geld besparen.</li>
				</ul>
				<p><strong>Blockchain</strong> is een relatief nieuwe technologie, maar heeft de potentie om een grote impact te hebben op veel industrieën. Enkele van de mogelijke gebruiksscenario’s voor blockchain zijn:</p>
				<ul class='relative' role='list'>
					<li class='list-disc relative'><strong class='topic'>Financiën:</strong><strong>Blockchain</strong> kan worden gebruikt om veiligere en efficiëntere financiële systemen te creëren. Het kan bijvoorbeeld worden gebruikt om betalingen uit te voeren, activa op te slaan en transacties te volgen.</li>
					<li class='list-disc relative'><strong class='topic'>Voorraadketenbeheer:</strong><strong>Blockchain</strong> kan worden gebruikt om de beweging van goederen en producten door een toeleveringsketen te volgen. Dit kan helpen de efficiëntie te verbeteren en de kosten te verlagen.</li>
					<li class='list-disc relative'><strong class='topic'>Gezondheidszorg:</strong><strong>Blockchain</strong> kan worden gebruikt voor het opslaan en delen van medische dossiers. Dit kan bijdragen aan het verbeteren van de patiëntenzorg en het verlagen van de kosten.</li>
					<li class='list-disc relative'><strong class='topic'>Stemmen:</strong><strong>Blockchain</strong> kan worden gebruikt om veiligere en transparantere stemsystemen te creëren. Dit kan fraude helpen verminderen en het vertrouwen van de kiezers vergroten.</li>
				</ul>
				<p><strong>Blockchain</strong> is nog in ontwikkeling, maar heeft het potentieel om een revolutie teweeg te brengen in veel sectoren. Het is een technologie waar we allemaal naar moeten kijken.</p>
			</div>
		</details>	
		<details class='page-tab tab-one open-down relative'>
			<summary class='to-down-caret relative' title='Open'>MLM</summary>
			<div class='details-spacer fixed'></div>
			<div class='details-content absolute display-flex'>
				<h3>MultiLevelMarketing,</h3>
				<p>Voor dit blockchainbedrijf was het nooit de bedoeling om een permanent <strong>MLM</strong> op te zetten.</p>
				<p>Het doel was uitsluitend om de munt op de markt te krijgen en alleen dat.</p>
				<h3>Projecten,</h3>
				<p>Dit wordt vervangen door duurzame projecten.</p>
				<p>Projecten die op de blockchain gaan draaien en die de meerwaarde van de CPCoin zullen gaan stuwen.</p>
			</div>
		</details>	
	`;
	return await template;
}