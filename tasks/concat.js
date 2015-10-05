module.exports = {
    options: {		
        separator: '\n'
	},
	dist: {
        src: [
            'app/utils/strings.js', 'app/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
	}
};
