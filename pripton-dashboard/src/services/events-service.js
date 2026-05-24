import { getMockEventsForSession } from "@/mocks/events";
import { simulateAsync } from "@/mocks/delay";

export const getEventsBySession = (session) =>
  simulateAsync(getMockEventsForSession(session), 500);
