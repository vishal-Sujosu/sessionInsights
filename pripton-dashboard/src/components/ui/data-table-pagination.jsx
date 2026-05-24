"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { PAGINATION_DEFAULTS } from "@/lib/constants"

export function DataTablePagination({ table }) {
  const { pageIndex, pageSize } = table.getState().pagination
  const totalRows = table.getPrePaginationRowModel().rows.length
  const pageCount = table.getPageCount()

  const startRow = pageIndex * pageSize + 1
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows)

  return (
    <div className="flex items-center justify-between px-2">
      <div className="text-sm text-muted-foreground flex-1">
        {totalRows > 0 ? (
          <>
            Showing {startRow}–{endRow} of {totalRows} sessions
          </>
        ) : (
          "0 sessions"
        )}
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <Select
            value={`${pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {PAGINATION_DEFAULTS.pageSizeOptions.map((pageSizeOption) => (
                <SelectItem key={pageSizeOption} value={`${pageSizeOption}`}>
                  {pageSizeOption}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-sm font-medium w-[100px] text-center">
            Page {pageCount > 0 ? pageIndex + 1 : 0} of {pageCount}
          </div>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
