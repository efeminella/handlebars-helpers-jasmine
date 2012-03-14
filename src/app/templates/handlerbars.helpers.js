( function() 
{
	// defines markup enhancement regex
	var protocol = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,
	    scheme   = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
			
	/*
	 * Registers a Helper method with handlebars which, given a string of
	 * plain text or existing markup, provides enhancements of plain text 
	 * URLs, converting them to their respective anchor tag equivilents.=
	 */
	Handlebars.registerHelper( 'enhance', function( text )
	{
		text = text.replace( protocol, '<a href="$1" target="_blank">$1</a>');
		text = text.replace( scheme,   '$1<a href="http://$2" target="_blank">$2</a>' );
		
		return new Handlebars.SafeString( text );
	});
}());