/**
 * 
4.  1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
 */

const pattern1 = (n) => {
    let str = "";
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            // str = str + "*"
            str += col + " ";
        }
        str += "\n";
    }

    console.log(str)
}

pattern1(5)