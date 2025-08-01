import {SelectPayment} from "./features/ui/SelectPayment.tsx";
import {Deposit} from "@/features/ui/Deposit.tsx";
import {DatePayment} from "@/features/ui/DatePayment.tsx";
import {AmountPayment} from "@/features/ui/AmountPayment.tsx";
import {Button} from "@/components/ui/button.tsx";

export const Settings = () => {
    return (
        <div className={'w-[220px] h-[390px] flex flex-col gap-[15px]'}>
            <SelectPayment/>
            <Deposit label={"Задаток"}/>
            <DatePayment/>
            <Deposit label={'ПВ'}/>
            <AmountPayment/>
            <Button className={' bg-[#035040] px-[74px] py-[13px]'}>Сохранить</Button>
        </div>
    );
};
