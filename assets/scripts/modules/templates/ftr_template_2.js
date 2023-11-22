/** templates/ftr_template_2.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Dutch	
 */
export async function ftrTemplateTwo(){
	const template = `
		<div class='block-one relative'>
			<details class='cookie-details relative'>
				<summary class='to-up-caret relative' title='Open'>Geen Cookies!</summary>
				<div class='details-content absolute display-flex'>
					<i class='cookie-bg relative' title='Afbeelding is van www.svgrepo.com'></i><p>Naast functionele cookies worden er geen andere cookies gebruikt!</p>
				</div>
			</details>
		</div>
		<div class='block-two relative'>
			<small class='my-details relative' title='aad&#39;s webdesign'>awd<time><i> &#169; </i></time></small>
		</div>
	`;
	return await template;
}