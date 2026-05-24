import { makeSession } from "./generators";

export const MOCK_SESSIONS = [
  makeSession({
    sessionStatus: "flagged",
    riskLevel: "critical",
    integrityScore: 18,
    candidateName: "Arjun Mehta",
  }),
  makeSession({
    sessionStatus: "active",
    riskLevel: "low",
    integrityScore: 91,
    candidateName: "Priya Sharma",
  }),
  makeSession({
    sessionStatus: "completed",
    riskLevel: "medium",
    integrityScore: 63,
    candidateName: "Ravi Patel",
  }),
  makeSession({
    sessionStatus: "terminated",
    riskLevel: "high",
    integrityScore: 42,
    candidateName: "Ananya Iyer",
  }),
  makeSession({
    sessionStatus: "flagged",
    riskLevel: "high",
    integrityScore: 37,
    candidateName: "Karan Verma",
  }),
  ...Array.from({ length: 25 }).map(() => makeSession()),
];
