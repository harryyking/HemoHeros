import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";



const CycleCard = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>CycleSync</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="date" placeholder="Last Period Start Date" />
          <Button className="mt-4">Calculate Cycle</Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="mt-4" variant="outline">See Cycle Details</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Your Cycle Now</AlertDialogTitle>
                <AlertDialogDescription>
                  <p>Next Period: {/* Placeholder for dynamic data */}</p>
                  <p>Ovulation Day: {/* Placeholder for dynamic data */}</p>
                  <p>Fertile Window: {/* Placeholder for dynamic data */}</p>
                  <p>Current Phase: {/* Placeholder for dynamic data */}</p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogAction>Close</AlertDialogAction>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>
    </main>
  )
}

export default CycleCard




