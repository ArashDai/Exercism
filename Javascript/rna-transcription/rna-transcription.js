

var dnaTranscriber = function(){

}

dnaTranscriber.prototype.toRna = function(strand){
    console.log(strand);
    strand = strand.split('');

    strand.map((c,i,a)=>{
        switch (c) {
            case 'G':
                a[i] = 'C'
                break;
            case 'C':
                a[i] = 'G'
                break;
            case 'A':
                a[i] = 'U'
                break;
            case 'T':
                a[i] = 'A'
                break;
            default:
                throw new Error("Invalid input");
        }
    })

    return strand.join('');
}

module.exports = dnaTranscriber;