(function()
{
	var _reporter      = new jasmine.BootstrapReporter(),
		_environment   = jasmine.getEnv(),
		_currentOnload = window.onload;
	
    _environment.updateInterval = 1000;
    _environment.addReporter( _reporter );
    _environment.specFilter = function( spec )
    {
        return _reporter.specFilter( spec );
    };

    window.onload = function()
    {
        if ( _currentOnload )
        {
            _currentOnload();
        }
        _environment.execute();
    };
})();
