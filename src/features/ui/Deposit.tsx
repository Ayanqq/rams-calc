import {Label} from "@/components/ui/label.tsx";
import {Slider} from "@/components/ui/slider.tsx";
import {useState} from "react";

export const Deposit = ({label}: { label: string }) => {
    const [percentage, setPercentage] = useState(50);
    const [amount, setAmount] = useState(9900000); // допустим, от суммы 30 млн

    const fullPrice = 30000000;

    const handleSliderChange = (value: number[]) => {
        const percent = value[0];
        setPercentage(percent);
        setAmount(Math.round((fullPrice * percent) / 100));
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value.replace(/\D/g, ""));
        setAmount(value);
        setPercentage(Math.round((value / fullPrice) * 100));
    };

    return (
        <div className="border-[1px] border-[#CFD2D1] rounded-xs px-[15px] py-[10px] space-y-3">
            <Label>{label}</Label>

            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={amount.toLocaleString("ru-RU")}
                    onChange={handleAmountChange}
                    className="text-[15px] font-semibold border rounded px-3 py-2 w-full max-w-[200px]"
                />
                <span className="text-[15px] font-semibold">{percentage}%</span>
            </div>

            <Slider
                defaultValue={[percentage]}
                value={[percentage]}
                max={100}
                step={1}
                onValueChange={handleSliderChange}
            />


        </div>
    );
};
