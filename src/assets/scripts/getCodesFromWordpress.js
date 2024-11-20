/**
 * Obtener los codigos y certificados de la pagina de wordpress
 * @returns 
 */

function getDataJson() {
	let tabs = document.querySelectorAll(".elementor-tab-title")
	let certicates = []
	for(let tab of tabs) {
		const tbaName = tab.children[1].innerText;

		const idContent = tab.id.replace("title", 'content')
		const contentTab =  document.querySelector(`#${idContent}`)

		const table =  contentTab.children[0]
		const tds = table.querySelectorAll("td")

		certicates.push({
			title: tbaName,
			codes: Array.from(tds).map((td) => td.innerText)
		})
		}
	return certicates;
	}
	