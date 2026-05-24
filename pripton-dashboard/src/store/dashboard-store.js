import { create } from "zustand"

export const useDashboardStore = create((set) => ({
  selectedSessionId: null,
  isDetailOpen: false,
  filters: {
    search: "",
    status: "all",
    riskLevel: "all",
  },
  openDetail: (id) => set({ selectedSessionId: id, isDetailOpen: true }),
  closeDetail: () => set({ selectedSessionId: null, isDetailOpen: false }),
  setFilters: (partial) =>
    set((state) => ({ filters: { ...state.filters, ...partial } })),
  resetFilters: () =>
    set({
      filters: { search: "", status: "all", riskLevel: "all" },
    }),
}))
