---
title: Amaze UI amazeui-datetimepicker-se 使用演示
next: api.html
prev: ../
---

## 文档导航

- [插件首页](../)
- [使用演示](demo.html)
- [参数文档](options.html)
- [方法文档](methods.html)
- [事件文档](events.html)

## 使用演示

### input 框触发

`````html
<div>
  <input value="2016-06-14 14:45:00" class="am-form-field" id='datetimepicker1'>
</div>
<script>
  $(function() {
    $('#datetimepicker1').datetimepicker();
  });
</script>
`````
```html
<div>
  <input value="2016-06-14 14:45:00" class="am-form-field" id='datetimepicker1'>
</div>
<script>
  $(function() {
    $('#datetimepicker1').datetimepicker();
  });
</script>
```

### input-group 触发

`````html
<!-- 注意添加 input-group -->
<div class="am-input-group input-group" id='datetimepicker2'>
  <input value="2016-06-02 14:45:00" class="am-form-field">
  <!--注意添加  datepickerbutton class-->
  <span class="am-input-group-label datepickerbutton">
    <i class="icon-th am-icon-calendar"></i>
  </span>
</div>
<script>
  $(function() {
    $('#datetimepicker2').datetimepicker();
  });
</script>
`````
```html
<!-- 注意添加 input-group -->
<div class="am-input-group input-group" id='datetimepicker2'>
  <input value="2016-06-02 14:45:00" class="am-form-field">
  <!--注意添加  datepickerbutton class-->
  <span class="am-input-group-label datepickerbutton">
    <i class="icon-th am-icon-calendar"></i>
  </span>
</div>
<script>
  $(function() {
    $('#datetimepicker2').datetimepicker();
  });
</script>
```

### 语言设置

