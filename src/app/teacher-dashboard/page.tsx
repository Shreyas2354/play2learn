import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Badge } from "@/components/ui/badge";
  import { CheckCircle, Clock, TrendingUp, UserCheck } from "lucide-react";
  import { OverviewChart } from "@/components/dashboard-charts";
  
  const students = [
    { name: "Aarav Sharma", lastScore: 75, status: "Needs Help" },
    { name: "Priya Patel", lastScore: 92, status: "On Track" },
    { name: "Rohan Das", lastScore: 88, status: "On Track" },
    { name: "Sita Reddy", lastScore: 68, status: "Needs Help" },
  ];
  
  export default function TeacherDashboardPage() {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">
            Teacher Analytics Dashboard
          </h1>
          <p className="text-muted-foreground">
            A simplified view of your class&apos;s performance and progress.
          </p>
        </div>
  
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Score
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86%</div>
              <p className="text-xs text-muted-foreground">
                +3% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Students
              </CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24 / 30</div>
              <p className="text-xs text-muted-foreground">
                80% class participation
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Missions Completed
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">
                Across all students this week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weakest Area</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold">Newton&apos;s 3rd Law</div>
              <p className="text-xs text-muted-foreground">
                45% average score on this topic
              </p>
            </CardContent>
          </Card>
        </div>
  
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Class Performance Overview</CardTitle>
              <CardDescription>
                Average score per mission for the whole class.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <OverviewChart />
            </CardContent>
          </Card>
          <Card className="col-span-4 lg:col-span-3">
            <CardHeader>
              <CardTitle>Student Progress</CardTitle>
              <CardDescription>
                Recent performance of students who might need help.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Student</TableHead>
                        <TableHead>Last Score</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {students.map(student => (
                        <TableRow key={student.name}>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.lastScore}%</TableCell>
                            <TableCell>
                                <Badge variant={student.status === "On Track" ? "secondary" : "destructive"}>{student.status}</Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  