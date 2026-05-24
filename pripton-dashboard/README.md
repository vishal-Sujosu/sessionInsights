# Session Insights Dashboard

A comprehensive candidate session monitoring and integrity assessment dashboard built with Next.js, React, TanStack Table, and Recharts.

## Overview

Session Insights Dashboard provides real-time monitoring of candidate sessions during exams and assessments. It tracks integrity metrics, detects suspicious activities, and provides detailed analytics through an intuitive user interface.

### Key Features

- **Real-time Session Monitoring**: Track active, completed, flagged, and terminated sessions
- **Risk Assessment**: Visual risk level indicators with integrity score tracking
- **Analytics Dashboard**: Charts and graphs showing session distribution and integrity patterns
- **Advanced Filtering & Sorting**: Filter sessions by status, risk level, and search candidates
- **Column Visibility Toggle**: Customize table columns based on your needs
- **Session Details Panel**: Detailed view with timeline of events and metadata
- **Copy-to-Clipboard**: Quickly copy session IDs from the detail panel
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark Mode Support**: Theme toggle for comfortable viewing in any environment

## Architecture

### Technology Stack

- **Frontend Framework**: Next.js 16.2.6 with React 19.2.4
- **Table Library**: TanStack React Table 8.21.3
- **State Management**: Zustand 5.0.13
- **Data Fetching**: TanStack React Query 5.100.14
- **Charts**: Recharts 3.8.1
- **UI Components**: Shadcn/ui with Tailwind CSS 4
- **Icons**: Lucide React 1.16.0
- **Animation**: Framer Motion 12.40.0
- **Styling**: Tailwind CSS 4 with PostCSS 4

### Project Structure

```
src/
├── app/                          # Next.js app directory
│   ├── page.jsx                 # Dashboard with charts and stats
│   ├── sessions/page.jsx        # Sessions list page
│   ├── candidates/page.jsx      # Candidates page
│   ├── alerts/page.jsx          # Alerts page
│   └── settings/page.jsx        # Settings page
│
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── data-table.jsx       # Main table component
│   │   ├── stat-card.jsx        # Statistics cards
│   │   ├── stats-summary.jsx    # Summary stats bar
│   │   └── ...
│   └── charts/                  # Chart visualizations
│       ├── risk-level-chart.jsx # Risk distribution bar chart
│       ├── session-status-chart.jsx # Status pie chart
│       └── integrity-score-chart.jsx # Score distribution line chart
│
├── features/
│   ├── layout/                  # Header, sidebar, nav components
│   ├── sessions/                # Session-related features
│   │   ├── components/
│   │   │   ├── session-table.jsx       # Sessions table wrapper
│   │   │   ├── session-columns.jsx     # Table column definitions
│   │   │   ├── table-toolbar.jsx       # Column visibility toggle
│   │   │   └── ...
│   │   └── hooks/
│   │       ├── use-sessions.js         # Fetch sessions hook
│   │       └── use-session-table.js    # Table configuration hook
│   │
│   ├── session-detail/          # Session detail panel
│   │   ├── components/
│   │   │   ├── session-detail-panel.jsx    # Detail panel component
│   │   │   ├── session-metadata.jsx        # Session info
│   │   │   ├── session-stats.jsx           # Session statistics
│   │   │   └── warning-banner.jsx          # Risk warnings
│   │   └── hooks/
│   │       └── use-session-detail.js       # Detail and events hooks
│   │
│   └── timeline/                 # Event timeline visualization
│       ├── components/
│       │   ├── timeline.jsx      # Timeline component
│       │   └── timeline-item.jsx # Timeline events
│       └── utils/
│           └── event-config.js   # Event type configuration
│
├── lib/
│   ├── constants.js             # App-wide constants
│   └── utils.js                 # Utility functions
│
├── mocks/                       # Mock data generation
│   ├── sessions.js              # Mock session data
│   ├── events.js                # Mock event data
│   ├── generators.js            # Data generators
│   └── delay.js                 # Async delay utility
│
├── services/                    # API/data services
│   ├── sessions-service.js      # Session data fetching
│   └── events-service.js        # Event data fetching
│
└── store/
    └── dashboard-store.js       # Global state management (Zustand)
```

### Data Flow

1. **Services Layer** (`src/services/`): Handles data fetching with simulated async delays
2. **Hooks Layer** (`src/features/*/hooks/`): React Query hooks for data management
3. **Components Layer**: Receive data via props and render UI
4. **Store Layer** (`src/store/`): Global state for UI (selected session, filters, etc.)

### Mock Data Structure

The application uses realistic mock data for demonstration:

- **Sessions**: 30 mock candidates with varied integrity scores and risk levels
- **Events**: 6-25 events per session with configurable severity levels
- **Risk Levels**: Critical, High, Medium, Low (based on integrity score ranges)
- **Session Status**: Active, Completed, Flagged, Terminated

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   cd path/to/sessionInsights/pripton-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup** (if needed)
   Create a `.env.local` file in the root directory:
   ```env
   # Add any environment variables here
   ```

