import { useEffect, useState } from "react";
import * as MyComponent from "../component";
import DishData from "../data/dishes.json";

const Order = () => {
  const [selectMeal, setSelectMeal] = useState("");
  const [numberPeople, setNumberPeople] = useState(1);
  const [currentTab, setCurrentTab] = useState<number>(1);
  const [restaurant, setRestaurant]=  useState<Array<{
    id?: string;
    name: string
  }>
  >([]);

  const [dish, setDish] = useState<
    Array<{
      id?: string;
      dishId?: string;
      name?: string;
      no_serving?: string;
    }>
  >([]);
  const [valid,setValid]=useState(false)
  const [btnEnable, setbtnEnable] = useState<boolean>(false);
  const [newRow, setNewRow] = useState(0);
  const [addDisable, setAddDisable] = useState(false);

  const mealOption = DishData.dishes.filter(
    (v) => v.availableMeals.length >= 3
  )[0].availableMeals;
  const mealData = Object.values(mealOption)?.map((v) => {
    return {
      value: `${v}`,
      label: `${v?.charAt(0)?.toUpperCase() + v.slice(1)}`,
    };
  });

  const restaurantOption = DishData.dishes.filter((v) =>
    v.availableMeals?.includes(`${selectMeal}`)
  );

  const res = restaurantOption?.map((v) => {
    return { id: v.id, restaurant: v.restaurant };
  });

  const removeDuplicate = res.filter(
    (item, index) =>
      index === res.findIndex((v) => item.restaurant === v.restaurant)
  );

  const restaurantData = removeDuplicate?.map((v1) => {
    return {
      value: `${v1.id}`,
      label: `${v1.restaurant}`,
    };
  });

  const dishOption = DishData.dishes.filter(
    (v) =>
      v.availableMeals?.includes(`${selectMeal}`) &&
      v.restaurant?.includes(`${restaurant?.map(v=>v.name)}`)
  );

  const dishName = dishOption?.map((v) => {
    return { id: v.id, name: v.name };
  });
  const removeDuplicateDish = dishName.filter(
    (item, index) => index === dishName.findIndex((v) => item.name === v.name)
  );
  //DishOption Array
  const dishOptionData = removeDuplicateDish?.map((v) => {
    return {
      value: `${v.id}`,
      label: `${v.name}`,
    };
  });

  const handleTabClick = (event: any, current: number) => {
      if(btnEnable){
        setCurrentTab(current)
      }
    };

  const handleStep1 = (e: any, type: string) => {
    if (type === "meal" && e.target.value) {
      setSelectMeal(e.target.value);
    } else if (e.target.value >= 1 && e.target.value <= 10) {
      setNumberPeople(e.target.value);
    }
    setbtnEnable(true);
  };

  const handleStep2 = (e: any) => {
    const { id, value } = e.target;
    const name = restaurantData?.filter((d) => d.value === value)[0].label
    if (id && value) {
      const restaurantData={id: value,name: name}
      setRestaurant([restaurantData]);
    }
    setbtnEnable(true);
  };

  const handleStep3 = (e: any) => {
    setAddDisable(false);
    const { id, value } = e.target;
    const isDuplicate =
      dish.length > 0 && dish.filter((d) => d.dishId === id).length > 0;
    const index = dish.findIndex((d) => d.dishId === id);
    const name = dishOptionData.filter((d) => d.value === value)[0].label;
    const obj = dish.find((v) => v.dishId === id);
    const newObj = { ...obj, id: value, dishId: id, name: name };

    if (isDuplicate) {
      setDish(dish.splice(index, 1));
      setDish(dish.concat(newObj));
    } else {
      setDish(dish.concat(newObj));
    }
  };

  const handleStep3TextChange = (e: any, valueFor: string) => {
    const { value } = e.target;

    const isDuplicate =
    dish.length > 0 && dish.filter((d) => d.dishId === valueFor).length > 0;
    const index = dish.findIndex((d) => d.dishId === valueFor);
    const obj = dish.find((v) => v.dishId === valueFor);
  
    const newObj = obj
      ? { ...obj, no_serving: value }
      : { dishId: valueFor, no_serving: value  ? value: '1'};
   
    if (isDuplicate) {
      setDish(dish.splice(index, 1));
      setDish(dish.concat(newObj));
    } else {
      setDish(dish.concat(newObj));
    }
     
  };

  const handleNext = (e: any, current: number) => {
        e.preventDefault();
        setbtnEnable(false);
        setValid(false)
        const no_serving=dish?.find(v=>v.no_serving)
        if (current === 1 && selectMeal && numberPeople) {
          setCurrentTab(2);
        } else if (current === 2 && restaurant.length >0) {
          setCurrentTab(3);
        } else if (current === 3 && 
          dish.length>0 && 
          no_serving !== undefined  
        ){
          setCurrentTab(4)  
        }else{
         setValid(true)
        }
      }


  const handlePrevious = (e: any, current: number) => {
    e.preventDefault();
    if (current === 4) {
      setCurrentTab(3);
    } else if (current === 3) {
      setCurrentTab(2);
    } else if (current === 2) {
      setCurrentTab(1);
    }else if (current ===1){
    }
  };

  const addRow = () => {
    const maxRow = dishOptionData.length - 1;
    if (newRow < maxRow) {
      setNewRow(newRow + 1);
    }
  };
  
  useEffect(()=>{

  if (newRow +1 > dishOptionData.length){
    setDish([])
    setNewRow(0)
  }
  },[newRow,dishOptionData])
 
  return (
    <div className="flex flex-wrap items-center justify-center">
      <div
        className="bg-white shadow rounded-lg p-4"
        style={{ width: 550, marginTop: 50 }}
      >
        <MyComponent.Tab
          handleTabClick={handleTabClick}
          currentTab={currentTab}
        />
        {currentTab === 1 ? (
          <MyComponent.Step1
            dishData={mealData && mealData}
            handleStep1={handleStep1}
            selectMeal={selectMeal}
            numberPeople={numberPeople}
            btnEnable={btnEnable}
            valid={valid}
          />
        ) : currentTab === 2 ? (
          <MyComponent.Step2
            restaurant={restaurant}
            handleStep2={handleStep2}
            restaurantData={restaurantData}
            valid={valid}
          />
        ) : currentTab === 3 ? (
          <MyComponent.Step3
            handleStep3={handleStep3}
            dishData={dish}
            dishOptionData={dishOptionData}
            addRow={addRow}
            newRow={newRow}
            addDisable={addDisable}
            handleStep3TextChange={handleStep3TextChange}
            valid={valid}
          />
        ) : (
          <MyComponent.Step4
            orderData={dish}
            meals={selectMeal}
            restaurant={restaurant}
            no_people={numberPeople}
          />
        )}
        <MyComponent.Navigator
          btnEnable={btnEnable}
          currentTab={currentTab}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          orderData={dish}
          meals={selectMeal}
          restaurant={restaurant}
          no_people={numberPeople}
        />
      </div>
    </div>
  );
};
export default Order;
