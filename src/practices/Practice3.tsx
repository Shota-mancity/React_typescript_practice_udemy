export const Practice3=()=>{
    const getTotalFee=(fee:number)=>{
        const total=fee*1.1;
        return total;
    }
    const onClickPractice=()=>{
        let total:number=0;
        total=getTotalFee(100000)
        console.log(total)
    }
    return(
        <div>
            <p>Practice:変数の型指定</p>
            <button onClick={onClickPractice} >Execute Practice3</button>
        </div>
    )
}