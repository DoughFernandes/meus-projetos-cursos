function pesquisarDespesa(){
	 
	let ano  = document.getElementById("ano").value
	let mes = document.getElementById("mes").value
	let dia = document.getElementById("dia").value
	let tipo = document.getElementById("tipo").value
	let descricao = document.getElementById("descricao").value
	let valor = document.getElementById("valor").value

	let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

	let despesas = bd.pesquisar(despesa)
	 
	this.carregaListaDespesas(despesas, true)

 }

