/** templates/tabs_template_1.js */
import * as FT from './../../factory/functions.js';
/**
 * @description: English	
 */
export async function tabsTemplateOne(){
	const template = `
		<details class='page-tab tab-two open-down relative'>
			<summary class='to-down-caret relative' title='Open'>Blockchain</summary>
			<div class='details-content absolute display-flex'>
				<h3 class='text-center'>What is a blockchain?</h3>
				<p>A blockchain is a distributed ledger technology (DLT) that allows for secure, transparent, and tamper-proof transactions. It is a decentralized database that is shared among a network of computers. This means that there is no single point of failure, and the data is very difficult to hack.</p>
				<p><strong>Blockchain</strong> is best known for its use in cryptocurrency, but it has the potential to revolutionize many other industries. Here are some of the key benefits of blockchain:</p>
				<ul class='relative' role='list'>
					<li class='list-disc relative'><strong class='topic'>Security:</strong> <strong>Blockchain</strong> is very secure because it is decentralized and uses cryptography.</li>
					<li class='list-disc relative'><strong class='topic'>Transparency:</strong> <strong>Blockchain</strong> is transparent because all transactions are recorded on the ledger and can be seen by anyone. This makes it possible to track the history of any asset or transaction.</li>
					<li class='list-disc relative'><strong class='topic'>Efficiency:</strong> <strong>Blockchain</strong> can be very efficient because it can eliminate the need for intermediaries. This can save time and money.</li>
				</ul>
				<p><strong>Blockchain</strong> is a relatively new technology, but it has the potential to have a major impact on many industries. Some of the potential use cases for blockchain include:</p>
				<ul class='relative' role='list'>
					<li class='list-disc relative'><strong class='topic'>Finance:</strong> <strong>Blockchain</strong> can be used to create more secure and efficient financial systems. For example, it can be used to make payments, store assets, and track transactions.</li>
					<li class='list-disc relative'><strong class='topic'>Supply chain management:</strong> <strong>Blockchain</strong> can be used to track the movement of goods and products through a supply chain. This can help to improve efficiency and reduce costs.</li>
					<li class='list-disc relative'><strong class='topic'>Healthcare:</strong> <strong>Blockchain</strong> can be used to store and share medical records. This can help to improve patient care and reduce costs.</li>
					<li class='list-disc relative'><strong class='topic'>Voting:</strong> <strong>Blockchain</strong> can be used to create more secure and transparent voting systems. This can help to reduce fraud and increase voter confidence.</li>
				</ul>
				<p><strong>Blockchain</strong> is still under development, but it has the potential to revolutionize many industries. It is a technology that we should all be watching.</p>
			</div>
		</details>	
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