### Development

**Start the development server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The application supports:
- Hot module reloading for instant feedback
- Dark mode toggle (top-right corner)
- Responsive design adaptation

**Build for production:**
```bash
npm run build
npm start
```

**Run linting:**
```bash
npm run lint
```

## Features Guide

### 1. Dashboard (/)

**Statistics Summary Bar**
- Total Sessions: Count of all sessions
- Flagged: Sessions marked for review
- Average Risk Score: Mean integrity score across all sessions
- Active Sessions: Currently running sessions
- Critical Risk: Sessions with critical risk level

**Analytics Charts**
- **Risk Level Distribution**: Bar chart showing sessions by risk level
- **Session Status Distribution**: Pie chart of session statuses
- **Integrity Score Distribution**: Line chart showing score ranges

### 2. Sessions Page (/sessions)

**Table Features**
- Display session data with multiple columns
- Sort by any column (click header)
- Filter by status and risk level
- Search by candidate name or email
- Pagination with configurable page size
- Column visibility toggle (customize visible columns)

**Detail Panel**
- Click any session to open the detail panel
- View session metadata and statistics
- See event timeline with severity indicators
- Copy session ID to clipboard
- Close with X button or click backdrop

### 3. Interactive Elements

**Column Visibility Toggle**
- Click "Columns" button in table toolbar
- Select/deselect columns to customize view
- Persist preferences through session

**Risk Score Sorting**
- Click "Risk score" column header to sort
- Colored chevron indicates sort direction
- Up/down arrows show ascending/descending order

**Copy to Clipboard**
- Session ID in detail panel has copy button
- Click to copy ID to clipboard
- Visual feedback on copy action

## Component Reference

### Key Components

#### StatsSummary
Displays 5 key statistics about the session data.
```jsx
<StatsSummary sessions={sessions} />
```

#### Chart Components
- `RiskLevelChart`: Risk distribution bar chart
- `SessionStatusChart`: Status distribution pie chart
- `IntegrityScoreChart`: Score distribution line chart

#### DataTableToolbar
Column visibility toggle for the sessions table.
```jsx
<DataTableToolbar table={table} />
```

#### SessionDetailPanel
Full-screen panel for session details with timeline.
```jsx
<SessionDetailPanel />
```

## State Management

The app uses **Zustand** for global state:

**Dashboard Store** (`src/store/dashboard-store.js`):
- `selectedSessionId`: Currently selected session ID
- `selectedSession`: Full session object
- `isDetailOpen`: Detail panel visibility
- `filters`: Search and filter state
- `openDetail(session)`: Open detail panel
- `closeDetail()`: Close detail panel
- `setFilters(filters)`: Update filters

## API Integration Points

Current implementation uses mock data via `src/services/`:

**To integrate real APIs**:

1. Update `getSessions()` in `sessions-service.js`
2. Update `getSessionById()` for detail fetching
3. Update `makeEventsForSession()` in events service
4. Replace mock delay with real network calls

Example:
```javascript
export const getSessions = async () => {
  const response = await fetch('/api/sessions')
  return response.json()
}
```

## Performance Considerations

- **React Query**: Caches session data and manages background updates
- **TanStack Table**: Virtual scrolling for large datasets (configurable)
- **Code Splitting**: Next.js automatic route-based splitting
- **Image Optimization**: Next.js image component ready
- **Dark Mode**: CSS media query + localStorage persistence

## Customization

### Changing Colors/Theme

1. Update `src/components/ui/*.jsx` for component styles
2. Modify Tailwind config in `tailwind.config.js`
3. Update color constants in `src/lib/constants.js`

### Adjusting Chart Data

Edit `src/components/charts/*.jsx` to change:
- Bucket ranges (e.g., score thresholds)
- Chart dimensions
- Colors and labels
- Data aggregation logic

### Mock Data Generation

Modify `src/mocks/generators.js` to:
- Change probability distributions
- Add more candidate names
- Adjust session duration ranges
- Customize event types

## Screenshots

### Dashboard Overview
Shows the main dashboard with statistics cards and analytics charts. Features the summary bar with key metrics and three chart visualizations for risk distribution, session status, and integrity scores.

### Sessions Table
Displays the searchable, filterable, and sortable sessions table with:
- Column visibility toggle button
- Status filters
- Risk level filters
- Search functionality
- Pagination controls

### Session Detail Panel
Right-side panel showing detailed session information:
- Session ID with copy button
- Status badge and risk indicator
- Warning banner for flagged sessions
- Session metadata
- Activity statistics
- Event timeline

### Dark Mode
All pages support dark mode with theme toggle in the header.

## Troubleshooting

### Development Server Issues
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Build Errors
```bash
# Check for TypeScript/ESLint errors
npm run lint

# Rebuild
npm run build
```



