// Table.tsx
import {useState} from "react";

type Row = {
    id: number;
    paymentType: string;
    day: number;
    date: string;
    sum: number;
};

export const Table = () => {
    const [rows, setRows] = useState<Row[]>([
        {id: 1, paymentType: "Задаток", day: 1, date: 'Июнь 2023', sum: 100000},
        {id: 2, paymentType: "ПВ", day: 2, date: 'Июнь 2023', sum: 3000000},
    ]);

    const addRow = () => {
        const newRow: Row = {
            id: 1,
            paymentType: '',
            sum: 0,
            day: 0,
            date: ''
        };
        setRows([...rows, newRow]);
    };

    const deleteRow = (id: number) => {
        setRows(rows.filter(row => row.id !== id));
    };

    const updateRow = (id: number, key: keyof Row, value: string) => {
        setRows(rows.map(row => row.id === id ? {...row, [key]: value} : row));
    };

    return (
        <div>
            <table className="w-full border border-gray-300">
                <thead>
                <tr className="bg-gray-100">
                    <th className="p-2 border">№</th>
                    <th className="p-2 border">Тип оплаты</th>
                    <th className="p-2 border">День</th>
                    <th className="p-2 border">Дата</th>
                    <th className="p-2 border">Сумма, т</th>
                    <th className="p-2 border">
                        <button onClick={addRow}>+</button>
                    </th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1 rounded"
                                value={row.id}
                                onChange={(e) => updateRow(row.id, 'id', e.target.value)}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1 rounded"
                                value={row.paymentType}
                                onChange={(e) => updateRow(row.id, "paymentType", e.target.value)}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1 rounded"
                                value={row.day}
                                onChange={(e) => updateRow(row.id, "day", e.target.value)}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1 rounded"
                                value={row.date}
                                onChange={(e) => updateRow(row.id, "date", e.target.value)}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1 rounded"
                                value={row.sum}
                                onChange={(e) => updateRow(row.id, "sum", e.target.value)}
                            />
                        </td>
                        <td className="border p-2 text-center">
                            <button
                                onClick={() => deleteRow(row.id)}
                            >
                                -
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
