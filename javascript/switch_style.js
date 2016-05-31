
var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;
var style_domain = "uip.com" ;


/**
 * .switch_style
 * Toggle through link tags to match with css_title to switch between stylesheets/themes
 * @param css_title
 * **/
function switch_style ( css_title )
{
    var i, link_tag ;
    for (i = 0, link_tag = document.getElementsByTagName("link") ;
         i < link_tag.length ; i++ ) {
        if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
            link_tag[i].title) {
            link_tag[i].disabled = true ;
            if (link_tag[i].title == css_title) {
                link_tag[i].disabled = false ;
            }
        }
        set_cookie( style_cookie_name, css_title,
            style_cookie_duration, style_domain );
    }
}

/**
 * .set_cookie
 * Checks for the style-setting cookie, and if present, switches the style sheets accordingly. Otherwise, it does nothing.
 * @param
 * **/
function set_style_from_cookie()
{
    var css_title = get_cookie( style_cookie_name );
    if (css_title.length) {
        switch_style( css_title );
    }
}

/**
 * .set_cookie
 * Assign your string to the cookie
 * @param cookie_name, cookie_value,
 lifespan_in_days, valid_domain
 * **/
function set_cookie ( cookie_name, cookie_value,
                      lifespan_in_days, valid_domain )
{
    var domain_string = valid_domain ?
        ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
        "=" + encodeURIComponent( cookie_value ) +
        "; max-age=" + 60 * 60 *
        24 * lifespan_in_days +
        "; path=/" + domain_string ;
}

/**
 * .get_cookie
 * Fetch the current cookie and read it
 * @param cookie_name
 * **/
function get_cookie ( cookie_name )
{
   
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
            '(^|;)[\s]*' +
            cookie_name +
            '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}
