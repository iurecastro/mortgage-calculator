import React from "react";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
    const bank_limit = 10000;
    return (
        <div>
            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        downPayment: value.toFixed(0),
                        loanAmount: (data.homeValue - value).toFixed(0),
                    })
                }
                defaultValue={data.downPayment}
                min={0}
                max={data.homeValue}
                steps={100}
                unit="£"
                amount={data.downPayment}
                label="Down Payment"
                value={data.downPayment}
            />

            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        loanAmount: value.toFixed(0),
                        downPayment: (data.homeValue - value).toFixed(0),
                    })
                }
                defaultValue={data.loanAmount}
                min={0}
                max={data.homeValue}
                steps={100}
                unit="£"
                amount={data.loanAmount}
                label="Loan Amount"
                value={data.loanAmount}
            />


            <SliderComponent
                onChange={(e, value) =>
                    setData({
                        ...data,
                        interestRate: value,
                    })
                }
                defaultValue={data.interestRate}
                min={2}
                max={18}
                steps={0.5}
                unit="%"
                amount={data.interestRate}
                label="Interest Rate"
                value={data.interestRate}
            />
        </div>

    );
};

export default SliderSelect;