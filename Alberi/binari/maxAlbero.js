
let t = {val: 2, 
    sx: {
        val: 2, 
            dx: {val : 2}},
    dx: {val : 2, 
sx : {val: 2}}}

let t1 = {val: 3, sx : {val : 1}, dx : {val : 2}}

function maxAlbero(t) {
    if (!t) {
        return null; 
    }

    const maxSx = maxAlbero(t.sx);
    const maxDx = maxAlbero(t.dx);

    return Math.max(t.val, maxSx, maxDx);
}

console.log(maxAlbero(t1))
