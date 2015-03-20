module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'public/app/scripts/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            hint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
            styles: {
                files: ['public/stylesheets/*.less'],
                tasks: ['styles']
            },
            js: {
                files: ['public/app/scripts/*.js'],
                tasks: ['concat:lib','concat:app']
            }
        },
        concat: {
            lib: {
                src: ['public/app/scripts/main.js', 'public/app/scripts/bsimport.js'],
                dest: 'public/app/scripts/lib.js'
            },
            app: {
                src: ['public/app/scripts/myApp.js', 'public/app/scripts/myUsers.js'],
                dest: 'public/app/scripts/app.js'
            }


        },
        less: {
            dist: {
                src: 'public/stylesheets/ross.less',
                dest: 'public/stylesheets/styles.css'
            }
        },
        sass: {
            dist: {
                files: {
                    'public/stylesheets/main.css': 'public/stylesheets/main.scss'
                }
            }
        },
        cssmin: {
            dist: {
                files: {
                    'public/stylesheets/styles.min.css': 'public/stylesheets/styles.css'
                }
            }
        },
        clean: ['public/stylesheets/styles.css']

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint']);

    grunt.registerTask('styles', ['clean','less']);

};