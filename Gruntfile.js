module.exports = function(grunt) {

  grunt.initConfig({

    // Import package manifest
    pkg: grunt.file.readJSON('jquery.quadgram.json'),

    // Banner definitions
    meta: {
      banner: "/*\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  <%= pkg.homepage %>\n" +
        " *\n" +
        " *  Made by <%= pkg.author.name %>\n" +
        " *  Under <%= pkg.licenses[0].type %> License\n" +
        " */\n"
    },

    // Concat definitions
    concat: {
      dist: {
        src: ['src/jquery.quadgram.js'],
        dest: 'dist/jquery.quadgram.js'
      },
      options: {
        banner: '<%= meta.banner %>'
      }
    },

    // Lint definitions
    jshint: {
      files: ['src/jquery.quadgram.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Minify definitions
    uglify: {
      target: {
        src: ["src/jquery.quadgram.js"],
        dest: "dist/jquery.quadgram.min.js"
      },
      options: {
        banner: "<%= meta.banner %>"
      }
    },

    // CoffeeScript compilation
    coffee: {
      compile: {
        files: {
          'dist/jquery.quadgram.js': 'src/jquery.quadgram.coffee'
        }
      }
    },

    // CSS minification
    cssmin: {
      target: {
        src: ["src/jquery.quadgram.css"],
        dest: "dist/jquery.quadgram.min.css"
      }
    },

    // Start local server and open demo
    connect: {
      server: {
        options: {
          keepalive: true,
          open: 'http://127.0.0.1:8080/index.html',
          port: 8080
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'connect']);
  grunt.registerTask('travis', ['jshint']);

};
