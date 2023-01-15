type Props={
    orderData: {id?: string; dishId?: string; name?: string, no_serving?: string}[]
    meals: string,
    restaurant: string,
    no_people: number
}
// meals: string, restaurant: string, no_people: string
export const Step4=({orderData,meals,restaurant,no_people}: Props)=>{
    
    return(
        <div className="mt-5 grid grid-cols-2 gap-4 text-justify" style={{marginLeft: 5}}>
       
            <p className="">Meal :</p>  
            <p>{meals}</p>
            <p>No of People :</p>  
            <p>{no_people}</p>
            <p>Restaurant :</p>  
            <p>{restaurant}</p>
            <p>Dish :</p>  
            <div className="bg-gray-50 shadow rounded-lg py-2 pl-3">
            {
                Object?.values(orderData)?.map(v=>
                <div className="flex flex-row text-justify">
                <p className="mr-3">{v.name} :</p>
                <p> {v.no_serving}</p> 
                </div>       
                )
            } 
            </div>
        </div>
       
    )
}