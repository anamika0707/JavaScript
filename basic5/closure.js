function outerFn(){
    let outervar="i am from the outer fn"
    function innerFn(){
        console.log(outervar)
    }
    return innerFn
}

let fn=outerFn()
fn()