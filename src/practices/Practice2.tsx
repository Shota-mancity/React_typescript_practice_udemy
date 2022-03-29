export const Practice2=()=>{
    const getTotalFee=(fee:number):number=>{
        const total=fee*1.1;
        return total;
    }
    const onClickPractice=()=>{
        console.log(getTotalFee(10000))
    }
    return(
        <div>
            <p>Practice:返却値の型指定</p>
            <button onClick={onClickPractice} >Execute Practice2</button>
        </div>
    )
}