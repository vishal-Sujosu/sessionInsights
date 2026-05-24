"use client"

import { useState } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table"
import { sessionColumns } from "../components/session-columns"
import { PAGINATION_DEFAULTS } from "@/lib/constants"

export function useSessionTable(sessions, globalFilter, columnFilters) {
  const [sorting, setSorting] = useState([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: PAGINATION_DEFAULTS.pageSize,
  })

  return useReactTable({
    data: sessions,
    columns: sessionColumns,
    state: {
      globalFilter,
      columnFilters,
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
    initialState: {
      pagination: {
        pageSize: PAGINATION_DEFAULTS.pageSize,
      },
    },
  })
}
