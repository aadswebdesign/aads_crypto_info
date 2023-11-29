/** templates/tabs_template_1.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: English	
 */
export async function tabsTemplateOne(){
	const template = `
		<details class='page-tab tab-one open-down relative'>
			<summary class='to-down-caret relative' title='Open'>MLM</summary>
			<div class='details-content absolute display-flex'>
				<h3>MultiLevelMarketing,</h3>
				<p>For this blockchain company, it was never the intention to set up a permanent <strong>MLM</strong> program.</p>
				<p>The purpose was solely to get the coin running in the market and only that.</p>
				<h3>Projects!</h3>
				<p>This will be replaced by sustainable projects.</p>
				<p>Projects that will run on the blockchain and that will drive the added value of the CPCoin.</p>
			</div>
		</details>	
	`;
	return await template;
}