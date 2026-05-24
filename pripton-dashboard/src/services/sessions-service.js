import { MOCK_SESSIONS } from "@/mocks/sessions";
import { simulateAsync } from "@/mocks/delay";

export const getSessions = () => simulateAsync(MOCK_SESSIONS, 600);

export const getSessionById = (id) =>
  simulateAsync(MOCK_SESSIONS.find((s) => s.id === id) ?? null, 400);
