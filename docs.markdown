---
layout: default
title: Growraf documentation
---

# Documentation

## Introduction

As per the flot [documentation](https://github.com/flot/flot/blob/master/API.md#introduction),
this documentation assumes the initialization of a flot chart like in the code following:

```js
var data = [];
var options = {};
var plot = $.plot(placeholder, data, options)
```

This gives us a reference starting point to minimize misleads and misunderstandings.

## Plot Options

```js
var options = {
    series: {
        grow: {
            active: false,
            duration: 1000,
            reanimate: true,
            valueIndex: 1
        }
    }
};
```

## Data Format

The data format that should be used, is the one with the series objects:

```js
var data = [
    { label: "serie #1", data: [[0,0], [1,1], [2,2]] },
    { label: "serie #2", data: [[0,2], [1,1], [2,0]] },
    ...
];
```

The format of a single series object is as follows:



A detailed explanation follows:
