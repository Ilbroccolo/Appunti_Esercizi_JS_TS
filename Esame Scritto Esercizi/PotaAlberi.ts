interface tree {val?: number, sx?: tree, dx?: tree};

function PotaAlberiT(T: tree | undefined): void {
    if (T == undefined) return;
    if (T.val! < 0) {
        delete T.val;
        delete T.sx;
        delete T.dx;
        return;
    } else {
        if (T.sx && T.sx.val! < 0)
            delete T.sx;
        else 
            PotaAlberiT(T.sx);
    
        if (T.dx && T.dx.val! < 0)
            delete T.dx;
        else
            PotaAlberiT(T.dx);
    }
}