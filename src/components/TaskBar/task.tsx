"use client"

import * as React from "react"
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Task {
  id: string
  name: string
  assignedBy: string
  assignedTo: string
  assignedOn: string
  deadline: string
  status: string
  priority: string
  description?: string
}

export default function TaskList() {
  const [expandedTask, setExpandedTask] = React.useState<string | null>(null)

  const tasks: Task[] = [
    {
      id: "1",
      name: "Take Pictures of Spider-Man",
      assignedBy: "J Jonah Jameson",
      assignedTo: "Peter Parker",
      assignedOn: "10/30/2024",
      deadline: "11/04/2024",
      status: "Verifying",
      priority: "High",
      description:
        "Listen here, Parker! I don't pay you to sit around! I need pictures—good pictures of Spider-Man! Not blurry, not half-in-the-shadows, not one of those artsy shots you think look so clever! Give me something with action, something that'll sell papers! And I need it by tonight! Got it?",
    },
    {
      id: "2",
      name: "Buy Shawarma Machine",
      assignedBy: "Jabdul Mohammed",
      assignedTo: "Juan Cruz",
      assignedOn: "10/30/2024",
      deadline: "11/10/2024",
      status: "In Progress",
      priority: "Low",
    },
    {
      id: "3",
      name: "Repair Aircon in 1905",
      assignedBy: "Shihoko Hirata",
      assignedTo: "Jason Ong",
      assignedOn: "10/30/2024",
      deadline: "11/10/2024",
      status: "Completed",
      priority: "Medium",
    },
    {
      id: "4",
      name: "Find my car",
      assignedBy: "Roronoa Zoro",
      assignedTo: "Nami",
      assignedOn: "07/18/2024",
      deadline: "08/12/2024",
      status: "Overdue",
      priority: "High",
    },
  ]

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-48 bg-zinc-900 text-white p-4">
        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20125240-Wiml7jf2BNGbZvupiiY5f9LyXhadpZ.png"
            alt="CICS Logo"
            className="w-8 h-8 mb-2"
          />
          <div className="text-sm opacity-80">Personnel Task Monitoring</div>
          <div className="text-sm opacity-80">and Management System</div>
        </div>
        <nav className="space-y-2">
          <a href="#" className="block p-2 hover:bg-zinc-800 rounded">
            Dashboard
          </a>
          <a href="#" className="block p-2 bg-zinc-800 rounded">
            Tasks
          </a>
          <a href="#" className="block p-2 hover:bg-zinc-800 rounded">
            User
          </a>
          <a href="#" className="block p-2 hover:bg-zinc-800 rounded">
            Help
          </a>
          <a href="#" className="block p-2 hover:bg-zinc-800 rounded">
            Log Out
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-6">Tasks</h1>

        {/* Search and Filters */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search Tasks" className="pl-9" />
          </div>
          <Button variant="outline">
            Filters
            <SlidersHorizontal className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">
            Sort
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Tasks Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task Name</TableHead>
                <TableHead>Assigned by</TableHead>
                <TableHead>Assigned to</TableHead>
                <TableHead>Assigned on</TableHead>
                <TableHead>Deadline</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <React.Fragment key={task.id}>
                  <TableRow
                    className="bg-red-900/80 text-white cursor-pointer hover:bg-red-900"
                    onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
                  >
                    <TableCell className="font-medium flex items-center gap-2">
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedTask === task.id ? "transform rotate-180" : ""
                        }`}
                      />
                      {task.name}
                    </TableCell>
                    <TableCell>{task.assignedBy}</TableCell>
                    <TableCell>{task.assignedTo}</TableCell>
                    <TableCell>{task.assignedOn}</TableCell>
                    <TableCell>{task.deadline}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          task.status === "Completed"
                            ? "bg-green-600"
                            : task.status === "Verifying"
                              ? "bg-yellow-600"
                              : task.status === "Overdue"
                                ? "bg-red-600"
                                : "bg-blue-600"
                        }`}
                      >
                        {task.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          task.priority === "High"
                            ? "bg-red-600"
                            : task.priority === "Medium"
                              ? "bg-yellow-600"
                              : "bg-green-600"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </TableCell>
                  </TableRow>
                  {expandedTask === task.id && task.description && (
                    <TableRow className="bg-zinc-100 dark:bg-zinc-800">
                      <TableCell colSpan={7} className="p-4">
                        <div className="grid gap-4">
                          <p className="text-sm">{task.description}</p>
                          <div className="flex gap-2">
                            <Button variant="outline" className="bg-white hover:bg-gray-100">
                              Completed
                              <ChevronDown className="ml-2 h-4 w-4" />
                            </Button>
                            <Button variant="outline" className="bg-white hover:bg-gray-100">
                              Attach Files
                            </Button>
                            <Button variant="destructive" className="ml-auto">
                              Verifying Completion
                            </Button>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}