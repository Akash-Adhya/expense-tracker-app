import React from "react";
import { currency, formatDate } from "../../utils/format";

export default function TransactionRow({ item, onToggle, selected }) {
  return (
    <div className="flex items-center justify-between p-2 rounded hover:bg-surface">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => onToggle(item.id)}
        />
        <div>
          <div className="text-sm font-medium">{item.title}</div>
          <div className="text-xs text-slate-400">
            {item.category} • {formatDate(item.date)}
          </div>
        </div>
      </div>
      <div
        className={`text-sm font-semibold ${
          item.type === "expense" ? "text-red-500" : "text-green-600"
        }`}
      >
        {item.type === "expense" ? "-" : "+"}
        {currency(item.amount)}
      </div>
    </div>
  );
}
