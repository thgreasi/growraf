Growraf
=======

Growraf (pronounced grow-rough) is a plugin for [flot charts](http://www.flotcharts.org), that produces smooth animations using requestAnimationFrame wherever possible.

Its a fork of the [Growing](https://github.com/jumjum123/JUMFlot) plugin for flot, from Jürgen Marsch.

The API is the same with Growing plugin except from the steps & stepDelay combination.
There is a new option named "duration" (in ms) that simplifies the rAF implementation and provides greater control.


Examples
--------
[Growraf example](http://thgreasi.github.io/growraf/growraf.html) in comparison with [Growing minor bugs](http://thgreasi.github.io/growraf/growbugs.html)

[Growraf heavy data plots](http://thgreasi.github.io/growraf/heavyplot_growraf.html) in comparison with [Grow heavy data plots](http://thgreasi.github.io/growraf/heavyplot_grow.html) *note the time increase with more data/plots*

[Growraf + Resize example](http://thgreasi.github.io/growraf/resizegrowraf.html)

[Growraf ReAnimate](http://thgreasi.github.io/growraf/reanimate.html) animating a plot between redraws.

Extras
------
*   Added the ability to [reanimate a plot](http://thgreasi.github.io/growraf/reanimate.html) to new datapoints, by using setData() & draw().

*   Added a 'growFinished' event that is triggered on the plot's placeholder.

```js
var $placeholder = $('#placeholder');
$placeholder.on('growFinished', function () {
   alert('Grow Animation Finished');
});

$.plot($placeholder, [{
        label: "linear",
        data: [[1,1], [2,2], /*...,*/ [10,10]],
        grow: { growings:[ { stepMode: "maximum" } ] }
    }], {
        series: { grow: { active: true, duration: 2000 } }
});
```

API
---
Read the [Documentation here](http://thgreasi.github.io/growraf/docs.html).


ChangeLog
---------
*   **0.4.5** Introduced reanimate feature. Code restructuring, cleanups & performance improvements.

*   **0.4.0** Initial version implementing rAF. Used for several unrecorded bug fixes and performance improvements.


Frequently Asked
----------------
*   **Does it work on browsers not supporting requestAnimationFrame?**

    **Yes**, Growraf checks if the current browser supports requestAnimationFrame (prefixed or not) and (if there is no support) fallbacks to setTimeout.

    Some of the browsers that the setTimeout polyfill is used include:
    *   IE <= 8
    *   Safari <= 5.1
    *   Opera (12.1 as of writing this)
    *   Firefox < 4.0
    *   Chrome < 10.0

    sources: [caniuse](http://caniuse.com/#search=requestAnimationFrame) and [MDN](https://developer.mozilla.org/en-US/docs/DOM/window.requestAnimationFrame)

    notes:
    *   Based on [paulirish's gist](https://gist.github.com/paulirish/1579671) for the setTimeout polyfill.
    *   Does not polyfill requestAnimationFrame for the rest of page, just for growraf.


*   **Does it work in oldIE?**

    **Yes**, as long as exCanvas is provided, it should work.

    **BUT** instead of delivering a choppy animation, I strongly suggest you to disable animations for those browsers by checking if window.G_vmlCanvasManager is defined and setting the series.grow.active property to false.
