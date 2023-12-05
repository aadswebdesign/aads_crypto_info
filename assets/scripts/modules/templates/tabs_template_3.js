/** templates/tabs_template_3.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: Thai	
 */
export async function tabsTemplateThree(){
	const template = `
		<details class='page-tab tab-two open-down relative'>
			<summary class='to-down-caret relative' title='Open'>Blockchain</summary>
			<div class='details-spacer fixed'></div>
			<div class='details-content absolute display-flex'>
				<h3>อีบล็อคเชนคืออะไร?</h3>
				<p>บล็อกเชนเป็นเทคโนโลยีบัญชีแยกประเภทแบบกระจาย (DLT) ที่ช่วยให้การทำธุรกรรมมีความปลอดภัย โปร่งใส และป้องกันการงัดแงะ เป็นฐานข้อมูลแบบกระจายอำนาจที่ใช้ร่วมกันระหว่างเครือข่ายคอมพิวเตอร์ ซึ่งหมายความว่าไม่มีจุดล้มเหลวแม้แต่จุดเดียว และข้อมูลก็ถูกแฮ็กได้ยากมาก</p>
				<p>บล็อคเชนเป็นที่รู้จักกันดีในการใชงานในสกุลเงินดิจิทัล แต่ก็มีศักยภาพที่จะปฏิวัติอุตสาหกรรมอื่นๆ อีกมากมาย นี่คือประโยชน์หลักบางประการของบล็อคเชน:</p>
				<ul class='relative' role='list'>
					<li class='list-disc relative'><strong class='topic'>ความปลอดภัย:</strong><strong>Blockchain</strong> มีความปลอดภัยมากเนื่องจากมีการกระจายอำนาจและใช้การเข้ารหัส ซึ่งหมายความว่าข้อมูลนั้นถูกแฮ็กหรือแก้ไขได้ยาก.</li>
					<li class='list-disc relative'><strong class='topic'>ความโปร่งใส:</strong><strong>Blockchain</strong> มีความโปร่งใสเนื่องจากธุรกรรมทั้งหมดจะถูกบันทึกไว้ในบัญชีแยกประเภทและทุกคนสามารถเห็นได้ ทำให้สามารถติดตามประวัติของสินทรัพย์หรือธุรกรรมใดๆ ได้.</li>
					<li class='list-disc relative'><strong class='topic'>ประสิทธิภาพ:</strong><strong>Blockchain</strong> สามารถมีประสิทธิภาพได้มากเพราะสามารถขจัดความจำเป็นในการมีคนกลางได้ นี้สามารถประหยัดเวลาและเงิน.</li>
				</ul>
				<p><strong>Blockchain</strong> เป็นเทคโนโลยีที่ค่อนข้างใหม่ แต่มีศักยภาพที่จะส่งผลกระทบสำคัญต่อหลายอุตสาหกรรม กรณีการใช้งานที่เป็นไปได้บางประการสำหรับบล็อคเชน ได้แก่:</p>
				<ul class='relative' role='list'>
					<li class='list-disc relative'><strong class='topic'>การเงิน:</strong><strong>Blockchain</strong> สามารถใช้เพื่อสร้างระบบการเงินที่ปลอดภัยและมีประสิทธิภาพมากขึ้น ตัวอย่างเช่น สามารถใช้ในการชำระเงิน จัดเก็บสินทรัพย์ และติดตามธุรกรรม.</li>
					<li class='list-disc relative'><strong class='topic'>การจัดการห่วงโซ่อุปทาน:</strong><strong>Blockchain</strong> สามารถใช้ติดตามความเคลื่อนไหวของสินค้าและผลิตภัณฑ์ผ่านห่วงโซ่อุปทาน ซึ่งสามารถช่วยปรับปรุงประสิทธิภาพและลดต้นทุนได้.</li>
					<li class='list-disc relative'><strong class='topic'>ดูแลสุขภาพ:</strong><strong>Blockchain</strong> สามารถใช้จัดเก็บและแบ่งปันเวชระเบียนได้ ซึ่งสามารถช่วยปรับปรุงการดูแลผู้ป่วยและลดต้นทุนได้.</li>
					<li class='list-disc relative'><strong class='topic'>การลงคะแนนเสียง:</strong><strong>Blockchain</strong> สามารถใช้เพื่อสร้างระบบการลงคะแนนที่ปลอดภัยและโปร่งใสมากขึ้น วิธีนี้สามารถช่วยลดการฉ้อโกงและเพิ่มความมั่นใจของผู้มีสิทธิเลือกตงได้.</li>
				</ul>
				<p><strong>Blockchain</strong> ยังอยู่ระหว่างการพัฒนา แต่ก็มีศักยภาพที่จะปฏิวัติอุตสาหกรรมต่างๆ มากมาย เป็นเทคโนโลยีที่เราทุกคนควรจับตามอง</p>
			</div>
		</details>	
		<details class='page-tab tab-one open-down relative'>
			<summary class='to-down-caret relative' title='Open'>MLM</summary>
			<div class='details-spacer fixed'></div>
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