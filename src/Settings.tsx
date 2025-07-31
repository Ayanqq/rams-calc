import {SelectPayment} from "./features/ui/SelectPayment.tsx";
import {Deposit} from "@/features/ui/Deposit.tsx";

export const Settings = () => {
    return (
        <div className={'w-[220px] h-[390px] flex flex-col gap-[15px]'}>
            <SelectPayment/>
            <Deposit/>
        </div>
    );
};
