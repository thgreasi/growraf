(function(){
	"use strict";

	window.usedInPage = function (selector) {
		var $element = $(selector).first();

		if ($element.length > 0) {
			var usedHtml = [];
			usedHtml.push(''.concat('<li>', 'jQuery ' + $.fn.jquery,  '</li>'));
			usedHtml.push(''.concat('<li>', 'Flot ' + $.plot.version, '</li>'));

			if (window.G_vmlCanvasManager) {
				usedHtml.push('<li>exCanvas</li>');
			}
			
			$.plot.plugins.forEach(function (p) {
				usedHtml.push(''.concat('<li>', p.name, ' ', p.version, '</li>'));
			});

			$element.append('Used in this page: <ul>' + usedHtml.join('') + '</ul>');
		}
	};

})();
