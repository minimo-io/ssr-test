import { error } from "@sveltejs/kit";
export function load() {
    throw error(420, "Excercise patience!");
}
