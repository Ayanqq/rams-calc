import {Slider} from "@/components/ui/slider.tsx";
import {Label} from "@/components/ui/label.tsx";
import {useState} from "react";

export const AmountPayment = () => {
    const [number, setNumber] = useState(12)

    const sliderOnChange = (value: number[]) => {
        setNumber(value[0])
    }

    console.log('Цифра',number)

    return (
        <div className="border-[1px] border-[#CFD2D1] rounded-xs px-[15px] py-[10px] space-y-3">
            <Label>Количество платежей</Label>
            <div className="flex items-center gap-2 justify-between">
                <span className="text-[15px] font-semibold">{number}</span>
                <span className="text-[15px] font-semibold">48</span>
            </div>
            <Slider
                onValueChange={sliderOnChange}
                value={[number]}
                max={48}
                step={1}
            /></div>
    );
};
