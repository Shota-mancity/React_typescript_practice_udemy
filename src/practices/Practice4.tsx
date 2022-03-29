export const Practice4=()=>{
    const calcTotalFee=(fee)=>{
        const total=fee*1.1;
        console.log(total)
    }
    const onClickPractice=()=>{
        calcTotalFee(1000)
    }
    return(
        <div>
            <p>Practice:設定ファイルを触ってみる</p>
            <button onClick={onClickPractice} >Execute Practice4</button>
        </div>
    )
}