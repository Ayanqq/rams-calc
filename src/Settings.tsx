import {SelectPayment} from "./features/ui/SelectPayment.tsx";
import {Deposit} from "@/features/ui/Deposit.tsx";
import {DatePayment} from "@/features/ui/DatePayment.tsx";

export const Settings = () => {
    return (
        <div className={'w-[220px] h-[390px] flex flex-col gap-[15px]'}>
            <SelectPayment/>
            <Deposit label={"Задаток"}/>
            <DatePayment/>
            <Deposit label={'ПВ'}/>
        </div>
    );
};
