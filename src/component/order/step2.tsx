type Props={
    restaurant: {id?: string, name?:string}[],
    handleStep2: (e:any)=>void,
    restaurantData: {value: string, label: string}[],
    valid: boolean
}

export const Step2=({handleStep2,restaurantData,restaurant,valid}: Props)=>{

    return(
        <div>
        <label htmlFor="restaurant" className="block mb-5 text-sm text-gray-600 font-medium mt-4">Please Select a restaurant :</label>
            <select 
            onChange={handleStep2} 
            defaultValue={`${restaurant?.map(v=>v.id) || ''}`} 
            id="restaurant" 
            className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-50 dark:placeholder-gray-50 dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{outline: 'none'}}>
                <option value={''} disabled>Choose a restaurant</option>
            {
                restaurantData?.map((v,k)=>
                <option key={k}  value={`${v.value}`}>{`${v.label}`}</option>
                    )
            }
            </select> 
            {
                restaurant.length===0 && valid &&
                <p className="text-red-500 text-xs italic p-2">* Please choose a restaurant.*</p>
            }
           
        </div>
    )
}