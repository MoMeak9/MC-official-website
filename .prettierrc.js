//此处的规则供参考，其中多半其实都是默认值，可以根据个人习惯改写
module.exports = {
  printWidth: 80, //单行长度
  tabWidth: 2, //缩进长度
  useTabs: false, //使用空格代替tab缩进
  semi: true, //句末使用分号
  singleQuote: true, //使用单引号
  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
  trailingComma: 'es5', //多行时尽可能打印尾随逗号
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  jsxBracketSameLine: true, //多属性html标签的‘>’折行放置
  arrowParens: 'always', //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  requirePragma: false, //无需顶部注释即可格式化
  insertPragma: false, //在已被preitter格式化的文件顶部加上标注
  proseWrap: 'preserve', //不知道怎么翻译
  endOfLine: 'crlf', //结束行形式
  embeddedLanguageFormatting: 'auto', //对引用代码进行格式化
  functionSentence: false, //函数定义时，函数名后面的句号
  functionDeclaration: 'declare', //函数声明的风格
  functionExpression: 'declare', //函数表达式的风格
  functionParams: 'avoid', //函数参数的风格
  // 大括号内首尾需要空格
  // HTML 标签（以及 JSX，Vue 模板等）的反尖括号 > 需要换行
  bracketSameLine: false,
};

