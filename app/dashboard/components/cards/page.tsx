import { BellRing, Check, CreditCard, Download, Info, Laptop, Moon, SunMedium, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function CardsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Card Components</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Push Notifications</p>
                <p className="text-sm text-muted-foreground">Send notifications to your device.</p>
              </div>
              <Switch />
            </div>
            <div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Your call has been confirmed.</p>
                  <p className="text-sm text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">You have a new message!</p>
                  <p className="text-sm text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Your subscription is expiring soon!</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Mark all as read
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Info</CardTitle>
            <CardDescription>Your account details and preferences.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center justify-between space-y-0">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                </div>
              </div>
              <Badge>Pro Plan</Badge>
            </div>
            <Separator />
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Moon className="h-4 w-4" />
                  <p className="text-sm font-medium leading-none">Dark Mode</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BellRing className="h-4 w-4" />
                  <p className="text-sm font-medium leading-none">Notifications</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Laptop className="h-4 w-4" />
                  <p className="text-sm font-medium leading-none">Sync Devices</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Add a new payment method to your account.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
                <CreditCard className="mb-3 h-6 w-6" />
                <span className="text-xs">Card</span>
              </div>
              <div className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mb-3 h-6 w-6 fill-current">
                  <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
                </svg>
                <span className="text-xs">PayPal</span>
              </div>
              <div className="flex flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mb-3 h-6 w-6 fill-current">
                  <path d="M4 10h3v7H4zM10.5 10h3v7h-3zM2 19h20v3H2zM17 10h3v7h-3zM12 1L2 6v2h20V6z" />
                </svg>
                <span className="text-xs">Bank</span>
              </div>
            </div>
            <div className="grid gap-2">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 text-blue-500">
                    What payment methods are supported?
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Supported Payment Methods</h4>
                      <p className="text-sm">
                        We accept Visa, Mastercard, American Express, PayPal, and bank transfers.
                      </p>
                      <div className="flex items-center pt-2">
                        <Info className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Payments are processed securely through our payment provider.
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <CreditCard className="mr-2 h-4 w-4" /> Add Payment Method
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Invite your team members to collaborate.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                </div>
                <Badge>Admin</Badge>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Sarah Davis</p>
                    <p className="text-sm text-muted-foreground">sarah.davis@example.com</p>
                  </div>
                </div>
                <Badge variant="outline">Member</Badge>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>RJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">Robert Johnson</p>
                    <p className="text-sm text-muted-foreground">robert.johnson@example.com</p>
                  </div>
                </div>
                <Badge variant="outline">Member</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <User className="mr-2 h-4 w-4" /> Invite Team Member
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Download Report</CardTitle>
            <CardDescription>Download your monthly analytics report.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center py-4">
              <div className="flex flex-col items-center space-y-2">
                <Download className="h-20 w-20 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Your report for March 2024 is ready to download</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Download</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>App Settings</CardTitle>
            <CardDescription>Manage your app preferences.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="display">Display</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium leading-none">Language</h4>
                  <p className="text-sm text-muted-foreground">Select your preferred language for the interface.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium leading-none">Time Zone</h4>
                  <p className="text-sm text-muted-foreground">Choose your local time zone for accurate scheduling.</p>
                </div>
              </TabsContent>
              <TabsContent value="display" className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-medium leading-none">Dark Mode</h4>
                    <p className="text-sm text-muted-foreground">Toggle between light and dark mode.</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SunMedium className="h-4 w-4" />
                    <Switch />
                    <Moon className="h-4 w-4" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium leading-none">Compact Mode</h4>
                  <p className="text-sm text-muted-foreground">Reduce the size of UI elements to fit more content.</p>
                  <Switch />
                </div>
              </TabsContent>
              <TabsContent value="notifications" className="space-y-4 pt-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium leading-none">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive email notifications for important updates.</p>
                  <Switch defaultChecked />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium leading-none">Push Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive push notifications on your device.</p>
                  <Switch defaultChecked />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Save Settings</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

