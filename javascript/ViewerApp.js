﻿/*global gmm */
if (!this.gmm || typeof this.gmm !== 'object') {
    this.gmm = {};
}
(function () {
    'use strict';
    gmm.Viewer = new Backbone.Marionette.Application();
    //debugging so we can see events flying around
    gmm.Viewer.vent.on('all', function (evt, model) {
        console.log('gmm.Viewer DEBUG: Event Caught: ' + evt);
        if (model) {
            console.dir(model);
        }
    });
})();

