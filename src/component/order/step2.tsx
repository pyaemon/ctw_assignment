type Props={
    restaurant: string,
    handleStep2: (e:any)=>void,
    restaurantData: {value: string, label: string}[]
}

export const Step2=({handleStep2,restaurantData,restaurant}: Props)=>{
//  console.log('res...',restaurantData);
 
    return(
        <div>
        <label htmlFor="restaurant" className="block mb-5 text-sm text-gray-600 font-medium mt-4">Please Select a restaurant :</label>
            <select onChange={handleStep2} value={restaurant} id="restaurant" className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-50 dark:placeholder-gray-50 dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{outline: 'none'}}>
                <option value={''} disabled>Choose a restaurant</option>
            {
                restaurantData?.map((v,k)=>
                <option key={k} id={v.value} value={v.label}>{v.label}</option>
                    )
            }
            </select> 
            {
                !restaurant &&
                <p className="text-red-500 text-xs italic p-2">* Please choose a meal.*</p>
            }
           
        </div>
    )
}