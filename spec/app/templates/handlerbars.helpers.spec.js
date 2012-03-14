
describe( 'Custom Handlebars Helpers', function()
{
	// define a reference to the underlying helpers object.
	var helpers = Handlebars.helpers;
	
    describe( 'The "enhance" markup helper', function()
    {
        it ( 'should be registered', function()
        {
            expect( helpers.enhance ).toBeDefined();
        });
        
        it ( 'should return a Handlebars.SafeString', function()
        {
            var isSafeString = helpers.enhance("") instanceof Handlebars.SafeString;
            expect( isSafeString).toBeTruthy();
        });
        
        it ( 'should preserve existing markup', function()
        {
        	var expected = '<strong>Some unescaped markup</strong> and a <a href="#">link</a>';
        	var actual   = helpers.enhance( expected ).string;
        	
            expect( actual ).toEqual( expected );
        });
        
        it ( 'should replace URLs with anchor tags', function()
        {
        	var expected = 'Check out <a href="http://handlebarsjs.com" target="_blank">http://handlebarsjs.com</a>';
        	    actual   = helpers.enhance( 'Check out http://handlebarsjs.com' );
        	
            expect( actual.string ).toEqual( expected );
        });
    })
});