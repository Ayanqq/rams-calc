import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui";
import {Label} from "@/components/ui/label.tsx";

export const SelectPayment = () => {
    return (
        <div className={'border-[1px] border-[#CFD2D1] rounded-xs px-[15px] py-[6px]'}>
            <Label htmlFor={'payment'}>Форма оплаты</Label>
            <Select defaultValue={"20"}>
                <SelectTrigger className={'w-full'} id={'payment'}>
                    <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="20"><span className={'text-[15px] font-semibold'}>Рассрочка 20%</span></SelectItem>
                        <SelectItem value="30"><span className={'text-[15px] font-semibold'}>Рассрочка 30%</span></SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};
