type ButtonProps = {
  addRow: () => void;
  dishData: {
    id?: string;
    dishId?: string;
    name?: string;
    no_serving?: string;
  }[];
  handleStep3: (e: any) => void;
  handleStep3TextChange: (e: any, valueFor: string) => void;
  dishOptionData: { value: string; label: string }[];
  newRow: number;
  addDisable: boolean;
  valid: boolean
};
export const Step3 = ({
  dishOptionData,
  handleStep3,
  dishData,
  addRow,
  newRow,
  addDisable,
  valid,
  handleStep3TextChange,
}: ButtonProps) => {
  const arr = new Array(newRow).fill(null);

  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:gap-10">
        <div className="">
          <label
            htmlFor="dish"
            className="block mb-5 text-sm text-gray-600 font-medium mt-4"
          >
            Please Select a Dish :
          </label>
          <select
            onChange={(e: any) => handleStep3(e)}
            id="dish"
            defaultValue={dishData.find((d) => d.dishId === "dish")?.id || ""}
            className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-50 dark:placeholder-gray-50 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            style={{ outline: "none" }}
          >
            <option value={""} disabled>
              Choose a dish
            </option>
            {dishOptionData?.map((v, k) => (
              <option
                disabled={
                  dishData?.find((d) => d.id === v.value) ? true : false
                }
                key={k}
                value={`${v.value}`}
              >{`${v.label}`}</option>
            ))}
          </select>
          {!dishData.length && valid &&(
            <p className="text-red-500 text-xs italic p-2">
              * Please choose a dish.*
            </p>
          )}
        </div>
        <div className="">
          <label
            htmlFor="serving"
            className="block mb-5 text-sm text-gray-600 font-medium mt-4"
          >
            Please Enter Number of servings :
          </label>
          <input
            type="number"
            value={dishData.find((d) => d.dishId === "dish")?.no_serving || ""}
            onChange={(e: any) => handleStep3TextChange(e, "dish")}
            min="1"
            max="10"
            id="serving"
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1"
            required
            style={{ outline: "none" }}
          />
            { dishData.find((d) => d.dishId === "dish")?.no_serving=== undefined && valid &&(
            <p className="text-red-500 text-xs italic p-2">
              * Please insert serving.*
            </p>
          )}
        </div>
      </div>

      {arr.map((v, k) => (
        <div
          className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-5"
          key={k}
        >
          <div className="">
            <label
              htmlFor="addDish"
              className="block text-sm text-gray-600 font-medium add_Dish"
            ></label>
            <select
              id={`addDish-${k + 1}`}
              onChange={(e: any) => handleStep3(e)}
              defaultValue={
                dishData.find((d) => d.dishId === `addDish-${k + 1}`)?.id ||
                ""
              }
              className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-50 dark:placeholder-gray-50 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              style={{ outline: "none" }}
            >
              <option value={""} disabled>
                Choose a dish
              </option>
              {dishOptionData?.map((v, k) => (
                <option
                  disabled={
                    dishData?.find((d) => d.id === v.value) ? true : false
                  }
                  key={k}
                  value={`${v.value}`}
                >{`${v.label}`}</option>
              ))}
            </select>
          </div>
          <input
            type="number"
            value={
              dishData.find((d) => d.dishId === `addDish-${k + 1}`)
                ?.no_serving || ""
            }
            onChange={(e: any) => handleStep3TextChange(e, `addDish-${k + 1}`)}
            min="1"
            max="10"
            id="serving"
            className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1"
            required
            style={{ outline: "none" }}
          />
        </div>
      ))}
      <div className="grid grid-col-1 mt-5">
        <button
          disabled={addDisable && true}
          className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
          onClick={addRow}
        >
          Add Dish
        </button>
      </div>
    </div>
  );
};
