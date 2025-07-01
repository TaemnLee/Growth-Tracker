//=========================================================
// File: app/page.tsx
// Author: Taemin Lee
// Date: 2025-06-01
//
// Description:
// This is the homepage of the Growth Tracker app, rendered at the root route (`/`).
// It displays a welcome message and renders the <ReflectionEditor /> component,
// which provides the UI for writing reflections.
//
// Features:
// - Uses Tailwind CSS for layout and styling
// - Imports the reusable ReflectionEditor component
//
//=========================================================

import ReflectionEditor from "@/components/ReflectionEditor" // Import reflection input form

export default function Home() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      {/* Page header */}
      <h1 className="text-3xl font-bold mb-4">Growth Tracker</h1>

      {/* Introductory message */}
      <p className="text-lg mb-4">
        Welcome to your weekly reflection space.
      </p>

      {/* Renders the reflection form/editor */}
      <ReflectionEditor />
    </main>
  )
}
