/** assets/scrips/factory/handlers.js */
import * as FT from './functions.js';
import {template_Actions} from './../modules/callbacks/callback_0.js';
export async function detailsToggleHandler(_element,__parent,_cb_open = null,_cb_close = null){
	if(_element){
		const cb_open = await _cb_open;
		const cb_close = await _cb_close;
		const _parent = await FT.elQuery(__parent);
		const _elements = await FT.elQuery(_element,true,_parent);
		_elements.forEach(detail => {
			detail.addEventListener('toggle', (event) => {
				if(detail.open){
					_elements.forEach((detail) => {
						cb_open();
						if (detail !== event.target && detail.open) {
							detail.open = false
						}
					})
				}else{
					cb_close();
				}
			});			
		});
	}
}
export async function detailsToggleCss(_element,__parent,_cb_open,_cb_close){
	if(_element){
		const cb_open = _cb_open;
		const cb_close = _cb_close;
		const _parent = await FT.elQuery(__parent);
		const get_el_query = await FT.elQuery;
		const _elements = await FT.elQuery(_element,true,_parent);
		_elements.forEach(elem => {
			elem.addEventListener('toggle', (event) => {
				const summary = elem.querySelector('summary');
				if(elem.open){
					_elements.forEach((elem) => {
						summary.classList.add(cb_close);
						summary.classList.remove(cb_open);
						summary.title = 'Close';
						if (elem !== event.target && elem.open) {
							elem.open = false
						}
					})
				}else{
						summary.classList.remove(cb_close);
						summary.classList.add(cb_open);
						summary.title = 'Open';
				}
			});			
		});
	}
}
export async function pagingHandler(_object_args,__hashes = [..._hashes],__data=[..._data],_log = false){
	const object_args = new Map([['objects',_object_args]]) 
	const obj= object_args.get('objects');
	const target_class = await FT.elQuery(obj.target_class);
	const page = await FT.elQuery(obj.page);
	const block = obj.blocks;
	const ftr_block = await FT.elQuery(block.footer); 
	const hdr_block = await FT.elQuery(block.header); 
	const tab_block = await FT.elQuery(block.page_tabs); 
	const hashes = new Map(__hashes);
	const data = new Map(__data);
	if(_log === true){
		console.log({target_class});
		console.log({page});
		console.log({ftr_block});
		console.log({hdr_block});
		console.table(hashes);
		console.table(data);
	}
	let selected_tab;
	const update = async (pageId) => {
		const currentTab = await FT.elQuery(".active", null, target_class);
		if(currentTab){
			if(_log === true){
				console.log({currentTab});
				console.time(currentTab);
				console.timeLog(currentTab);
				console.timeEnd(currentTab);
			}
			if (currentTab.id !== pageId) currentTab.classList.remove("active");
			const selectedTab = await FT.getIdHelper(pageId);
			selectedTab.classList.add("active");
		}
		const entry = data.get(pageId);
		if (entry) {
			// update the URL
        	history.pushState(null, "", entry.url);
			await FT.setContent(page, entry.content);
			await FT.setContent(ftr_block, entry.ftr_content);
			await FT.setContent(hdr_block, entry.hdr_content);
			await FT.setContent(tab_block, entry.tab_content);
			await entry.callback({...obj},pageId);
		}
	};
	if(target_class){
		target_class.addEventListener('click', function(event){
			if(true !== _log){
				console.log(event.target.id);
			}
			if (!event.target.id){
				return;
			}
			update(event.target.id);
		});	
	}
	const pageId = hashes.get(window.location.hash);
	if (pageId){
		await update(pageId);
	}else{
		await template_Actions({...obj},pageId);
	}
}
export async function resizeHandler(_resize_args,_resize_data,_resize_entries,_resize_data_after,log = false){
	const observer = async ()=>{
		if(window.ResizeObserver) {
			const resize_args = new Map(_resize_args);
			if(_resize_data){
				_resize_data(resize_args,log);
			}
			const divElem = resize_args.get('div_elem');
			const checkboxElem = resize_args.get('cb_elem'); 
			const resizeObserver = new ResizeObserver((entries)=>{
				for (const entry of entries) {
					if(_resize_entries){
						_resize_entries(resize_args,entry,log);
					}
					if(true === log){
						console.log('Size changed');
					}
				}
			});
			if(_resize_data_after){
				_resize_data_after(resizeObserver,resize_args,log);
			}
		}else{
			console.log('Resize observer not supported!');
		}
	};
	await observer();
}	