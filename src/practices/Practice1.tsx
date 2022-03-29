export const Practice1=()=>{
    const calcTotalFee=(fee:number)=>{
        const total=fee*1.1;
        console.log(total)
    }
    const onClickPractice=()=>{
        calcTotalFee(1000)
    }
    return(
        <div>
            <p>Practice:引数の型指定</p>
            <button onClick={onClickPractice} >Execute Practice1</button>
        </div>
    )
}