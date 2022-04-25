/**
1.  *****
    *****
    *****
    *****
    *****
 */


const pattern1 = (n) => {
    let str = "";
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            // str = str + "*"
            str += "*"
        }
        str += "\n";
    }

    console.log(str)
}

pattern1(5)