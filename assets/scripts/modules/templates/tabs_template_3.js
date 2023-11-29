/** templates/tabs_template_3.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Thai	
 */
export async function tabsTemplateThree(){
	const template = `
		<details class='page-tab tab-one open-down relative'>
			<summary class='to-down-caret relative' title='Open'>MLM</summary>
			<div class='details-content absolute display-flex'>
				<h3 style='font-size: 1.8rem;'>การตลาดหลายระดับ</h3>
				<p>สำหรับบริษัทบล็อคเชนนี้ ไม่เคยมีความตั้งใจที่จะจัดตั้งโปรแกรม <strong>MLM</strong> แบบถาวร.</p>
				<p>จุดประสงค์คือเพื่อให้เหรียญวิ่งในตลาดเท่านั้นและเพียงเท่านั้น.</p>
				<h3 style='font-size: 1.8rem;'>โครงการ</h3>
				<p>สิ่งนี้จะถูกแทนที่ด้วยโครงการที่ยั่งยืน</p>
				<p>โครงการที่จะดำเนินการบนบล็อกเชนและจะขับเคลื่อนมูลค่าเพิ่มของ CPCoin.</p>
			</div>
		</details>	
	`;
	return await template;
}