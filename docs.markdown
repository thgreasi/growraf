---
layout: default
title: Growraf documentation
---

# Documentation

## !!work in progress!!

## Introduction

As per the [flot documentation](https://github.com/flot/flot/blob/master/API.md#introduction),
this documentation assumes the initialization of a flot chart like in the code following:

{% highlight javascript %}
var data = [];
var options = {};
var plot = $.plot(placeholder, data, options)
{% endhighlight %}

This gives us a reference starting point to minimize misleads and misunderstandings.

## Plot Options

{% highlight javascript %}
var default_options = {
    series: {
        grow: {
            /** Enables or disables the animation for the whole plot. */
            active: false,
            /** The desired default duration for the animation */
            duration: 1000,
            /** Enables or disables 'reanimation' for subsequent setData() & draw()'s. */
            reanimate: true,
            /** The index each plot data holds the value to be plotted. */
            valueIndex: 1
        }
    }
};

// minimum options to enable growraf
var options = {
    series: {
        grow: {
            active: false
        }
    }
};
{% endhighlight %}

## Data Format

The data format that should be used, is the one with the series objects:

{% highlight javascript %}
var data = [
    { label: "serie #1", data: [[0,0], [1,1], [2,2]] },
    { label: "serie #2", data: [[0,2], [1,1], [2,0]] },
    ...
];
{% endhighlight %}

The format of a single series object is as follows:

{% highlight javascript %}
var serie1 = {
    label: "serie #1",
    data: [ ... ],
    grow: {
        duration: 1000,
        growings: [{
            reanimate: "continue",
            stepDirection: "up",
            stepMode: "linear",
            valueIndex: 1
        }],
        valueIndex: 1
    }
};

var data = [ serie1, serie2, ... ];
{% endhighlight %}

A detailed explanation follows:

{% highlight javascript %}

/** The desired duration for the animation of each serie */
grow.duration = 1000;

/** */
grow.growings[#].eanimate = "continue";

/** */
grow.growings[#].stepDirection = "up";

/** */
grow.growings[#].stepMode = "linear";

/** */
grow.growings[#].valueIndex = 1;

{% endhighlight %}
