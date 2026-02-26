"use client";

import { useState } from "react";
import { Check, Edit2 } from "lucide-react";
import clsx from "clsx";

interface Ingredient {
  id: string;
  amount: string;
  name: string;
  subtext?: string;
}

export default function IngredientList({
  ingredients,
}: {
  ingredients: Ingredient[];
}) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const next = new Set(checkedItems);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setCheckedItems(next);
  };

  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-serif font-bold text-2xl text-gray-900">Ingredients</h3>
        <button className="flex items-center gap-2 text-primary font-bold text-sm bg-green-50 px-4 py-2 rounded-full hover:bg-green-100 transition-colors">
          <Edit2 className="w-4 h-4" />
          Adjust
        </button>
      </div>

      <div className="space-y-4">
        {ingredients.map((item) => {
          const isChecked = checkedItems.has(item.id);
          return (
            <label
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                toggleItem(item.id);
              }}
              className="flex items-start gap-4 cursor-pointer group p-2 -mx-2 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div
                className={clsx(
                  "w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors border",
                  isChecked
                    ? "bg-primary border-primary"
                    : "bg-white border-gray-300 group-hover:border-primary"
                )}
              >
                {isChecked && <Check className="w-4 h-4 text-white" />}
              </div>
              
              <div className="flex-1">
                <p
                  className={clsx(
                    "font-bold text-gray-900 transition-all",
                    isChecked && "text-gray-400 line-through"
                  )}
                >
                  {item.amount} <span className="font-medium">{item.name}</span>
                </p>
                {item.subtext && (
                  <p
                    className={clsx(
                      "text-sm mt-0.5 transition-all text-gray-500",
                      isChecked && "opacity-50 line-through"
                    )}
                  >
                    {item.subtext}
                  </p>
                )}
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
