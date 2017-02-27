
function getipaddress(remoteAddress){
    var ip6 = remoteAddress.indexOf(':') >= 0;

    return (ip6 ? remoteAddress.split(':').reverse()[0] : remoteAddress);    
}

function getlanguage(acceptLanguage){
    // We take the first language in the list and trim extra spaces
    return acceptLanguage.split(',')[0].trim();    
}

function getsoftware(userAgent){
    var osInfo = userAgent.split(/[\(\)]/)[1];
    return osInfo.trim();    
}

module.exports = function(request){
    return {
        ipaddress : getipaddress(request.connection.remoteAddress),
        language : getlanguage(request.headers["accept-language"]),
        software : getsoftware(request.headers["user-agent"])
    }
}