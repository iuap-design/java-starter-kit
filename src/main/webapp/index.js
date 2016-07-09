require(['jquery', 'knockout', 'director'], function($, ko) {

    window.addRouter = function(path, func) {
        var pos = path.indexOf('/:');
        var truePath = path;
        if (pos != -1)
            truePath = path.substring(0, pos);
        func = func || function() {
            var params = arguments;
            initPage('pages/' + truePath, params);
        }
        var tmparray = truePath.split("/");
        if (tmparray[1] in router.routes && tmparray[2] in router.routes[tmparray[1]] && tmparray[3] in router.routes[tmparray[1]][tmparray[2]]) {
            return;
        } else {
            router.on(path, func);
        }
    }

    window.router = Router();
    window.ko=ko;
    ctx="/iuap-quickstart";

    $(function() {
        $('#menu').find("a[href*='#']").each(function() {
            var path = this.hash.replace('#', '');
            addRouter(path);
        });
		window.router.init();
        if (window.location.href.indexOf("#") < 0) {
            window.router.setRoute($('#menu').find("a[href*='#']")[0].hash.replace('#', ''));
        } 

    })

    function initPage(p, id) {
        var module = p;
        requirejs.undef(module);
        var content = document.getElementById("content");
        require([module], function(module) {
            ko.cleanNode(content);
            content.innerHTML = "";
            content.innerHTML =module.template;
            module.init(id);
        })
    }
})
