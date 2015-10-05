module.exports = {
	compile: {							
	    options: {
			handlebarsPath: 'lib/handlebars-v2.0.0.js',
	      templateName: function(sourceFile) {			
	        return sourceFile.replace(/templates\//, '');
	      }
	    },
	    files: {
	      "dist/templates.js": "templates/**/*.hbs"
	    }
	}
};
