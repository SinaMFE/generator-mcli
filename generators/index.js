const generators = require('yeoman-generator')
const simpleFiles = {
  src: 'src',
  // '.babelrc': '.babelrc',
  '.eslintrc.yml': '.eslintrc.yml',
  '.gitlab-ci.yml': '.gitlab-ci.yml',
  '.gitignore': '.gitignore',
  'marauder.config.js': 'marauder.config.js',
  'README.md': 'README.md'
}
const tplFiles = {}

module.exports = generators.extend({
  initializing() {
    this.log(this._globalConfig.name)
    this.log('会替换当前文件夹下文件，请确认当前文件夹为空或都可替换')
    this.spawnCommandSync('git', [
      'clone',
      'https://github.com/SinaMFE/marauder-template.git'
    ])
  },

  prompting() {
    return this.prompt([
      {
        name: 'name',
        message: '请输入项目名称\n'
      },
      {
        name: 'description',
        message: '请输入项目描述\n',
        default: ''
      },
      {
        name: 'version',
        message: 'Version',
        default: '0.1.0'
      },
      {
        name: 'repository',
        message: '请输入项目仓库地址'
      },
      {
        name: 'authorName',
        message: 'Author name',
        store: true
      },
      {
        name: 'authorEmail',
        message: 'Author email',
        store: true
      }
    ]).then(
      function(answers) {
        this.description = answers.description
        this.name = answers.name
        this.authorName = answers.authorName
        this.authorEmail = answers.authorEmail
        this.version = answers.version
        this.repository = answers.repository || ''
        this.log('app name', answers.name)
        this.log('cool feature', answers.cool)
      }.bind(this)
    )
  },

  writing() {
    var source
    var target
    // this.conflicter.force = false
    for (source in simpleFiles) {
      target = simpleFiles[source]
      this._copy(source, target)
    }

    for (source in tplFiles) {
      target = tplFiles[source]
      this._copyTpl(source, target)
    }
    this._copyPackagejson('package.json', 'package.json')
    this.conflicter.force = true
    this.fs.delete(this.destinationPath('marauder-template/'))
  },

  conflicts() {
    // var path = this.destinationPath('package.json')
    // this.conflicter.collision(path)
  },

  install() {
    this.spawnCommandSync('git', ['init'])
    // this.yarnInstall(undefined, {
    //     registry: 'http://registry.cnpm.sina.com.cn/'
    // });
  },

  end() {
    //     this.log(
    //       "\
    //                             ,;'`    ,.                           \n\
    //                        ,   ';;;   ;;;`                           \n\
    //                      ,';  ';;', ,;;;:  `;;'                      \n\
    //                  `' `';;;;;;;;;;;;;;,,';;'`                      \n\
    //                  ;;.;;;;;;;;;;;;;;;;;;;;'`                       \n\
    //                 ;;;;;;;;.       .;;;;;;;;.                       \n\
    //                .;;;;:     ,,       .;;;;;;                       \n\
    //                ;;;;    ;#####@`     .;;;;'                       \n\
    //               `';'`   ;#@#'###'     `;;;;:                       \n\
    //                ';'    @'  ;##@;     ;;;;'                        \n\
    //                .;;;   :#:'##@.     ';;;,                         \n\
    //                  ;;;:   :';.    ,';;;`                           \n\
    //                    `:;;';;;;;';;;,                               \n\
    //          :#@######@#.           `;#@#########     +@########@@.  \n\
    //       `#####@##@###@` +#@@##  .@#############@   .##@###@#####@, \n\
    //      ,@###'       ;+ .@###@.  ;###@;    +####@            +###@, \n\
    //      '######@#',     +####'  `@###'     +####`    .;#@@@+`@####  \n\
    //       @###########, `####@`  ####@.    .@###+  .@####@## ;###@:  \n\
    //         `,;+@#####; `####;  `#####     ;####, :####+     #####   \n\
    //    `@'`      ####@` '###@`  +###@,    `@####  @###@.   `+###@`   \n\
    //    ##############   +###.  `@####     :###@;  #############.     \n\
    //    `'#@######;`    `@##+   +###@`     @####    .+#####'.         \n\
    //                    .##@`                                         \n\
    //                    '##'                                          \n\
    //                    @#'                                           \n\
    //                    @#                                            \n\
    //                    #                                             \n\
    // "
    //     )
  },

  _copyPackagejson(source, dest) {
    var json = this.fs.readJSON(
      this.destinationPath('marauder-template/' + source)
    )
    json.name = this.name
    json.description = this.description
    json.name = this.name
    json.author = this.authorName + ' <' + this.authorEmail + '>'
    json.version = this.version
    json.repository = this.repository || ''
    this.fs.writeJSON(this.destinationPath(source), json)
  },

  _copyTpl(source, dest) {
    this.fs.copyTpl(
      this.destinationPath('marauder-template/' + source),
      this.destinationPath(dest),
      this
    )
  },

  _copy(source, dest) {
    this.fs.copy(
      this.destinationPath('marauder-template/' + source),
      this.destinationPath(dest)
    )
  }
})
