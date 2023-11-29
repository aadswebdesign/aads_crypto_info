/** templates/tabs_template_2.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Dutch	
 */
export async function tabsTemplateTwo(){
	const template = `
		<details class='page-tab tab-one open-down relative'>
			<summary class='to-down-caret relative' title='Open'>MLM</summary>
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