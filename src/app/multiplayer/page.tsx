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
  import { Trophy, WifiOff } from "lucide-react";
  
  const leaderboardData = [
    { rank: 1, team: "Cosmic Coders", score: 12500, players: ["Aarav", "Priya"] },
    { rank: 2, team: "Quantum Questers", score: 11800, players: ["Rohan", "Sita"] },
    { rank: 3, team: "Bio Builders", score: 9500, players: ["Vikram", "Anjali"] },
    { rank: 4, team: "Physics Phenoms", score: 8200, players: ["Meera", "Karan"] },
  ];
  
  export default function MultiplayerPage() {
    return (
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">
            Offline Multiplayer Challenges
          </h1>
          <p className="text-muted-foreground">
            Compete with your friends, even without an internet connection!
          </p>
        </div>
  
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="text-yellow-500" />
              Team Leaderboard
            </CardTitle>
            <CardDescription>
              See how your team stacks up against the competition.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Rank</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Players</TableHead>
                  <TableHead className="text-right">Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaderboardData.map((row) => (
                  <TableRow key={row.rank}>
                    <TableCell className="font-medium">{row.rank}</TableCell>
                    <TableCell className="font-semibold">{row.team}</TableCell>
                    <TableCell>{row.players.join(', ')}</TableCell>
                    <TableCell className="text-right font-bold text-primary">{row.score}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
  
        <Card className="bg-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <WifiOff /> How Offline Mode Works
            </CardTitle>
            <CardDescription>
              This is a simulation of the offline multiplayer experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <Badge variant="default" className="text-lg">1</Badge>
              <div>
                <h3 className="font-semibold">Download Challenge</h3>
                <p className="text-sm text-muted-foreground">
                  The teacher downloads a challenge pack onto a device.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Badge variant="default" className="text-lg">2</Badge>
              <div>
                <h3 className="font-semibold">Play Anywhere</h3>
                <p className="text-sm text-muted-foreground">
                  Students form teams and complete the quiz together on the single
                  device, no internet required.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Badge variant="default" className="text-lg">3</Badge>
              <div>
                <h3 className="font-semibold">Sync Results</h3>
                <p className="text-sm text-muted-foreground">
                  Once the device is back online, the teacher syncs the results.
                  Scores are uploaded, and the leaderboard is updated for everyone
                  to see!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  