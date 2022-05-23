const conversion = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

let romanToInt = (s) => {
    value = 0;
    for (let i=0; i<s.length;i++){
        conversion[s[i]]<conversion[s[i+1]] ? value-=conversion[s[i]] : value+=conversion[s[i]]
    }
    return value
}   

romanToInt('IX')