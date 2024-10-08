import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface Habit {
    id: string,
    name: string,
    frequency: "daily" | "weekly",
    completedDates: string[],
    createdAt: string;
}

interface HabitState {
    habits: Habit[];
    addHabits: (name: string, frequency: "daily" | "weekly") => void;
    removeHabit: (id: string) => void;
    toggleHabits: (id: string, date: string) => void;
}

const useHabitStore = create<HabitState>()(
    persist((set) => {
        return {
            habits: [],
            addHabits: (name, frequency) =>
                set((state) => {
                    return {
                        habits: [...state.habits,
                        {
                            id: Date.now().toString(),
                            name,
                            frequency,
                            completedDates: [],
                            createdAt: new Date().toISOString()
                        }
                        ]
                    };
                }),
            removeHabit: (id) =>
                set((state) => ({
                    habits: state.habits.filter((habit) => habit.id !== id),
                })),
            toggleHabits: (id, date) => set((state) => ({
                habits: state.habits.map((habit) => habit.id === id ? {
                    ...habit,
                    completedDates: habit.completedDates.includes(date)
                        ? habit.completedDates.filter((dt) => dt !== date)
                        : [...habit.completedDates, date]
                } : habit)
            }))
        };
    }, {
        name: "habit-local",
        // storage: createJSONStorage(()=>localStorage) 
    }));

export default useHabitStore;