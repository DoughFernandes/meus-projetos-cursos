class Bd {

	constructor() {
		let id = localStorage.getItem('id')

		if(id === null) {
			localStorage.setItem('id', 0)
		}
	}
	// ------------------------------------------------------------------------
	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

	// -----------------------------------------------------------------------
	gravar(d) {
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))

		localStorage.setItem('id', id)
	}

	// ------------------------------------------------------------------------
	recuperarTodosRegistros() {

		//array de despesas
		let despesas = Array()

		let id = localStorage.getItem('id')

		//recuperar todas as despesas cadastradas em localStorage
		for(let i = 1; i <= id; i++) {

			//recuperar a despesa
			let despesa = JSON.parse(localStorage.getItem(i))

			//Pular se haver índices que foram removidos
			if(despesa === null) {
				continue
			}

			despesa.id = i
			despesas.push(despesa)
		}

		return despesas
	}

	// ------------------------------------------------------------------------------
	pesquisar(despesa){

		let despesasFiltradas = Array()
		despesasFiltradas = this.recuperarTodosRegistros()
		//ano
		if(despesa.ano != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
		}
			
		//mes
		if(despesa.mes != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
		}

		//dia
		if(despesa.dia != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
		}

		//tipo
		if(despesa.tipo != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
		}

		//descricao
		if(despesa.descricao != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
		}

		//valor
		if(despesa.valor != ''){
			despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
		}
		
		return despesasFiltradas

	}

	remover(id){
		console.log (localStorage.removeItem(id))
	}
}

let bd = new Bd()