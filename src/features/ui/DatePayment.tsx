import {Label} from "@/components/ui/label.tsx";
import {DatePicker} from "@/components/ui/datePicker.tsx";

export const DatePayment = () => {
    return (
        <div className="border-[1px] border-[#CFD2D1] rounded-xs px-[15px] py-[10px] space-y-3">
            <Label>Дата ПВ</Label>
            <DatePicker/>
        </div>
    );
};
