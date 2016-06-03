/*! Amaze UI Plugin ~ datetimepicker-se */

'use strict';

var $ = require('jquery');
var moment = require('moment');
var dateTimePicker = require('../vendor/bootstrap-datetimepicker')($, moment);

$.fn.datetimepicker = function(option) {
  var args = Array.prototype.slice.call(arguments, 1);
  var methodReturn;

  var $set = this.each(function() {
    var $this = $(this);
    var data = $this.data('DateTimePicker');
    var options = typeof option === 'object' && option;

    if (!data) {
      $this.data('DateTimePicker', (
          data = dateTimePicker(
            $this,
            $.extend(true, {}, $.fn.datetimepicker.defaults, options)
          )
        )
      );
    }

    if (typeof option === 'string') {
      methodReturn = typeof data[option] === 'function' ?
        data[option].apply(data, args) : data[option];
    }
  });
  
  return (methodReturn === undefined) ? $set : methodReturn;
};

$.fn.datetimepicker.defaults = {
  timeZone: 'Etc/UTC',
  format: 'YYYY-MM-DD HH:mm:ss',
  dayViewHeaderFormat: 'YYYY年MMM',
  extraFormats: false,
  stepping: 1,
  minDate: false,
  maxDate: false,
  useCurrent: true,
  collapse: true, // -
  locale: 'zh-cn',
  defaultDate: false,
  disabledDates: false,
  enabledDates: false,
  icons: { // -
    time: 'am-icon-clock-o',
    date: 'am-icon-calendar',
    up: 'am-icon-chevron-up',
    down: 'am-icon-chevron-down',
    previous: 'am-icon-chevron-left',
    next: 'am-icon-chevron-right',
    today: 'am-icon-undo',
    clear: 'am-icon-trash-o',
    close: 'am-icon-close'
  },
  tooltips: { // -
    today: 'Go to today',
    clear: 'Clear selection',
    close: 'Close the picker',
    selectMonth: 'Select Month',
    prevMonth: 'Previous Month',
    nextMonth: 'Next Month',
    selectYear: 'Select Year',
    prevYear: 'Previous Year',
    nextYear: 'Next Year',
    selectDecade: 'Select Decade',
    prevDecade: 'Previous Decade',
    nextDecade: 'Next Decade',
    prevCentury: 'Previous Century',
    nextCentury: 'Next Century',
    pickHour: 'Pick Hour',
    incrementHour: 'Increment Hour',
    decrementHour: 'Decrement Hour',
    pickMinute: 'Pick Minute',
    incrementMinute: 'Increment Minute',
    decrementMinute: 'Decrement Minute',
    pickSecond: 'Pick Second',
    incrementSecond: 'Increment Second',
    decrementSecond: 'Decrement Second',
    togglePeriod: 'Toggle Period',
    selectTime: 'Select Time'
  },
  useStrict: false,
  sideBySide: false,
  daysOfWeekDisabled: false,
  calendarWeeks: false,
  viewMode: 'days',
  toolbarPlacement: 'default', // -
  showTodayButton: false, // 显示返回今日按钮
  showClear: false, // 显示清除日期按钮
  showClose: false, // 显示关闭按钮日期选择器按钮
  widgetPositioning: {
    horizontal: 'auto',
    vertical: 'auto'
  },
  widgetParent: $(document.body),
  // widgetParent: null, // $(document.body),
  ignoreReadonly: false,
  keepOpen: false,
  focusOnShow: true,
  inline: false,
  keepInvalid: false,
  datepickerInput: '.datepickerinput',
  keyBinds: {
    up: function (widget) {
      if (!widget) {
        return;
      }
      var d = this.date() || this.getMoment();
      if (widget.find('.datepicker').is(':visible')) {
        this.date(d.clone().subtract(7, 'd'));
      } else {
        this.date(d.clone().add(this.stepping(), 'm'));
      }
    },
    down: function (widget) {
      if (!widget) {
        this.show();
        return;
      }
      var d = this.date() || this.getMoment();
      if (widget.find('.datepicker').is(':visible')) {
        this.date(d.clone().add(7, 'd'));
      } else {
        this.date(d.clone().subtract(this.stepping(), 'm'));
      }
    },
    'control up': function (widget) {
      if (!widget) {
        return;
      }
      var d = this.date() || this.getMoment();
      if (widget.find('.datepicker').is(':visible')) {
        this.date(d.clone().subtract(1, 'y'));
      } else {
        this.date(d.clone().add(1, 'h'));
      }
    },
    'control down': function (widget) {
      if (!widget) {
        return;
      }
      var d = this.date() || this.getMoment();
      if (widget.find('.datepicker').is(':visible')) {
        this.date(d.clone().add(1, 'y'));
      } else {
        this.date(d.clone().subtract(1, 'h'));
      }
    },
    left: function (widget) {
      if (!widget) {
        return;
      }
      var d = this.date() || this.getMoment();
      if (widget.find('.datepicker').is(':visible')) {
        this.date(d.clone().subtract(1, 'd'));
      }
    },
    right: function (widget) {
      if (!widget) {
        return;
      }
      var d = this.date() || this.getMoment();
      if (widget.find('.datepicker').is(':visible')) {
        this.date(d.clone().add(1, 'd'));
      }
    },
    pageUp: function (widget) {
      if (!widget) {
        return;
      }
      var d = this.date() || this.getMoment();
      if (widget.find('.datepicker').is(':visible')) {
        this.date(d.clone().subtract(1, 'M'));
      }
    },
    pageDown: function (widget) {
      if (!widget) {
        return;
      }
      var d = this.date() || this.getMoment();
      if (widget.find('.datepicker').is(':visible')) {
        this.date(d.clone().add(1, 'M'));
      }
    },
    enter: function () {
      this.hide();
    },
    escape: function () {
      this.hide();
    },
    //tab: function (widget) { //this break the flow of the form. disabling for now
    //    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');
    //    if(toggle.length > 0) toggle.click();
    //},
    'control space': function (widget) {
      if (widget.find('.timepicker').is(':visible')) {
        widget.find('.btn[data-action="togglePeriod"]').click();
      }
    },
    t: function () {
      this.date(this.getMoment());
    },
    'delete': function () {
      this.clear();
    }
  },
  debug: false,
  allowInputToggle: false,
  disabledTimeIntervals: false,
  disabledHours: false,
  enabledHours: false,
  viewDate: false
};
