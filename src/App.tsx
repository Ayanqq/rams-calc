import './App.css'
import {Settings} from "./Settings.tsx";
import {Table} from "./Table.tsx";
import {Total} from "./Total.tsx";


function App() {
    return (
        <div className="flex flex-col gap-[30px]">
            <h2 className={'text-[#343434] font-semibold text-[24px]'}>Калькулятор</h2>
            <div className={'flex gap-[45px]'}>
                <Settings/>
                <Table/>
                <Total/>
            </div>
        </div>
    )
}

export default App
