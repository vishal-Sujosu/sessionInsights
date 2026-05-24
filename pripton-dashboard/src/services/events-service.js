import { MOCK_EVENTS } from "@/mocks/events";
import { simulateAsync } from "@/mocks/delay";

export const getEventsBySessionId = (sessionId) =>
  simulateAsync(MOCK_EVENTS[sessionId] ?? [], 500);
