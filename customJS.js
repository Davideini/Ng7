$(function () {

    // Angular Elements

    // Global zone.js
    $('script[id=angular-zone]').length === 0 &&

        $('body').append($('<script id="angular-zone">').attr('src', qflow.urlRelativePathBase + 'api/StaticFiles/ATDInterface/zone.js'));

    // Development

    $('head').append($('<link href="../System/FileStore/TestScripts/atd-appointment-alerts/atd-appointment-alerts.css" type="text/css" rel="stylesheet">'));

    $('script[id=atd-appointment-alerts]').length === 0 &&

        $('body').append($('<script>').attr('src', '../System/FileStore/TestScripts/atd-appointment-alerts/atd-appointment-alerts.js'));


    // Production

    var storageName = 'ATDInterface';
    var apiPath = qflow.urlRelativePathBase + 'api/StaticFiles/' + storageName + '/';

    //$('head').append($('<link href="' + apiPath + 'atd-appointment-alerts.css" type="text/css" rel="stylesheet">'));

    //$('script[id=atd-appointment-alerts]').length === 0 &&

    //  $('body').append($('<script id="atd-appointment-alerts">').attr('src', apiPath + 'atd-appointment-alerts.js'));

    // Target

    $('.PageTitleContainer').after($('<qfe-atd-appointment-alerts>'));

});