export const makeSession = (overrides = {}) => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const randomStr = (len) =>
    Array.from({ length: len })
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");

  const names = [
    "Arjun Mehta",
    "Priya Sharma",
    "Ravi Patel",
    "Ananya Iyer",
    "Karan Verma",
    "Sneha Desai",
    "Vikram Singh",
    "Nisha Gupta",
    "Rahul Joshi",
    "Kavya Reddy",
    "Amit Bhatia",
    "Meera Menon",
    "Siddharth Nair",
    "Pooja Rao",
    "Rohan Das",
  ];

  const exams = [
    "Frontend Engineering Assessment",
    "System Design Interview",
    "Data Structures Test",
    "Backend API Challenge",
    "Full Stack Project Review",
  ];

  const candidateName = names[Math.floor(Math.random() * names.length)];
  const candidateEmail =
    candidateName.toLowerCase().replace(" ", ".") + "@example.com";
  const examTitle = exams[Math.floor(Math.random() * exams.length)];

  const statusRand = Math.random();
  let sessionStatus = "completed";
  if (statusRand < 0.2) sessionStatus = "active";
  else if (statusRand < 0.6) sessionStatus = "completed";
  else if (statusRand < 0.9) sessionStatus = "flagged";
  else sessionStatus = "terminated";

  const riskRand = Math.random();
  let riskLevel = "low";
  if (riskRand < 0.4) riskLevel = "low";
  else if (riskRand < 0.7) riskLevel = "medium";
  else if (riskRand < 0.9) riskLevel = "high";
  else riskLevel = "critical";

  let minScore, maxScore;
  if (riskLevel === "critical") {
    minScore = 0;
    maxScore = 30;
  } else if (riskLevel === "high") {
    minScore = 31;
    maxScore = 55;
  } else if (riskLevel === "medium") {
    minScore = 56;
    maxScore = 75;
  } else {
    minScore = 76;
    maxScore = 100;
  }

  const integrityScore =
    Math.floor(Math.random() * (maxScore - minScore + 1)) + minScore;

  const durationSeconds = Math.floor(Math.random() * (7200 - 600 + 1)) + 600;

  const states = ["in-progress", "idle", "disconnected", "completed"];
  const currentState = states[Math.floor(Math.random() * states.length)];

  const now = new Date();
  const pastMs = Math.random() * 7 * 24 * 60 * 60 * 1000;
  const startedAtDate = new Date(now.getTime() - pastMs);
  const startedAt = startedAtDate.toISOString();

  const lastActivityAtDate = new Date(
    startedAtDate.getTime() + durationSeconds * 1000
  );
  const lastActivityAt = lastActivityAtDate.toISOString();

  const eventCount = Math.floor(Math.random() * (25 - 6 + 1)) + 6;
  const warningCount = Math.floor(
    Math.random() * (Math.min(eventCount, 8) + 1)
  );

  return {
    id: "sess_" + randomStr(6),
    candidateName,
    candidateEmail,
    examTitle,
    sessionStatus,
    riskLevel,
    integrityScore,
    durationSeconds,
    currentState,
    startedAt,
    lastActivityAt,
    eventCount,
    warningCount,
    ...overrides,
  };
};
