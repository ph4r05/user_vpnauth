/**
 * Created by dusanklinec on 28.04.17.
 */
var vpnauth = null;

(function($) {
    "use strict";

    /**
     * VPNAuth namespace
     *
     * @namespace jsxc
     */
    vpnauth = {
        /** Version of vpnauth */
        version: '< $ app.version $ >',

    };

    /**
     * Options
     * @type {{authUrl: null}}
     */
    vpnauth.options = {
        authUrl: null,
    };

    /**
     * Init vpn auth plugin
     * @param options
     * @param options.auth_url
     */
    vpnauth.init = function(options){
        if (options) {
            vpnauth.options.authUrl = options.authUrl;
        }
    };

    /**
     * Basic login test with VpnAuth
     */
    vpnauth.checkVpnAuth = function(onAuth, onError){
        $.ajax({
            type: 'GET',
            url: vpnauth.options.authUrl,

            success: function(d) {
                if (d){
                    onAuth(d);
                } else {
                    onError(d);
                }
            },
            error: function() {
                console.log('XHR error on authcheck');
                onError(false);
            }
        });


    };


}(jQuery));
