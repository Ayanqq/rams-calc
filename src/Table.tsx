import { useState } from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Row = {
    id: number;
    paymentType: string;
    day: number;
    date: string;
    sum: number;
};

export const Table = () => {
    const [rows, setRows] = useState<Row[]>([
        { id: 1, paymentType: "Задаток", day: 1, date: "Июнь 2023", sum: 100000 },
        { id: 2, paymentType: "ПВ", day: 2, date: "Июнь 2023", sum: 3000000 },
    ]);

    const sensors = useSensors(useSensor(PointerSensor));

    const addRow = () => {
        const lastId = rows.reduce((max, row) => Math.max(max, row.id), 0);
        const newRow: Row = {
            id: lastId + 1,
            paymentType: "",
            sum: 0,
            day: 0,
            date: "",
        };
        setRows([...rows, newRow]);
    };

    const deleteRow = (id: number) => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const updateRow = (id: number, key: keyof Row, value: string) => {
        setRows(
            rows.map((row) => {
                if (row.id !== id) return row;
                const updatedValue =
                    key === "id" || key === "day" || key === "sum"
                        ? Number(value)
                        : value;
                return { ...row, [key]: updatedValue };
            })
        );
    };

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id !== over?.id) {
            const oldIndex = rows.findIndex((row) => row.id === active.id);
            const newIndex = rows.findIndex((row) => row.id === over?.id);

            setRows((items) => arrayMove(items, oldIndex, newIndex));
        }
    };

    return (
        <div>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <SortableContext
                    items={rows.map((row) => row.id)}
                    strategy={verticalListSortingStrategy}
                >
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
                            <SortableRow
                                key={row.id}
                                row={row}
                                updateRow={updateRow}
                                deleteRow={deleteRow}
                            />
                        ))}
                        </tbody>
                    </table>
                </SortableContext>
            </DndContext>
        </div>
    );
};

function SortableRow({
                         row,
                         updateRow,
                         deleteRow,
                     }: {
    row: Row;
    updateRow: (id: number, key: keyof Row, value: string) => void;
    deleteRow: (id: number) => void;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: row.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <tr ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <td className="border p-2">{row.id}</td>
            <td className="border p-2">
                <input
                    type="text"
                    className="w-full p-1 rounded"
                    value={row.paymentType}
                    onChange={(e) =>
                        updateRow(row.id, "paymentType", e.target.value)
                    }
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
                <button onClick={() => deleteRow(row.id)}>-</button>
            </td>
        </tr>
    );
}
