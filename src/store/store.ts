import { create } from 'zustand';

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
}

const useHabitStore = create<HabitState>()((set) => {
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
    };
});

export default useHabitStore;