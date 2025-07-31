import {useState} from "react";
import {Label} from "@/components/ui/label.tsx";
import {Slider} from "@/components/ui/slider.tsx";

const TOTAL_PRICE = 30_000_000; // общая сумма

export const Deposit = () => {
    const [percent, setPercent] = useState(50);

    const handleChange = (value: number[]) => {
        setPercent(value[0]);
    };

    const depositAmount = Math.round((TOTAL_PRICE * percent) / 100);

    return (
        <div className="border-[1px] border-[#CFD2D1] rounded-xs px-[15px] py-[6px] space-y-2">
            <Label>Задаток</Label>
            <div className="flex justify-between items-center text-sm font-medium">
                <span className={'text-[15px] font-semibold'}>{depositAmount.toLocaleString()} ₸</span>
                <span className={'text-[15px] font-semibold'}>{percent}%</span>
            </div>
            <Slider
                defaultValue={[percent]}
                max={100}
                step={1}
                onValueChange={handleChange}
            />
        </div>
    );
};
