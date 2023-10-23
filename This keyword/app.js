// "This" keyword refers to an object i.e. executing the 
// current piece of code

const calculate = {
    name: "Sam",
    eng: 95,
    phy: 93,
    chem: 99,
    math: 100,
    getAvg() {
        let avg = (this.eng + this.phy + this.chem + this.math) / 4;
        console.log(avg);
    }
}