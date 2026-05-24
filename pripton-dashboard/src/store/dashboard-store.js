"use client"

import { create } from "zustand"

export const useDashboardStore = create((set) => ({
  selectedSessionId: null,
  selectedSession: null,
  isDetailOpen: false,
  filters: {
    search: "",
    status: "all",
    riskLevel: "all",
  },
  openDetail: (sessionOrId) =>
    set({
      selectedSessionId:
        sessionOrId && typeof sessionOrId === "object"
          ? sessionOrId.id
          : sessionOrId,
      selectedSession:
        sessionOrId && typeof sessionOrId === "object" ? sessionOrId : null,
      isDetailOpen: true,
    }),
  closeDetail: () =>
    set({ selectedSessionId: null, selectedSession: null, isDetailOpen: false }),
  setFilters: (partial) =>
    set((state) => ({ filters: { ...state.filters, ...partial } })),
  resetFilters: () =>
    set({
      filters: { search: "", status: "all", riskLevel: "all" },
    }),
}))
