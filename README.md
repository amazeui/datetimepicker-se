# Amaze UI DatetimePicker SE
---

[![NPM version](https://img.shields.io/npm/v/datetimepicker-se.svg?style=flat-square)](https://www.npmjs.com/package/datetimepicker-se)
[![Dependency Status](https://img.shields.io/david/amazeui/datetimepicker-se.svg?style=flat-square)](https://david-dm.org/amazeui/datetimepicker-se)
[![devDependency Status](https://img.shields.io/david/dev/amazeui/datetimepicker-se.svg?style=flat-square)](https://david-dm.org/amazeui/datetimepicker-se#info=devDependencies)

日期、时间选择（支持秒）插件，移植自 [Eonasdan 版 bootstrap-datetimepicker](https://github.com/Eonasdan/bootstrap-datetimepicker)。

- [使用演示](http://amazeui.github.io/datetimepicker-se/docs/demo.html)
- [参数文档](http://amazeui.github.io/datetimepicker-se/docs/options.html)
- [方法文档](http://amazeui.github.io/datetimepicker-se/docs/methods.html)
- [事件文档](http://amazeui.github.io/datetimepicker-se/docs/events.html)

**使用说明：**

1. 获取 DatetimePicker SE

  - [直接下载](https://github.com/amazeui/datetimepicker-se/archive/master.zip)
  - 使用 NPM: `npm install amazeui-datetimepicker-se`

2. 在 Amaze UI 样式之后引入 DatetimePicker SE 样式（`dist` 目录下的 CSS）：

  DatetimePicker SE 依赖 Amaze UI 样式。

  ```html
  <link rel="stylesheet" href="path/to/amazeui.min.css" />
  <link rel="stylesheet" href="path/to/amazeui.datetimepicker-se.min.css" />
  ```

3. 引入 jQuery、Moment.js、DatetimePicker SE 插件（`dist` 目录下的 JS）：

  除了 jQuery 外，DatetimePicker SE 还依赖 [Moment.js](https://github.com/moment/moment/)。如果觉得 `moment-with-locales.js` 太大，可以引入 `moment.min.js`（即不包含语言文件的版本），然后引入[需要的语言文件](https://github.com/moment/moment/tree/master/locale)。

  ```html
  <script src="path/to/jquery.min.js"></script>
  <script src="path/to/moment-with-locales.min.js"></script>
  <script src="path/to/amazeui.datetimepicker-se.min.js"></script>
  ```

4. 初始化 DatetimePicker SE:

  ```js
  $(function() {
      $('#my-datetimepicker-se').datetimepicker();
  });
  ```
