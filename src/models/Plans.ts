import { PLANS_API } from "@/utils/Constants";
import type { PlansType } from "@/utils/Types";

export const getPlans = async () => {
  try {
    const response = await fetch(PLANS_API);

    if (!response.ok) return { status: false, error: `HTTP error: ${response.status}` };

    const data: PlansType = await response.json();

    return { status: true, data };
  } catch (error) {
    return { status: false, error: error instanceof Error ? error.message : String(error) };
  }
};
