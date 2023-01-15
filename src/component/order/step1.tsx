type RowProps={
    dishData: {value: string ,label: string}[],
    selectMeal: string,
    handleStep1: (e:any,type: string)=>void, 
    numberPeople: number,
    btnEnable: boolean
}
export const Step1=({dishData,selectMeal,handleStep1,numberPeople,btnEnable}: RowProps)=>{

    return(
        <div>
            <div>
                <label htmlFor="meals" className="block mb-5 text-sm text-gray-600 font-medium mt-4">Please Select a Meal :</label>
                    <select value={selectMeal} onChange={(e:any)=>handleStep1(e,'meal')} id="meals" className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-50 dark:placeholder-gray-50 dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{outline: 'none'}}>
                        <option value={''} disabled>Choose a meal</option>
                        {
                        dishData?.map((v,k)=>        
                                <option key={k} value={`${v.value}`} >{`${v.label}`}</option>
                            )
                        }
                    </select> 
                  {
                    !selectMeal && 
                    <p className="text-red-500 text-xs italic p-2">* Please choose a meal.*</p>
                  }
                 
            </div>
            <div>
                <label htmlFor="people"  className="block mb-5 text-sm text-gray-600 font-medium mt-4">Please Enter Number of people :</label>
                <input onChange={(e:any)=>handleStep1(e,'people')} value={numberPeople} type="number" min="1" max='10' id="people" className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-500  dark:focus:ring-blue-500 dark:focus:border-blue-500" required style={{outline: 'none'}}/>
            </div>
           
        </div>
    )
}