var tsc = require('typescript-compiler');
class Sorting<P> {
    constructor(){}
    array: Array<P>=null;
    bubblesort(array: Array<p>){
        this.array=array.slice();
        for(let i=0;i<array.length;i++){
            for(let j=0;j<array.length;j++){
                if(this.array[j]>this.array[j+1]){
                    var temp: P= this.array[j+1];
                    this.array[j+1]=this.array[j];
                    this.array[j]=temp;
                }
            }
        }
    return this.array;
  }
}

