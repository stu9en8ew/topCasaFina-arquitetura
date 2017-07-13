// Acesso ao evento de show.bs.collapse do bootstrap
$('#collapse-navbar').on('show.bs.collapse', function(){

	// Acesso a classe do banner para movimentá-lo ao mostrar o menu
	$('.topCasaFina-banner').css('transform','translate(-50%, 15%)')
});


// Acesso ao evento de hide.bs.collapse do bootstrap
$('#collapse-navbar').on('hide.bs.collapse', function(){

	// Acesso a classe do banner para movimentá-lo ao mostrar o menu
	$('.topCasaFina-banner').css('transform','translate(-50%, -50%)')
});