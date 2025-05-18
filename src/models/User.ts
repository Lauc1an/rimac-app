import { USER_API } from "@/utils/Constants";
import type { UserType } from "@/utils/Types";

export const getUser = async () => {
  try {
    const response = await fetch(USER_API);

    if (!response.ok) return { status: false, error: `HTTP error: ${response.status}` };

    const data: UserType = await response.json();

    return { status: true, data };
  } catch (error) {
    return { status: false, error: error instanceof Error ? error.message : String(error) };
  }
};
