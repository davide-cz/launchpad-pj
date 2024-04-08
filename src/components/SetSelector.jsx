export default function ({setSelected}){

    let setsArray=[];

    return(
        <>
        <select name="" id="">
            {setsArray.map((set,i)=>{
                return(
                    <option value={setSelected}></option>
                )
            })}
        </select>
        </>
    )
}