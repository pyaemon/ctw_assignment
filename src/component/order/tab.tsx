
type ButtonProps = {
    handleTabClick: (event: any, current: number) => void;
    currentTab: number
  };
export const Tab=({handleTabClick,currentTab}: ButtonProps)=>{
    return(
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700" >
            <ul className="flex flex-wrap -mb-px">
                {
                    tabData?.map((v,k)=>
                    <li className="mr-2" key={k}>
                        <a
                        onClick={(e)=>handleTabClick(e,v.id)} 
                        className={`${v.id === currentTab ? `inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500`:
                         'cursor-not-allowed inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'}`}>{v.name}</a>
                    </li>
                    
                    )
                }
            </ul>
        </div>
    )
}
const tabData=[
    {id:1,name: 'Step1'},
    {id:2,name: 'Step2'},
    {id:3,name: 'Step3'},
    {id:4,name: 'Step4'},
]