设置语言之前确保一样引入了 [moment.js 的对应语言包](https://github.com/moment/moment/tree/develop/locale)。

`````html
<div>
  <input value="2016-06-14 14:45:00" class="am-form-field" id='datetimepicker3'>
</div>
<script>
  $(function() {
    $('#datetimepicker3').datetimepicker({
      dayViewHeaderFormat: 'MMM YYYY',
      locale: 'en'
    });
  });
</script>
`````
```html
<div>
  <input value="2016-06-14 14:45:00" class="am-form-field" id='datetimepicker3'>
</div>
<script>
  $(function() {
    $('#datetimepicker3').datetimepicker({
      dayViewHeaderFormat: 'MMM YYYY',
      locale: 'en'
    });
  });
</script>
```

### 定义日期格式

日期格式说明参见 [moment.js 文档](http://momentjs.com/docs/#/displaying/format/)。

`````html
<div>
  <input value="" class="am-form-field" id='datetimepicker4'>
</div>
<script>
  $(function() {
    $('#datetimepicker4').datetimepicker({
      format: 'HH:mm'
    });
  });
</script>
`````

```html
<div>
  <input value="" class="am-form-field" id='datetimepicker4'>
</div>
<script>
  $(function() {
    $('#datetimepicker4').datetimepicker({
      format: 'HH:mm'
    });
  });
</script>
```

### 禁用日期

`````html
<!-- 注意添加 input-group -->
<div class="am-input-group input-group" id='datetimepicker5'>
  <input class="am-form-field">
  <!--注意添加  datepickerbutton class-->
  <span class="am-input-group-label datepickerbutton">
    <i class="icon-th am-icon-calendar"></i>
  </span>
</div>
<script>
  $(function() {
    $('#datetimepicker5').datetimepicker({
      format: 'YYYY-MM-DD',
      defaultDate: '11/1/2013',
      disabledDates: [
        moment('2013-12-25'),
        new Date(2013, 11 - 1, 21),
        '11/22/2013 00:53'
      ]
    });
  });
</script>
`````
```html
<!-- 注意添加 input-group -->
<div class="am-input-group input-group" id='datetimepicker5'>
  <input class="am-form-field">
  <!--注意添加  datepickerbutton class-->
  <span class="am-input-group-label datepickerbutton">
    <i class="icon-th am-icon-calendar"></i>
  </span>
</div>
<script>
  $(function() {
    $('#datetimepicker5').datetimepicker({
      format: 'YYYY-MM-DD',
      defaultDate: '11/1/2013',
      disabledDates: [
        moment('2013-12-25'),
        new Date(2013, 11 - 1, 21),
        '11/22/2013 00:53'
      ]
    });
  });
</script>
```

### 关联日期选择器

第二框只能选择第一个框选中以后的日期。

`````html
<div class="am-g">
  <div class="am-u-sm-12 am-u-md-6">
    <div class="am-input-group input-group" id='datetimepicker6'>
      <input class="am-form-field">
    <span class="am-input-group-label datepickerbutton">
      <i class="icon-th am-icon-calendar"></i>
    </span>
    </div>
  </div>
  <div class="am-u-sm-12 am-u-md-6">
    <div class="am-input-group input-group" id='datetimepicker7'>
      <input class="am-form-field">
    <span class="am-input-group-label datepickerbutton">
      <i class="icon-th am-icon-calendar"></i>
    </span>
    </div>
  </div>
</div>
<script >
$(function() {
  var $dp6 = $('#datetimepicker6');
  var $dp7 = $('#datetimepicker7');
   $dp6.datetimepicker();
    $dp7.datetimepicker({
      useCurrent: false //Important! See issue #1075
    });
    $dp6.on('dp.change', function(e) {
      $dp7.data('DateTimePicker').minDate(e.date);
    });
    $dp7.on('dp.change', function(e) {
     $dp6.data('DateTimePicker').maxDate(e.date);
    });
  });
</script>
`````
```html
<div class="am-g">
  <div class="am-u-sm-12 am-u-md-6">
    <div class="am-input-group input-group" id='datetimepicker6'>
      <input class="am-form-field">
    <span class="am-input-group-label datepickerbutton">
      <i class="icon-th am-icon-calendar"></i>
    </span>
    </div>
  </div>
  <div class="am-u-sm-12 am-u-md-6">
    <div class="am-input-group input-group" id='datetimepicker7'>
      <input class="am-form-field">
    <span class="am-input-group-label datepickerbutton">
      <i class="icon-th am-icon-calendar"></i>
    </span>
    </div>
  </div>
</div>
<script >
$(function() {
  var $dp6 = $('#datetimepicker6');
  var $dp7 = $('#datetimepicker7');
   $dp6.datetimepicker();
    $dp7.datetimepicker({
      useCurrent: false //Important! See issue #1075
    });
    $dp6.on('dp.change', function(e) {
      $dp7.data('DateTimePicker').minDate(e.date);
    });
    $dp7.on('dp.change', function(e) {
     $dp6.data('DateTimePicker').maxDate(e.date);
    });
  });
</script>
```

### 初始日期视图

`````html
<div class="am-g">
  <div class="am-u-sm-12 am-u-md-6">
    <div class="am-input-group input-group" id='datetimepicker8'>
      <input class="am-form-field">
    <span class="am-input-group-label datepickerbutton">
      <i class="icon-th am-icon-calendar"></i>
    </span>
    </div>
  </div>
</div>
<script >
$(function() {
  $('#datetimepicker8').datetimepicker({
    viewMode: 'years'
  });
});
</script>
`````
```html
<div class="am-g">
  <div class="am-u-sm-12 am-u-md-6">
    <div class="am-input-group input-group" id='datetimepicker8'>
      <input class="am-form-field">
    <span class="am-input-group-label datepickerbutton">
      <i class="icon-th am-icon-calendar"></i>
    </span>
    </div>
  </div>
<div>
<script >
$(function() {
  $('#datetimepicker8').datetimepicker({
    viewMode: 'years'
  });
});
</script>
```

### 最小视图模式

`````html
<div class="am-g">
  <div class="am-u-sm-12 am-u-md-6">
    <div class="am-input-group input-group" id='datetimepicker9'>
      <input class="am-form-field">
    <span class="am-input-group-label datepickerbutton">
      <i class="icon-th am-icon-calendar"></i>
    </span>
    </div>
  </div>
</div>
<script >
$(function() {
  $('#datetimepicker9').datetimepicker({
    viewMode: 'years',
    format: 'YYYY-MM'
  });
});
</script>
`````
```html
<div class="am-g">
  <div class="am-u-sm-12 am-u-md-6">
    <div class="am-input-group input-group" id='datetimepicker9'>
      <input class="am-form-field">
    <span class="am-input-group-label datepickerbutton">
      <i class="icon-th am-icon-calendar"></i>
    </span>
    </div>
  </div>
</div>
<script >
$(function() {
  $('#datetimepicker9').datetimepicker({
    viewMode: 'years',
    format: 'YYYY-MM'
  });
});
</script>
```

### 禁止选择周末

`````html
<div class="am-g">
  <div class="am-u-sm-12 am-u-md-6">
    <div class="am-input-group input-group" id='datetimepicker10'>
      <input class="am-form-field">
    <span class="am-input-group-label datepickerbutton">
      <i class="icon-th am-icon-calendar"></i>
    </span>
    </div>
  </div>
</div>
<script >
$(function() {
  $('#datetimepicker10').datetimepicker({
    daysOfWeekDisabled: [0, 6]
  });
});
</script>
`````
```html
<div class="am-g">
  <div class="am-u-sm-12 am-u-md-6">
    <div class="am-input-group input-group" id='datetimepicker10'>
      <input class="am-form-field">
    <span class="am-input-group-label datepickerbutton">
      <i class="icon-th am-icon-calendar"></i>
    </span>
    </div>
  </div>
</div>
<script >
$(function() {
  $('#datetimepicker10').datetimepicker({
    daysOfWeekDisabled: [0, 6]
  });
});
</script>
```

### 内联显示

`````html
<div id="datetimepicker11"></div>
<script>
  $(function() {
    $('#datetimepicker11').datetimepicker({
      inline: true,
      sideBySide: true
    });
  });
</script>
`````
```html
<div id="datetimepicker11"></div>
<script>
  $(function() {
    $('#datetimepicker11').datetimepicker({
      inline: true,
      sideBySide: true
    });
  });
</script>
```

<script src="moment-with-locales.min.js"></script>
<script src="../amazeui.datetimepicker-se.js"></script>
