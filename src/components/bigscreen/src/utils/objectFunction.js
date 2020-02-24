    

// å¯¹æ¯ä¸¤ä¸ªå¯¹è±¡çå¼æ¯å¦å®å¨ç¸ç­ è¿åå¼ true/false
export function isObjectValueEqual (a, b) {
    //åå¯¹è±¡aåbçå±æ§å
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    //å¤æ­å±æ§åçlengthæ¯å¦ä¸è´
    if (aProps.length != bProps.length) {
        return false;
    }
    //å¾ªç¯ååºå±æ§åï¼åå¤æ­å±æ§å¼æ¯å¦ä¸è´
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}