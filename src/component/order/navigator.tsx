interface Props {
 currentTab: number,
 handleNext: (e:any, current: number)=>void
 handlePrevious: (e:any, current: number)=>void
 btnEnable : boolean
}

export const Navigator: React.FC<Props>=({handleNext,currentTab,handlePrevious,btnEnable}: Props)=>{

    return(
        <>
        <div className={`flex ${currentTab !== 1 ?'justify-between': 'justify-end'} mt-5 mb-5`}>
            {
                currentTab !== 1 &&
                <button className="inline-flex items-center px-4 py-2 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={(e:any)=>handlePrevious(e,currentTab)}
                >
                <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                Prev
            </button>
            }
            {
                currentTab !==4 &&
                <button 
                className={ `inline-flex items-center px-4 py-2 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${btnEnable === false && 'cursor-not-allowed'}`}
                 onClick={(e:any)=>handleNext(e,currentTab)}>
                    Next
                    <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            }
            {
                currentTab ===4 &&
                <button 
                className={ `inline-flex items-center px-4 py-2 text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                 >
                    Submit
                </button>
            }
           
        </div>
        </>
    )
}