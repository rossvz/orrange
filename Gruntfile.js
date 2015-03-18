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
                files: ['public/stylesheets/*'],
                tasks: ['styles']
            }
        },
        concat: {
            less: {
                src: 'public/stylesheets/*.less',
                dest: 'public/stylesheets/custom.less'
            },
            css: {
                src: 'public/stylesheets/*.css',
                dest: 'public/stylesheets/styles.css'
            }


        },
        less: {
            dist: {
                src: 'public/stylesheets/custom.less',
                dest: 'public/stylesheets/custom.css'
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
            files: {
                'public/stylesheets/styles.min.css' : 'public/stylesheets/styles.css'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint']);

    grunt.registerTask('styles', ['sass','concat:less','less','concat:css'])

};